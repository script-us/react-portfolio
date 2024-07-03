import React, { ReactElement, useEffect, useState } from 'react'
import { Tabs as TabsMui, Tab, TabProps, SxProps } from '@mui/material'

export interface IAllTabProp {
  label?: string
  icon?: JSX.Element
  position?: 'bottom' | 'top' | 'end' | 'start'
  disabled?: boolean
}

interface ITabsProps {
  tabPanels: Array<IAllTabProp>
  selectedTab?: (tab: number) => void
  children: React.ReactNode[]
  className?: string
  selectedTabId?: number | null
  endContent?: React.ReactNode
  sx?: SxProps<any>
  textColor?: 'secondary' | 'primary' | 'inherit'
  indicatorColor?: 'secondary' | 'primary'
  tabSx?: SxProps<any>
  variant?: 'fullWidth' | 'scrollable' | 'standard'
  scrollButtons?: boolean | 'auto'
  orientation?: 'horizontal' | 'vertical'
}

interface ITabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
  tabChildrenClassName?: string
}

const TabPanel: React.FC<ITabPanelProps> = ({
  children,
  value,
  index,
  tabChildrenClassName,
  ...other
}): ReactElement => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      className={`px-[24px] py-[16px] ${tabChildrenClassName}`}
    >
      {value === index && <div>{children}</div>}
    </div>
  )
}

const Tabs: React.FC<ITabsProps> = ({
  tabPanels = [],
  children = [],
  className,
  selectedTab,
  selectedTabId = null,
  endContent,
  sx,
  tabSx,
  textColor,
  indicatorColor,
  variant,
  scrollButtons,
  orientation,
}): ReactElement => {
  const [value, setValue] = useState(0)

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
    selectedTab && selectedTab(newValue)
  }

  const tabProps = (index: number) => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    }
  }

  useEffect(() => {
    if (selectedTabId && selectedTabId >= 0 && selectedTabId != value) {
      setValue(selectedTabId)
    }
  }, [selectedTabId])

  return (
    <>
      <div className={className}>
        <TabsMui
          value={value}
          orientation={orientation}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={sx}
          textColor={textColor}
          indicatorColor={indicatorColor}
          variant={variant}
          scrollButtons={scrollButtons}
        >
          {tabPanels.map(({ label, icon, position = 'start', disabled }, index) => (
            <Tab
              icon={icon}
              iconPosition={position}
              key={label}
              label={<p>{label}</p>}
              disabled={disabled}
              sx={tabSx}
              {...tabProps(index)}
            />
          ))}
        </TabsMui>
        {endContent}
      </div>
      {children.map((child: React.ReactNode, index: number) => {
        return (
          <TabPanel key={index} value={value} index={index}>
            {child}
          </TabPanel>
        )
      })}
    </>
  )
}

export default Tabs

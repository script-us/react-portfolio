import React, { useState } from 'react'
import { Icon } from '@/components/shared/icons'
import Tabs, { IAllTabProp } from '@/components/shared/tabs'

const TabsComponent = () => {
  const tabOptions = [{ label: 'Tab 1' }, { label: 'Tab 2' }, { label: 'Tab 3' }, { label: 'Tab 4' }]
  const tabOptionsDisable = [
    { label: 'Tab Test1', disabled: false },
    { label: 'Tab Test', disabled: true },
    { label: 'Tab 3', disabled: false },
    { label: 'Tab 4', disabled: false },
  ]
  const tabOptionsIcon = [
    { icon: <Icon name="SettingsIcon" /> },
    { icon: <Icon name="ProfileIcon" /> },
    { icon: <Icon name="ChartIcon" /> },
    { icon: <Icon name="OutlineHeartIcon" /> },
  ]
  const tabOptionsWithIconLabel: IAllTabProp[] = [
    { icon: <Icon name="SettingsIcon" />, label: 'Start', position: 'start' },
    { icon: <Icon name="ProfileIcon" />, label: 'End', position: 'end' },
    { icon: <Icon name="ChartIcon" />, label: 'Top', position: 'top' },
    { icon: <Icon name="OutlineHeartIcon" />, label: 'Bottom', position: 'bottom' },
  ]
  return (
    <div className="w-[640px] sm:w-full flex flex-col gap-[24px]">
      <div className="w-full shadow-card">
        <div className="p-[16px] border-b-[1px] border-solid border-bodydark">Basic tabs</div>
        <div className=" w-full  px-[16px] py-[16px]">
          <Tabs tabPanels={tabOptions}>
            <div>Tab Test</div>
            <div>Tab 2</div>
            <div>Tab 3</div>
            <div>Tab 4</div>
          </Tabs>
        </div>
      </div>
      <div className="w-full shadow-card">
        <div className="p-[16px] border-b-[1px] border-solid border-bodydark">Tabs with diffrent colors</div>
        <div className="flex flex-col w-full gap-[24px] gap-[24px] px-[16px] py-[16px]">
          <Tabs tabPanels={tabOptions} textColor="secondary" indicatorColor="secondary">
            <div>Tab 1</div>
            <div>Tab 2</div>
            <div>Tab 3</div>
            <div>Tab 4</div>
          </Tabs>
        </div>
        <div className="flex flex-col w-full gap-[24px] gap-[24px] px-[16px] py-[16px]">
          <Tabs tabPanels={tabOptions} textColor="primary" indicatorColor="primary">
            <div>Tab 1</div>
            <div>Tab 2</div>
            <div>Tab 3</div>
            <div>Tab 4</div>
          </Tabs>
        </div>
      </div>
      <div className="w-full shadow-card">
        <div className="p-[16px] border-b-[1px] border-solid border-bodydark">Tabs with disable tabChildren</div>
        <div className=" w-full  px-[16px] py-[16px]">
          <Tabs tabPanels={tabOptionsDisable}>
            <div>Tab 1</div>
            <div>Tab 2</div>
            <div>Tab 3</div>
            <div>Tab 4</div>
          </Tabs>
        </div>
      </div>
      <div className="w-full shadow-card">
        <div className="p-[16px] border-b-[1px] border-solid border-bodydark">Tabs with center</div>
        <div className=" w-full px-[16px] py-[16px]">
          <Tabs tabPanels={tabOptions}>
            <div>Tab 1</div>
            <div>Tab 2</div>
            <div>Tab 3</div>
            <div>Tab 4</div>
          </Tabs>
        </div>
      </div>
      <div className="w-full shadow-card">
        <div className="p-[16px] border-b-[1px] border-solid border-bodydark">Tabs with scrollable props</div>
        <div className=" w-full px-[16px] py-[16px] max-w-[350px]">
          <Tabs tabPanels={tabOptions} variant="scrollable">
            <div>Tab 1</div>
            <div>Tab 2</div>
            <div>Tab 3</div>
            <div>Tab 4</div>
          </Tabs>
        </div>
      </div>
      <div className="w-full shadow-card">
        <div className="p-[16px] border-b-[1px] border-solid border-bodydark">
          Tabs with scrollable without scroll button
        </div>
        <div className=" w-full px-[16px] py-[16px] max-w-[350px]">
          <Tabs tabPanels={tabOptions} variant="scrollable" scrollButtons={false}>
            <div>Tab 1</div>
            <div>Tab 2</div>
            <div>Tab 3</div>
            <div>Tab 4</div>
          </Tabs>
        </div>
      </div>
      <div className="w-full shadow-card">
        <div className="p-[16px] border-b-[1px] border-solid border-bodydark">Tabs with vertical orientation</div>
        <div className="w-full flex px-[16px] py-[16px]">
          <Tabs tabPanels={tabOptions} orientation="vertical">
            <div>Tab 1</div>
            <div>Tab 2</div>
            <div>Tab 3</div>
            <div>Tab 4</div>
          </Tabs>
        </div>
      </div>
      <div className="w-full shadow-card">
        <div className="p-[16px] border-b-[1px] border-solid border-bodydark">Tabs with Icon</div>
        <div className="w-full px-[16px] py-[16px]">
          <Tabs tabPanels={tabOptionsIcon}>
            <div>Tab 1</div>
            <div>Tab 2</div>
            <div>Tab 3</div>
            <div>Tab 4</div>
          </Tabs>
        </div>
      </div>
      <div className="w-full shadow-card">
        <div className="p-[16px] border-b-[1px] border-solid border-bodydark">
          Tabs with Icon and label with specific icon position
        </div>
        <div className="w-full px-[16px] py-[16px]">
          <Tabs tabPanels={tabOptionsWithIconLabel}>
            <div>Tab 1</div>
            <div>Tab 2</div>
            <div>Tab 3</div>
            <div>Tab 4</div>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

export default TabsComponent

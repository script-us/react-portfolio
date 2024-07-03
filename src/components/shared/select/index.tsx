import React, { ReactElement, useMemo, useState } from 'react'
import {
  BaseSelectProps,
  Checkbox,
  FilledSelectProps,
  FormHelperText,
  Select as MuiSelect,
  OutlinedSelectProps,
  StandardSelectProps,
} from '@mui/material'
import FormControl from '@mui/material/FormControl'
import MenuItem from '@mui/material/MenuItem'
import Chip from '../chip'

interface SelectProps<Value = unknown> {
  // Define the three variant types
  FilledSelectProps?: FilledSelectProps & BaseSelectProps<Value>
  StandardSelectProps?: StandardSelectProps & BaseSelectProps<Value>
  OutlinedSelectProps?: OutlinedSelectProps & BaseSelectProps<Value>
}

interface ISelectProps extends SelectProps {
  value: any | any[]
  options: string[]
  onChange: (args: any) => void
  labelText?: string
  placeholder?: string
  disabled?: boolean
  readOnly?: boolean
  className?: string
  helperText?: string
  error?: boolean
  label?: string
  required?: boolean
  size?: 'small' | 'medium'
  variant?: 'standard' | 'outlined' | 'filled'
  children?: React.ReactNode
  multiple?: boolean
  checkbox?: boolean
  chip?: boolean
}

const Select: React.FC<ISelectProps> = ({
  value,
  labelText,
  options,
  onChange,
  placeholder,
  disabled,
  className,
  error,
  size,
  label = '',
  variant,
  readOnly,
  required,
  helperText,
  checkbox,
  chip,
  multiple = false,
  children,
  ...props
}: ISelectProps): ReactElement => {
  const val: any | any[] = useMemo(() => {
    if (value) {
      if (multiple) {
        return Array.isArray(value) ? value : [value]
      } else {
        return typeof value === 'string' ? value : (value?.[label] as string)
      }
    }
    return multiple ? [] : ''
  }, [value, label, multiple])

  const handleMenuItemClick = (selectedValue: any) => {
    if (multiple) {
      const selectedIndex = val.indexOf(selectedValue)
      let newSelected: any[] = []

      if (selectedIndex === -1) {
        newSelected = [...val, selectedValue]
      } else {
        newSelected = val?.filter((value: any[]) => value !== selectedValue)
      }
      onChange(newSelected)
    } else {
      onChange(selectedValue)
    }
  }

  return (
    <div className={className}>
      <FormControl fullWidth variant={variant} size={size} disabled={disabled} error={error}>
        <div className="flex">
          {labelText ? <label className={`mb-[3px] text-[14px] ${error && 'text-danger'}`}>{labelText}</label> : ''}
          {required ? '*' : ''}
        </div>
        <MuiSelect
          multiple={multiple}
          onClick={(e) => {
            e.stopPropagation()
          }}
          value={val}
          defaultValue="none"
          displayEmpty
          readOnly={readOnly}
          renderValue={(selected: any | any[]) => {
            if (multiple) {
              if (selected?.length && Array.isArray(selected)) {
                if (chip) {
                  return (
                    <>
                      {selected.map((value, index) => (
                        <Chip key={index} label={value} />
                      ))}
                    </>
                  )
                }
                return selected.join(', ')
              }
            } else {
              if (selected) {
                return selected
              }
            }
            return placeholder
          }}
          disabled={disabled}
          error={error}
          {...props}
        >
          {options?.map((option: any, index) => (
            <MenuItem
              key={index}
              value={option}
              onClick={() => {
                handleMenuItemClick(option)
              }}
              selected={multiple ? val.indexOf(option) !== -1 : val === option}
            >
              {checkbox && <Checkbox checked={val.indexOf(option) !== -1} />}
              {typeof option === 'string' ? option : option?.[label]}
            </MenuItem>
          ))}
        </MuiSelect>
        <FormHelperText>{helperText && helperText}</FormHelperText>
      </FormControl>
    </div>
  )
}

export default Select

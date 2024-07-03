import React, { SyntheticEvent, useMemo } from 'react'
import {
  AutocompleteProps,
  FilledTextFieldProps,
  Autocomplete as MuiAutocomplete,
  OutlinedTextFieldProps,
  StandardTextFieldProps,
  SxProps,
  TextField,
} from '@mui/material'

type TextFieldProps = FilledTextFieldProps | StandardTextFieldProps | OutlinedTextFieldProps

interface CustomAutocompleteProps extends Omit<AutocompleteProps<string, boolean, boolean, boolean>, 'renderInput'> {
  options: string[]
  onChange: (arg: SyntheticEvent<Element, Event>) => void
  value?: string | string[]
  placeholder?: string
  name?: string
  error?: boolean
  helperText?: string
  className?: string
  textFieldClassName?: string
  TextFieldProps?: TextFieldProps
  label?: string
  multiple?: boolean
  size?: 'small' | 'medium'
}

const Autocomplete: React.FC<CustomAutocompleteProps> = ({
  options,
  onChange,
  value,
  popupIcon,
  placeholder,
  name,
  label,
  error,
  helperText,
  TextFieldProps,
  className,
  size,
  multiple,
  textFieldClassName,
  sx,
  ...rest
}: CustomAutocompleteProps) => {
  const val: string | string[] = useMemo(() => {
    if (value) {
      if (multiple) {
        return Array.isArray(value) ? value : ''
      } else {
        return value
      }
    }
    return multiple ? [] : ''
  }, [value, label, multiple])
  return (
    <MuiAutocomplete
      data-testid="autocomplete"
      options={options}
      size={size}
      onChange={onChange}
      multiple={multiple}
      className={`${className}`}
      popupIcon={popupIcon}
      renderInput={(params) => (
        <TextField
          value={val}
          placeholder={placeholder}
          error={error}
          label={label}
          name={name}
          helperText={helperText}
          className={`${textFieldClassName}`}
          {...params}
          {...TextFieldProps}
          sx={sx as SxProps<any>}
        />
      )}
      {...rest}
    />
  )
}

export default Autocomplete

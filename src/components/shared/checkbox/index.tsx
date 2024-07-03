import React from 'react'
import {
  FormGroup,
  FormControlLabel,
  Checkbox as MuiCheckbox,
  CheckboxProps,
  FormControlLabelProps,
} from '@mui/material'

interface CustomCheckboxProps extends CheckboxProps {
  label?: string
  formControlLabelProps?: FormControlLabelProps
}

const labelProps = { inputProps: { 'aria-label': 'Checkbox demo' } }

const Checkbox: React.FC<CustomCheckboxProps> = ({ label, formControlLabelProps, ...checkboxProps }) => {
  return (
    <FormGroup>
      <FormControlLabel
        control={<MuiCheckbox {...checkboxProps} {...labelProps} />}
        label={label}
        {...formControlLabelProps}
      />
    </FormGroup>
  )
}

export default Checkbox

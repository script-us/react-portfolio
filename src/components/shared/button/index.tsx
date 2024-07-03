import React from 'react'
import { Button as ButtonMui, ButtonProps } from '@mui/material'

const Button: React.FC<ButtonProps> = ({ children, className, startIcon, endIcon, variant, ...props }) => {
  return (
    <ButtonMui className={`${className}`} startIcon={startIcon} endIcon={endIcon} variant={variant} {...props}>
      {children}
    </ButtonMui>
  )
}

export default Button

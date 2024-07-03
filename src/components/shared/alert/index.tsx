import React from 'react'
import { Alert as AlertMui, AlertProps, AlertTitle } from '@mui/material'

interface IAlertProps extends AlertProps {
  alertTitle?: string
}

const Alert: React.FC<IAlertProps> = ({
  alertTitle,
  children,
  severity,
  className,
  variant,
  ...props
}: IAlertProps) => {
  return (
    <AlertMui severity={severity} className={`${className}`} variant={variant} {...props}>
      {alertTitle ? <AlertTitle>{alertTitle}</AlertTitle> : ''}
      {children}
    </AlertMui>
  )
}

export default Alert

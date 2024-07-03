import React from 'react'
import { Button, ButtonGroup as MuiButtonGroup, ButtonGroupProps } from '@mui/material'

interface IButtonGroupProps extends ButtonGroupProps {
  options: string[]
}

const ButtonGroup: React.FC<IButtonGroupProps> = ({
  className,
  options,
  variant,
  size,
  color,
  orientation,
  disableElevation,
  ...props
}: IButtonGroupProps) => {
  return (
    <MuiButtonGroup
      variant={variant}
      {...props}
      size={size}
      color={color}
      orientation={orientation}
      disableElevation={disableElevation}
    >
      {options.map((item, index) => {
        return <Button key={index}>{item}</Button>
      })}
    </MuiButtonGroup>
  )
}

export default ButtonGroup

import React from 'react'
import { ChipProps, Chip as MuiChip } from '@mui/material'

interface IChipProps extends ChipProps {
  href?: string
}

const Chip: React.FC<IChipProps> = ({
  label,
  className,
  onClick,
  onDelete,
  variant,
  deleteIcon,
  avatar,
  icon,
  color,
  size,
  href,
  ...props
}: IChipProps) => {
  return (
    <MuiChip
      label={label}
      className={`${className}`}
      deleteIcon={deleteIcon}
      size={size}
      variant={variant}
      icon={icon}
      color={color}
      onClick={onClick}
      onDelete={onDelete}
      avatar={avatar}
      {...props}
    />
  )
}

export default Chip

import React from 'react'
import { Badge as MuiBadge, BadgeProps } from '@mui/material'

const Badge: React.FC<BadgeProps> = ({
  children,
  color,
  badgeContent,
  variant,
  className,
  max,
  overlap,
  anchorOrigin,
  ...props
}: BadgeProps) => {
  return (
    <MuiBadge
      badgeContent={badgeContent}
      color={color}
      max={max}
      className={`${className}`}
      variant={variant}
      overlap={overlap}
      anchorOrigin={anchorOrigin}
      {...props}
    >
      {children}
    </MuiBadge>
  )
}

export default Badge

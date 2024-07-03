import React from 'react'
import { Avatar as MuiAvatar, AvatarProps } from '@mui/material'

const Avatar: React.FC<AvatarProps> = ({ children, className, variant, alt, src, ...props }: AvatarProps) => {
  return (
    <MuiAvatar alt={alt} src={src} className={`${className}`} variant={variant} {...props}>
      {children}
    </MuiAvatar>
  )
}

export default Avatar

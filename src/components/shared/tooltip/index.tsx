import React from 'react'
import { Tooltip as MuiTooltip, TooltipProps } from '@mui/material'

const Tooltip: React.FC<TooltipProps> = ({
  children,
  title,
  className,
  placement,
  arrow,
  slotProps,
  onOpen,
  onClose,
  TransitionComponent,
  followCursor,
  enterDelay,
  leaveDelay,
  ...props
}: TooltipProps) => {
  return (
    <MuiTooltip
      title={title}
      className={`${className}`}
      placement={placement}
      slotProps={slotProps}
      arrow={arrow}
      onOpen={onOpen}
      onClose={onClose}
      TransitionComponent={TransitionComponent}
      followCursor={followCursor}
      enterDelay={enterDelay}
      leaveDelay={leaveDelay}
      {...props}
    >
      {children}
    </MuiTooltip>
  )
}

export default Tooltip

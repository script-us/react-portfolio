import React from 'react'
import { Backdrop, CircularProgress } from '@mui/material'

interface ILoaderProps {
  open: boolean
  onClose: () => void
}

const Loader: React.FC<ILoaderProps> = ({ open, onClose }: ILoaderProps) => {
  return (
    <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={open} onClick={onClose}>
      <CircularProgress color="inherit" data-testid="themeLoader" />
    </Backdrop>
  )
}

export default Loader

import React from 'react'
import { Box, Modal as MuiModal, ModalProps } from '@mui/material'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
}

const Modal: React.FC<ModalProps> = ({ open, onClose, children }: ModalProps) => {
  return (
    <MuiModal open={open} onClose={onClose}>
      <Box sx={style}>{children}</Box>
    </MuiModal>
  )
}

export default Modal

import React, { ReactElement } from 'react'
import { Typography as TypographyMui, TypographyProps } from '@mui/material'

const Typography: React.FC<TypographyProps> = ({ children, className, ...props }): ReactElement => {
  return (
    <TypographyMui component={'div'} {...props} className={`${className} dark:text-white`}>
      {children}
    </TypographyMui>
  )
}

export default Typography

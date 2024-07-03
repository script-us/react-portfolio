import React from 'react'
import classNames from 'classnames'
import { Icons } from './icons'

export interface IconProps {
  name: keyof typeof Icons | string | undefined
  className?: string
  onClick?: () => void
}

export const Icon: React.FC<IconProps> = ({ name, className, onClick }) => {
  const SelectedIcon = Icons[name as keyof typeof Icons]

  if (!SelectedIcon) {
    console.error(`Icon "${name}" not found`)
    return null
  }

  return <SelectedIcon className={classNames('dark:fill-white', className)} onClick={onClick} />
}

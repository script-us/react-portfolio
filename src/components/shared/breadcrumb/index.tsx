import React, { ReactElement } from 'react'
import { Breadcrumbs as BreadcrumbMui } from '@mui/material'
import Link from '@mui/material/Link'
import { useRouter } from 'next/router'
import { Icon } from '../icons'

export interface BreadCrumbMenuItem {
  link: string
  label: string
  icon?: string
}

interface BreadcrumbsProps {
  breadcrumbList: Array<BreadCrumbMenuItem>
  className?: string
  underline?: 'none' | 'hover' | 'always'
  separator?: string | JSX.Element
  maxItems?: number
}

const Breadcrumb: React.FC<BreadcrumbsProps> = ({
  breadcrumbList,
  maxItems,
  separator,
  className,
  underline,
}): ReactElement => {
  const { push, route } = useRouter()

  return (
    <BreadcrumbMui
      separator={<span className="text-[18px]">{separator}</span>}
      aria-label="breadcrumb"
      className={` ${className}`}
      maxItems={maxItems}
    >
      {breadcrumbList.map(({ label, link, icon }, i) => {
        const activeRoute = link === route
        const path = link
        return !activeRoute ? (
          <Link
            key={i}
            onClick={() => push(path)}
            id={`breadcrumb-${label}`}
            underline={underline}
            className="flex items-center gap-[5px] cursor-pointer"
          >
            <Icon name={icon} />
            <div>{label}</div>
          </Link>
        ) : (
          <div className="flex items-center gap-[5px]">
            <Icon name={icon} />
            <div key={i}>{label}</div>
          </div>
        )
      })}
    </BreadcrumbMui>
  )
}

export default Breadcrumb

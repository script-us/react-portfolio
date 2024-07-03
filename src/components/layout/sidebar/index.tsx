'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Icon } from '@/components/shared/icons'
import { sidebarMenu } from '@/constants/constant'
import SidebarLinkGroup from './SidebarLinkGroup'

interface SidebarProps {
  sidebarOpen?: boolean
  setSidebarOpen?: (arg: boolean) => void
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const pathname = usePathname()

  const trigger = useRef<any>(null)
  const sidebar = useRef<any>(null)

  let storedSidebarExpanded = 'true'

  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true',
  )

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return
      if (!sidebarOpen || sidebar.current.contains(target) || trigger.current.contains(target)) return
      setSidebarOpen && setSidebarOpen(false)
    }
    document.addEventListener('click', clickHandler)
    return () => document.removeEventListener('click', clickHandler)
  })

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ key }: KeyboardEvent) => {
      if (!sidebarOpen || key !== 'Escape') return
      setSidebarOpen && setSidebarOpen(false)
    }
    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  })

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded.toString())
    if (sidebarExpanded) {
      document.querySelector('body')?.classList.add('sidebar-expanded')
    } else {
      document.querySelector('body')?.classList.remove('sidebar-expanded')
    }
  }, [sidebarExpanded])

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
        <Link href="/">
          <div className="flex items-center gap-[8px]">
            <Image width={38} height={38} src={'/images/svg/reactLogo.svg'} alt="logo" priority />
            <div className="text-white text-[25px] whitespace-nowrap">React PortFolio</div>
          </div>
        </Link>

        <button
          ref={trigger}
          onClick={() => setSidebarOpen && setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        >
          <Icon name="IndicatorLeftArrow" className="fill-white" />
        </button>
      </div>
      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        <nav className="mt-5 px-4 py-4 lg:mt-5 lg:px-6">
          <div>
            {sidebarMenu.map((sidebar, index) => {
              return (
                <div key={index}>
                  <h3 className="mb-4 mt-4 ml-4 text-sm font-semibold text-bodydark2">{sidebar.category}</h3>
                  <ul className='className="mb-6 flex flex-col gap-1.5"'>
                    {sidebar.optionList.map((option, index) => {
                      const lowercaseLabel = option?.label.toLowerCase()
                      if (option.subs) {
                        return (
                          <SidebarLinkGroup
                            activeCondition={pathname === option.url || pathname?.includes(option?.url?.toLowerCase())}
                          >
                            {(handleClick, open) => {
                              return (
                                <React.Fragment>
                                  <Link
                                    href="#"
                                    className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                                      (pathname === option.url || pathname?.includes(lowercaseLabel)) &&
                                      'bg-graydark dark:bg-meta-4'
                                    }`}
                                    onClick={(e) => {
                                      e.preventDefault()
                                      sidebarExpanded ? handleClick() : setSidebarExpanded(true)
                                    }}
                                  >
                                    <Icon name={option.icon} className="fill-white" />
                                    {option.label}
                                    <Icon
                                      name="IndicatorArrow"
                                      className={`absolute right-4 top-1/2 -translate-y-1/2 fill-white ${open && 'rotate-180'}`}
                                    />
                                  </Link>
                                  <div className={`translate transform overflow-hidden ${!open && 'hidden'}`}>
                                    <ul className="mb-5.5 mt-4 flex flex-col gap-2.5 pl-6">
                                      {option.subs
                                        .sort((a, b) => {
                                          return a.label.localeCompare(b.label)
                                        })
                                        .map((subMenu, index) => {
                                          return (
                                            <li key={index}>
                                              <Link
                                                href={subMenu.url}
                                                className={`group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ${
                                                  pathname === subMenu.url && 'text-white'
                                                }`}
                                              >
                                                {subMenu.label}
                                              </Link>
                                            </li>
                                          )
                                        })}
                                    </ul>
                                  </div>
                                </React.Fragment>
                              )
                            }}
                          </SidebarLinkGroup>
                        )
                      } else {
                        return (
                          <li>
                            <Link
                              href={option.url}
                              className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                                pathname?.includes(lowercaseLabel) && 'bg-graydark dark:bg-meta-4'
                              }`}
                            >
                              <Icon name={option.icon} className="fill-white" />
                              {option.label}
                            </Link>
                          </li>
                        )
                      }
                    })}
                  </ul>
                </div>
              )
            })}
          </div>
        </nav>
      </div>
    </aside>
  )
}

export default Sidebar

'use client'
import React, { useState } from 'react'
import { ThemeProvider } from '@mui/material'
import Header from '@/components/layout/navbar'
import Sidebar from '@/components/layout/sidebar'
import useAuth from '@/redux/auth/useAuth'
import { darkTheme, lightTheme } from 'styles/theme'

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { colorMode } = useAuth()
  return (
    <ThemeProvider theme={colorMode === 'dark' ? darkTheme : lightTheme}>
      <div className="flex h-screen overflow-hidden dark:bg-boxdark-2 dark:text-bodydark">
        {/* Sidebar */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          {/* Header */}
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          {/* Main Content */}
          <main className="h-[100vh]">
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10 h-full">{children}</div>
          </main>
        </div>
      </div>
    </ThemeProvider>
  )
}

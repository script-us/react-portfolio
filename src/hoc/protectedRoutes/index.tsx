import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import Layout from '@/components/layout/index'
import useAuth from '@/redux/auth/useAuth'

const ProtectedRoutes = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter()
  const { token } = useAuth()
  console.log('router', router)
  useEffect(() => {
    if (!token?.length) {
      router.push('/auth/signUp')
    } else if (token && (router.pathname === '/auth/signUp' || router.pathname === '/auth/signIn')) {
      router.push('/')
    }
  }, [token])

  return token ? <Layout>{children}</Layout> : <>{children}</>
}

export default ProtectedRoutes

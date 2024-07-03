import React from 'react'
import useAuth from '@/redux/auth/useAuth'
import Home from '../src/components/home'

export default function HomePage() {
  const { token } = useAuth()
  return <div className="h-full">{token && <Home />}</div>
}

import React, { useEffect } from 'react'
import { ITestInterface } from '@/redux/auth/interface'
import useAuth from '@/redux/auth/useAuth'

const ReduxPage = () => {
  const { testApiCallWithRedux, allTestData } = useAuth()

  useEffect(() => {
    testApiCallFunc()
  }, [])

  const testApiCallFunc = async () => {
    await testApiCallWithRedux()
  }

  return (
    <>
      <h1>API CALLING USING REDUX</h1>
      {allTestData?.map((res: ITestInterface) => {
        return (
          <div style={{ display: 'flex' }}>
            <ul>
              <li>{res.userId}</li>
            </ul>
            <ul style={{ marginLeft: '30px' }}>
              <li>{res.title}</li>
            </ul>
          </div>
        )
      })}
    </>
  )
}

export default ReduxPage

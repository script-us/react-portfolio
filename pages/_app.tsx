import React from 'react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import { PersistGate } from 'redux-persist/integration/react'
import SEO from '../src/components/seo'
import ProtectedRoutes from '../src/hoc/protectedRoutes/index'
import store, { persister } from '../src/redux/store'
import '../styles/globals.css'
import 'react-toastify/dist/ReactToastify.css'

const queryClient = new QueryClient()
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SEO title={'Test-Home'} description={'Test-Home-Description'} />
      <Provider store={store}>
        <PersistGate persistor={persister}>
          <ToastContainer
            position="top-right"
            closeOnClick
            className="toaster-container"
            hideProgressBar={true}
            newestOnTop={false}
          />
          <QueryClientProvider client={queryClient}>
            <ProtectedRoutes>
              <Component {...pageProps} />
            </ProtectedRoutes>
            {/* <ReactQueryDevtools initialIsOpen={false} position="bottom-right" /> devtool for react-query debugging */}
          </QueryClientProvider>
        </PersistGate>
      </Provider>
    </>
  )
}

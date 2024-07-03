import { render as rtlRender, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import store from '../react-portfolio/src/redux/store'

function ReduxProvider({ children }) {
  return <Provider store={store}>{children}</Provider>
}

const customRender = (ui, options) => {
  const { wrapper, ...restOptions } = options || {}
  return rtlRender(ui, { wrapper: ReduxProvider, ...restOptions })
}

export * from '@testing-library/react'
export { userEvent, fireEvent, screen, waitFor, customRender as render }

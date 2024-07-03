import SignInPage from '@/components/signInPage'
import { render, userEvent, fireEvent, waitFor } from '../../../test-utils'
import '@testing-library/jest-dom'

jest.mock('next/router', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}))

describe('Sign-In Form', () => {
  it('renders the input fields and submit button', () => {
    const { getByTestId, getByRole } = render(<SignInPage />)
    expect(getByTestId('email')).toBeInTheDocument()
    expect(getByTestId('password')).toBeInTheDocument()
    expect(getByRole('button', { name: 'Sign In' })).toBeInTheDocument()
  })
})

describe('Sign-In Form', () => {
  it('submits the form with valid inputs', async () => {
    const { getByTestId, getByRole } = render(<SignInPage />)
    userEvent.type(getByTestId('email'), 'test@example.com')
    userEvent.type(getByTestId('password'), 'password123')
    fireEvent.click(getByRole('button', { name: 'Sign In' }))
    await waitFor(() => {
      expect(getByTestId('email')).toHaveValue('')
      expect(getByTestId('password')).toHaveValue('')
    })
  })
})

describe('Sign-In Form', () => {
  it('displays validation errors for invalid inputs', async () => {
    const { getByText, getByRole } = render(<SignInPage />)
    fireEvent.click(getByRole('button', { name: 'Sign In' }))
    await waitFor(() => {
      expect(getByText('Please provide your Email Id')).toBeInTheDocument()
      expect(getByText('Please enter the password')).toBeInTheDocument()
    })
  })
})

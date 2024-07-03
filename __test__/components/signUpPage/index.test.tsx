import SignUpPage from '@/components/signUpPage'
import { render, userEvent, fireEvent, waitFor } from '../../../test-utils'
import '@testing-library/jest-dom'

jest.mock('next/router', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}))

describe('Sign-Up Form', () => {
  it('renders the input fields and submit button', () => {
    const { getByTestId, getByRole } = render(<SignUpPage />)
    expect(getByTestId('displayName')).toBeInTheDocument()
    expect(getByTestId('email')).toBeInTheDocument()
    expect(getByTestId('password')).toBeInTheDocument()
    expect(getByTestId('confirmPassword')).toBeInTheDocument()
    expect(getByRole('button', { name: 'Create account' })).toBeInTheDocument()
  })
})

describe('Sign-Up Form', () => {
  it('submits the form with valid inputs', async () => {
    const { getByTestId, getByRole } = render(<SignUpPage />)
    userEvent.type(getByTestId('displayName'), 'Test')
    userEvent.type(getByTestId('email'), 'test@example.com')
    userEvent.type(getByTestId('password'), 'password123')
    userEvent.type(getByTestId('confirmPassword'), 'password123')
    fireEvent.click(getByRole('button', { name: 'Create account' }))
    await waitFor(() => {
      expect(getByTestId('displayName')).toHaveValue('')
      expect(getByTestId('email')).toHaveValue('')
      expect(getByTestId('password')).toHaveValue('')
      expect(getByTestId('confirmPassword')).toHaveValue('')
    })
  })
})

describe('Sign-Up Form', () => {
  it('displays validation errors for invalid inputs', async () => {
    const { getByText, getByRole } = render(<SignUpPage />)
    fireEvent.click(getByRole('button', { name: 'Create account' }))
    await waitFor(() => {
      expect(getByText('Please enter the name')).toBeInTheDocument()
      expect(getByText('Please provide your Email Id')).toBeInTheDocument()
      expect(getByText('Please enter the password')).toBeInTheDocument()
      expect(getByText('Please enter the confirm password')).toBeInTheDocument()
    })
  })
})

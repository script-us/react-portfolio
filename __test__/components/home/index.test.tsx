import '@testing-library/jest-dom'
import Home from '@/components/home'
import { render } from '../../../test-utils'

describe('Home Page', () => {
  it('Should render properly', () => {
    const { getByRole } = render(<Home />)
    const header = getByRole('heading')
    expect(header).toHaveTextContent('Home Page')
  })

  it('Should have a text', () => {
    const { getByText } = render(<Home />)
    const text = getByText('Home Page')
    expect(text).toBeInTheDocument()
  })

  it('Should render with text', () => {
    const { getByRole } = render(<Home />)
    const text = getByRole('heading', { level: 1 })
    expect(text).toBeInTheDocument()
  })
})

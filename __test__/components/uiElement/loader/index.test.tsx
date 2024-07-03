import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import Loaders from '@/components/uiElement/loader'
import { render } from '../../../../test-utils'

describe('Loader', () => {
  it('Should render loader button text', async () => {
    const { findByText } = render(<Loaders />)
    const loader = await findByText('Click For Loader')
    expect(loader).toBeInTheDocument()
  })

  it('Should render the loader text', async () => {
    const { findByText, getByTestId } = render(<Loaders />)
    const loader = await findByText('Click For Loader')
    await userEvent.click(loader)
    expect(getByTestId('themeLoader')).toBeDefined()
  })
})

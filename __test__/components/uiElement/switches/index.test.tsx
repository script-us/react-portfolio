import Switches from '@/components/uiElement/switches'
import '@testing-library/jest-dom'
import { render } from '../../../../test-utils'

describe('Testing a Switch', () => {
  it('Should be define', async () => {
    const { getByTestId } = render(<Switches />)
    const myComponent = getByTestId('test')
    expect(myComponent).toBeDefined()
  })

  it('should initially unchecked', () => {
    const { getByTestId } = render(<Switches />)
    const myComponent = getByTestId('test')
    expect(myComponent).not.toHaveAttribute('checked')
  })
})

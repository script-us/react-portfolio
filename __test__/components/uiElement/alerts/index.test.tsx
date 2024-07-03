import '@testing-library/jest-dom'
import Alerts from '@/components/uiElement/alerts'
import { render } from '../../../../test-utils'

describe('Should have a alert message', () => {
  test('Render alert', () => {
    const { getByTestId } = render(<Alerts />)
    const alert = getByTestId('alert-1')
    expect(alert).toHaveTextContent('This is a success Alert')
  })
})

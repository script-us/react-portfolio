import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import Checkboxes from '@/components/uiElement/checkboxes'
import { render } from '../../../../test-utils'

describe('Behavior', () => {
  const handleTest = jest.fn()
  it('Should check checkbox user event', async () => {
    const { getByTestId } = render(<Checkboxes handleTest={handleTest} />)
    const checkboxClicked = getByTestId('checkbox')
    await userEvent.click(checkboxClicked)
    expect(handleTest).toBeCalled()
  })

  it('Should check checkbox user event', async () => {
    const { getByTestId } = render(<Checkboxes />)
    const checkbox = getByTestId('checkbox')
    expect(checkbox).toHaveProperty('checked', false)
    await userEvent.click(checkbox)
    expect(checkbox).toHaveProperty('checked', true)
    await userEvent.click(checkbox)
    expect(checkbox).toHaveProperty('checked', false)
  })
})

describe('Should render checkbox value', () => {
  test('initially not checked box', () => {
    const { getByTestId } = render(<Checkboxes />)
    const checkbox = getByTestId('checkbox')
    expect(checkbox).toHaveProperty('checked', false)
  })

  test('initially not checked box', () => {
    const { getByTestId } = render(<Checkboxes />)
    const checkbox = getByTestId('checkbox')
    expect(checkbox).not.toBeChecked()
  })
})

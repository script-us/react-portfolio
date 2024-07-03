import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import Buttons from '@/components/uiElement/buttons'
import { render } from '../../../../test-utils'

const handleTest = jest.fn()

describe('Render', () => {
  it('Should have a disabled button', () => {
    const { getByTestId } = render(<Buttons />)

    const disabledBtn = getByTestId('btn')
    expect(disabledBtn).toBeDisabled()
  })

  it('Should render the disabled button', () => {
    const { getByRole } = render(<Buttons />)
    const btn = getByRole('button', {
      name: 'Disabled Btn',
    })
    expect(btn).toBeDisabled()
  })
})

describe('Behavior', () => {
  test('User event', async () => {
    const { getByTestId } = render(<Buttons handleTest={handleTest} />)

    const btnClicked = getByTestId('button-1')
    await userEvent.click(btnClicked)

    expect(handleTest).toBeCalled()
  })
})

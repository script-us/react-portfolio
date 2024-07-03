import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import TextFields from '@/components/uiElement/textFields'
import { fireEvent, render, screen } from '../../../../test-utils'

describe('Render Input', () => {
  it('Should render the input', () => {
    const { getByPlaceholderText } = render(<TextFields />)
    const input = getByPlaceholderText('test')
    expect(input).toBeInTheDocument()
  })

  it('Should render the input', () => {
    const { getByTestId } = render(<TextFields />)
    const input = getByTestId('textFieldTest')
    expect(input).toBeInTheDocument()
  })
})

describe('Behavior', () => {
  test('It should not have value', () => {
    render(<TextFields />)
    const input: HTMLInputElement = screen.getByTestId('textFieldTest')
    expect(input.value).toBe('')
  })

  test('It should check input behavior', () => {
    render(<TextFields />)
    const input: HTMLInputElement = screen.getByTestId('textFieldTest')
    fireEvent.change(input, { target: { value: '23' } })
    expect(input.value).toBe('23')
    fireEvent.change(input, { target: { value: '' } })
    expect(input.value).toBe('')
  })

  it('it Should be able to add text to the input', async () => {
    const { getByPlaceholderText } = render(<TextFields />)
    const input = getByPlaceholderText('test')
    await userEvent.type(input, 'test')
    expect(input).toHaveValue('test')
  })

  test('It should keep a test in input value', () => {
    render(<TextFields />)
    const input: HTMLInputElement = screen.getByTestId('textFieldTest')
    fireEvent.change(input, { target: { value: 'test' } })
    expect(input.value).toBe('test')
  })
})

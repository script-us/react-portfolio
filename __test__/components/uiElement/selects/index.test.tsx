import Selects from '@/components/uiElement/selects'
import { render, screen } from '../../../../test-utils'
import '@testing-library/jest-dom'

describe('Render Select Option', () => {
  test('option defined or not', () => {
    const { getByDisplayValue } = render(<Selects />)
    const selectOption = getByDisplayValue('Alaska')
    expect(selectOption).toBeDefined()
  })

  it('should be default selected or not', () => {
    render(<Selects />)
    const select: HTMLOptionElement = screen.getByRole('option', { name: 'Alaska' })
    expect(select.selected).toBe(true)
  })

  test('how many length of options', () => {
    const { getAllByRole } = render(<Selects />)
    expect(getAllByRole('option').length).toBe(4)
  })

  it('should render document option', () => {
    const { getByText } = render(<Selects />)
    expect(getByText('Alabama')).toBeInTheDocument()
  })
})

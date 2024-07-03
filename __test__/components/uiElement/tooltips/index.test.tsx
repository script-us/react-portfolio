import Tooltips from '@/components/uiElement/tooltips'
import { fireEvent, render, screen } from '../../../../test-utils'
import '@testing-library/jest-dom'

describe('Render tooltip', () => {
  test('Show error title in tooltip', () => {
    const { getByTestId } = render(<Tooltips />)
    const tooltip = getByTestId('tooltipTest')
    expect(tooltip).toBeInTheDocument()
  })
})

describe('Tooltip behavior', () => {
  test('Show error title in tooltip', async () => {
    const baseDom = render(<Tooltips />)
    const tooltip = screen.getByTestId('tooltipTest')
    fireEvent.mouseOver(tooltip)
    expect(await baseDom.findByText('Delete')).toBeInTheDocument()
  })
})

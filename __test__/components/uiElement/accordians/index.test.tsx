import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import Accordions from '@/components/uiElement/accordions'
import { render, waitFor } from '../../../../test-utils'

describe('Accordions Text', () => {
  it('should render properly accordions value', () => {
    const { getByText } = render(<Accordions />)
    const messageAccordion = getByText('Basic accordion')
    expect(messageAccordion).toBeInTheDocument()
  })
})

describe('Accordions Behavior', () => {
  it('Should be visible', async () => {
    const { getByTestId } = render(<Accordions />)
    const accordionComponent = getByTestId('mui-accordion')
    await waitFor(() => expect(accordionComponent).not.toBeVisible())
    const accordionComponentBtn = getByTestId('mui-accordion-btn')
    await userEvent.click(accordionComponentBtn)
    await waitFor(() => expect(accordionComponent).toBeVisible())
  })
})

import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import TabsComponent from '@/components/uiElement/TabsComponent'
import { render } from '../../../../test-utils'

describe('Tabs', () => {
  it('Should render the selected tab disabled', () => {
    const { getByRole } = render(<TabsComponent />)
    const tab = getByRole('tab', { name: 'Tab Test' })
    expect(tab).toBeDisabled()
  })

  it('Should check click event', async () => {
    const { getByRole } = render(<TabsComponent />)
    const tab = getByRole('tab', { name: 'Tab Test1' })
    await userEvent.click(tab)
    expect(tab).toBeInTheDocument()
  })

  it('changes focus on tab', async () => {
    const { getByRole } = render(<TabsComponent />)
    const tab = getByRole('tab', { name: 'Tab Test' })
    const tab1 = getByRole('tab', { name: 'Tab Test1' })
    tab.focus()
    expect(tab).toHaveFocus()
    await userEvent.click(tab1)
    expect(tab1).toHaveFocus()
  })
})

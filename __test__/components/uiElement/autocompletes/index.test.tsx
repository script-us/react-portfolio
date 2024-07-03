import '@testing-library/jest-dom'
import Autocompletes from '@/components/uiElement/autocompletes'
import { render } from '../../../../test-utils'

describe('Autocomplete Page', () => {
  it('should render value', () => {
    const { getByText } = render(<Autocompletes />)
    const messageAutocomplete = getByText('Basic Autocomplete')
    expect(messageAutocomplete).toBeInTheDocument()
  })
})

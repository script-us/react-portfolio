import '@testing-library/jest-dom'
import Textareas from '@/components/uiElement/textareas'
import { render } from '../../../../test-utils'

describe('TextAreas', () => {
  it('Should render value', () => {
    const { getByDisplayValue } = render(<Textareas />)
    const messageTextArea = getByDisplayValue('Hello World')
    expect(messageTextArea).toBeInTheDocument()
    expect(messageTextArea).toBeTruthy()
  })
})

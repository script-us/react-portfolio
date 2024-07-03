import Avatars from '@/components/uiElement/avatars'
import '@testing-library/jest-dom'
import { render } from '../../../../test-utils'

describe('avatars', () => {
  it('Should render the title', () => {
    const { getByTitle } = render(<Avatars />)
    const title = getByTitle('test')
    expect(title).toBeInTheDocument()
  })
})

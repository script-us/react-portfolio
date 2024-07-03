import '@testing-library/jest-dom'
import Sidebar from '@/components/layout/sidebar'
import { render } from '../../../../test-utils'

describe('Sidebar', () => {
  it('Should render alt text', () => {
    const { getByAltText } = render(<Sidebar />)
    const altTxt = getByAltText('logo')
    expect(altTxt).toBeInTheDocument()
  })

  it('Should render img', () => {
    const { getByRole } = render(<Sidebar />)
    const img = getByRole('img')
    expect(img).toBeInTheDocument()
  })
})

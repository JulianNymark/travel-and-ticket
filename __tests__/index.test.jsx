import { render, screen } from '@testing-library/react'
import '../utils/mockFile.ts'
import Home from '../pages/index'
import '@testing-library/jest-dom'

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /Find Travels... buy tickets/i,
    })

    expect(heading).toBeInTheDocument();
  })
})

import { render, screen } from '@testing-library/react';
import App from './App';

describe("App Component", () => {
  it('renders shopping cart header element', () => {
    render(<App />);
    const linkElement = screen.getByRole("banner").textContent;
    expect(linkElement).toMatch(/the odin project: shopping cart/i)
  });
})

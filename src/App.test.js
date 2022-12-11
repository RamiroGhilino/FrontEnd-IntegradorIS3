import { render, screen } from '@testing-library/react';
import Button from './components/button';


test('Render Boton', () =>{
  render(<Button id="btn" className="customname" value="valor" />);
  const ButtonElement = screen.getByRole("button");
  console.log(ButtonElement);
  expect(ButtonElement).toBeInTheDocument();
  expect(ButtonElement.id).toMatch("btn");
  expect(ButtonElement.className).toMatch("customname");
  const SpanElement = screen.getByText("valor");
  expect(SpanElement).toBeInTheDocument();
  expect(SpanElement.textContent).toMatch("valor");
})


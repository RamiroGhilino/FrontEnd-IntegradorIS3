import { render, screen } from '@testing-library/react';
import Button from './components/button';


test('Render Boton', () =>{
  render(<Button id="btn" className="customname" value="valor" />);
  const ButtonElement = screen.getByRole("button");
  expect(ButtonElement).toBeInTheDocument();
  //Cambio en el test para probar caso de falla
  //expect(ButtonElement.id).toMatch("button");
  expect(ButtonElement.id).toMatch("btn");
  expect(ButtonElement.className).toMatch("customname");
  const SpanElement = screen.getByText("valor");
  expect(SpanElement).toBeInTheDocument();
  expect(SpanElement.textContent).toMatch("valor");
})


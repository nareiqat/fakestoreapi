import { render, screen, cleanup } from "@testing-library/react";
import Products from "../Products/Products";

test('Should render products component', () => {
    const component = render(<Products />)
    const productsElement = component.getByTestId('products-1');
    expect(productsElement).toBeInTheDocument();
})
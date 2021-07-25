import { render, screen, cleanup } from "@testing-library/react";
import Products from "../Products/Products";
import { render, fireEvent } from '../test-utils';
import Product from './../Products/Product/Product';

test('Should render products component', () => {
    const component = render(<Product />)
    const productsElement = component.getByTestId('product-1');
    expect(productsElement).to;
})

test("description button shows description and title" , () => {
    const {getByTestId} = render( <Counter />)
    const descbtn = getByTestId("desc-btn")

    expect(descBtn.textContent).toBe("description")
})
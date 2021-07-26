import React from 'react'
import { render } from '@testing-library/react'
import user from '@testing-library/user-event'
import Products from '../Products/Products'
import Product from '../Products/Product/Product'

describe('<Products />', ({data}) => {
    const mockProduct = {id: 1, category: "men's clothing",
    description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    price: 109.95,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"}

    it('should render a products object', () => {
        const {debug} = render(<Products products={mockProduct} data={data}  />)
    })
})
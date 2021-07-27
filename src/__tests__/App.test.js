import React from 'react'
import App from '../App'
import toJSON from 'enzyme-to-json';
import Products from '../components/Products/Products';
import Product from '../components/Products/Product/Product';
import Drawer from '../components/Drawer/Drawer'
import {shallow, mount} from "enzyme"
import SearchBar from './../components/SearchBar/SearchBar';
import SimpleModal from '../components/Products/Product/SimpleModal';


const mockProduct = {
  id: 1, 
  category: "men's clothing",
  description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  price: 109.95,
  title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
}

const jsonArray = [
  {id: 1, 
  category: "men's clothing",
  description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  price: 109.95,
  title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
  },
  { 
    category: "men's clothing",
    description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    id: 2,
    image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    price: 22.3,
    title: "Mens Casual Premium Slim Fit T-Shirts "
  }
]

// test if App.js is rendering all components
describe("rendering components in app", () => {
  it("renders App component without crashing", () => {
    shallow(<App />)
  });
})

// test if searchBar UI, products, drawer, product snapshot matches refernce snapshot file stored alongside the test
test("searchbar matches snapshot", () => {
  const searchBar = shallow(<SearchBar />)
  expect(toJSON(searchBar)).toMatchSnapshot();
})

// added some data to mimic some props passed to the products component
test("products matches snapshot", () => {
  const products = shallow(<Products data={jsonArray} product={mockProduct} input={mockProduct.title}/>)
  expect(toJSON(products)).toMatchSnapshot();
})

test("product matches snapshot", () => {
  const product = shallow(<Product product={mockProduct}/>)
  expect(toJSON(product)).toMatchSnapshot();
})

test("drawer matches snapshot", () => {
  const drawer = shallow(<Drawer />)
  expect(toJSON(drawer)).toMatchSnapshot();
})

describe('Test Button component', () => {
  it('Test click event', () => {
    const mockCallBack = jest.fn();

    const simpleModal = shallow((<SimpleModal onClick={mockCallBack} product={mockProduct}/>));
    const button = simpleModal.find("button").simulate('click')
    expect(button.target.value).toEqual(mockProduct.description);
    // console.log(button.value)
  });
});






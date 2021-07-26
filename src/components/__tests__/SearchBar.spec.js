import React from 'react'
import {fireEvent, render} from '@testing-library/react'

import SearchBar from './../SearchBar/SearchBar';


//displays result html output in the debug console

it('Check input label is correct', () => {
    const mockSearchBar = jest.fn()
    const {debug, getByLabelText} = render(<SearchBar SearchBar={mockSearchBar} />)
    //Regex to find label with needed text
    const Input = getByLabelText(/search for product/i)
    debug()
})
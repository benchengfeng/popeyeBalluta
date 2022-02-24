import {render, screen, cleanup, fireEvent} from '@testing-library/react';
import MenuList from '../menuList/menuList';
import { Provider } from 'react-redux';
import store from '../../redux/store'
import '@testing-library/jest-dom'

afterEach(()=>{
    cleanup();
})

test('should render map component',()=>{
    render (<Provider store={store}><MenuList/></Provider>)
    const menuListElement = screen.getByTestId('menuList-1');
    expect(menuListElement).toBeInTheDocument();
    expect(menuListElement).toHaveTextContent('Village To Work');
    expect(menuListElement).toHaveTextContent('Going For Lunch');
    expect(menuListElement).toHaveTextContent('Back Home');
    
}) 
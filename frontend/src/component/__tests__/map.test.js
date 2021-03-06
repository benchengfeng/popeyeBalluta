import {render, screen, cleanup, fireEvent} from '@testing-library/react';
import MapComponent from '../map/map';
import { Provider } from 'react-redux';
import store from '../../redux/store'
import '@testing-library/jest-dom'

afterEach(()=>{
    cleanup();
})

test('should render map component',()=>{
    render (<Provider store={store}><MapComponent/></Provider>)
    const mapElement = screen.getByTestId('map-1');
    expect(mapElement).toBeInTheDocument();
    expect(mapElement).toHaveTextContent('trip clock');
    
}) 
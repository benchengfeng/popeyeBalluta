import {render, screen, cleanup} from '@testing-library/react';
import MapComponent from '../map/map';
import { Provider } from 'react-redux';
import store from '../../redux/store'
import '@testing-library/jest-dom'

test('should render map component',()=>{
    render (<Provider store={store}><MapComponent/></Provider>)
    const mapElement = screen.getByTestId('map-1');
    expect(mapElement).toBeInTheDocument();
}) 
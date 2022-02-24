import {render, screen, cleanup, fireEvent} from '@testing-library/react';
import ProgressBar from '../progressBar/progressBar';
import { Provider } from 'react-redux';
import store from '../../redux/store'
import '@testing-library/jest-dom'

afterEach(()=>{
    cleanup();
})

test('should render map component',()=>{
    render (<Provider store={store}><ProgressBar/></Provider>)
    const progressBarElement = screen.getByTestId('progressBar-1');
    expect(progressBarElement).toBeInTheDocument();
    
}) 
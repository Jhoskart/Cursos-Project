import { render as rtlRender } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import {cursosSlice}from '../redux/slice/cursosSlice'
import { BrowserRouter as Router} from 'react-router-dom';

function reducer(ui, 
    { 
    preloadState,
    store = configureStore({ reducer: { cursos: cursosSlice.reducer },
    preloadState }),
    ...renderOptions
    } = {}
) {
    function Wrapper ({ children}) {
        return (
            <Provider store={store}>
                <Router>
                    {children}
                </Router>
            </Provider>
        );
    }
    return rtlRender(ui, { wrapper: Wrapper, ...renderOptions});
}

export * from '@testing-library/react'
export { reducer }


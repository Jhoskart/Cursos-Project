import { render as rtlRender } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import {cursosSlice}from '../redux/slice/cursosSlice'
import { BrowserRouter as Router} from 'react-router-dom';

function reducer(ui, 
    { 
    preloadState, // El estado inicial del store
    store = configureStore({ reducer: { cursos: cursosSlice.reducer }, // El reducer del store
    preloadState }),
    ...renderOptions // Opciones de renderizado
    } = {}
) {
    function Wrapper ({ children}) { // Wrapper es un componente que renderiza el componente que se le pasa como children   
        return (
            <Provider store={store}>
                <Router>
                    {children}
                </Router>
            </Provider>
        );
    }
    return rtlRender(ui, { wrapper: Wrapper, ...renderOptions}); // Renderizamos el componente pasado como children con las opciones de renderizado
}

export * from '@testing-library/react'
export { reducer }


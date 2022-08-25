import {screen, fireEvent, reducer, render} from '../../Helpers/util';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import * as data from '../../db.json'
axios.defaults.adapter = require('axios/lib/adapters/http');

import CreateConnected from './CreateCurso.jsx';


describe('CreateCursos', () => {
    let createCurso, state, store;
    const mockStore = configureStore([thunk])
    let cursos = data.cursos[0];
    state = { 
        cursos: []
    }
    store = mockStore(state)
    
    beforeEach(() => {
        createCurso = () => 
        reducer(
            <CreateConnected />
        );
    })

    it('should render correctly', () => {
        const { container } = createCurso();
        expect(container).toMatchSnapshot();
    })

    it(' should render a button to create a curso', () => {
        createCurso();
        expect(screen.getByText('Crear Curso')).toBeInTheDocument();
    })

    it('should render a Modal to create a curso and have a form', () => {
        createCurso();
        fireEvent.click(screen.getByText('Crear Curso'));
        expect(screen.getByRole('dialog')).toBeInTheDocument(); 
        expect(screen.getByPlaceholderText('Nombre del curso')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Descripcion del curso')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Imagen del curso')).toBeInTheDocument();
        expect(screen.getByText('Guardar')).toBeInTheDocument();
    })

});

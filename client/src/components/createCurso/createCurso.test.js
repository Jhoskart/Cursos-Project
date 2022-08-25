import {screen, render, fireEvent} from '@testing-library/react';
import { Provider } from 'react-redux';
import CreateConnected from './CreateCurso.jsx'; 
import ListadoDeCursos from '../listadoDeCursos/ListadoDeCursos'
import store  from '../../redux/store/store';
import { configure, shallow, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import configureStore from 'redux-mock-store';
import { getCursos } from '../../redux/slice/cursosSlice';
import axios from 'axios';
axios.defaults.adapter = require('axios/lib/adapters/http');

configure({ adapter: new Adapter() });

describe('CreateCursos', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(
            <Provider store={store}>
                <CreateConnected />
            </Provider>
        );
    })

    it('should render correctly', () => {
        const { container } = render(
            <Provider store={store}>
                <CreateConnected />
            </Provider>
        );
        expect(container).toMatchSnapshot();
    })

    it(' should render a button to create a curso', () => {
        const { container } = render(
            <Provider store={store}>
                <CreateConnected />
            </Provider>
        );
        expect(screen.getByText('Crear Curso')).toBeInTheDocument();
    })

    it('should render a Modal to create a curso and have a form', () => {
        const { container } = render(
            <Provider store={store}>
                <CreateConnected />
            </Provider>
        );
        
        fireEvent.click(screen.getByText('Crear Curso'));
        expect(screen.getByRole('dialog')).toBeInTheDocument(); 
        expect(screen.getByPlaceholderText('Nombre del curso')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Descripcion del curso')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Imagen del curso')).toBeInTheDocument();
    })

});

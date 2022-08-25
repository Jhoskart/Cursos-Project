import {screen, render, fireEvent} from '@testing-library/react';
import { Provider } from 'react-redux';
import * as ReactRedux from 'react-redux';
import CursoDetail from './CursoDetail'
import { configure, shallow, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import configureStore from 'redux-mock-store';
import axios from 'axios';
import nock from 'nock';
import isReact from 'is-react';
import thunk from 'redux-thunk';
import * as data from '../../db.json'
import { MemoryRouter } from 'react-router-dom'
axios.defaults.adapter = require('axios/lib/adapters/http');


configure({ adapter: new Adapter() });

describe('<CursoDetail />', () => {
    let cursoDetail, state, store;
    const mockStore = configureStore([thunk])
    let cursos = data.cursos
    state = { 
        cursos: []
    }
    store = mockStore(state)

    beforeEach(() => {

        const apiMock = nock('http://localhost:3001').persist();

        apiMock.get("/cursos").reply(200, data.cursos);

        cursoDetail = (cursos) => 
        mount(
            <Provider store={store}>
                    <CursoDetail 
                        name={cursos.name}
                        description={cursos.description}
                        image={cursos.image}
                        id={cursos.id}
                    />
            </Provider>
        )
    });

    afterEach(() => {
        jest.restoreAllMocks();
    }),

    it('should render correctly', () => {
        const { container } = render(
            <Provider store={store}>
                <CursoDetail 
                    name={cursos.name}
                    description={cursos.description}
                    image={cursos.image}
                    id={cursos.id}
                />
            </Provider>
        );
        expect(container).toMatchSnapshot();
    })

    describe('Estructura', () => {

        it('shoulds render a div contenedor', () => {
            const { container } = render(
                <Provider store={store}>
                    <CursoDetail
                        name={cursos.name}
                        description={cursos.description}
                        image={cursos.image}
                        id={cursos.id}
                    />
                </Provider>
            );
            expect(container.querySelector('div')).toBeInTheDocument();
        })

        it('shouls render a curso image', () =>{
            const { container } = render(
                <Provider store={store}>
                    <CursoDetail
                        name={cursos.name}
                        description={cursos.description}
                        image={cursos.image}
                        id={cursos.id}
                    />
                </Provider>
            );
            fireEvent.click(screen.getByText('Mas informacion aqui'));
            expect(screen.getByAltText('imagen del curso')).toBeInTheDocument(); 
        })

        it('shoulds render a form to edit', () =>{
            const { container } = render(
                <Provider store={store}>
                    <CursoDetail
                        name={cursos.name}
                        description={cursos.description}
                        image={cursos.image}
                        id={cursos.id}
                    />
                </Provider>
            );
            fireEvent.click(screen.getByText('Mas informacion aqui'));
            fireEvent.click(screen.getByText('Editar'));
            expect(screen.getByPlaceholderText('Nombre del curso')).toBeInTheDocument();
            expect(screen.getByPlaceholderText('Descripcion del curso')).toBeInTheDocument();
            expect(screen.getByPlaceholderText('Url de la imagen')).toBeInTheDocument();
        })

        it('should render the curso name in h5', () =>{
            const { container } = render(
                <Provider store={store}>
                    <CursoDetail
                        name={cursos.name}
                        description={cursos.description}
                        image={cursos.image}
                        id={cursos.id}
                    />
                </Provider>
            );
            fireEvent.click(screen.getByText('Mas informacion aqui'));
            expect(screen.getByRole('heading')).toBeInTheDocument();
        })
        
    })
})


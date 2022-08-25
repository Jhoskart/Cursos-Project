import { screen, fireEvent, reducer } from '../../Helpers/util';
import configureStore from 'redux-mock-store';
import axios from 'axios';
import thunk from 'redux-thunk';
import * as data from '../../db.json'
axios.defaults.adapter = require('axios/lib/adapters/http');

import CursoDetail from './CursoDetail';

describe('<CursoDetail />', () => {

    let cursoDetail, state, store;
    const mockStore = configureStore([thunk])
    let cursos = data.cursos[0];
    state = { 
        cursos: []
    }
    store = mockStore(state)

    beforeEach(() => {
        cursoDetail = (cursos) => 
        reducer(
            <CursoDetail 
                name={cursos.name}
                description={cursos.description}
                id={cursos.id}
                image={cursos.image}
            />
        )   
    });

    afterEach(() => {
        jest.restoreAllMocks();
    }),

    it('should render correctly', () => {
        const { container } = cursoDetail(cursos);
        expect(container).toMatchSnapshot();
    })

    it('shoulds render a div contenedor', () => {
        const { container } = cursoDetail(cursos);
        expect(container.querySelector('div')).toBeInTheDocument();
    })

    it('should render a button to open the modal', () => {
        cursoDetail(cursos);
        const button = screen.queryByText('Mas informacion aqui')
        expect(button).toBeInTheDocument()
    })

    describe('Modal', () => {

        it('should render the curso name', () =>{
            cursoDetail(cursos);
            fireEvent.click(screen.getByText('Mas informacion aqui'));
            expect(screen.getByRole('heading')).toHaveTextContent(cursos.name);
        })

        it('shouls render a curso image', () =>{
            cursoDetail(cursos);
            fireEvent.click(screen.getByText('Mas informacion aqui'));
            expect(screen.getByRole('img')).toHaveClass('boxForImage2'); 
            expect(screen.getByAltText('imagen del curso')).toBeInTheDocument(); 
        })

        it('should render a curso description', () =>{
            cursoDetail(cursos);
            fireEvent.click(screen.getByText('Mas informacion aqui'));
            expect(screen.getAllByText(cursos.description).at(0)).toBeInTheDocument();
        })

        it('shoulds render a form to edit', () =>{
            cursoDetail(cursos);
            fireEvent.click(screen.getByText('Mas informacion aqui'));
            fireEvent.click(screen.getByText('Editar'));
            expect(screen.getByPlaceholderText('Nombre del curso')).toBeInTheDocument();
            expect(screen.getByPlaceholderText('Descripcion del curso')).toBeInTheDocument();
            expect(screen.getByPlaceholderText('Url de la imagen')).toBeInTheDocument();
            expect(screen.getByText('Guardar')).toBeInTheDocument();
        })
        
    })
})


import { reducer, screen, cleanup } from '../../Helpers/util';
import { getCursos } from '../../redux/slice/cursosSlice'
import * as data from '../../db.json'
import thunk from 'redux-thunk';
import createMockStore from 'redux-mock-store'
import axios from 'axios'
axios.defaults.adapter = require('axios/lib/adapters/http');

import ListadoDeCursos from './ListadoDeCursos'
import CursoCard from '../cursoCard/CursoCard'

const mockStore = createMockStore([thunk]);

describe('First elements', () => {
    let title 
    beforeEach(() => {
        reducer(<ListadoDeCursos />)
        title = screen.queryByText('LarnU Cursos👽')
    });

    afterEach(() => {
        cleanup();
    });

    it('should render an h1 for the title', () => {
        expect(title).toBeInTheDocument()
    });

    it('should render a button to create a curso', () => {
        const button = screen.queryByText('Crear Curso')
        const component = reducer(<ListadoDeCursos />, button);
        expect(component.container).toMatchSnapshot()
    });

});

describe('<CursoCard />', () => {
    let cursoCard, state, store;
    let cursos = data.cursos[0];
    state = {
        cursos: []
    }
    store = mockStore(state)
    beforeEach(() => {
        cursoCard = (cursos) =>
            reducer(
                <CursoCard
                    name={cursos.name}
                    description={cursos.description}
                    image={cursos.image}
                    id={cursos.id}
                />
            )
    }),
    
    afterEach(() => {
        jest.restoreAllMocks();
    });

    it('should render correctly', () => {
        const { container } = cursoCard(cursos)
        expect(container).toMatchSnapshot();
    });

    it('should render a div container', () => {
        const { container } = cursoCard(cursos)
        expect(container.querySelector('div')).toHaveClass('cards');
    });

    it('should render an h1 for the title', () => {
        const { getByText } = cursoCard(cursos)
        expect(getByText('Curso de NodeJS')).toBeInTheDocument()
    });

    it('should render an img tag with altText', () => {
        const { getByRole } = cursoCard(cursos)
        expect(getByRole("img", { name: "imagen del curso" })).toBeInTheDocument()
    });
});

describe('GetCursos action thunk', () => {
    it('dispatch getCursos action thunk ', async () => {
        const store = mockStore()
        await store.dispatch(getCursos(data.cursos))
        const actions = store.getActions();
        expect(actions[0]).toEqual(getCursos(data.cursos));
    });
});


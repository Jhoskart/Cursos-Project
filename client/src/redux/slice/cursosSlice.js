import { createSlice } from '@reduxjs/toolkit';

export const cursosSlice = createSlice({
    name: 'cursos',
    initialState: {
        cursos: []
    },
    reducers: {
        getCursos: (state, {payload}) => {
            state.cursos = payload;
        }
    }
});

export const { getCursos } = cursosSlice.actions;
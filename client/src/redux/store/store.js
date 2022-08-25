import { configureStore } from '@reduxjs/toolkit';
import { cursosSlice } from '../slice/cursosSlice';

export default configureStore({
    reducer: {
        cursos: cursosSlice.reducer
    },
});

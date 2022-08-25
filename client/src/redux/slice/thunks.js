import axios from 'axios';
import { getCursos } from './cursosSlice';
import Swal from 'sweetalert2';

const api = process.env.REACT_APP_API;

export const getCursosRequest = () => async dispatch => {
    try {
        const response = await axios.get(`${api}/cursos`);
        const data = await response.data;	
        dispatch(getCursos(data));
    } catch (error) {
        console.log(error);
    }
}

export const updateCursoRequest = (id, curso) => {
    return async () => {
        try {
            await axios.put(`${api}/cursos/${id}`, curso);
            Swal.fire({
                title: 'Curso actualizado',
                text: 'El curso se actualizó correctamente',
                icon: 'success',
                showConfirmButton: false,
                footer: '<a class="btn btn-primary" href="/">OK</a>'
            });
        } catch (error) {
            console.log(error);
        }
    }
}


export const postCursoRequest = (curso) => {
    return async () => {
        try {
            const response = await axios.post(`${api}/cursos`,{
            method: 'POST', 
            body: curso
        });	
            
            Swal.fire({
                title: 'Curso creado',
                text: 'El curso se ha creado correctamente',
                icon: 'success',
                showConfirmButton: false,
                footer: '<a class="btn btn-primary" href="/">OK</a>'
            });
            console.log(response);
        } catch (error) {
            Swal.fire({
                title: 'Error',
                text: `${error.response.data.message}`,
                icon: 'error',
                confirmButtonText: 'Ok'
            });
            console.log(error);
        }
    }
}

export const deleteCursoRequest = (id) => async dispatch => {
    try {
        const response = await axios.delete(`${api}/cursos/${id}`);
        Swal.fire({	
            title: 'Curso eliminado',
            text: 'El curso se ha eliminado correctamente',
            icon: 'success',
            showConfirmButton: false,
            footer: '<a class="btn btn-primary" href="/">OK</a>'
        });
        console.log(response);
    } catch (error) {
        Swal.fire({
            title: 'Error',
            text: `${error.response.data.message}`,
            icon: 'error',
            confirmButtonText: 'Ok'
        });
        console.log(error);
    }
}

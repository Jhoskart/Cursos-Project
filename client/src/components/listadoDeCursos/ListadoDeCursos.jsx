import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCursosRequest } from '../../redux/slice/thunks'
import CursoCard from '../cursoCard/CursoCard'
import CreateCurso from '../createCurso/CreateCurso'
import './listadoDeCursos.css'

export default function ListadoDeCursos() {
    const dispatch = useDispatch()
    const cursos = useSelector(state => state.cursos.cursos)
   
    useEffect(() => {
        dispatch(getCursosRequest())
    } , [dispatch])

    return (
        <div className="margin3">
            <h1>Listado de Cursos👽</h1>
            <div className="content">
                {cursos?.map(curso => (
                    <>
                        <CursoCard 
                            key={curso.id} 
                            name={curso.name} 
                            image={curso.image} 
                            description={curso.description}
                            id={curso.id}
                        />
                    </>
                ))}
            </div>
            <CreateCurso />  
        </div>
    )
}

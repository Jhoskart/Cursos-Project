import React from 'react'
import './cursoCard.css'
import CursoDetail from '../cursoDetail/CursoDetail'

export default function CursoCard({name, image, description, id}) {
    return (
        <div className='cards' >
            <div className='card card1'>
                <div className='container'>
                    <img src={image} alt="imagen del curso" />
                </div>
                <div className='details'>
                    <h3>{name}</h3>
                    <CursoDetail description={description} name={name} id={id} image={image}/>
                </div>
            </div>
        </div>
    )
}

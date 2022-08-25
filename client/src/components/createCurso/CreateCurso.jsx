import React, { useEffect, useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Form } from 'reactstrap'
import { postCursoRequest } from '../../redux/slice/thunks'
import { useDispatch } from 'react-redux'
import validate from '../../Helpers/validate'
import 'bootstrap/dist/css/bootstrap.css'
import './createCurso.css'

export default function CreateCurso() {

    const [modal, setModal] = useState(false)
    const [error, setError] = useState({})
    const [disabled, setDisabled] = useState(true)
    const dispatch = useDispatch()

    const [curso, setCurso] = useState({
        name: '',
        description: '',
        image: ''
    })

    const switchModal = () => {
        setModal(!modal)
    }

    const handleChange = (e) => {
        setCurso({ ...curso, [e.target.name]: e.target.value });
        setError(validate({ ...curso, [e.target.name]: e.target.value }));
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(postCursoRequest(curso))
        setModal(false)

        setCurso({
            name: '',
            description: '',
            image: ''
        })
    }
    
    useEffect(() => {

        if ( //Validacion habilitar el boton submit
            curso.name.length > 0 &&
            curso.name.length <= 10 &&
            isNaN(curso.name) && 
            curso.description.length > 20 &&
            curso.image.length > 0 &&
            !error.hasOwnProperty("image") &&
            !error.hasOwnProperty("description")
    ) {
      setDisabled(false); //si todo esta correcto se habilitara el boton submit
    } else {
      setDisabled(true); //si no se deshabilitara el boton submit
    };
    }, [error, disabled, curso.name, curso.description, curso.image]);

    const modalStyles = {
        position: 'relative',
        top: '50%',
        left: '15%',
        transform: 'translate(-50%, -50%)'
    }

    return (
        <> 
            <div className='margin2'> 
                <Button className='tamaño' color="primary" onClick={switchModal}>Crear Curso</Button>
            </div>

            <Modal isOpen={modal} style={modalStyles} >
                
                <ModalHeader>Crea un curso</ModalHeader>
                <Form onSubmit={handleSubmit}>
                    <ModalBody >
                        <FormGroup >
                            <Input 
                                type="text" 
                                name="name" 
                                id="name" 
                                placeholder="Nombre del curso" 
                                autoComplete='off' 
                                onChange={handleChange} 
                                value={curso.name}
                            />
                            {error.name && <p>{error.name}</p>}
                        </FormGroup>

                        <FormGroup>
                            <Input 
                                type="textarea" 
                                name="description" 
                                id="description" 
                                placeholder="Descripcion del curso" 
                                autoComplete='off' 
                                onChange={handleChange}
                                value={curso.description}
                            />
                            {error.description && <p>{error.description}</p>}
                        </FormGroup>

                        <FormGroup> 
                            <Input 
                                type="text" 
                                name="image" 
                                id="image" 
                                placeholder="Imagen del curso" 
                                autoComplete='off' 
                                onChange={handleChange} 
                                value={curso.image}
                            />
                            {error.image && <p>{error.image}</p>}
                        </FormGroup>

                        {curso.image ? <img className='boxForImage' src={curso.image} alt="imagen"/> : (
                            <div className='boxForImage'>
                                <p className='margin' >Carga tu imagen</p>
                            </div>
                        )}
                    </ModalBody>
                    <ModalFooter>

                        <Button type='submit' color="primary" disabled={disabled} >Guardar</Button>

                        <Button onClick={switchModal} color="secondary">Cancelar</Button>

                    </ModalFooter>
                </Form>
            </Modal>
        </>
    )
}

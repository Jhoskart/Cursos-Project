import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCursoRequest, updateCursoRequest } from '../../redux/slice/thunks'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Form } from 'reactstrap'
import './cursoDetail.css'

export default function CursoDetail({ name, description, id, image }) {
    const [modal, setModal] = useState(false)
    const dispatch = useDispatch()
    
    const switchModal = () => {
        setModal(!modal)
    }

    const deleteCurso = () => {
        dispatch(deleteCursoRequest(id))
        setModal(false)
    }

    ////////// Editar Curso //////////

    const [editCurso, setEditCurso] = useState(null)

    const [editCursoData, setEditCursoData] = useState(
        name && description ? { name, description, image } : {
            name: '',
            description: '',
            image: ''
        }
    )

    const handleEditCurso = (e, cursoId) => {
        e.preventDefault()
        setEditCurso(cursoId)
    }

    const handleFormChange = (e) => {
        setEditCursoData({
            ...editCursoData,
            [e.target.name]: e.target.value
        })
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        dispatch(updateCursoRequest(editCurso, editCursoData))
        setEditCurso(null)
        setEditCursoData({
            name: '',
            description: '',
            image: ''
        })
        setModal(false)
        
    }

    const modalStyles = {
        position: 'relative',
        top: '50%',
        left: '15%',
        transform: 'translate(-50%, -50%)'
    }

    const cancelEdit = () => {
        setEditCurso(null)
        setModal(!modal)
    }


    return (
        <div>
            <Button onClick={switchModal} color='light' >Mas informacion aqui</Button>
                <Modal style={modalStyles} isOpen={modal} >
                    <Form onSubmit={handleFormSubmit}>
                        {editCurso === id ? (
                            <ModalHeader>
                                <FormGroup>
                                    <Input 
                                    type='text' 
                                    name='name' 
                                    id='name' 
                                    placeholder='Nombre del curso' 
                                    value={editCursoData.name}
                                    onChange={handleFormChange}
                                    />
                                </FormGroup>
                            </ModalHeader>
                        ) : (
                            <ModalHeader>{name}</ModalHeader>
                        )}
                    
                        {editCurso === id ? (
                            <ModalBody>

                                {editCursoData.image ? (
                                    <img className='boxForImage' src={editCursoData.image} alt='Imagen del curso' />
                                ) : (
                                    <div className='boxForImage'>
                                        <p className='margin' >Carga tu imagen</p>
                                    </div>
                                )
                                    }

                                <FormGroup>
                                    <Input
                                    type='url'
                                    name='image'
                                    id='image'
                                    placeholder='Url de la imagen'
                                    value={editCursoData.image}
                                    onChange={handleFormChange}
                                    />
                                </FormGroup>

                                <FormGroup>
                                    <Input
                                    type='textarea'
                                    name='description'
                                    id='description'
                                    placeholder='Descripcion del curso'
                                    value={editCursoData.description}
                                    onChange={handleFormChange}
                                    rows='14'   
                                    />
                                </FormGroup>

                            </ModalBody>
                            ) : (
                            <ModalBody>
                                <img className='boxForImage2' src={image} alt="imagen del curso" />
                                <div>
                                    <p>{description}</p>
                                </div>
                            </ModalBody>
                            )}
                            {editCurso === id ? (
                            <ModalFooter>
                                <Button color='primary' type='submit' >
                                Guardar
                                </Button>
                                <Button color='secondary' onClick={cancelEdit}>
                                    Cancelar
                                </Button>
                            </ModalFooter>
                            ) : (
                                <ModalFooter>
                                    <Button color='danger' onClick={() => deleteCurso(id)} >Eliminar</Button>
                                    <Button color='primary' onClick={(e) => handleEditCurso(e, id)} >Editar</Button>
                                    <Button onClick={switchModal} color='secondary'>Cancelar</Button> 
                                </ModalFooter> 
                            )}
                    </Form>
                </Modal>
        </div>
    )
}

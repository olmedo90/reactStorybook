import React, { useState, useEffect } from 'react';
import {Button, Modal} from 'react-bootstrap';

const ModalsCrud = ({handleClose, handleShow, modoEditar, datos, updateList}) => {
    
    const datosForm={
        author:'',
        comentario:'',
      };
    
      const [form, setForm]=useState(datosForm)
      
      const handleChange=(e)=>{
       
        setForm({
          ...form,
          [e.target.name]: e.target.value,
        })
      }
      //crud
      const Api='http://localhost:7000/comentarios';
      const handleSubmit= async(e)=>{ 
        e.preventDefault();       
        await fetch(`${Api}/post`,{
          method: 'POST',
          body: JSON.stringify(form),
          headers:{
            'content-type': 'application/json',
          }
          
        }).then(res=>res.json())
        .then((result)=>{
          handleClose();
          updateList();
        })
      }
      //editar 
      const id = datos._id;
     // console.log(datos)
    useEffect(()=>{
      if(modoEditar){
       // console.log('editando')
        setForm(datos);
        console.log(datos)
        return;
      }
    },[]) 
      const insertEditar = async(e)=>{
        e.preventDefault();
        console.log('ESTAMOS EDITANDO');
        await fetch(`${Api}/edit/${id}`, 
        {
          method: "PUT",
          body: JSON.stringify(form),
          headers:{
            'Accept': 'application/form-data',
            'content-type': 'application/json',
          }
          
        }).then(res=>res.json())
        setForm(datosForm);
        handleClose();
        updateList();

      }
      const opEdit=()=>{
        handleClose();
      }
  return (
    <>
    
      <Modal show={handleShow} onHide={modoEditar?opEdit:handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{modoEditar?'Editar Comentario':'Agregar Comentario'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form className='row' onSubmit={modoEditar ? insertEditar : handleSubmit} >
        <label htmlFor="lblautor" className='col-md-2'> Author</label>
        <input type="text"
        name='author'
        id='lblautor'
        placeholder='Escriba su nombre'
        className='col-md-9 mb-3'
         onChange={handleChange}
        value={form.author||""}
       
        />
         <label htmlFor="lblcomentario" className='col-md-2'> Comentario</label>
        <input type="text"
        name='comentario'
        id='lblcomentario'
        placeholder='Escriba su comentario'
        className='col-md-9 mb-3'
        onChange={handleChange}
        value={form.comentario||""}
        />
        <input type="submit" value="Enviar" className="btn btn-primary" />
        <input type="reset" value="borrar" className="btn btn-warning"/>
      </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ModalsCrud
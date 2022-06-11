import React from 'react'
import { useState } from 'react'

const PostComent = () => {
  const datosForm={
    author:'',
    comentario:''
  }

  const [form, setForm]=useState(datosForm)
  
  const handleChange=(e)=>{
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    const Api='http://localhost:7000/comentarios/';
    fetch(`${Api}post`,{
      method: 'POST',
      body: JSON.stringify(form),
      headers:{
        'content-type': 'application/json',
      }
    }).then(res=>res.json())
  }
  return (
    <div>
      <h3>Insertar un Comentario</h3>
      <form className='row' onSubmit={handleSubmit}>
        <label htmlFor="lblautor" className='col-md-2'> Author</label>
        <input type="text"
        name='author'
        id='lblautor'
        placeholder='Escriba su nombre'
        className='col-md-9 mb-3'
        onChange={handleChange}
        />
         <label htmlFor="lblcomentario" className='col-md-2'> Comentario</label>
        <input type="text"
        name='comentario'
        id='lblcomentario'
        placeholder='Escriba su comentario'
        className='col-md-9 mb-3'
        onChange={handleChange}
        />
        <input type="submit" value="Enviar" className="btn btn-primary" />
      </form>
    </div>
  )
}

export default PostComent
import React,{useState, useEffect} from 'react'

import {Link, Outlet,} from 'react-router-dom'
import PostComent from './PostComent';
const Comentarios = (props) => {
  props.setNav(false)
  const Api='http://localhost:7000/comentarios/';
  const [comentarios, setComentarios]=useState([]);
  useEffect(()=>{
    const get=async()=>{
      await fetch(`${Api}/get`)
      .then((response)=>response.json())
      .then((json)=>{
        setComentarios(json);
      })
    }
    get();
  },[])
  return (
    <div>
        
        <h3>Comentarios</h3>
         <Link to='post' className='btn btn-success'> Insertar comentarios</Link>
        <Link to="/" className='btn btn-danger' onClick={props.enableNav} >atras</Link>
        <div className='row mt-3'>
          <table className='table table-dark'>
            <thead>
              <tr>
                <th>Authors</th>
                <th>Comentarios</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {
                comentarios.map((coment)=>(
                  <tr key={coment._id}>
                    <th>{coment.author}</th>
                    <th>{coment.comentario}</th>
                    <th className='row d-flex justify-content-between'>
                      <button className='btn btn-info col-md-4'>editar</button>
                      <button className='btn btn-danger col-md-4'>eliminar</button>
                    </th>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
       <div>
           <h4><Outlet/></h4>
       </div>
        
       
    </div>
  )
}

export default Comentarios
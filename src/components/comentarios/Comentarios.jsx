import React, { useState, useEffect } from 'react'
import { Link, Outlet, } from 'react-router-dom'
import ModalsCrud from './ModalsCrud';
import Swal from 'sweetalert2';
import PropTypes from 'prop-types';



const Comentarios = ({bg, titulo, nombre, nombreP}) => {

  // modal
  const [show, setShow] = useState(false);//activar
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //CRUD

  const Api = 'http://localhost:7000/comentarios';
  const [comentarios, setComentarios] = useState([]);
  const [updateList, setupdateList] = useState(false);
  const updateEdit = () => setupdateList(!updateList);

  //GET

  useEffect(() => {
    const get = async () => {
      await fetch(`${Api}/get`)
        .then((response) => response.json())
        .then((json) => {
          setComentarios(json);
        })
    }
    get();
  }, [updateList])


  //DELETE

  function eliminar(e) {
    const id = e;
    Swal.fire({
      title: 'estas seguro de eliminar este comentario?',
      text: "esta accion no se puede retroce!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'eliminar '
    }).then(async (result) => {
      if (result.isConfirmed) {

       await fetch(`${Api}/delete/${id}`, { method: 'DELETE' })
          .then((response) => response.json())
          .then((json) => {
            if(json.estado){
              Swal.fire({
                title: 'Eliminado',
                text: `El usuario: ha sido eliminado! `,
                icon: 'success'
            })
            let updateComentarios = [...comentarios].filter(i => i._id !== id);
                            setComentarios(updateComentarios);
                        
            }else{
              Swal.fire(
                'Error!',
                'Hubo un problema al elminar el registro!',
                'error'
            )
            }
          });
        // Swal.fire(
        //   'Deleted!',
        //   'Your file has been deleted.',
        //   'success'
       // )
      }
    })
    console.log(id);



  }
  // Editar
  const [modoEditar, setModoEditar] = useState(false);
  const editShow = () => setModoEditar(true);
  const [datos, setDatos] = useState([]);

  function editar(coment) {
    editShow();
    handleShow();
    setDatos(coment);


  }
  return (
    <div>

      <h3>{titulo||'Comentarios sis719'}</h3>
      <nav>
        <button className='btn btn-success' onClick={handleShow}>
          Agregar comentario
        </button>


      </nav>
      <br />
      {show && <ModalsCrud
        handleClose={handleClose}
        handleShow={handleShow}
        modoEditar={modoEditar}
        datos={datos}
        updateList={updateEdit}
      />}

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
              comentarios.map((coment) => (
                <tr key={coment._id}>
                  <th>{coment.author}</th>
                  <th>{coment.comentario}</th>
                  <th className='row d-flex justify-content-between'>
                    <button className='btn btn-info col-md-4' onClick={() => editar(coment)}>editar</button>
                    <button className='btn btn-danger col-md-4' onClick={() => eliminar(coment._id)}>eliminar</button>
                  </th>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
      <div>
        <h4><Outlet /></h4>
      </div>
    </div>
  )
}
Comentarios.propTypes = {
 titulo: PropTypes.string,
};

export default Comentarios
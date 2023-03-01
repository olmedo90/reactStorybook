import React,{ useState, useEffect} from 'react'


const Header = () => {

  const [stado, setStado]=useState(0);


  function cambiar(){
      setStado(stado +1)
  }
  return (
    <header >
        <h1 style={{background : '#202020'}}>Seminario de Sistemas  valor de estado : {stado}</h1> <br />
        <button onClick={cambiar}> CAmbiar de estado</button>
     
    </header>
  )
}

export default Header
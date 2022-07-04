
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Index from './components/Index';
import Comentarios from './components/comentarios/Comentarios';


import NavsLinks from './components/routes/NavsLinks';
import { useState } from 'react';
function App() {
  const [nav, setNav]=useState(true);//hook de stado
  
  
  return (
    <Router>
      <div className=' col-md-12 col-lg-12 app  d-flex justify-content-center  row'>
        <Header/>
        {
          nav?<NavsLinks/>:''
         
        }
        <Routes>
          <Route path='/' element={<Index/>}/>
          <Route path='/comentarios/*' element={<Comentarios 
            
          />}>
            
          </Route>
        

        </Routes>
            <Footer/>
      </div>
    </Router>

  );
}

export default App;

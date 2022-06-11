
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Index from './components/Index';
import Comentarios from './components/comentarios/Comentarios';
import PostComent from './components/comentarios/PostComent';
import NavsLinks from './components/routes/NavsLinks';
import { useState } from 'react';

function App() {
  const [nav, setNav]=useState(true);//hook de stado
  
  function enableNav(e){
    setNav(true)
  }
  return (
    <Router>
      <div className='app'>
        <Header /><br /><br /><br />
        {
          nav?<NavsLinks/>:''
         
        }
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/comentarios/*' element={<Comentarios 
            setNav={setNav}
            enableNav={enableNav}
          />}>
            <Route path='post' element={<PostComent />} />
          </Route>
        

        </Routes>
        <Footer></Footer>
      </div>
    </Router>

  );
}

export default App;

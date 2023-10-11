//botstrap
import 'bootstrap/dist/css/bootstrap.min.css';
//styles
import './App.scss';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
//pages
import Home from './pages/Home';
import Nosotros from './pages/Nosotros';
import Contacto from './pages/Contacto';
import Sorteos from './pages/Sorteos';
import Login from './pages/Login';
import Cookies from './pages/Cookies';
import Terminos from './pages/Terminos';
import Politica from './pages/Politica';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/nosotros" element={<Nosotros />}/>
          <Route path="/contacto" element={<Contacto />}/>
          <Route path="/sorteos" element={<Sorteos />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/cookies" element={<Cookies />}></Route>
          <Route path="/politica" element={<Politica />}></Route>
          <Route path="/terminos" element={<Terminos />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

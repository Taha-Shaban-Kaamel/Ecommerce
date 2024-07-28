import Login from './components/Login/Login'
import Register from './components/Register/Register';
import Footer from './components/common/Footer/Footer';
import Recomended from './components/Recomended/Recomended';
import Dashboard from './components/Dashboard/Dashboard';
import {React,useState} from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Logo from './assets/nav/logo.svg'
import './App.css';
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
  { isAuthenticated?
    <nav>
      <div class="logoContainer">
        <img class="logo" src={Logo} alt="Logo Img" />
      </div>
      <ul class="pages">
         <Link to='/recomended'><li>Recomended</li></Link>
        <li> <a href="#">page2</a></li>
        <li> <a href="#">page3</a></li>
        <li> <a href="#">page4</a></li>
        <li> <a href="#">page5</a></li>

      </ul>

      <Link to='/'><button type="button"><a href="#">Login</a></button></Link>
    </nav>:null
  }


      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path='/register' element={<Register />}/>
        <Route path='/recomended' element={<Recomended />}/>
      </Routes>


      {isAuthenticated?<footer>
      copyright@2024
    </footer>:null}
    </Router>
  );
}

export default App;

import React from 'react';
import { Link  } from 'react-router-dom';
import './styles.css' ;
import loginImg from '../../assets/login-register/login.svg'
import axios from 'axios';
const Header = () => {
  return (
    <header>
      <span className="circle1"></span>
      <span className="circle2"></span>
      <div className="login">

        <div className="formAndImg">
        <img
            src={loginImg}
            alt="Login Image"
          />
        <form>
        <h4>Login Page</h4>
          <div>
            <label>Email</label>
            <input type="email" placeholder="Enter your Email" />
          </div>
          <div>
            <label>Password</label>
            <input type="password" placeholder="Enter your Password" />
          </div>
          <div>
            <button>
              <input type="submit" value="Login" />
            </button>
          </div>

          <Link to="/register"><p className='register'>Register Here</p></Link>
        </form>

        </div>
      </div>
    </header>
  );
};



const Login = () => {
  return (
    <div>

      <Header />
    </div>
  );
};

export default Login;

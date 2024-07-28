import React, { useState ,useEffect} from 'react'
import { useNavigate ,Navigate} from 'react-router-dom'; // Import useNavigate for navigation
import axios from 'axios';
import  "./styles.css";
import registerImg from '../../assets/login-register/register.svg'

function Register() {
  const initFomr ={
    userName:'',
    email:'',
    password:'',
    phone:'',
  }
  const [formData,setFormData] = useState(initFomr)
  const [message,setMessage] = useState('');
  const [shouldNavigate, setShouldNavigate] = useState(false); // Controls if navigation should occur

  // Effect to navigate based on `shouldNavigate` state
  useEffect(() => {
    if (shouldNavigate) {
      setTimeout(() => {
        setShouldNavigate(true); // Set state to trigger navigation
      }, 3000); // Delay for 2 seconds
    }
  }, [shouldNavigate]);

  if (shouldNavigate) {
    return <Navigate to="/" replace={false} />;
  }
  const handelSubmit = (event)=>{
    event.preventDefault();
    axios.post('https://jsonplaceholder.typicode.com/users',{
     userName:formData.userName,
     password:formData.password,
     phone:formData.phone ,
     email:formData.email,
    }).then((response)=>{
      setMessage('user created successfully');
      setShouldNavigate(true);
    }).catch((error)=>{
      setMessage(`Error : ${error.message}`)
    })
    Object.entries(formData).forEach((key,value)=>{
      console.log(`${key}  ${value}`);
    })
    setFormData(initFomr)
    setMessage(true);
  }

  const handelChange = (event)=>{
    const {name ,value } = event.target ;
    setFormData(()=>{
      return {
        ...formData,
        [name]:value ,
      }
    })
  }

  return (
    <div>
       <header>
      <span className="circle1"></span>
      <span className="circle2"></span>
      <div className="registerLogin">

        <div className="registerFormAndImg">
        <img
            src={registerImg}
            alt="Login Image"
          />
        <form  onSubmit={handelSubmit}>
        <h4>Register Page</h4>
          <div className='inpContainer'>
            <div >
              <label>User Name</label>
              <input required type="text"  value={formData.userName} onChange={handelChange} name='userName' placeholder="Enter your Name" />
            </div>
            <div >
              <label>Email</label>
              <input required type="email" name='email' value={formData.email} onChange={handelChange} placeholder="Enter your Email" />
            </div>
          </div>


          <div className='inpContainer'>
          <div >
              <label>phone</label>
              <input required type="number"  name='phone' value={formData.phone} onChange={handelChange} placeholder="Enter your phone Number" />
            </div>
            <div>
              <label>Password</label>
              <input required type="password" name='password' value={formData.password} onChange={handelChange} placeholder="Enter password" />
            </div>
          </div>

          <div>
            <button>
              <input type="submit" value="Register" />
            </button>
          </div>

          {/* <Link to="/register"><p className='register'>Register Here</p></Link> */}
        </form>

        </div>
      </div>
      <div className="message">{message}</div>
    </header>
    </div>
  )
}

export default Register ;
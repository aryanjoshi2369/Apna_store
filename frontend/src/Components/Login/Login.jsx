import React, { useState } from 'react';
import './Login.css';
import { RxCross1 } from "react-icons/rx";
import axios from 'axios';

const Login = ({onClose,show}) => {
    //const [sshowlogin,ssetShowLogin] = useState(false)
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [pass,setPass] = useState("");
    console.log("++++++++++",name)
    console.log("-----------",email);
    console.log("***********",pass)


    const handleSubmit = async (e) => {
      e.preventDefault();
       
      try {
          const res = await axios.post(`http://localhost:8888/api/user/register`,{name:name,email:email,password:pass});

          console.log("////////////////////////Account created Succesfully",res)

          
          if(res && res.data.success){
               alert("Account Created Successfully")
              // navigate('/login');
          } else{
              alert(res.response.data.message)
          }
          
      } catch (error) {
          console.log("Error in login form",error);
          // alert("Something went wrong.Please Try Again");
          alert(error.response.data.message)
          
      }
  }
  return (
    // <div className={`pagelogin ${sshowlogin? "closelogin" : ""}`}>
    <div className={`pagelogin ${show ? "" : "closelogin"}`}> 
    {/* <button className='btn-1' onClick={() =>{ssetShowLogin(true)}}><RxCross1/></button> */}
    <button className='btn-1' onClick={onClose}><RxCross1 /></button>
    <div className='login1'>
    <form onSubmit={handleSubmit} className='loginform'>
      <h1>Create Account</h1>
      <h2>Already have an account?<span>Log in</span></h2>
      <h3>Enter Your Name</h3>
      <input type='text' value={name} onChange={(e) => setName(e.target.value)} className='loginname' placeholder='Enter Your Name' required/>
      <h3>Email</h3>
      <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} className='logininput' placeholder='Enter Email' required/>
      <h3>Password</h3>
      <input type='password' value={pass} onChange={(e) => setPass(e.target.value)} className='loginpass' placeholder='Enter Password' required/>
      <button type='submit' className='signup'>Sign up</button>
      </form>
    </div>
    </div>
  )
}

export default Login;

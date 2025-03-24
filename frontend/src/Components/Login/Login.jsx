import React, { useState } from 'react';
import './Login.css';
import { RxCross1 } from "react-icons/rx";
import axios from 'axios';

const Login = ({onClose,show}) => {
    //const [sshowlogin,ssetShowLogin] = useState(false)
    const [isSignup, setIsSignup] = useState(true);
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [pass,setPass] = useState("");
    console.log("++++++++++",name)
    console.log("-----------",email);
    console.log("***********",pass)


    const handleSubmit = async (e) => {
      e.preventDefault();

      const url = isSignup 
      ? `http://localhost:8888/api/user/register` 
      : `http://localhost:8888/api/user/login` 

      const payload = isSignup 
      ? {name:name,email:email,password:pass}
      : {email,password:pass}

       
      try {
          // const res = await axios.post(`http://localhost:8888/api/user/register`,{name:name,email:email,password:pass});
          const res = await axios.post(url,payload);
          (isSignup ? "" : console.log("////////////////////////Login Succesfully",localStorage.setItem('auth',JSON.stringify(res.data.token))) )

          
          if(res && res.data.success){
            alert(isSignup ? "Account Created Successfully" : "Login Successful");
            onClose();
              // navigate('/login');
          } else{
              alert(res.response.data.message)
          }
          
      } catch (error) {
          console.log("Error in login form",error);
          // alert("Something went wrong.Please Try Again");
          alert(error.response?.data?.message || "Something Went Wrong")
          
      }
  }
  return (
    // <div className={`pagelogin ${sshowlogin? "closelogin" : ""}`}>
    <div className={`pagelogin ${show ? "" : "closelogin"}`}> 
    {/* <button className='btn-1' onClick={() =>{ssetShowLogin(true)}}><RxCross1/></button> */}
    <button className='btn-1' onClick={onClose} style={{ marginBottom: isSignup ? '26rem' : '22rem' }}><RxCross1 /></button>
    <div className='login1'>
    <form onSubmit={handleSubmit} className='loginform'>
      <h1>{isSignup ? "Create Account" : "Login"}</h1>
      <h2>{isSignup ? "Already have an account?" : "New User?"}<span onClick={() => setIsSignup(!isSignup)} style={{ cursor: "pointer", color: "blue" }}>
      {isSignup ? "Log in" : "Sign up"}
      </span></h2>
      
      {isSignup && (<> <h3>Enter Your Name</h3>
      <input type='text' value={name} onChange={(e) => setName(e.target.value)} className='loginname' placeholder='Enter Your Name' required/>
      </>)}
      
      <h3>Email</h3>
      <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} className='logininput' placeholder='Enter Email' required/>
      <h3>Password</h3>
      <input type='password' value={pass} onChange={(e) => setPass(e.target.value)} className='loginpass' placeholder='Enter Password' required/>
      <button type='submit' className='signup'>{isSignup ? "Sign up" : "Login"}</button>
      </form>
    </div>
    </div>
  )
}

export default Login;

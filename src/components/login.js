// import React,{ useState } from "react";
// import { Link } from 'react-router-dom';
// import supabase from './supabaseClient';
// import { AuthProviders } from "@supabase/auth-ui-shared";

// export default function LogIn(){  
//   const [loading, setLoading] = useState(false)
//   const [email, setEmail] = useState('')
//   const [formData,setFormData]=useState({
//     fullName:'',
//     email:'', 
//     password:''
//   })
//   console.log(formData);
//   function handleChange(event){
//     setFormData((prevFormData)=>{
//       return{
//         ...prevFormData,
//         [event.target.name]:event.target.value
//       }
//     })
//   }
 
//   async function handleSubmit(e){
//     e.preventDefault()

//     try { 
   
//       try {
//         setLoading(true)
//         const { error } = await supabase.auth.signIn({ email:formData.email })
//         if (error) throw error
//         alert('Check your email for the login link!')
//       } catch (error) {
//         alert(error.error_description || error.message)
//       } finally {
//         setLoading(false)
//       }
//     }
//        catch (error) {
//       alert(error)
//     }
//   }

//     return (
        
      // <div class="loginPage">
      //   <form onSubmit={handleSubmit}>
      //     <div className="cover">
      //   <h1>LogIn</h1>
      //   <input placeholder='Email'name='email'value={email} onChange={(e) => setEmail(e.target.value)}/>
      //   <input type="text" placeholder="USERNAME" name="fullName" onChange={handleChange}/>
      //   <input type="password" placeholder="PASSWORD" name="password" onChange={handleChange}/>
      //    <div  type="submit" className="login-btn">Log-In</div>
      //    {/* <div className="login-btn register">Register</div> */}
      //    <p class="password">Forget Password?</p>
      //   </div>
      //   </form>
      //   </div>
//     )
// }

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from './supabaseClient';
import { auth } from '@supabase/auth-ui-react';

const SignUp = () => {

  const [formData,setFormData] = useState({
    fullName:'',email:'',password:''
  })

  console.log(formData)

  function handleChange(event){
    setFormData((prevFormData)=>{
      return{
        ...prevFormData,
        [event.target.name]:event.target.value
      }

    })

  }

  async function handleSubmit(e){
    e.preventDefault()

    try {
      const { data, error } = await supabase.auth.signUp(
        {
          email: formData.email,
          password: formData.password,
        }
      )
      if (error) throw error
      alert('Check your email for verification link')
    } catch (error) {
      alert(error)
    }
  }

  return (
    // <div class="loginPage">
    //     <form onSubmit={handleSubmit}>
    //       <div className="cover">
    //     <h1>LogIn</h1>
    //     <input placeholder='Email'name='email'   onChange={handleChange}/>
    //     <input type="text" placeholder="USERNAME" name="fullName" onChange={handleChange}/>
    //     <input type="password" placeholder="PASSWORD" name="password" onChange={handleChange}/>
    //      <div  type="submit" className="login-btn">Log-In</div>
    //      {/* <div className="login-btn register">Register</div> */}
    //      <p class="password">Forget Password?</p>
    //     </div>
    //     </form>
    //     </div>
    <div class="loginPage">
      <form onSubmit={handleSubmit}>
        <div class="cover">
        <h1>LogIn</h1>
        <input  placeholder='Fullname' name='fullName' onChange={handleChange}/>
        <input  placeholder='Email' name='email' onChange={handleChange}/>
        <input placeholder='Password'name='password'type="password"onChange={handleChange}/>
        <button type='submit'class="login-btn">
          Log-In
        </button>
        </div>
      </form>
      {/* Already have an account?<Link to='/'>Login</Link>  */}
    </div>
  )
}

export default SignUp
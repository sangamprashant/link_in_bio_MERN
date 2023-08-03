import React from 'react'
import { Link } from 'react-router-dom'

function Signin({space}) {
  return (
    <div>
    <div className={`container register `}>
      

      <div className={`card_container ${!space?"":"open"}`}>
      
      <div className='card col-md-4 p-3'>
      <div className='register_title'><h1>Welcome Back</h1>
      <h3 className='banner_text_span'>SignIn</h3></div>
        <div>
            <label className='register_input_title'>Username</label>
            <input className='register_input' placeholder='Username' name='username' type='text'/>
        </div>
        <div>
            <label className='register_input_title'>Password</label>
            <input className='register_input' placeholder='Password' name='password' type='password'/>
        </div>
        <div className='log_btn'>
            <input type='submit' className='register_btn btn my-2' placeholder='Name'/>
        </div>
        <Link to="/forgot/password" >
            Forgot password?
        </Link>
        <div>
            New user <Link to="/signup">Register</Link> here.
        </div>
    </div>
      </div>

    

    </div>
    </div>

  )
}

export default Signin

import React from 'react'
import { auth } from '../../firebase.js'
import './signout.css'
import Signout from '../img/signout.png'

const SignOut = () => {
  return ( 
    <div className='nav'>
        <button className='signout_btn' onClick={() => auth.signOut()}><img className='signout_img' src={Signout}/><span></span></button>
    </div>
  )
}

export default SignOut
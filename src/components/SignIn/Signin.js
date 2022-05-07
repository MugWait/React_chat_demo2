import React from 'react'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { auth } from '../../firebase.js'
import './signin.css'
import G_img from '../img/G-Suite.png' 

function Signin() {
    function signInWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
    }
  return (
    <div className='sign_block'>
    <div >
        <img className='img' src={G_img}/>
        <button className='bt' onClick={signInWithGoogle}><span>Sign In With Google</span></button>
    </div>
    </div>
  )
}

export default Signin
import './css/navbar.css'
import React, { useState } from 'react'
import LogIn from './LogIn'
import SignIn from './SignIn'

function Nav(){
    let [islogin, setislogin] = useState(false)
    let [isSignin, setIsSignin] = useState(false)
    const logIn =() => {
        setIsSignin(false)
        setislogin(true)
    }
    const signIn = () => {
        setislogin(false)
        setIsSignin(true)
    }

    const loginClose =( data) => {
        setislogin(data)
    }

    const signinClose = (data) =>{
        setIsSignin(data)
    }
    return(
        <>
            <nav>
                <h3>ClubNit</h3>

                <ul>
                    <li><a href="#">Contact Us</a></li>
                    <li><button id='login' onClick={logIn} >LogIn</button></li>
                    <li><button id='sign' onClick={signIn} >SignUp</button></li>
                </ul>
            </nav>
            <div className="line"></div>
            {islogin && <LogIn loginClose = {loginClose}/>}
            {isSignin && <SignIn signinClose={signinClose}/>}
        </>
    )
}
export default Nav
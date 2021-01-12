import React from 'react'
import FeynurLogo  from '../../Feyneur1.png'
import './sign-in.css'
import SignInForm from '../../components/sign-in-form/sign-in-form.component'

const SignIn = ()=>{
    return(
        <div className="sign-in-page">
             <div className="sign-flex"style={{ marginTop: "100px"}}> 
                <SignInForm /> 
            </div>
            <div className="sign-flex">
                <div className="centered">
                <img src={FeynurLogo} alt="logo" className="image"/>
                </div>
              
            </div>
        </div>
    )
}

export default SignIn
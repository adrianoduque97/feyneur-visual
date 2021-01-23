import React from 'react'
import FeynurFront  from '../../Images/FeyneurFrontt.png'
import './sign-in.css'
import SignInForm from '../../components/sign-in-form/sign-in-form.component'

const SignIn = ()=>{
    return(
        <div className="sign-in-page">
             <div className="sign-flex"style={{ marginTop: "100px"}}> 
                <SignInForm /> 
            </div>
            <div className="sign-flex-image image-fit">
                <div className="centered">
                <img src={FeynurFront} alt="logo" className="image"/>
                </div>
              
            </div>
        </div>
    )
}

export default SignIn
import React from 'react'
import {Navbar } from 'react-bootstrap'
import SimpleFeynur from '../../simple.svg'
import {auth} from '../../firebase/firebase.utils'
import './navbar.css'

const NavBar = ({currentUser}) =>{

    return (
        <Navbar bg="dark" expand="lg" variant="dark"> 
        <Navbar.Brand href="#home">
            <object type="image/svg+xml" data={SimpleFeynur} width="100" height="100">
                Your browser does not support SVG.
            </object>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Navbar.Text>
            {
            currentUser?
            <div onClick={() => auth.signOut()}>Sign Out</div>:
            <div>Sign In</div>
            
            
            }
            </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    )
}

export default NavBar;
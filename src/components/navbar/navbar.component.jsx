import React from 'react'
import {Navbar } from 'react-bootstrap'
import SimpleFeynur from '../../simple.svg'
import './navbar.css'

const NavBar = () =>{

    return (
        <Navbar bg="dark" expand="lg" variant="dark"> 
        <Navbar.Brand href="#home">
            <img
            src={SimpleFeynur}
            width="100"
            height="100"
            alt="Feyneur logo"/>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Navbar.Text>Sign In</Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    )
}

export default NavBar;
import React from 'react'
import {Form, Button, Card} from 'react-bootstrap'


const SignInForm = () =>{

    return(

        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Inicie Sesión</Card.Title>
                <Card.Text>
                    Si tiene problemas contactarse directamente con feyneur@gmail.com
    				</Card.Text>

                <Form className="form-cont">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        SIGN IN
            </Button>
                </Form>
            </Card.Body>
        </Card>
        
        
    )
}

export default SignInForm
import React, {useState} from 'react'
import { Form, Button, Card } from 'react-bootstrap'
import {auth, signInWithGoogle} from '../../firebase/firebase.utils'


const SignInForm = () => {

    const [userCredentials, setCredentials] = useState({email: '' , password: ''})
    const{email, password}= userCredentials
    // const history = useHistory();

    // const routeChange = () => {
    //     let path = `visualizer`;
    //     history.push(path);
    // }

    const handleSubmit = async event => {
        event.preventDefault()
        try{
            await auth.signInWithEmailAndPassword(email,password)
            // this.setState({ email: '', password: '' }
        }catch(e){
            console.log(e)
        }

        
    }

    const handleChange = event => {
        const { value, name } = event.target
        setCredentials({...userCredentials, [name]: value })
    }

    return (

        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Inicie Sesión</Card.Title>
                <Card.Text>
                    Si tiene problemas contactarse directamente con feyneur@gmail.com
    				</Card.Text>

                <Form className="form-cont" onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" 
                        placeholder="Enter email"
                        name ="email"  
                        value= {email}
                        required
                        onChange={handleChange}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"
                        name="password"
                         value={password} 
                         required
                         onChange={handleChange}/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        SIGN IN
                    </Button>
                    <Button variant="primary"  onClick={signInWithGoogle}>
                        SIGN IN GOOGLE
                    </Button>
                </Form>
            </Card.Body>
        </Card>


    )
}

export default SignInForm
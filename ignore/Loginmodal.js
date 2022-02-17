import React, { useState, useRef } from 'react';
import { Modal, ModalBody, Button } from 'reactstrap';
import { Card, Form } from 'react-bootstrap';
import { Link, useHistory  } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Login = () => {
    const [modalIsOpen,setModalIsOpen] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const usernameRef = useRef();
    const passwordRef = useRef();
    const history = useHistory();
    
    const { login } = useAuth();;

    async function handleSubmit(e) {
        e.preventDefault()

            try {
            setError("")
            setLoading(true)
            await login(usernameRef.current.value, passwordRef.current.value)
            history.push("/dashboard")
          } catch {
            setError("Failed to sign in")
        }
       setLoading(false) 
    }
    
    const setModalIsOpenToTrue =()=>{
        setModalIsOpen(true)
    }

    const setModalIsOpenToFalse =()=>{
        setModalIsOpen(false)
    }

    return (  
        <div>
            <Button onClick={setModalIsOpenToTrue} className="login">Log In</Button>
                <Modal isOpen={modalIsOpen} toggle={setModalIsOpenToFalse}>
                    <Card>
                        <Card.Body>
                            <div>
                                <h1 className="login-header">Log In</h1>           
                            </div>
                            <ModalBody>
                                <Form onClick={handleSubmit}>
                                    <Form.Group>
                                        <div className="form-group">
                                            <Form.Control type="username" ref={usernameRef} placeholder='Username' required />
                                        </div>
                                    </Form.Group>
                                    <div className='logreg-div'>
                                        <Form.Group>
                                            <div className="form-group">
                                                <Form.Control type="password" ref={passwordRef} placeholder='Password' required />
                                            </div>
                                        </Form.Group>
                                    </div>
                                    <div>
                                        <input type="submit" className="submit" />
                                    </div>
                                </Form>
                                <div className='logreg-footnote'>
                                    <div>
                                        Forgot password
                                    </div>
                                    <div>
                                      Create an <Link to="/Registration">account</Link>
                                    </div>
                                </div>
                            </ModalBody>
                        </Card.Body>
                    </Card>
                </Modal> 
        </div> 
    )
 }


export default Login;  

import React, {useState,} from 'react';
import { useForm } from 'react-hook-form';
import { Modal, ModalHeader, ModalBody, Button } from 'reactstrap';

const Login = () => {
    const [modalIsOpen,setModalIsOpen] = useState(false);

    const setModalIsOpenToTrue =()=>{
        setModalIsOpen(true)
    }

    const setModalIsOpenToFalse =()=>{
        setModalIsOpen(false)
    }

    const handleCloseModal =()=>{
        setModalIsOpen(false)
    }
  
    return (  
        <div>
            <Modal isOpen={modalIsOpen} onClick={setModalIsOpenToFalse}>
                    <ModalHeader>
                    <div>
                        <button onClick={() => {
                            handleCloseModal()
                            }} className="x-button">x</button>
                    </div>
                    <h1 className="login-header">Inventory</h1>           
                    </ModalHeader>
                    <ModalBody>
                        <form>
                            <div className="form-group">
                                <label>NFT</label>
                                <input type="text" name="username" placeholder="John.Doe" className="input-username" required />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="text" name="password" placeholder="********" className="input-password" required />
                            </div>
                            <div>
                                <input type="submit" className="submit" />
                            </div>
                        </form>
                    </ModalBody>
            </Modal> 
        </div> 
    )
 }
export default Login;  
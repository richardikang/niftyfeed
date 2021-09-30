import React from 'react';  
import { Button, Modal, ModalHeader, ModalBody,
  Form, FormGroup, Input, Label } from 'reactstrap'; 

class Login extends React.Component {  
  constructor(props){  
    super(props);  
    this.state={  
      show:false,
      isModalOpen: false  
    };  
    this.toggleModal = this.toggleModal.bind(this);
    this.handleLogin = this.handleLogin.bind(this); 
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
        });
    }
  handleLogin(event) {
        alert(`Username: ${this.username.value} Password: ${this.password.value} Remember: ${this.remember.checked}`);
        this.toggleModal();
        event.preventDefault();
    }
  render(){  
    return (  
      <div>  
        <div className="modalClass">  
          <Button onClick={this.toggleModal} color="info">Login</Button>  
        </div>  
          <Modal isOpen={this.state.isModalOpen} onHide={()=>this.toggleModal()}> 
             <ModalHeader onClick={()=>this.toggleModal()}>Login</ModalHeader>
 
                <ModalBody>
                    <Form onSubmit={this.handleLogin}>
                         <FormGroup>
                            <Label htmlFor="username">Username</Label>
                            <Input type="text" id="username" name="username"
                            innerRef={input => this.username = input} placeholder="John.Doe" required="true"/>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="password">Password</Label>
                            <Input type="password" id="password" name="password"
                                innerRef={input => this.password = input} placeholder="password" required="true"/>
                         </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                        innerRef={input => this.remember = input} />
                                    Remember me
                                </Label>
                            </FormGroup>
                                <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal> 
         </div>  
      )  
     }  
}  
export default Login;  
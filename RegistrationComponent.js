import React from 'react';  
import {Button, Modal, ModalHeader, ModalBody,
  Form, FormGroup, Input, Label } from 'reactstrap'; 

class Registration extends React.Component {  
  constructor(props){  
    super(props);  
    this.state={  
      show:false,
      isModalOpen: false  
    };  
    this.toggleModal = this.toggleModal.bind(this);
    this.handleRegistration = this.handleRegistration.bind(this); 
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
        });
    }
  handleRegistration(event) {
        alert(`Name: ${this.name.value} Username: ${this.username.value} Password: ${this.password.value} Remember: ${this.remember.checked}`);
        this.toggleModal();
        event.preventDefault();
    }
  render(){  
    return (  
      <div>  
        <div>  
          <Button onClick={this.toggleModal} color="info" className="RegistrationBtn">New Account</Button>  
        </div>  
          <Modal isOpen={this.state.isModalOpen} onHide={()=>this.toggleModal()}>  
             <ModalHeader onClick={()=>this.toggleModal()}>Create A New Account</ModalHeader>
                <ModalBody>
                    <Form onSubmit={this.handleRegistration}>
                        <FormGroup>
                            <Label htmlFor="name">Name (First, Last)</Label>
                            <Input type="text" id="name" name="name"
                            innerRef={input => this.name = input} placeholder="John Doe" required="true"/>
                        </FormGroup>
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
                         <FormGroup>
                            <Label htmlFor="password">Re-enter your password </Label>
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
                                <Button type="submit" value="submit" color="primary">New Account</Button>
                        </Form>
                    </ModalBody>
                </Modal> 
         </div>  
      )  
     }  
}  
export default Registration;  
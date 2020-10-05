import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { UserContext } from '../../App';
import { useForm } from "react-hook-form";



const Reg = () => {

const [loggedInUser, setLoggedInUser] = useContext(UserContext);
const [eventData, setEventData] = useContext(UserContext);


const [user, setUser] = useState({
  name: '',
  email: '',
  birthdate: '',
  error:'',
  description: '',
  organize: '',
  error:'',
  success: false,
  event: ''
})


  const { register, handleSubmit } = useForm();
  const onSubmit = (data,event) => {
    fetch('http://localhost:5000/userEvent', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
      
    })
    .then(res => res.json())
    .then(data = console.log(data))
    alert("Submitted Successfully");
     event.target.reset();
    
  }
    return (
        <Container>
    <Row>
      <Col></Col>
      <Col>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <h4>Register as volunteer</h4>
          <Form.Group controlId="formBasicName">
            <Form.Control type="text" name="event" placeholder="Event Name" ref={register} required/>
          </Form.Group>
          <Form.Group controlId="formBasicName">
            <Form.Control type="text" name="name" placeholder="Full Name"  ref={register} required/>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Control type="email" name="email" placeholder="username or email"  ref={register} required/>
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
          <Form.Label>Birth date</Form.Label><br></br>
            <input type="date" name="birthdate" id="birthday" name="birthday" ref={register} required/>
          </Form.Group>
          
          <Form.Group controlId="formBasicDescription">
            <Form.Control type="text" name="description" placeholder="Description"  ref={register} required/>
          </Form.Group>
          <Form.Group controlId="formBasicBook">
            <Form.Control type="text" name="organize" placeholder="Organize book at library"  ref={register} required/>
          </Form.Group>
          
          <Button variant="primary" type="submit">Submit</Button>
          <p style={{color: 'red'}}>{user.error}</p>
    {user.success && <p style={{color: 'green'}}>Successfully</p>}
        </Form>
    </Col>
      <Col></Col>
    </Row>
  </Container>
    );
};

export default Reg;
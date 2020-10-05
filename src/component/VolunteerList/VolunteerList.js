import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import './VolunterList.css';

const VolunteerList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
const [eventData, setEventData] = useContext(UserContext);

const [user, setUser] = useState({
  name: '',
  date: '',
  description: ''
})


    const [list, setList] = useState([]);
    useEffect(() =>{
        fetch(`http://localhost:5000/volList`)
        .then(res => res.json())
        .then(data => setList(data))
    },[])


    const { register, handleSubmit } = useForm();
    const onSubmit = (data,event) => {
        fetch('http://localhost:5000/newEvent', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data = console.log(data))
        alert("Event Created Successfully")
         event.target.reset();
      }
    return (

        <Container>
            <Row>
    <Col sm={8}>

    <div>
            <h3>You have: {list.length} volunteer work</h3>
            {
                list.map(listt => <div>{listt.name} {listt.email} {listt.birthday}</div>)
            }

            
        </div>
    </Col>
    <Col sm={4}>

        <div>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <h4>Add Event</h4>
          <Form.Group controlId="formBasicName">
            <Form.Control type="text" name="name" placeholder="event Name" ref={register}  required/>
          </Form.Group>
          <Form.Group controlId="formBasicName">
          <Form.Label>Image Link</Form.Label>
            <Form.Control type="text" name="image" placeholder="Ex: https://ibb.co/N9Bnnyj" ref={register}  required/>
          </Form.Group>          
          <Form.Group controlId="formBasicEmail">
          <Form.Label>Event Date</Form.Label><br></br>
            <input type="date" name="date" id="birthday" name="birthday" ref={register} required/>
          </Form.Group>
          
          <Form.Group controlId="formBasicDescription">
            <Form.Control type="text" name="description" placeholder="Description" ref={register}  required/>
          </Form.Group>
          
          <Button variant="primary" type="submit">
            Submit
          </Button>
          
        </Form>
        </div>
    </Col>
  </Row>
        </Container>
        
    );
};

export default VolunteerList;
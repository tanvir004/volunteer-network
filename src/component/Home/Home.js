import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { createContext } from 'react';
import { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Home.css';
// export const UserContext = createContext();

const Home = () => {
  const [eventData, setEventData] = useContext(UserContext);
  const [list, setList] = useState([]);
    useEffect(() =>{
        fetch(`http://localhost:5000/homeList`)
        .then(res => res.json())
        .then(data => setList(data))
    },[])

    const handleEvent =()=>{
      // const listItem = {...list}
            
            setEventData(list);
            

    }


    return (
        <Container>
            <h4 className="headLine">I GROW BY  HELPING PEOPLE IN NEED</h4>
            <Row>
                <Col></Col>
                <Col>
                <Form>
  
  <Form.Row className="align-items-center">
    <Col xs="auto">
      
      <Form.Control
        className="mb-2"
        id="inlineFormInput"
        placeholder="search"
      />
    </Col>
   
   
    <Col xs="auto">
      <Button type="submit" className="mb-2">
        Search
      </Button>
    </Col>
  </Form.Row>
</Form>
                </Col>
                <Col></Col>
            </Row>



            <div className="item">
            {/* <h3>You have: {list.length} volunteer work</h3> */}
            {/* {
                list.map(listt => <li>{listt.name} and {listt.email}</li>)
            } */}

            {
                list.map(listt =><div className="singleItem"><img className="imgItem" src={listt.image} alt=""/><br></br> <Link to="/registrationForm"><Button onClick={handleEvent} style={{width: '100%'}}>{listt.name}</Button></Link> </div>)

            }
            
        </div>

        </Container>     
        
        
       
        
    );
};

export default Home;
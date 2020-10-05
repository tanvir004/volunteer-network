import React from 'react';
import { useContext } from 'react';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";
import { UserContext } from '../../App';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div>
             <Navbar bg="light" expand="lg">
  <Link to="/home"><Navbar.Brand href="#home"><img style={{width:'40%'}} src="https://i.ibb.co/CHcXqC4/Group-1329.png" alt=""/></Navbar.Brand></Link>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      
    </Nav>
    <Form inline>
     <Link to="/home"><Nav.Link style={{color:'black'}} href="/home">Home</Nav.Link></Link>
     <Link to="/registration"><Nav.Link style={{color:'black'}} href="#link">Registration</Nav.Link></Link>
      <Link to="/events"><Nav.Link style={{color:'black'}} href="#link">Events</Nav.Link></Link>
      <Nav.Link style={{color:'black'}} href="#link">Others</Nav.Link>
      <Nav.Link style={{color:':#4285f4',fontWeight:"700"}} href="#link">{loggedInUser.name}</Nav.Link>
    {/* <Nav.Link style={{color:'black'}} href="#link">Profile</Nav.Link> */}
      <Link to="/login"><Button variant="primary">Login</Button></Link>
      <Link to="/volunteer"><Button variant="secondary">Admin</Button></Link>
    </Form>
  </Navbar.Collapse>
</Navbar>
        </div>
    );
};

export default Header;
import React from 'react';
import './App.css';
import Header from './component/Header/Header';
import Reg from './component/Reg/Reg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './Login/Login';
import Home from './component/Home/Home';
import { useState } from 'react';
import { createContext } from 'react';
import VolunteerList from './component/VolunteerList/VolunteerList';
import Event from './component/Event/Event';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [eventData, setEventData] = useState({});


  return (
    <UserContext.Provider value ={[loggedInUser, setLoggedInUser,eventData, setEventData]}>
       
  
    <Router>
      <Header></Header>
      <Switch>
      
          
        <Route path="/registration">
          <Reg></Reg>
        </Route>
        <Route path="/registrationForm">
          <Reg></Reg>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/events">
          <Event></Event>
        </Route>
        <Route path="/volunteer">
          <VolunteerList></VolunteerList>
        </Route>
        
        <Route exact path="/">
            <Home></Home>
          </Route>

      </Switch>

    </Router>
    </UserContext.Provider>

    
    
  );
}

export default App;

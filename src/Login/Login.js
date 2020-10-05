import React, { createContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Login.css';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useState } from 'react';
import { useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../App';


firebase.initializeApp(firebaseConfig);



//
const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
   
    const handleGoogleSignIn=()=>{
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            const {displayName, email} = result.user;
            const signedInUser = {name: displayName, email}
            console.log(signedInUser);
            setLoggedInUser(signedInUser);
            history.replace(from);


            // ...
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
    }
    return (
        <Container>
            <Row>
                <Col></Col>
                <Col>
                <div className="loginArea">   
            <h3>Login With</h3>         
            <img className="icon" src="https://i.ibb.co/5hvrqYB/google.png" alt=""/>
            <button onClick={handleGoogleSignIn} className="thirdPartyLgBtn">Google sign in</button><br/>
            <p>Don't Have Account?<a href="https://gmail.com">create an account</a></p>
        </div>
                </Col>
                <Col></Col>
            </Row>
        </Container>
        
    );
};

export default Login;
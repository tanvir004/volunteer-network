import React from 'react';
import './Event.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useContext } from 'react';
import { UserContext } from '../../App';

const Event = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [list, setList] = useState([]);
    useEffect(() =>{
        fetch(`http://localhost:5000/userEventShow`)
        .then(res => res.json())
        .then(data => setList(data))
    },[])

    function deleteEvent (id){
        fetch(`http://localhost:5000/volList/{listt._id}`, {
      method: 'DELETE',
      
    })
    .then(res => res.json())
    .then(result => {
        console.log("deleted")
    })

    }
    return (
        <div className="item">
            
            {
                
                list.map(listt =><div className="singleItem"><img className="imgItem" src="https://image.flaticon.com/icons/png/512/1458/1458512.png" alt=""/><br></br> {listt.event} <br></br> <Button onClick={deleteEvent(listt._id)} style={{width: '100%'}} variant="danger">Cancel</Button> </div>)
            }
        </div>
    );
};

export default Event;

import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";
import "C:/Users/SomireddyNireesha/crud/src/components/users/AddUser.css";


const AddUser = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    
  });

  const { name, username, email, phone, website } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post( "https://crudcrud.com/api/457c9cb0a0db43ffbbbe2e3bf64db4f6/users", user);
    history.push("/");
  };
  return (
    <div className ="container"><br></br>
      <div className ="w-75 mx-auto shadow p-5" id='user'>
        <h2 className ="text-center mb-4">Add A User</h2>
        <form onSubmit ={e => onSubmit(e)}>
          <div className ="form-group">
            <input
              type ="text"
              className ="form-control form-control-lg"
              placeholder ="Enter Your Name"
              name ="name"
              value ={name}
              onChange ={e => onInputChange(e)}
            />
          </div><br></br>
          <div className ="form-group">
            <input
              type ="text"
              className ="form-control form-control-lg"
              placeholder ="Enter Your Username"
              name ="username"
              value ={username}
              onChange ={e => onInputChange(e)}
            />
          </div><br></br>
          <div className ="form-group">
            <input
              type ="email"
              className ="form-control form-control-lg"
              placeholder ="Enter Your E-mail Address"
              name ="email"
              value ={email}
              onChange ={e => onInputChange(e)}
            />
          </div><br></br>
          <div className ="form-group">
            <input
              type="text"
              className ="form-control form-control-lg"
              placeholder ="Enter Your Phone Number"
              name ="phone"
              value ={phone}
              onChange ={e => onInputChange(e)}
            />
          </div><br></br>
          <div className ="form-group">
            <input
              type ="text"
              className ="form-control form-control-lg"
              placeholder ="Enter Your Website Name"
              name ="website"
              value ={website}
              onChange ={e => onInputChange(e)}
            />
          </div><br></br>
          <button className ="btn btn-primary btn-block">Add User</button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
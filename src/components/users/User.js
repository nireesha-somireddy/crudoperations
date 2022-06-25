import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const User = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    webiste: ""
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`https://crudcrud.com/api/457c9cb0a0db43ffbbbe2e3bf64db4f6/users/${id}`);
    setUser(res.data);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link><hr/>
      <h1 className ="display-4">User Id: {id}</h1>
      <hr/><br></br>
      <ul className ="list-group w-50">
        <li className ="list-group-item">Name : {user.name}</li><br></br>
        <li className ="list-group-item">User Name : {user.username}</li><br></br>
        <li className ="list-group-item">Email : {user.email}</li><br></br>
        <li className ="list-group-item">Phone : {user.phone}</li><br></br>
        <li className ="list-group-item">Website : {user.website}</li><br></br>
      </ul>
    </div>
  );
};

export default User;
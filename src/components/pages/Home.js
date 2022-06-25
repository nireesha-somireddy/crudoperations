import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("https://crudcrud.com/api/457c9cb0a0db43ffbbbe2e3bf64db4f6/users");
    setUser(result.data.reverse());
  };

  const deleteUser = async (id) => {
    await axios.delete(`https://crudcrud.com/api/457c9cb0a0db43ffbbbe2e3bf64db4f6/users/${id}`).then(()=>{loadUsers()})
    ;
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1 align='center'>Home Page</h1><br></br>
        <table className="table border shadow">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <Link  class="btn btn-primary mr-2" to ={`/users/${user._id}`}>
                    View
                  </Link>&nbsp; &nbsp;
                  <Link
                    class="btn btn-outline-primary mr-2"
                    to ={`/users/edit/${user._id}`}
                  >
                    Edit
                  </Link>&nbsp; &nbsp;
                  <Link
                    class="btn btn-danger"
                    onClick={() => deleteUser(users._id)}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
import React, { useEffect, useState } from "react";
import axios from "axios";

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://api.example.com/users")
      .then(response => setUsers(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;

import React, { useState } from "react";
import axios from "axios";

const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://api.example.com/users", {
        name,
        email,
      });
      console.log("User added:", response.data);
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} required />
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUser;

const updateUser = async (id) => {
    try {
      const response = await axios.put(`https://api.example.com/users/${id}`, {
        name: "Updated Name",
        email: "updatedemail@example.com",
      });
      console.log("User updated:", response.data);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };
  
  const updateUserEmail = async (id) => {
    try {
      const response = await axios.patch(`https://api.example.com/users/${id}`, {
        email: "patchedemail@example.com",
      });
      console.log("User email updated:", response.data);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };
  
  const deleteUser = async (id) => {
    try {
      await axios.delete(`https://api.example.com/users/${id}`);
      console.log("User deleted");
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };
  

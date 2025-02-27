import React, { useState, useEffect } from "react";

const API_URL = "https://api.example.com/users"; // Replace with actual API

const FetchExample = () => {
  const [users, setUsers] = useState([]);

  // GET users
  const fetchUsers = () => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error("Error fetching users:", error));
  };

  // POST user
  const addUser = () => {
    fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "New User", email: "new@example.com" })
    })
      .then(response => response.json())
      .then(data => {
        console.log("User added:", data);
        fetchUsers(); // Refresh list
      })
      .catch(error => console.error("Error adding user:", error));
  };

  // PUT (Update Entire User)
  const updateUser = (id) => {
    fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "Updated User", email: "updated@example.com" })
    })
      .then(response => response.json())
      .then(data => {
        console.log("User updated:", data);
        fetchUsers();
      })
      .catch(error => console.error("Error updating user:", error));
  };

  // PATCH (Partial Update)
  const patchUser = (id) => {
    fetch(`${API_URL}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "Patched Name" })
    })
      .then(response => response.json())
      .then(data => {
        console.log("User patched:", data);
        fetchUsers();
      })
      .catch(error => console.error("Error patching user:", error));
  };

  // DELETE user
  const deleteUser = (id) => {
    fetch(`${API_URL}/${id}`, { method: "DELETE" })
      .then(response => {
        if (!response.ok) throw new Error("Failed to delete user");
        return response.json();
      })
      .then(() => {
        console.log("User deleted");
        fetchUsers();
      })
      .catch(error => console.error("Error deleting user:", error));
  };

  useEffect(() => {
    fetchUsers(); // Load users on mount
  }, []);

  return (
    <div>
      <h2>User List</h2>
      <button onClick={addUser}>Add User</button>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} - {user.email}
            <button onClick={() => updateUser(user.id)}>Update</button>
            <button onClick={() => patchUser(user.id)}>Patch</button>
            <button onClick={() => deleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchExample;

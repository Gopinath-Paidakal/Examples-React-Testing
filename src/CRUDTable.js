import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { Delete, Edit, Add } from "@mui/icons-material";

const initialData = [
  { id: 1, name: "Alice", age: 25, email: "alice@example.com" },
  { id: 2, name: "Bob", age: 30, email: "bob@example.com" },
  { id: 3, name: "Charlie", age: 35, email: "charlie@example.com" },
];

export default function CRUDTable() {
  const [data, setData] = useState(initialData);
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ id: "", name: "", age: "", email: "" });

  // Open modal for editing or adding
  const handleOpen = (row = { id: "", name: "", age: "", email: "" }) => {
    setForm(row);
    setEditing(row.id ? row : null);
    setOpen(true);
  };

  // Close modal
  const handleClose = () => {
    setOpen(false);
    setForm({ id: "", name: "", age: "", email: "" });
  };

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Add or update user
  const handleSubmit = () => {
    if (editing) {
      setData(data.map((item) => (item.id === form.id ? form : item)));
    } else {
      setData([...data, { ...form, id: Date.now() }]);
    }
    handleClose();
  };

  // Delete user
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  return (
    <Paper sx={{ padding: 2 }}>
      <Button
        variant="contained"
        startIcon={<Add />}
        onClick={() => handleOpen()}
        sx={{ marginBottom: 2 }}
      >
        Add User
      </Button>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.age}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>
                  <Button onClick={() => handleOpen(row)} startIcon={<Edit />} color="primary">
                    Edit
                  </Button>
                  <Button onClick={() => handleDelete(row.id)} startIcon={<Delete />} color="error">
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Dialog for Add/Edit */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{editing ? "Edit User" : "Add User"}</DialogTitle>
        <DialogContent>
          <TextField label="Name" name="name" fullWidth margin="dense" value={form.name} onChange={handleChange} />
          <TextField label="Age" name="age" type="number" fullWidth margin="dense" value={form.age} onChange={handleChange} />
          <TextField label="Email" name="email" fullWidth margin="dense" value={form.email} onChange={handleChange} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">Cancel</Button>
          <Button onClick={handleSubmit} color="primary">{editing ? "Update" : "Add"}</Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
}

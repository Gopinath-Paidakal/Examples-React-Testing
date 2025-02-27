import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { Delete, Edit } from "@mui/icons-material";

const initialRows = [
  { id: 1, name: "John Doe", email: "john@example.com", age: 25 },
  { id: 2, name: "Jane Smith", email: "jane@example.com", age: 30 },
];

export default function CRUDDataGrid() {
  const [rows, setRows] = useState(initialRows);
  const [open, setOpen] = useState(false);
  const [editingRow, setEditingRow] = useState(null);

  const { register, handleSubmit, reset } = useForm();

  const handleOpen = (row = null) => {
    setEditingRow(row);
    reset(row || { name: "", email: "", age: "" });
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const onSubmit = (data) => {
    if (editingRow) {
      setRows(rows.map((row) => (row.id === editingRow.id ? { ...editingRow, ...data } : row)));
    } else {
      setRows([...rows, { id: Date.now(), ...data }]);
    }
    handleClose();
  };

  const handleDelete = (id) => setRows(rows.filter((row) => row.id !== id));

  const columns = [
    { field: "name", headerName: "Name", width: 150, editable: true },
    { field: "email", headerName: "Email", width: 200 },
    { field: "age", headerName: "Age", width: 100, type: "number" },
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      renderCell: (params) => (
        <>
          <Button onClick={() => handleOpen(params.row)}><Edit /></Button>
          <Button color="error" onClick={() => handleDelete(params.row.id)}><Delete /></Button>
        </>
      ),
    },
  ];

  return (
    <div style={{ height: 400, width: "100%" }}>
      <Button variant="contained" onClick={() => handleOpen()} style={{ marginBottom: 10 }}>
        Add User
      </Button>
      <DataGrid rows={rows} columns={columns} pageSize={5} />

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{editingRow ? "Edit User" : "Add User"}</DialogTitle>
        <DialogContent>
          <TextField {...register("name")} label="Name" fullWidth margin="dense" required />
          <TextField {...register("email")} label="Email" fullWidth margin="dense" required />
          <TextField {...register("age")} label="Age" type="number" fullWidth margin="dense" required />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit(onSubmit)} variant="contained">
            {editingRow ? "Update" : "Create"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

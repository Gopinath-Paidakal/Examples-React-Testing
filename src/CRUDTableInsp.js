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
//   { id: 1, name: "Alice", age: 25, email: "alice@example.com" },
//   { id: 2, name: "Bob", age: 30, email: "bob@example.com" },
//   { id: 3, name: "Charlie", age: 35, email: "charlie@example.com" },
  { id: 1, pinNo: "100", measurementName: "Dia 47 Bore Depth 12 +/- 0.1", measuringInstrument: "Vernier Caliper", 
           units: 25, baseMeasure: "mm", upperLimit: "12.00", lowerLimit: "11.00",
           actuals: "aaaa", status: "Accepted", notes: "Tested" },
  { id: 2, pinNo: "101", measurementName: "Boring (Dia) 52 0.0 / + 0.03", measuringInstrument: "Oscilloscope", 
          units: 30, baseMeasure: "mm", upperLimit: "15.00", lowerLimit: "12.00",
          actuals: "aaaa", status: "Accepted", notes: "Tested" },
];

export default function CRUDTableInsp() {
  const [data, setData] = useState(initialData);
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ id: "", pinNo:"", measurementName: "", measuringInstrument: "", units: "",
                                    baseMeasure: "", upperLimit: "", lowerLimit: "",
                                    actuals: "", status: "", notes: "" });

  // Open modal for editing or adding
  const handleOpen = (row = { id: "", pinNo:"", measurementName: "", measuringInstrument: "", units: "",
                            baseMeasure: "", upperLimit: "", lowerLimit: "",
                            actuals: "", status: "", notes: "" }) => {
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
        Add Numerical Measurement
      </Button>
      <TableContainer fullWidth= "500px">
        <Table> 
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>PIN #</TableCell>
              <TableCell>Measurment Name</TableCell>
              <TableCell>Measuring Instrument</TableCell>
              <TableCell>Units</TableCell>

              <TableCell>Base Measure</TableCell>
              <TableCell>Upper Limit</TableCell>
              <TableCell>Lower Limit</TableCell>
              
              <TableCell>Actuals</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Notes</TableCell>
              

              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.pinNo}</TableCell>
                <TableCell>{row.measurementName}</TableCell>
                <TableCell>{row.measuringInstrument}</TableCell>
                <TableCell>{row.units}</TableCell>

                <TableCell>{row.baseMeasure}</TableCell>
                <TableCell>{row.upperLimit}</TableCell>
                <TableCell>{row.lowerLimit}</TableCell>
                
                <TableCell>{row.actuals}</TableCell>
                <TableCell>{row.status}</TableCell>
                <TableCell>{row.notes}</TableCell>
                

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
        <DialogTitle>{editing ? "Edit Numerical Measurement" : "Add Numerical Measurement"}</DialogTitle>
        <DialogContent>
          <TextField label="PIN #" name="pinNo" fullWidth margin="dense" value={form.pinNo} onChange={handleChange} />
          <TextField label="Measurement Name" name="measurementName" fullWidth margin="dense" value={form.measurementName} onChange={handleChange} />
          <TextField label="Measuring Instrument" name="measuringInstrument" fullWidth margin="dense" value={form.measuringInstrument} onChange={handleChange} />
          <TextField label="Units" name="units" fullWidth margin="dense" value={form.units} onChange={handleChange} />

          <TextField label="Base Measure" name="baseMeasure" fullWidth margin="dense" value={form.baseMeasure} onChange={handleChange} />
          <TextField label="Upper Limit" name="upperLimit" type="number" fullWidth margin="dense" value={form.upperLimit} onChange={handleChange} />
          <TextField label="Lower Limit" name="lowerLimit" type="number" fullWidth margin="dense" value={form.lowerLimit} onChange={handleChange} />

           <TextField label="Actuals" name="actuals" fullWidth margin="dense" value={form.actuals} onChange={handleChange} />
          <TextField label="Status" name="status"  fullWidth margin="dense" value={form.status} onChange={handleChange} />
          <TextField label="Notes" name="notes" fullWidth margin="dense" value={form.notes} onChange={handleChange} /> 

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">Cancel</Button>
          <Button onClick={handleSubmit} color="primary">{editing ? "Update" : "Add"}</Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
}

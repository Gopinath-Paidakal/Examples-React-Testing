import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { Delete, Edit } from "@mui/icons-material";

const initialRows = [
  { id: 1, measurementName: "Dia 47 Bore Depth 12 +/- 0.1", measuringInstrument: "Vernier Caliper", units: 25 },
  { id: 2, measurementName: "Boring (Dia) 52 0.0 / + 0.03", measuringInstrument: "Oscilloscope", units: 30 },
];

export default function CRUDDataGridInsp() {
  const [rows, setRows] = useState(initialRows);
  const [open, setOpen] = useState(false);
  const [editingRow, setEditingRow] = useState(null);

  const { register, handleSubmit, reset } = useForm();

  const handleOpen = (row = null) => {
    setEditingRow(row);
    reset(row || { measurementName: "", measuringInstrument: "", units: "",
                   baseMeasure: "", upperLimit:"", lowerLimit:"",
                   actuals : "", status:"", notes:""
     });
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
    { field: "measurementName", headerName: "Measurement Name *", width: 200, editable: true },
    { field: "measuringInstrument", headerName: "Measuring Insturment", width: 200 },
    { field: "units", headerName: "Units *", width: 100 },
    { field: "baseMeasure", headerName: "Base Measure *", width: 150, type: "float" },

    { field: "upperLimit", headerName: "Upper Limit *", width: 100, type: "decimal" },
    { field: "lowerLimit", headerName: "Lower Limit *", width: 100, type: "decimal" },

    { field: "actuals", headerName: "Actuals *", width: 100, type: "decimal" },
    { field: "status", headerName: "Status *", width: 100 },
    { field: "notes", headerName: "Notes", width: 100},
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
        Add Numerical Measurement
      </Button>
      <DataGrid rows={rows} columns={columns} pageSize={5} />

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{editingRow ? "Edit Numerical Measurement" : "Add Numerical Measurement"}</DialogTitle>
        <DialogContent>
          
          <TextField {...register("measurementName")} label="Measurement Name" fullWidth margin="dense" required />
          <TextField {...register("measuringInstrument")} label="Measuring Instrument" fullWidth margin="dense" required />
          <TextField {...register("units")} label="Units" type="Units" fullWidth margin="dense" required />

          <TextField {...register("baseMeasure")} label="Base Measure *" fullWidth margin="dense" required />
          <TextField {...register("upperLimit")} label="Upper Limit *" fullWidth margin="dense" required />
          <TextField {...register("lowerLimit")} label="Lower Limit *" type="Units" fullWidth margin="dense" required />

          <TextField {...register("actuals")} label="Actuals *" fullWidth margin="dense" required />
          <TextField {...register("status")} label="Status *" fullWidth margin="dense" required />
          <TextField {...register("notes")} label="Notes" type="Units" fullWidth margin="dense" required />


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

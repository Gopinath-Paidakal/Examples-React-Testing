import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";

const initialRows = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 35 },
];

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", width: 150, editable: true },
  { field: "age", headerName: "Age", type: "number", width: 100, editable: true },
];

export default function DynamicRowAdd() {
  const [rows, setRows] = React.useState(initialRows);
  const [idCounter, setIdCounter] = React.useState(4); // Unique ID generator

  const handleAddRow = () => {
    const newRow = { id: idCounter, name: "New User", age: 20 };
    setRows((prevRows) => [...prevRows, newRow]);
    setIdCounter((prevId) => prevId + 1);
  };

  return (
    <div style={{ height: 400, width: "100%" }}>
      <Button onClick={handleAddRow} variant="contained" color="primary" style={{ marginBottom: 10 }}>
        Add Row
      </Button>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
}

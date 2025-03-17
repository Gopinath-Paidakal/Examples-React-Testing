import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button, TextField, Box } from "@mui/material";

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

export default function XDataGridAMD() {
  const [rows, setRows] = React.useState(initialRows);
  const [idCounter, setIdCounter] = React.useState(4);
  const [selectedIds, setSelectedIds] = React.useState([]);
  const [newRow, setNewRow] = React.useState({ name: "", age: "" });

  // Handle row edit commit
  const handleRowEditCommit = (params) => {
    setRows((prevRows) =>
      prevRows.map((row) => (row.id === params.id ? { ...row, ...params } : row))
    );
  };

  // Handle adding a new row
  const handleAddRow = () => {
    if (newRow.name && newRow.age) {
      setRows([...rows, { id: idCounter, ...newRow }]);
      setIdCounter(idCounter + 1);
      setNewRow({ name: "", age: "" });
    }
  };

  // Handle deleting selected rows
  const handleDeleteRow = () => {
    setRows(rows.filter((row) => !selectedIds.includes(row.id)));
    setSelectedIds([]);
  };

  return (
    <Box sx={{ width: "100%", height: 500 }}>
      {/* Input Fields to Add New Row */}
      <Box display="flex" gap={2} mb={2}>
        <TextField
          label="Name"
          value={newRow.name}
          onChange={(e) => setNewRow({ ...newRow, name: e.target.value })}
        />
        <TextField
          label="Age"
          type="number"
          value={newRow.age}
          onChange={(e) => setNewRow({ ...newRow, age: e.target.value })}
        />
        <Button variant="contained" color="primary" onClick={handleAddRow}>
          Add Row
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={handleDeleteRow}
          disabled={selectedIds.length === 0}
        >
          Delete Selected
        </Button>
      </Box>

      {/* DataGrid Table */}
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
        onRowSelectionModelChange={(ids) => setSelectedIds(ids)}
        processRowUpdate={(newRow, oldRow) => {
          setRows(rows.map((row) => (row.id === oldRow.id ? newRow : row)));
          return newRow;
        }}
      />
    </Box>
  );
}

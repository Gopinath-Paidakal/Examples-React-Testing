import React from "react";
import DataTable from "react-data-table-component";

const data = [
  { id: 1, name: "John Doe", age: 28, email: "john@example.com" },
  { id: 2, name: "Jane Smith", age: 34, email: "jane@example.com" },
  { id: 3, name: "Michael Brown", age: 40, email: "michael@example.com" },
];

const columns = [
  {
    name: "Name",
    selector: (row) => row.name,
    sortable: true,
  },
  {
    name: "Age",
    selector: (row) => row.age,
    sortable: true,
  },
  {
    name: "Email",
    selector: (row) => row.email,
  },
];

const customStyles = {
    rows: {
      style: {
        minHeight: "72px", // override the row height
      },
    },
    headCells: {
      style: {
        fontSize: "16px",
        fontWeight: "bold",
      },
    },
    cells: {
      style: {
        fontSize: "14px",
      },
    },
  };
  
//   <DataTable
//     title="Users"
//     columns={columns}
//     data={data}
//     customStyles={customStyles}
//   />;
  
const ReactDataTable = () => {
  return (
    <div className="App">
      <h1>User Data Table</h1>
      <DataTable
        title="Paramount"
        columns={columns}
        data={data}
        pagination
        highlightOnHover
        striped
        customStyles={customStyles}
      />
    </div>
  );
};

export default ReactDataTable;

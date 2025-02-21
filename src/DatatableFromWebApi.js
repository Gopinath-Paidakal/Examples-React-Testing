import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";

const DatatableFromWebApi = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Define table columns
  const columns = [
    // {
    //   name: "Subscriber ID",
    //   selector: (row) => row.id,
    //   sortable: true,
    // },
    {
      name: "Subscirber Name",
      selector: (row) => row.subscriberName,
      sortable: true,
    },
    {
      name: "Subscriber Address",
      selector: (row) => row.subscriberAddress,
    },
    // {
    //   name: "Phone",
    //   selector: (row) => row.phone,
    // },
  ];

//   const customStyles = {
//     rows: {
//       style: {
//         minHeight: "72px", // override the row height
//       },
//     },
//     headCells: {
//       style: {
//         fontSize: "16px",
//         fontWeight: "bold",
//       },
//     },
//     cells: {
//       style: {
//         fontSize: "14px",
//       },
//     },
//   };

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get("https://localhost:7131/Subscriber/GetSubscriber");
        setData(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <h3>React Data Table with Axios</h3>

      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      <DataTable
        title="Subscriber List"
        columns={columns}
        data={data}
        progressPending={loading}
        pagination
        highlightOnHover
        striped
        // customStyles={customStyles}
      />
    </div>
  );
};

export default DatatableFromWebApi;

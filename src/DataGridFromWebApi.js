import React, { useState, useEffect } from "react";
import DataGrid from "react-data-grid";
import axios from "axios";

const columns = [
  { key: "inspRepoId", name: "InpsReportId", sortable: true },
  { key: "inspRepNo", name: "InspRepoNo" },
  { key: "prodDrgNo", name: "prodDrgNo" },
];

const DataGridFromWebApi = () => {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://localhost:7131/GetInspRepo"
        );
        setRows(response.data);
        // if (response.ok){
        //   setRows(response.Json());
        // }
      } catch (error) {
        console.error("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);


  return (
    <div>
       
       <h1>React Data Grid with Axios</h1>
       {loading ? (
         <p>Loading...</p>
       ) : (
         <DataGrid columns={columns} rows={rows} />
       )}
    </div>
  );
};

export default DataGridFromWebApi;
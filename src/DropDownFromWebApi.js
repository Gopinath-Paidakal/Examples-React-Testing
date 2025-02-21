import React, { useState, useEffect } from "react";
import axios from "axios";

const DropDownFromWebApi = () => {
  const [options, setOptions] = useState([]); // State to hold dropdown data
  const [selectedOption, setSelectedOption] = useState(""); // State to track selected option
  const [error, setError] = useState(null); // Error handling state

  // Fetch data from API
  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const response = await axios.get("https://localhost:7131/Subscriber/GetSubscriber"); // Example API
        setOptions(response.data); // Set API data to options state
      } catch (err) {
        setError("Failed to fetch data");
      }
    };

    fetchOptions();
  }, []);

  // Handle option change
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>React Dropdown with Axios</h1>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <label htmlFor="user-select">Select a Subscriber :  </label>
      <select
        id="subscriber-select"
        value={selectedOption}
        onChange={handleChange}
        style={{ padding: "10px", margin: "10px 0", minWidth: "200px" }}
      >
        <option value="">-- Select --</option>
        {options.map((data) => (
          <option key={data.subscriberId} value={data.subscriberId.id}>
            {data.subscriberName}
          </option>
        ))}
      </select>

      {selectedOption && (
        <p>
          Selected User ID: <strong>{selectedOption}</strong>
        </p>
      )}
    </div>
  );
};

export default DropDownFromWebApi;

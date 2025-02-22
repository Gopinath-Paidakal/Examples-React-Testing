import React, { useState } from "react";
import { TextField, Autocomplete } from "@mui/material";

const options = ["Apple", "Banana", "Cherry", "Mango", "Orange"];

const AutoCompleteDropdown = () => {
  const [value, setValue] = useState(null);

  return (
    <Autocomplete
      freeSolo
      options={options}
      value={value}
      onChange={(event, newValue) => setValue(newValue)}
      renderInput={(params) => <TextField {...params} label="Select or Enter" />}
    />
  );
};

export default AutoCompleteDropdown;

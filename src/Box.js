import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


export default function CreateBox() {
  return (
    <div>
      <Box>
        <Box sx={{ p:2, border: '1px dashed grey'}}>
                This is Testing Box with function CreateBox.
        </Box>
      </Box>
      <Box sx={{ p:2, border: '1px dashed green' }}>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField id="filled-basic" label="Filled" variant="filled" />
        <TextField id="standard-basic" label="Standard" variant="standard" />
      </Box>
    </div>
  )
}
import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { SingleInputDateRangeField } from '@mui/x-date-pickers-pro/SingleInputDateRangeField';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';

export default function SingleInputDateRangePicker() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['SingleInputDateRangeField']}>
        <DateRangePicker
          slots={{ field: SingleInputDateRangeField }}
          name="allowedRange"
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}


// import * as React from 'react';
// import dayjs from 'dayjs';
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { SingleInputDateRangeField } from '@mui/x-date-pickers-pro/SingleInputDateRangeField';

// export default function DateRangeFieldValue() {
//   const [value, setValue] = React.useState(() => [
//     dayjs('2022-04-17'),
//     dayjs('2022-04-21'),
//   ]);

//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <DemoContainer
//         components={['SingleInputDateRangeField', 'SingleInputDateRangeField']}
//       >
//         <SingleInputDateRangeField
//           label="Uncontrolled field"
//           defaultValue={[dayjs('2022-04-17'), dayjs('2022-04-21')]}
//         />
//         <SingleInputDateRangeField
//           label="Controlled field"
//           value={value}
//           onChange={(newValue) => setValue(newValue)}
//         />
//       </DemoContainer>
//     </LocalizationProvider>
//   );
// }





// import React, { useState } from "react";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
// import { TextField, Box } from "@mui/material";
// import dayjs from "dayjs";

// const DateRangePickerComponent = () => {
//   const [dateRange, setDateRange] = useState([dayjs().subtract(7, "day"), dayjs()]);

//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <Box sx={{ width: 350, margin: "20px auto" }}>
//         <DateRangePicker 
//           value={dateRange}
//           //onChange={(newValue) => setDateRange(newValue)}
//           onChange={(newValue) => setDateRange(newValue)}
//           format="DD/MM/YY" 
//           // slots={{ field: SingleInputDateRangeField }}
//           // name="allowedRange"
//           renderInput={(startProps, endProps) => (
            
//             <>
//               <TextField {...startProps} label="Start Date" fullWidth />
//               <Box sx={{ mx: 2 }}> to </Box>
//               <TextField {...endProps} label="End Date" fullWidth />
//             </>
//           )}
//         />
//       </Box>
//     </LocalizationProvider>
//   );
// };

// export default DateRangePickerComponent;



// import React, { useState } from "react";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
// import { TextField, Box } from "@mui/material";
// import dayjs from "dayjs";

// const DateRangePickerComponent = () => {
//   const [dateRange, setDateRange] = useState([null, null]);

//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <Box sx={{ width: 300, margin: "20px auto" }}>
//         <DateRangePicker
//           value={dateRange}
//           onChange={(newValue) => setDateRange(newValue)}
//           renderInput={(startProps, endProps) => (
//             <>
//               <TextField {...startProps} label="Select Start Date" fullWidth />
//               <Box sx={{ mx: 5 }}> to </Box>
//               <TextField {...endProps} label="Select End Date" fullWidth />
//             </>
//           )}
//         />
//       </Box>
//     </LocalizationProvider>
//   );
// };

// export default DateRangePickerComponent;




// // import React, { useState } from "react";
// // import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// // import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// // import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
// // import { TextField, Box } from "@mui/material";
// // import dayjs from "dayjs";

// // const DateRangePickerComponent = () => {
// //   const [dateRange, setDateRange] = useState([null, null]);

// //   return (
// //     <LocalizationProvider dateAdapter={AdapterDayjs}>
// //       <Box sx={{ width: 300, margin: "20px auto" }}>
// //         <DateRangePicker
// //           value={dateRange}
// //           onChange={(newValue) => setDateRange(newValue)}
// //           renderInput={(startProps, endProps) => (
// //             <>
// //               <TextField {...startProps} label="Start Date" fullWidth />
// //               <Box sx={{ mx: 2 }}> to </Box>
// //               <TextField {...endProps} label="End Date" fullWidth />
// //             </>
// //           )}
// //         />
// //       </Box>
// //     </LocalizationProvider>
// //   );
// // };

// // export default DateRangePickerComponent;

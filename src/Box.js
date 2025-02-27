import * as React from 'react';
import { Box, ThemeProvider, createTheme } from '@mui/system';

const theme = createTheme({
  palette: {
    background: {
      paper: '#fff',
    },
    text: {
      primary: '#173A5E',
      secondary: '#46505A',
    },
    action: {
      active: '#001E3C',
    },
    success: {
      dark: '#009688',
    },
  },
});

export default function Example() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          bgcolor: 'background.paper',
          boxShadow: 1,
          borderRadius: 2,
          p: 2,
          minWidth: 300,
        }}
      >
        <Box sx={{ color: 'text.secondary' }}>Sessions</Box>
        <Box sx={{ color: 'text.primary', fontSize: 34, fontWeight: 'medium' }}>
          98.3 K
        </Box>
        <Box
          sx={{
            color: 'success.dark',
            display: 'inline',
            fontWeight: 'bold',
            mx: 0.5,
            fontSize: 14,
          }}
        >
          +18.77%
        </Box>
        <Box sx={{ color: 'text.secondary', display: 'inline', fontSize: 14 }}>
          vs. last week
        </Box>
      </Box>
    </ThemeProvider>
  );
}




// import * as React from 'react';
// import Box from '@mui/material/Box';
// import { ThemeProvider } from '@mui/material/styles';

// export default function BoxSx() {
//   return (
//     <ThemeProvider
//       theme={{
//         palette: {
//           primary: {
//             main: '#007FFF',
//             dark: '#0066CC',
//           },
//         },
//       }}
//     >
//       <Box
//         sx={{
//           width: 300,
//           height: 50,
//           borderRadius: 2,
//           bgcolor: 'primary.main',
//           '&:hover': {
//             bgcolor: 'primary.dark',
//           },
//         }}
//       />
//     </ThemeProvider>
//   );
// }


// import * as React from 'react';
// import Box from '@mui/material/Box';

// export default function BoxBasic() {
//   return (
//     <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>
//       This Box renders as an HTML section element.
//     </Box>
//   );
// }
import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Home, Dashboard, Settings, People } from '@mui/icons-material';

const Sidebar = () => {
  return (
    <div className="bg-dark text-white vh-100 p-3">
      <h4>Admin Menu</h4>
      <List>
        <ListItem button>
          <ListItemIcon><Home className="text-white" /></ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><Dashboard className="text-white" /></ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><People className="text-white" /></ListItemIcon>
          <ListItemText primary="Users" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><Settings className="text-white" /></ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
      </List>
    </div>
  );
};

export default Sidebar;



// import React from 'react';
// import { Nav } from 'react-bootstrap';
// import { FaHome, FaChartBar, FaUsers, FaCog } from 'react-icons/fa';

// const Sidebar = () => {
//   return (
//     <div className="bg-dark text-white d-flex flex-column vh-100 p-3">
//       <h4 className="text-center">Admin Panel</h4>
//       <Nav className="flex-column mt-4">
//         <Nav.Link href="#" className="text-white"><FaHome /> Dashboard</Nav.Link>
//         <Nav.Link href="#" className="text-white"><FaChartBar /> Analytics</Nav.Link>
//         <Nav.Link href="#" className="text-white"><FaUsers /> Users</Nav.Link>
//         <Nav.Link href="#" className="text-white"><FaCog /> Settings</Nav.Link>
//       </Nav>
//     </div>
//   );
// };

// export default Sidebar;
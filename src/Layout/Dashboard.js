import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { Card, CardContent, Typography } from '@mui/material';
import { TrendingUp, ShoppingCart, People, MonetizationOn } from '@mui/icons-material';

const Dashboard = () => {
  return (
    <Container className="mt-4">
      <h2>Dashboard</h2>
      <Row className="mt-4">
        <Col md={3}>
          <Card className="shadow">
            <CardContent>
              <TrendingUp fontSize="large" color="primary" />
              <Typography variant="h6">Sales</Typography>
              <Typography variant="body1">$12,345</Typography>
            </CardContent>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="shadow">
            <CardContent>
              <ShoppingCart fontSize="large" color="secondary" />
              <Typography variant="h6">Orders</Typography>
              <Typography variant="body1">567</Typography>
            </CardContent>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="shadow">
            <CardContent>
              <People fontSize="large" color="success" />
              <Typography variant="h6">Users</Typography>
              <Typography variant="body1">1,234</Typography>
            </CardContent>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="shadow">
            <CardContent>
              <MonetizationOn fontSize="large" color="error" />
              <Typography variant="h6">Revenue</Typography>
              <Typography variant="body1">$45,678</Typography>
            </CardContent>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;


// import React from 'react';
// import { Card, Row, Col } from 'react-bootstrap';
// import { FaUsers, FaChartLine, FaDollarSign, FaClipboardList } from 'react-icons/fa';

// const Dashboard = () => {
//   return (
//     <div className="p-4">
//       <h2>Dashboard</h2>
//       <Row className="mt-4">
//         <Col md={3}>
//           <Card className="p-3 shadow">
//             <FaUsers size={30} className="text-primary" />
//             <h5>Users</h5>
//             <p>1,234</p>
//           </Card>
//         </Col>
//         <Col md={3}>
//           <Card className="p-3 shadow">
//             <FaChartLine size={30} className="text-success" />
//             <h5>Sales</h5>
//             <p>$12,345</p>
//           </Card>
//         </Col>
//         <Col md={3}>
//           <Card className="p-3 shadow">
//             <FaDollarSign size={30} className="text-warning" />
//             <h5>Revenue</h5>
//             <p>$45,678</p>
//           </Card>
//         </Col>
//         <Col md={3}>
//           <Card className="p-3 shadow">
//             <FaClipboardList size={30} className="text-danger" />
//             <h5>Orders</h5>
//             <p>567</p>
//           </Card>
//         </Col>
//       </Row>
//     </div>
//   );
// };

// export default Dashboard;

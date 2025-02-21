import React from 'react';
import Sidebar from './Sidebar';
import AppNavbar from './AppNavbar';
import Footer from './Footer';
import Dashboard from './Dashboard';
import { Container, Row, Col } from 'react-bootstrap';
//import DatatableFromWebApi from '../DatatableFromWebApi';


const AdminLayout = () => {
  return (
    <div>
      <AppNavbar />
      <Container fluid>
        <Row>
          <Col md={2} className="bg-dark text-white vh-100">
            <Sidebar />
          </Col>
          <Col md={10} className="p-4">
            <Dashboard />  
            {/* <DatatableFromWebApi/> */}
          </Col>
        </Row>
      </Container>
      <Footer/> 
    </div>
  );
};

export default AdminLayout;

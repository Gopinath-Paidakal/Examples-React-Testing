import React from 'react';
//import { Navbar, Container, Nav } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'admin-lte/dist/css/adminlte.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


const BootstrapNavbar = () => {
  return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" data-widget="pushmenu" href="#" role="button">
            <i className="fas fa-bars"></i>
          </a>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <a href="#" className="nav-link">Home</a>
        </li>
      </ul>

       <ul className="navbar-nav ml-auto">
         <li className="nav-item">
           <a className="nav-link" href="#">
             <i className="fas fa-user"></i> Profile
           </a>
         </li>
       </ul>
     </nav> 

     );
};

export default BootstrapNavbar;

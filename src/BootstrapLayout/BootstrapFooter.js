import React from 'react';


import 'bootstrap/dist/css/bootstrap.min.css';
import 'admin-lte/dist/css/adminlte.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className="main-footer">
      <strong>&copy; {new Date().getFullYear()} AdminLTE React.</strong>
      <div className="float-right d-none d-sm-inline-block">
        <b>Version</b> 3.0.0
      </div>
    </footer>
  );
};

export default Footer;

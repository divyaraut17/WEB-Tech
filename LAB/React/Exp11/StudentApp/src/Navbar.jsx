import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ width: '100%', padding: '16px 0', background: '#1976d2', textAlign: 'center', borderBottom: '2px solid #1565c0', position: 'sticky', top: 0, left: 0, zIndex: 100 }}>
      <Link to="/" style={{ margin: '0 18px', textDecoration: 'none', color: 'white', fontWeight: 'bold', fontSize: '18px' }}>Home</Link>
      <Link to="/students" style={{ margin: '0 18px', textDecoration: 'none', color: 'white', fontWeight: 'bold', fontSize: '18px' }}>Students</Link>
      <Link to="/add" style={{ margin: '0 18px', textDecoration: 'none', color: 'white', fontWeight: 'bold', fontSize: '18px' }}>Add Student</Link>
    </nav>
  );
}

export default Navbar;
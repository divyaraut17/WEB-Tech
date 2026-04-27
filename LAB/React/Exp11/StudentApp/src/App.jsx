import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import StudentList from './StudentList';
import AddStudent from './AddStudent';
import './App.css';

function App() {
  // State to store student list
  const [students, setStudents] = useState([]);

  return (
    <BrowserRouter>
      {/* Navbar at the top */}
      <Navbar />
      <div style={{ minHeight: '80vh', padding: '24px 0', background: '#f5f7fa' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<StudentList students={students} />} />
          <Route path="/add" element={<AddStudent students={students} setStudents={setStudents}/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
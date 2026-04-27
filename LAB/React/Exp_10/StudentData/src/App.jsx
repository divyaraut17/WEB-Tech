import './App.css'
import StudentList from './StudentList.jsx'

function App() {
  const Students = [
    { name: 'John Doe', age: 20, grade: 'A' },
    { name: 'Jane Smith', age: 22, grade: 'B' },
    { name: 'Michael Johnson', age: 19, grade: 'A' },
    { name: 'Emily Davis', age: 21, grade: 'C' },
    { name: 'David Wilson', age: 23, grade: 'B' }
  ];

  const showMessage = () => {
    alert('Hello Button Clicked')
  }

  return (
    <main className="app-container">
      <header className="app-header">
        <h1>Student List</h1>
        <p>A simple list of students with clean spacing and a subtle accent.</p>
        <button className="action-button" onClick={showMessage}>
          Click Me
        </button>
      </header>

      <section className="student-list">
        {Students.map((student, index) => (
          <StudentList
            key={index}
            name={student.name}
            age={student.age}
            grade={student.grade}
          />
        ))}
      </section>
    </main>
  )
}

export default App

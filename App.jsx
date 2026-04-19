import { useState } from 'react'
import Header from './components/Header'
import StudentTable from './components/StudentTable'
import AddStudentForm from './components/AddStudentForm'

const initialStudents = [
  { id: 1, name: 'Aarav Mehta', score: 88 },
  { id: 2, name: 'Priya Sharma', score: 34 },
  { id: 3, name: 'Rohan Das', score: 72 },
  { id: 4, name: 'Sneha Kulkarni', score: 55 },
  { id: 5, name: 'Vikram Nair', score: 21 },
]

function App() {
  const [students, setStudents] = useState(initialStudents)

  const updateScore = (id, newScore) => {
    setStudents(prev =>
      prev.map(s => s.id === id ? { ...s, score: Number(newScore) } : s)
    )
  }

  const addStudent = (name, score) => {
    const newStudent = {
      id: Date.now(),
      name,
      score: Number(score),
    }
    setStudents(prev => [...prev, newStudent])
  }

  return (
    <div className="app">
      <Header total={students.length} passed={students.filter(s => s.score >= 40).length} />
      <main className="main">
        <StudentTable students={students} onUpdateScore={updateScore} />
        <AddStudentForm onAddStudent={addStudent} />
      </main>
    </div>
  )
}

export default App

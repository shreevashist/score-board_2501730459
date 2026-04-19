import { useState } from 'react'

function AddStudentForm({ onAddStudent }) {
  const [name, setName] = useState('')
  const [score, setScore] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name.trim()) {
      setError('Please enter a student name.')
      return
    }
    const s = Number(score)
    if (score === '' || isNaN(s) || s < 0 || s > 100) {
      setError('Score must be between 0 and 100.')
      return
    }
    onAddStudent(name.trim(), s)
    setName('')
    setScore('')
    setError('')
  }

  return (
    <section className="form-section">
      <h2 className="form-title">Add New Student</h2>
      <form className="add-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="sname">Full Name</label>
          <input
            id="sname"
            type="text"
            placeholder="e.g. Arjun Verma"
            value={name}
            onChange={e => { setName(e.target.value); setError('') }}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="sscore">Score (0–100)</label>
          <input
            id="sscore"
            type="number"
            placeholder="e.g. 78"
            min="0"
            max="100"
            value={score}
            onChange={e => { setScore(e.target.value); setError('') }}
            className="form-input"
          />
        </div>
        <button type="submit" className="submit-btn">+ Add Student</button>
      </form>
      {error && <p className="form-error">{error}</p>}
    </section>
  )
}

export default AddStudentForm

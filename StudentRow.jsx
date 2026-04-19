import { useState } from 'react'

function StudentRow({ index, student, onUpdateScore }) {
  const [inputVal, setInputVal] = useState('')
  const isPassing = student.score >= 40

  const handleUpdate = () => {
    const val = Number(inputVal)
    if (inputVal === '' || isNaN(val) || val < 0 || val > 100) return
    onUpdateScore(student.id, val)
    setInputVal('')
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleUpdate()
  }

  const scorePercent = Math.min(student.score, 100)

  return (
    <div className={`student-row ${isPassing ? 'pass-row' : 'fail-row'}`}>
      <span className="row-index">{String(index).padStart(2, '0')}</span>

      <span className="row-name">{student.name}</span>

      <span className="row-score">
        <span className="score-value">{student.score}</span>
        <span className="score-bar-wrap">
          <span
            className="score-bar-fill"
            style={{ width: `${scorePercent}%`, background: isPassing ? 'var(--green)' : 'var(--red)' }}
          />
        </span>
      </span>

      <span className={`row-status ${isPassing ? 'status-pass' : 'status-fail'}`}>
        {isPassing ? '✓ Pass' : '✗ Fail'}
      </span>

      <span className="row-update">
        <input
          type="number"
          min="0"
          max="100"
          placeholder="0–100"
          value={inputVal}
          onChange={e => setInputVal(e.target.value)}
          onKeyDown={handleKeyDown}
          className="update-input"
        />
        <button onClick={handleUpdate} className="update-btn">Set</button>
      </span>
    </div>
  )
}

export default StudentRow

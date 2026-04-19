import StudentRow from './StudentRow'

function StudentTable({ students, onUpdateScore }) {
  return (
    <section className="table-section">
      <div className="table-header-row">
        <span>#</span>
        <span>Student Name</span>
        <span>Score</span>
        <span>Status</span>
        <span>Update Score</span>
      </div>
      <div className="table-body">
        {students.length === 0 ? (
          <div className="empty-state">No students yet. Add one below.</div>
        ) : (
          students.map((student, index) => (
            <StudentRow
              key={student.id}
              index={index + 1}
              student={student}
              onUpdateScore={onUpdateScore}
            />
          ))
        )}
      </div>
    </section>
  )
}

export default StudentTable

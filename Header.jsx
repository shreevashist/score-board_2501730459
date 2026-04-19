function Header({ total, passed }) {
  const failed = total - passed

  return (
    <header className="header">
      <div className="header-left">
        <span className="header-tag">CSE — 2025</span>
        <h1 className="header-title">Student<br />Scoreboard</h1>
      </div>
      <div className="header-stats">
        <div className="stat-box">
          <span className="stat-number">{total}</span>
          <span className="stat-label">Total</span>
        </div>
        <div className="stat-box pass">
          <span className="stat-number">{passed}</span>
          <span className="stat-label">Passed</span>
        </div>
        <div className="stat-box fail">
          <span className="stat-number">{failed}</span>
          <span className="stat-label">Failed</span>
        </div>
      </div>
    </header>
  )
}

export default Header

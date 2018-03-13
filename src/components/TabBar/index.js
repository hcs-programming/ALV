import React from "react"
import "./styles.css"

function TabBar({ whichTab, onClick }) {
  return (
    <div className="tabbar--container">
      <nav className="tabbar--tabs">
        <div
          className={`tab ${whichTab === "Attendance" ? "selected" : ""}`}
          onClick={() => onClick("Attendance")}
        >
          Attendance
        </div>
        <div
          className={`tab ${whichTab === "Lunch" ? "selected" : ""}`}
          onClick={() => onClick("Lunch")}
        >
          Lunch
        </div>
        <div
          className={`tab ${whichTab === "Violations" ? "selected" : ""}`}
          onClick={() => onClick("Violations")}
        >
          Violations
        </div>
      </nav>
    </div>
  )
}

export default TabBar

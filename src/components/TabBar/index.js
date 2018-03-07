import React from "react"
import logo from "../../assets/logo.svg"
import "./styles.css"

function TabBar({ whichTab, onClick }) {
  return (
    <div className="rect">
      <nav className="tabbar--container">
        <div
          className={`tabs ${whichTab == "Attendance" ? "selected" : ""}`}
          onClick={() => onClick("Attendance")}
        >
          Attendance
        </div>
        <div
          className={`tabs ${whichTab == "Lunch" ? "selected" : ""}`}
          onClick={() => onClick("Lunch")}
        >
          Lunch
        </div>
        <div
          className={`tabs ${whichTab == "Violations" ? "selected" : ""}`}
          onClick={() => onClick("Violations")}
        >
          Violations
        </div>
      </nav>
    </div>
  )
}

export default TabBar

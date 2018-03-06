import React from "react"
import logo from "../../assets/logo.svg"
import "./styles.css"

function TabBar({ whichTab }) {
  return (
    <div className="rect">
      <nav className="tabbar--container">
        <div className={`tabs ${whichTab == "Attendance" ? "selected" : ""}`}>
          Attendance
        </div>
        <div className={`tabs ${whichTab == "Lunch" ? "selected" : ""}`}>
          Lunch
        </div>
        <div className={`tabs ${whichTab == "Violations" ? "selected" : ""}`}>
          Violations
        </div>
      </nav>
    </div>
  )
}

export default TabBar

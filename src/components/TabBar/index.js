import React from "react"
import logo from "../../assets/logo.svg"
import "./styles.css"

function TabBar() {
  return (
    <div className="rect">
      <nav className="tabbar--container">
        <div className="tabs segment">Attendance</div>
        <div className="tabs">Lunch</div>
        <div className="tabs">Violations</div>
      </nav>
    </div>
  )
}

export default TabBar

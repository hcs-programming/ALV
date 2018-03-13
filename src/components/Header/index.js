import React from "react"
import "./styles.css"

function Header({ title }) {
  return (
    <div className="header--container">
      <h3 className="header--title">{title}</h3>
    </div>
  )
}

export default Header

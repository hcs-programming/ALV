import React from "react"
import image from "../../assets/arrow.png"
import "./styles.css"

function Grade({ gradeName, onClick }) {
  return (
    <div className="grade--container" onClick={onClick}>
      <p className="grade--font">{gradeName}</p>
      <img className="grade--arrow" src={image} alt="arrow" />
    </div>
  )
}

export default Grade

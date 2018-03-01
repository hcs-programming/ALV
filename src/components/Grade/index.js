import React from "react"
import image from "../../assets/arrow.png"
import "./styles.css"

function Grade() {
  return (
    <div className="grade--container">
      <p className="grade--font">Swag</p>
      <img className="grade--arrow" src={image} />
    </div>
  )
}

export default Grade

import React from "react"
import image from "../../assets/aeroplane.png"
import "./styles.css"

function FAB() {
  return (
    <div className="fab--btn">
      <img className="fab--image" src={image} />
    </div>
  )
}

export default FAB

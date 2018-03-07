import React from "react"
import image from "../../assets/aeroplane.png"
import editimage from "../../assets/pen.png"
import "./styles.css"

function FAB({ edit }) {
  let btnClasses = "fab--btn"
  let btnImage = image
  if (edit == true) {
    btnImage = editimage
    btnClasses += " fab--edit"
  }

  return (
    <div className={btnClasses}>
      <img className="fab--image" src={btnImage} />
    </div>
  )
}

export default FAB

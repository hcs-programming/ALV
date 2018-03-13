import React from "react"
import image from "../../assets/aeroplane.png"
import editimage from "../../assets/pen.png"
import "./styles.css"

function FAB({ edit }) {
  let btnClasses = "fab--btn"
  let imgClass = "fab--image"
  let btnImage = image
  if (edit === true) {
    btnImage = editimage
    imgClass = "fab--editImage"
    btnClasses += " fab--edit"
  }

  return (
    <div className={btnClasses}>
      <img className={imgClass} src={btnImage} alt="fab" />
    </div>
  )
}

export default FAB

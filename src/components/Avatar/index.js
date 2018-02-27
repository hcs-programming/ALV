import React from "react"
import image from "../../assets/MissBrown.JPG"
import "./styles.css"

function Avatar() {
  return (
    <div className="avatar-boom">
      <div className="avatar-border">
        <div className="avatar">
          <div className="sam" />
          <p className="A">A</p>
          <img src={image} />
        </div>
      </div>
      <p className="name">
        <b>Miss Brown</b>
      </p>
      <p className="subName">Teacher</p>
    </div>
  )
}

export default Avatar

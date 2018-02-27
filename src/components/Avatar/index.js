import React from "react"
import logo from "../../assets/logo.svg"
import "./styles.css"

function Avatar() {
  return (
    <div className="avatar-boom">
      <div className="avatar-border">
        <div className="avatar">
          <div className="sam" />
          <p className="A">A</p>
          <img src="Miss Brown.JPG" />
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

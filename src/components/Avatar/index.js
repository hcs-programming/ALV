import React from "react"
import check from "../../assets/check.png"
import "./styles.css"

function Avatar(props) {
  return (
    <div className="avatar-container">
      <div className="avatar-border" onClick={props.onClick}>
        <div className="avatar">
          {props.character && <div className="avatar-red" />}
          {props.character && (
            <p className="avatar-character">{props.character}</p>
          )}
          {props.checked && <div className="avatar-green" />}
          {props.checked && <img src={check} className="avatar-character" />}
          <img src={props.image} />
        </div>
      </div>
      <p className="avatar-name">
        <b>{props.name}</b>
      </p>
      <p className="avatar-title">{props.title}</p>
    </div>
  )
}

export default Avatar

import React from "react"
import "./styles.css"

function Avatar(props) {
  return (
    <div className="avatar-container" onClick={props.onClick}>
      <div className="avatar-border">
        <div className="avatar">
          {props.character && <div className="avatar-red" />}
          {props.character && (
            <p className="avatar-character">{props.character}</p>
          )}
          <img src={props.image} alt="avatar" />
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

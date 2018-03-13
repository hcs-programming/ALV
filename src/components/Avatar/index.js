import React from "react"
import "./styles.css"

function Avatar({ character, name, title, image }) {
  return (
    <div className="avatar-container">
      <div className="avatar-border">
        <div className="avatar">
          {character && <div className="avatar-red" />}
          {character && <p className="avatar-character">{character}</p>}
          <img src={image} alt="avatar" />
        </div>
      </div>
      <p className="avatar-name">
        <b>{name}</b>
      </p>
      <p className="avatar-title">{title}</p>
    </div>
  )
}

export default Avatar

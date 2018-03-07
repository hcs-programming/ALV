import React from "react"
import "./styles.css"

function Avatar({character, name, title, image}) {
  return (
    <div className="avatar-boom">
      <div className="avatar-border">
        <div className="avatar">
        { character && <div className="sam" />}
          {character && <p className="A">{character}</p>}
          <img src={image} />
        </div>
      </div>
      <p className="name">
        <b>{name}</b>
      </p>
      <p className="subName">{title}</p>
    </div>
  )
}

export default Avatar

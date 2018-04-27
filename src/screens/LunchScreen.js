import React from "react"

import Avatar from "../components/Avatar"

class LunchScreen extends React.Component {
  state = {}

  render() {
    const { people, changeLunch } = this.props

    return (
      <div className="myGrid">
        {people.map((person, i) => (
          <Avatar
            image={person.image}
            name={person.name}
            title={person.title}
            checked={person.lunch}
            onClick={() => changeLunch(i)}
            key={i}
          />
        ))}
      </div>
    )
  }
}

export default LunchScreen

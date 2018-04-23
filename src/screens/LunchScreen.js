import React from "react"

import Avatar from "../components/Avatar"
import FAB from "../components/FAB"
import TabBar from "../components/TabBar"

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
            character={person.lunch}
            onClick={() => changeLunch(i)}
            key={i}
          />
        ))}
      </div>
    )
  }
}

export default LunchScreen

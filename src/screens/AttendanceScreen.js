import React from "react"

import Avatar from "../components/Avatar"
import FAB from "../components/FAB"
import TabBar from "../components/TabBar"

class AttendanceScreen extends React.Component {
  state = {}

  render() {
    const { people, changeAttendance } = this.props

    return (
      <div className="myGrid">
        {people.map((person, i) => (
          <Avatar
            image={person.image}
            name={person.name}
            title={person.title}
            character={person.attendance}
            onClick={() => changeAttendance(i)}
          />
        ))}
      </div>
    )
  }
}

export default AttendanceScreen

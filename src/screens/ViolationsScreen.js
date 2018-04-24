import React from "react"

import Avatar from "../components/Avatar"
import FAB from "../components/FAB"
import TabBar from "../components/TabBar"

class ViolationsScreen extends React.Component {
  state = {}

  render() {
    const { violations } = this.props

    return (
      <div className="myGrid">
        {violations.map((violation, i) => (
          <Avatar
            image={violation.image}
            name={violation.name}
            title={violation.title}
            key={i}
          />
        ))}
      </div>
    )
  }
}

export default ViolationsScreen

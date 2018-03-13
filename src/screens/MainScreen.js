import React from "react"

import Avatar from "../components/Avatar"
import FAB from "../components/FAB"
import TabBar from "../components/TabBar"

class MainScreen extends React.Component {
  state = {
    tab: "Attendance"
  }

  render() {
    const { tab } = this.state

    return (
      <div>
        <TabBar
          whichTab={tab}
          onClick={selected => this.setState({ tab: selected })}
        />
        <Avatar
          image="https://wallpaperbrowse.com/media/images/750814.jpg"
          name="Muss Brown"
          title="teacher"
        />
        <FAB />
      </div>
    )
  }
}

export default MainScreen

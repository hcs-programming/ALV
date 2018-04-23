import React from "react"

import FAB from "../components/FAB"
import TabBar from "../components/TabBar"
import AttendanceScreen from "./AttendanceScreen"

class MainScreen extends React.Component {
  state = {
    tab: "Attendance",
    people: [
      {
        image: "https://wallpaperbrowse.com/media/images/750814.jpg",
        name: "Sam",
        type: "student",
        attendance: null
      },
      {
        image: "https://api.adorable.io/avatars/285/abott@adorable.png",
        name: "Kyle",
        type: "student",
        attendance: null
      },
      {
        image: "https://api.adorable.io/avatars/285/scott@adorable.io.png",
        name: "Scott",
        type: "teacher",
        attendance: null
      },
      {
        image: "https://api.adorable.io/avatars/285/caitlyn@adorable.io.png",
        name: "Caitlyn",
        type: "teacher",
        attendance: null
      }
    ]
  }

  changeAttendanceStatus = person => {
    const currentAttendance = this.state.people[person].attendance

    if (currentAttendance == null) {
      this.state.people[person].attendance = "T"
    } else if (currentAttendance == "A") {
      this.state.people[person].attendance = null
    } else if (currentAttendance == "T") {
      this.state.people[person].attendance = "A"
    }

    this.setState({ people: this.state.people })
  }

  render() {
    const { tab, people } = this.state

    return (
      <div>
        <TabBar
          whichTab={tab}
          onClick={selected => this.setState({ tab: selected })}
        />
        <AttendanceScreen
          people={people}
          changeAttendance={this.changeAttendanceStatus}
        />
        <FAB />
      </div>
    )
  }
}

export default MainScreen

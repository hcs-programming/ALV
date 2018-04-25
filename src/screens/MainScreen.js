import React from "react"

import FAB from "../components/FAB"
import TabBar from "../components/TabBar"
import AttendanceScreen from "./AttendanceScreen"
import LunchScreen from "./LunchScreen"
import ViolationScreen from "./ViolationScreen"

import beard from "../assets/beard.png"
import belt from "../assets/belt.png"
import shoe from "../assets/shoe.png"
import shirt from "../assets/shirt.png"

class MainScreen extends React.Component {
  state = {
    tab: "Attendance",
    people: [
      {
        image: "https://wallpaperbrowse.com/media/images/750814.jpg",
        name: "Sam",
        title: "student",
        attendance: null,
        lunch: false
      },
      {
        image: "https://api.adorable.io/avatars/285/abott@adorable.png",
        name: "Kyle",
        title: "student",
        attendance: null,
        lunch: false
      },
      {
        image: "https://api.adorable.io/avatars/285/scott@adorable.io.png",
        name: "Scott",
        title: "teacher",
        attendance: null,
        lunch: false
      },
      {
        image: "https://api.adorable.io/avatars/285/caitlyn@adorable.io.png",
        name: "Caitlyn",
        title: "teacher",
        attendance: null,
        lunch: false
      }
    ],
    violations: [
      {
        image: beard,
        name: "Violation",
        title: "Beard"
      },
      {
        image: belt,
        name: "Violation",
        title: "Belt"
      },
      {
        image: shoe,
        name: "Violation",
        title: "Shoes"
      },
      {
        image: shirt,
        name: "Violation",
        title: "Uniform"
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

  changeLunchStatus = person => {
    const currentLunch = this.state.people[person].lunch

    if (currentLunch == true) {
      this.state.people[person].lunch = false
    } else {
      this.state.people[person].lunch = true
    }

    this.setState({ people: this.state.people })
  }

  render() {
    const { tab, people, violations } = this.state

    return (
      <div>
        <TabBar
          whichTab={tab}
          onClick={selected => this.setState({ tab: selected })}
        />
        {tab === "Attendance" && (
          <AttendanceScreen
            people={people}
            changeAttendance={this.changeAttendanceStatus}
          />
        )}
        {tab === "Lunch" && (
          <LunchScreen people={people} changeLunch={this.changeLunchStatus} />
        )}
        {tab === "Violations" && (
          <ViolationScreen violations={violations} people={people} />
        )}

        <FAB />
      </div>
    )
  }
}

export default MainScreen

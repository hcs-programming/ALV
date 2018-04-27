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
        lunch: false,
        beard: false,
        belt: false,
        shoes: false,
        uniform: false
      },
      {
        image: "https://api.adorable.io/avatars/285/abott@adorable.png",
        name: "Kyle",
        title: "student",
        attendance: null,
        lunch: false,
        beard: false,
        belt: false,
        shoes: false,
        uniform: false
      },
      {
        image: "https://api.adorable.io/avatars/285/scott@adorable.io.png",
        name: "Scott",
        title: "teacher",
        attendance: null,
        lunch: false,
        beard: false,
        belt: false,
        shoes: false,
        uniform: false
      },
      {
        image: "https://api.adorable.io/avatars/285/caitlyn@adorable.io.png",
        name: "Caitlyn",
        title: "teacher",
        attendance: null,
        lunch: false,
        beard: false,
        belt: false,
        shoes: false,
        uniform: false
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
    const newPeople = this.state.people

    if (currentAttendance === null) {
      newPeople[person].attendance = "T"
    } else if (currentAttendance === "A") {
      newPeople[person].attendance = null
    } else if (currentAttendance === "T") {
      newPeople[person].attendance = "A"
    }

    this.setState({ people: newPeople })
  }

  changeLunchStatus = person => {
    const currentLunch = this.state.people[person].lunch
    const newPeople = this.state.people

    if (currentLunch === true) {
      newPeople[person].lunch = false
    } else {
      newPeople[person].lunch = true
    }

    this.setState({ people: newPeople })
  }

  changeViolationStatus = (person, violation) => {
    const newPeople = this.state.people
    newPeople[person][violation] = !newPeople[person][violation]

    this.setState({ people: newPeople })
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
          <ViolationScreen
            violations={violations}
            people={people}
            changeViolation={this.changeViolationStatus}
          />
        )}

        <FAB />
      </div>
    )
  }
}

export default MainScreen

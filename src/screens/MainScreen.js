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
  componentDidMount() {
    const chosenClass = localStorage.getItem("class")

    fetch(`http://app.apache.ga/api/students/${chosenClass}`)
      .then(response => response.json())
      .then(data => {
        this.setState({ people: data.data })
      })
  }
  state = {
    tab: "Attendance",
    people: [],
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

        <FAB onClick={this.props.clearClass} />
      </div>
    )
  }
}

export default MainScreen

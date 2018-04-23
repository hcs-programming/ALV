import React from "react"
import ReactDOM from "react-dom"
import "./index.css"

import ChooseClassScreen from "./screens/ChooseClassScreen"
import MainScreen from "./screens/MainScreen"

class App extends React.Component {
  state = {
    chosenClass: null
  }

  componentDidMount() {
    const storedClass = localStorage.getItem("class")

    if (storedClass != null) {
      this.setState({ chosenClass: storedClass })
    }
  }

  chooseAClass = className => {
    this.setState({ chosenClass: className })
    localStorage.setItem("class", className)
  }

  render() {
    const { chosenClass } = this.state

    if (chosenClass === null) {
      return <ChooseClassScreen chooseClass={this.chooseAClass} />
    } else {
      return <MainScreen />
    }
  }
}

ReactDOM.render(<App />, document.getElementById("root"))

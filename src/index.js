import React from "react"
import ReactDOM from "react-dom"
import "./index.css"

import ChooseClassScreen from "./screens/ChooseClassScreen"
import MainScreen from "./screens/MainScreen"

class App extends React.Component {
  state = {
    chosenClass: null
  }

  render() {
    const { chosenClass } = this.state

    if (chosenClass === null) {
      return (
        <ChooseClassScreen
          chooseClass={chosenClass => this.setState({ chosenClass })}
        />
      )
    } else {
      return <MainScreen />
    }
  }
}

ReactDOM.render(<App />, document.getElementById("root"))

import React from "react"
import "./styles.css"

import ChooseClassScreen from "../../screens/ChooseClassScreen"
import MainScreen from "../../screens/MainScreen"

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

export default App

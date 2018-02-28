import React from "react"
import logo from "../../assets/logo.svg"
import "./styles.css"

import Avatar from "../Avatar"
import FAB from "../FAB"
import TabBar from "../TabBar"
import Grade from "../Grade"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      <Avatar />
      <FAB />
      <FAB />
      <FAB />
      <FAB />
      <FAB />
      <FAB />
      <TabBar />
      <Grade />
    </div>
  )
}

export default App

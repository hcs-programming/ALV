import React from "react"
import logo from "../../assets/logo.svg"
import "./styles.css"

import Avatar from "../Avatar"
import FAB from "../FAB"
import TabBar from "../TabBar"
import Grade from "../Grade"

function clickedThingy() {
  console.log("I Got Clicked!")
}
function clickedTab(tab) {
  selectedTab = tab
}
let selectedTab = "Attendance"
function App() {
  return (
    <div className="App">
      <TabBar whichTab={selectedTab} onClick={clickedTab} />
      <Grade gradeName="1st Grade" onClick={clickedThingy} />
      <Grade gradeName="2nd Grade" />
      <Grade gradeName="3rd Grade" onClick={clickedThingy} />
      <Grade gradeName="4th Grade" />
      <Grade gradeName="5th Grade" onClick={clickedThingy} />
      <Grade gradeName="6th Grade" />
      <Grade gradeName="7th Grade" />
    </div>
  )
}

export default App

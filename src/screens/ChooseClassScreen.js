import React from "react"

import Grade from "../components/Grade"
import Header from "../components/Header"

function ChooseClassScreen({ chooseClass }) {
  return (
    <div>
      <Header title="Choose Class" />
      <Grade gradeName="1st Grade" onClick={() => chooseClass("1")} />
      <Grade gradeName="2nd Grade" onClick={() => chooseClass("2")} />
      <Grade gradeName="3rd Grade" onClick={() => chooseClass("3")} />
      <Grade gradeName="4th Grade" onClick={() => chooseClass("4")} />
      <Grade gradeName="5th Grade" onClick={() => chooseClass("5")} />
      <Grade gradeName="6th Grade" onClick={() => chooseClass("6")} />
      <Grade gradeName="7th Grade" onClick={() => chooseClass("7")} />
      <Grade gradeName="8th Grade" onClick={() => chooseClass("8")} />
      <Grade gradeName="9th Grade" onClick={() => chooseClass("9")} />
      <Grade gradeName="10th Grade" onClick={() => chooseClass("10")} />
      <Grade gradeName="11th Grade" onClick={() => chooseClass("11")} />
      <Grade gradeName="12th Grade" onClick={() => chooseClass("12")} />
    </div>
  )
}

export default ChooseClassScreen

import React from "react"
import { Modal } from "semantic-ui-react"

import Avatar from "../components/Avatar"

class ViolationScreen extends React.Component {
  state = {
    isOpen: ""
  }

  openModal = type => {
    this.setState({ isOpen: type })
  }

  closeModal = () => {
    this.setState({ isOpen: "" })
  }

  render() {
    const { violations, people, changeViolation } = this.props
    const { isOpen } = this.state

    return (
      <div className="myGrid">
        {violations.map((violation, i) => (
          <Avatar
            image={violation.image}
            name={violation.name}
            title={violation.title}
            onClick={() => this.openModal(violation.title)}
            key={i}
          />
        ))}
        <Modal open={isOpen} onClose={this.closeModal} dimmer="blurring">
          <Modal.Header>{isOpen}</Modal.Header>
          <Modal.Content>
            <div className="myGrid">
              {people.map((person, i) => (
                <Avatar
                  key={i}
                  image={person.image}
                  name={person.name}
                  title={person.title}
                  checked={person[isOpen.toLowerCase()]}
                  onClick={() => changeViolation(i, isOpen.toLowerCase())}
                />
              ))}
            </div>
          </Modal.Content>
        </Modal>
      </div>
    )
  }
}

export default ViolationScreen

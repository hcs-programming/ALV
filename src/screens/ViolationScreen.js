import React from "react"
import { Modal } from "semantic-ui-react"

import Avatar from "../components/Avatar"

class ViolationScreen extends React.Component {
  state = {
    isOpen: false
  }

  openModal = () => {
    this.setState({ isOpen: true })
  }

  closeModal = () => {
    this.setState({ isOpen: false })
  }

  render() {
    const { violations, people } = this.props
    const { isOpen } = this.state

    return (
      <div className="myGrid">
        {violations.map((violation, i) => (
          <Avatar
            image={violation.image}
            name={violation.name}
            title={violation.title}
            onClick={this.openModal}
            key={i}
          />
        ))}
        <Modal open={isOpen} onClose={this.closeModal} dimmer="blurring">
          <Modal.Content>
            <div className="myGrid">
              {people.map((person, i) => (
                <Avatar
                  key={i}
                  image={person.image}
                  name={person.name}
                  title={person.title}
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

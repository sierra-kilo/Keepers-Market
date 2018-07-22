import React from 'react';
import EmailForm from './EmailForm'
import Intro from './Intro'
// import ThanksModal from './ThanksModal'

class Card extends React.Component {
  state = {
    submitted: false
  }

  // handleClearSelectedOption = () => {
  //   this.setState(() => ({selectedOption: undefined}))
  // }

  render() {
    return (
      <div>
        <Intro/>
        <EmailForm/>
        {/* <ThanksModal
          showModal={this.state.submitted}
        /> */}
      </div>
    )
  }
}

module.exports = Card

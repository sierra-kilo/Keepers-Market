import React from 'react'
import Materialize from 'materialize-css'
// import Button from './Button'

// function handleChange(e) {
//     Materialize.updateTextFields();
//   }

export default class EmailForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      error: ''
    }
    this.onEmailChange = this.onEmailChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  onEmailChange = (e) => {
    // Materialize.updateTextFields();
    const email = e.target.value;
    this.setState(() => ({ email }))
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.value;
    const err = this.props.onSubmit(email)
    this.setState(() => ( {err} ))

    if(!err) {
      e.target.elements.option.value = ''
    }
  }
  render() {
    return (
      <div className="row">
              <div className="input-field col s12">
                {this.state.error && <h3>{this.state.error}</h3>}
                <form onSubmit={this.handleSubmit}>
                  <input
                    id="email"
                    type="email"
                    className="validate"
                    name="email"
                    autoFocus
                    value={this.state.email}
                    onChange={this.onEmailChange}
                  />
                  <label htmlFor="email">Email</label>
                  <button type='submit' className="waves-effect waves-light btn button">Add Email</button>
                </form>

              </div>
            </div>
    )
  }
}

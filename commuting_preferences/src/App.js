import React, { Component } from 'react'

class UserDataForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      firstName: 'First Name',
      lastName: 'Last Name',
      languages: ''

    }
  }

  handleUpdate(event){
    const target = event.target
    const attribute = target.name
    const value = target.value
    this.setState({[attribute]: value})
  }

  handleSubmit(event){
    this.props.userDataUpdated(this.state)
    event.preventDefault()
  }
  handleLanguageChange(event){
    const target = event.target
    const attribute = target.name
    const value = target.checked

    const languages = this.state.languages
    languages[attribute] = value
    this.setState({languages: languages})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)} >
          <h2>What is your commuting preference?</h2>
          <h3>Does it stress you out??</h3>
          <h3>Please let us know !!</h3>

          <h4>Please enter your name:</h4>
          <input
            name='fullName'
            value={this.state.firstName}
            onChange={this.handleUpdate.bind(this)}
          />
          <input
            name='fullName'
            value={this.state.lastName}
            onChange={this.handleUpdate.bind(this)}
          />
          <h4>How long is your commute?</h4>
          <input
            name='time'
            value={this.state.time}
            onChange={this.handleUpdate.bind(this)}
          />

          <h4>What is your favorite beverage?</h4>
          <input
            type='radio'
            name='education'
            value="Coffee"
            checked={this.state.education === 'Coffee'}
            onChange={this.handleUpdate.bind(this)}
          />
          Coffee


          <input
            type='radio'
            name='education'
            value="Tea"
            checked={this.state.education === 'Tea'}
            onChange={this.handleUpdate.bind(this)}
          />
          Tea
          <h4>Please describe the commute:</h4>
          <textarea
            name='description'
            value={this.state.description}
            onChange={this.handleUpdate.bind(this)}
          />
          <br />

          <h4>Did you arrive on time?</h4>
          <input
            type='checkbox'
            name='yes'
            checked={this.state.languages.javascript}
            onChange={this.handleLanguageChange.bind(this)}
          />
          Yes
          <br />
          <input
            type='checkbox'
            name='no'
            checked={this.state.languages.python}
            onChange={this.handleLanguageChange.bind(this)}
          />
          No
          <br />
          <br />

          <input type='submit' value='Submit' />
        </form>
      </div>
    );
  }
}

export default UserDataForm;

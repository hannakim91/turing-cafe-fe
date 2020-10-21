import React, { Component } from "react";

class NewRezForm extends Component {
  constructor() {
    super()
    this.state = {
      name: "",
      date: "",
      time: "",
      number: 1
    }
  }
  updateValue = e => {
    this.setState({[e.target.name]: e.target.value})
  }
  updateNumber = e => {
    const numGuests = parseInt(e.target.value)
    this.setState({number: numGuests})
  }
  submitRez = e => {
    e.preventDefault()
    const { addNewRez } = this.props;
    const newRez = { ...this.state, id: Date.now() }
    addNewRez(newRez)
  }
  render() {
    return(
      <form>
        <input
          placeholder="name"
          name="name"
          type="text"
          onChange={this.updateValue}
          value={this.state.name}
          required="required"
        ></input>
        <input
          placeholder="date (MM/DD)"
          name="date"
          type="text"
          onChange={this.updateValue}
          value={this.state.date}
          required="required"
        ></input>
        <input
          placeholder="time (MM:SS)"
          name="time"
          type="text"
          onChange={this.updateValue}
          value={this.state.time}
          required="required"
        ></input>
        <input
          onChange={this.updateNumber}
          type="number"
          min="1"
          max="12"
          required="required"
        ></input>
        <button onClick={this.submitRez}>Add Reservation</button>
        
      </form>
    )
  }
}
export default NewRezForm;


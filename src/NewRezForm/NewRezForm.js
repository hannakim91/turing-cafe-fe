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
  render() {
    return(
      <form>
        <input
          placeholder="name"
          name="name"
          type="text"
          onChange={this.updateValue}
          value={this.state.name}
        ></input>
        <input
          placeholder="date (MM/DD)"
          name="date"
          type="text"
          onChange={this.updateValue}
          value={this.state.date}
        ></input>
        <input
          placeholder="time (MM:SS)"
          name="time"
          type="text"
          onChange={this.updateValue}
          value={this.state.time}
        ></input>
        <input
          onChange={this.updateNumber}
          type="number"
          min="1"
          max="12"
          required="required"
        ></input>
        
      </form>
    )
  }
}
export default NewRezForm;


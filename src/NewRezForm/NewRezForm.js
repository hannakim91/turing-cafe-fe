import React, { Component } from "react";

class NewRezForm extends Component {
  constructor() {
    super()
    this.state = {
      name: "",
      date: "",
      time: "",
      number: ""
    }
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
          onChange={this.updateValue}
          type="number of guests"
          min="1"
          max="12"
          value={this.state.number}
          required="required"
        ></input>
        
      </form>
    )
  }
}
export default NewRezForm;


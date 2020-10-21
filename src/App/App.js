import React, { Component } from "react";
import RezContainer from "../RezContainer/RezContainer";
import "./App.css";
import { getReservations } from "../apiCalls";

class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: [],
      error: ""
    }
  }

  async componentDidMount() {
    try {
      const reservations = await getReservations()
      this.setState({reservations})
    } catch (error) {
      this.setState({error: error.message})
    }
  }

  render() {
    return (
      <div className="App">
        <h1 className="app-title">Turing Cafe Reservations</h1>
        <div className="resy-form">

        </div>
        <RezContainer />
          
      </div>
    )
  }
}

export default App;

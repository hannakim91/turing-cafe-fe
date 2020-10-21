import React, { Component } from "react";
import RezContainer from "../RezContainer/RezContainer";
import NewRezForm from "../NewRezForm/NewRezForm";
import { getReservations } from "../apiCalls";
import "./App.css";

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

  addNewRez = newRez => {
    this.setState({ reservations: [...this.state.reservations, newRez]})
  }
  render() {
    return (
      <div className="App">
        <h1 className="app-title">Turing Cafe Reservations</h1>
        <NewRezForm addNewRez={this.addNewRez}/>
        <RezContainer reservations={this.state.reservations} />       
      </div>
    )
  }
}

export default App;

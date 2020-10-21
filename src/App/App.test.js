import React from "react";
import ReactDOM from "react-dom"
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

import App from "./App";

describe("App", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("Can add a new reservation", () => {
    render(<App />)
    
    userEvent.type(screen.getByPlaceholderText("name"), "Ricky Bobby")
    userEvent.type(screen.getByPlaceholderText("date (MM/DD)"), "10/4")
    userEvent.type(screen.getByPlaceholderText("time (MM:SS)"), "12:34")
    userEvent.type(screen.getByPlaceholderText("Number of guests"), "10")
    userEvent.click(screen.getByRole("button", {name: "Add Reservation"}))
    expect(screen.getByText("Reservation for Ricky Bobby:")).toBeInTheDocument();

  })

})




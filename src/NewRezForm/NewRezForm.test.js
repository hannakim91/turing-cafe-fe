import React from "react";
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

import NewRezForm from "./NewRezForm";

describe("New Reservation Form", () => {
  it("Should render with inputs and a submit button", () => {
    render(<NewRezForm />);

    expect(screen.getByPlaceholderText("name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("date (MM/DD)")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("time (MM:SS)")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Number of guests")).toBeInTheDocument();
    expect(screen.getByRole("button", {name: "Add Reservation"})).toBeInTheDocument();
  })

  it("Should update as data is entered into inputs", () => {
    render(<NewRezForm />)

    userEvent.type(screen.getByPlaceholderText("name"), "Ricky Bobby")
    expect(screen.getByDisplayValue("Ricky Bobby")).toBeInTheDocument()
  })
})
//what property of input element gets modified when you type into it -- make an assertion about that property
// do inputs change when typed in?
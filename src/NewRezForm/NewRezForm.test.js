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
    expect(screen.getByRole("button", {name: "Add Reservation"})).toBeInTheDocument();
  })
})
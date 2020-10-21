import React from "react";
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom";

import RezCard from "./RezCard";

describe("Reservation Card Card", () => {
  it("Should render a reservation", () => {
    render(
      <RezCard 
        id={1}
        key={1}
        name="Namey Name"
        date="10/10"
        time="10:10"
        number={5}
      />
    )
    screen.debug()
    expect(screen.getByText("Reservation for Namey Name:")).toBeInTheDocument();
    expect(screen.getByText("10/10 - 10:10")).toBeInTheDocument();
    expect(screen.getByText("Party of 5")).toBeInTheDocument();
  })
})
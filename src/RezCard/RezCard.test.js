import React from "react";
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom";

import RezCard from "./RezCard";

describe("Reservation Card Card", () => {
  it("Should render a reservation", () => {
    render(
      <RezCard />
    )
    screen.debug()
  })
})
import React from "react";
import RezCard from "../RezCard/RezCard";

function RezContainer({ reservations }) {
  const RezCards = reservations.map(rez => {
    return <RezCard
      id={rez.id}
      key={rez.id}
      name={rez.name}
      date={rez.date}
      time={rez.time}
      number={rez.number}
    />
      
  })
  return (
    <>
    <h2>THIS IS REZCONTAINER</h2>
      {RezCards}
    </>
  )
}

export default RezContainer;
import React from "react";

function RezCard({ id, name, date, time, number}) {
  return (
    <article className="rez-card" id={id}>
      <h3>Reservation for {name}:</h3>
      <h4>{date} - {time}</h4>
      <p>Party of {number}</p>
    </article>
  )
}

export default RezCard;
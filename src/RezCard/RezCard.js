import React from "react";

function RezCard({ id, name, date, time, number}) {
  return (
    <article className="rez-card" id={id}>
      <h3>Reservation {number}:</h3>
      <h4>{name}</h4>
      <p>{date} - {time}</p>
    </article>
  )
}

export default RezCard;
export const getReservations = async () => {
  const promise = await fetch("http://localhost:3001/api/v1/reservations")
  return await promise.json()
}

export const postNewReservation = async (data) => {
  const promise = await fetch("http://localhost:3001/api/v1/reservations",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
  })
  return await promise.json();
}
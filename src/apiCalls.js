export const getReservations = async () => {
  const promise = await fetch("http://localhost:3001/api/v1/reservations")
  return await promise.json()
}
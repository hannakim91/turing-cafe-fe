export const getReservations = async () => {
  try {
    const promise = await fetch("http://localhost:3001/api/v1/reservations")
    return await promise.json()
  } catch (err) {
    throw err;
  }
}
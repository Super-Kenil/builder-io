const eventDate = new Date(Date.now() + 5 * 24 * 60 * 60 * 1000)

const calculateTimeToEvent = () => {
  const currentDate = new Date()

  const timeRemaining = eventDate.getTime() - currentDate.getTime()

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24))
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)))
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60) / (1000 * 60)))
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000)

  return { days, hours, minutes, seconds }
}

export default calculateTimeToEvent
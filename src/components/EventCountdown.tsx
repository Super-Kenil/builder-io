"use client"
import { useEffect, useState } from "react"

import calculateTimeToEvent from "@/utils/countdown"
import { type Framework } from "@/utils/framework-utils"
import TimeUnit from "./TimeUnit"

const EventCountdown = ({ currentFramework }: { currentFramework: Framework }) => {

  const [countdown, setCountdown] = useState(calculateTimeToEvent())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCountdown(calculateTimeToEvent())
    }, 2000)

    return () => clearInterval(intervalId)

  }, [])

  return (
    <div className="flex gap-[10px] text-center">
      <TimeUnit label="DAYS" value={countdown.days} currentFramework={currentFramework} />
      <TimeUnit label="HOURS" value={countdown.hours} currentFramework={currentFramework} />
      <TimeUnit label="MINUTES" value={countdown.minutes} currentFramework={currentFramework} />
      <TimeUnit label="SECONDS" value={countdown.seconds} currentFramework={currentFramework} />
    </div>
  )
}

export default EventCountdown
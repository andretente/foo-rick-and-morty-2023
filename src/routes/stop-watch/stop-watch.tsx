import './stop-watch.css'

import { useEffect, useRef, useState } from 'react'

export default function StopWatch() {
  const [seconds, setSeconds] = useState<number>(0)
  const [isRunning, setIsRunning] = useState<boolean>(false)

  const ref = useRef<ReturnType<typeof setInterval> | null>(null)

  const toggleStopwatch = () => {
    setIsRunning(!isRunning)
  }

  const resetStopwatch = () => {
    setIsRunning(false)
    setSeconds(0)
  }

  useEffect(() => {
    ref.current = setInterval(() => {
      console.log('👷 Tick 👷')
      if (isRunning) setSeconds((state) => state + 1)
    }, 1000)

    return () => {
      if (ref.current) clearInterval(ref.current)
    }
  }, [isRunning])

  return (
    <div>
      <h1>{seconds}</h1>

      <button className="stopwatch__button" onClick={toggleStopwatch}>
        {isRunning ? 'Stop' : 'Start'}
      </button>

      <button className="stopwatch__button" onClick={resetStopwatch}>
        Reset
      </button>
    </div>
  )
}

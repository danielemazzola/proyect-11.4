import { useState, useEffect } from 'react'

const useTime = () => {
  const [currentDate, setCurrentDate] = useState(new Date())

  useEffect(() => {
    const intervalTime = setInterval(() => {
      setCurrentDate(new Date())
    }, 1000)
    return () => clearInterval(intervalTime)
  }, [])
  return currentDate.toLocaleTimeString()
}

export default useTime

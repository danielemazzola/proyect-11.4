import React, { useCallback, useMemo } from 'react'
import './Time.css'
const Time = ({ date }) => {
  return <div className='timer'>{date ? date : 'Loading...'}</div>
}

export default Time

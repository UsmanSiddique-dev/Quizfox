import React from 'react'

function Timer({time}) {
  return (
     <div className="alert alert-info text-center fw-bold">
        ⏳ Time Left: {time}
      </div>
  )
}

export default Timer
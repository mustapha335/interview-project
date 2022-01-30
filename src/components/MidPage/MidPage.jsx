import React, { useState } from 'react'
import About from '../About/About'
import History from '../History/History'
import './midPage.css'

const MidPage = () => {
  const [isVisibile, setisVisible] = useState(false)
  const [visible, setVisible] = useState(false)
  const handleClick = () => {
    setisVisible(!isVisibile)
  }
  const handleClick2 = () => {
    setVisible(!visible)
  }
  return (
    <div className="midPage">
      <div className="history">
        <h1 className="history_text">Learn About SpaceX.</h1>
        <button onClick={handleClick2} className="history_btn" type="submit">
          Know more...
        </button>
        {visible && <About />}
      </div>
      <div className="launch">
        <h1 className="launch_text">Learn About The history of SpaceX.</h1>
        <button onClick={handleClick} className="launch_btn" type="submit">
          Know more...
        </button>
        {isVisibile && <History />}
      </div>
    </div>
  )
}

export default MidPage

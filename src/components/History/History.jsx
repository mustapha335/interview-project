import React, { useState, useEffect } from 'react'
import './history.css'
import axios from 'axios'

const baseURL = 'https://api.spacexdata.com/v3/history'
const History = () => {
  const [post, setPost] = useState([])

  const fetchUrl = (url) => {
    axios.get(url).then((response) => {
      setPost(response.data)
    })
  }

  useEffect(() => {
    fetchUrl(baseURL)
  })

  return (
    <div className="info">
      {post.map((item, i) => {
        return (
          <div className="info_desc" key={i}>
            <h1> {item.title}.</h1>
            <h2>{item.details}</h2>
            <hr />
          </div>
        )
      })}
    </div>
  )
}

export default History

import React, { useState, useEffect } from 'react'
import './about.css'
import axios from 'axios'

const baseURL = 'https://api.spacexdata.com/v3/info'
const About = () => {
  const [post, setPost] = useState([])

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data)
    })
  }, [])
  return (
    <div className="info">
      <div className="info_desc">
        <h1 className="header">Company Name : {post.name}</h1>
        <h1>Owner : {post.ceo}</h1>
        <h2>Founded : {post.founded}</h2>
        <h2>Employees : {post.employees}</h2>

        <h1>Summary :</h1>
        <h2>{post.summary}</h2>
      </div>
    </div>
  )
}

export default About

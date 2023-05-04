import React from 'react'
import { Link } from 'react-router-dom'
import "./NotFound.css"
function NotFound() {
  return (
    <div className='not-found-container'>
        <span className='family'>404</span>
        <span>OH SNAP!</span>
        <span>The page you are looking for doesn't exist.</span>
        <Link to="/"><button className='notfound'>CONTINUE SHOPPING</button></Link>
    </div>
  )
}

export default NotFound
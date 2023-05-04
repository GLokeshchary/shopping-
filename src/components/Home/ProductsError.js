import React from 'react'
import {Link, useRouteError } from 'react-router-dom'

function ProductsError() {
    const error = useRouteError()
  return (
    <div className='careers-error'>
        <h2>Error</h2>
        <p>{error.message}</p>
        <Link to="/">Back to HomePage</Link>
    </div>
  )
}

export default ProductsError
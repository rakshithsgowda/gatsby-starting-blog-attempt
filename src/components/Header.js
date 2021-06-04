import { Link } from 'gatsby'
import React from 'react'

export default function Header() {
  return (
    <div>
      <h1>I am header</h1>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/blogs'>Blogs</Link>
      <Link to='/doesntexist'>Doesnt exists</Link>
    </div>
  )
}

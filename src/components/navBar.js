import React from "react"
import { Link } from "gatsby"

const NavBar = () => {
  return (
    <>
      <span>Nehal.</span>
      <div>
        <Link to="#home">Home</Link>
        <Link to="#works">Works</Link>
        <Link to="#contact">Contact</Link>
      </div>
    </>
  )
}

export default NavBar

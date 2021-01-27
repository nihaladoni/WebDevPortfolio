import React from "react"
import { Link } from "gatsby"

import styled from "styled-components"

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;

  span {
    font-size: ${({ theme }) => theme.fontSizes.medium};
    font-weight: bold;
  }

  a {
    margin: 0 15px;
    font-size: ${({ theme }) => theme.fontSizes.small};
    text-decoration: none;
    color: ${({ theme }) => theme.colors.textColor};
  }
  a:last-child {
    margin-right: 0;
  }
`

const NavBar = () => {
  return (
    <Nav>
      <span>Nehal.</span>
      <div>
        <Link to="#home">Home</Link>
        <Link to="#works">Works</Link>
        <Link to="#contact">Contact</Link>
      </div>
    </Nav>
  )
}

export default NavBar

import React from "react"

import Fade from "react-reveal/Fade"

import heroImage from "../images/hero.png"

const Hero = () => {
  return (
    <>
      <div>
        <Fade left>
          <h1>
            Hello,
            <br /> I'm Nehal <br />
            <span>Web Developer</span>
          </h1>
        </Fade>

        <Fade right>
          <img src={heroImage} alt="man-thinking" />
        </Fade>
      </div>
    </>
  )
}

export default Hero

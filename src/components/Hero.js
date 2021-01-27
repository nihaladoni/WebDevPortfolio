import React from "react"
import { Col, Image, Row } from "react-bootstrap"
import styled from "styled-components"
import Fade from "react-reveal/Fade"

import heroImage from "../images/hero.png"

const HeroLeft = styled.div`
  /* background-color: red; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 85vh;
  h1 {
    font-weight: bolder;
    font-size: ${({ theme }) => theme.fontSizes.large};
    background-color: #f3ec78;
    background-image: linear-gradient(45deg, dodgerblue, purple, red);
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
  }

  span {
    color: ${({ theme }) => theme.colors.highLightRed};
  }
`
const HeroRight = styled.div`
  /* background-color: green; */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 85vh;
`

const Hero = () => {
  return (
    <>
      <Row>
        <Col sm={12} md={6}>
          <HeroLeft>
            <Fade left>
              <h1>
                Hello,
                <br /> I'm Nehal <br />
                <span>Web Developer</span>
              </h1>
            </Fade>
          </HeroLeft>
        </Col>
        <Col sm={12} md={6}>
          <HeroRight>
            <Fade right>
              <Image src={heroImage} fluid alt="man-thinking" />
            </Fade>
          </HeroRight>
        </Col>
      </Row>
    </>
  )
}

export default Hero

import React from "react"
import { Row } from "react-bootstrap"
import styled from "styled-components"

const ProjectSection = styled.div`
  height: 100vh;
  .card {
    border-radius: 7px;
    margin: 12px;
    padding: 16px 16px 10px;
    width: 100%;
    background-color: #fff;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
}
  }
  h1 {
    text-align: center;
    margin-bottom:20px;
  }



  .links {
    margin-top: 15px;
    a {
      text-decoration: none;
    }
  }
  p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .keywords {
    background-color: ${({ theme }) => theme.colors.labelColor};
    padding: 4px 12px;
    margin: 0 8px 14px 0;
    border-radius: 5px;
  }
`
const StyledStatus = styled.p`
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 5px;
  color: ${({ status }) => (status ? "green" : "#ffc30b")};
`

const Project = ({ children }) => {
  return (
    <ProjectSection>
      <h1 id="works">Projects</h1>
      <Row>{children}</Row>
    </ProjectSection>
  )
}

export { StyledStatus }
export default Project

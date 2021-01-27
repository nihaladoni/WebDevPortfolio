import React from "react"

import { graphql } from "gatsby"
import Helmet from "react-helmet"

import Layout from "../components/layout"
import NavBar from "../components/navBar"
import Theme from "../components/Theme"
import Hero from "../components/Hero"
import Project, { StyledStatus } from " ../components/Project"

const IndexPage = ({ data }) => (
  <>
    {/* //?   HTML HEAD */}

    <Helmet>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
        rel="stylesheet"
      />

      <title>Nehal | Web developer</title>
    </Helmet>

    {/* // ? HTML BODY */}

    <Theme>
      {console.log(data)}
      <Layout>
        <NavBar />
        <Hero />

        <Project>
          {data.allSanityPost.edges.map(item => {
            const {
              _id,
              post_name,
              completed,
              description,
              keywords,
              projectUrl,
            } = item.node

            return (
              <Col key={_id} md={6}>
                <div className="card">
                  <h4>{post_name}</h4>
                  <StyledStatus status={completed}>
                    {completed ? "Completed" : "Pending"}
                  </StyledStatus>
                  <p>{description}</p>
                  <div className="box">
                    {keywords.map((ele, idx) => (
                      <span key={idx} className="keywords">
                        {ele}
                      </span>
                    ))}
                  </div>
                  <p className="links">
                    {projectUrl ? (
                      <a href={projectUrl} target="_blank">
                        Open Project
                      </a>
                    ) : (
                      <span>Coming Soon..!</span>
                    )}
                  </p>
                </div>
              </Col>
            )
          })}
        </Project>
      </Layout>
    </Theme>
  </>
)

//  ! Query

export const query = graphql`
  query MyQuery {
    allSanityPost {
      edges {
        node {
          keywords
          post_name
          _createdAt(fromNow: true)
          _id
          slug {
            current
          }
          image_url {
            asset {
              url
            }
          }
          completed
          description
          projectUrl
        }
      }
    }
  }
`

export default IndexPage

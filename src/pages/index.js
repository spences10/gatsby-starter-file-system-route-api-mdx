import { Heading, Link, Text } from '@chakra-ui/react'
import { Link as GatsbyLink } from 'gatsby'
import React from 'react'
import SEO from '../components/seo'

export default function IndexPage({ data }) {
  const posts = data.allMdx.nodes

  return (
    <>
      <SEO title="Home" />
      <Heading>Hi people</Heading>
      <Text fontSize="xl" my={5}>
        Welcome to your new Gatsby site.
      </Text>
      <Text fontSize="xl" my={5}>
        Now go build something great.
      </Text>
      {posts.map(post => {
        return (
          <Link
            as={GatsbyLink}
            textDecor="underline"
            color="purple.500"
            fontSize="xl"
            to={post.slug}
          >
            <p>{post.frontmatter.title}</p>
          </Link>
        )
      })}
      <Link
        as={GatsbyLink}
        textDecor="underline"
        color="purple.500"
        fontSize="xl"
        to="/page-2/"
      >
        Go to page 2
      </Link>
      <br />
      <Link
        as={GatsbyLink}
        textDecor="underline"
        color="purple.500"
        fontSize="xl"
        to="/using-typescript/"
      >
        Go to "Using TypeScript"
      </Link>
    </>
  )
}

export const query = graphql`
  {
    allMdx {
      nodes {
        id
        slug
        frontmatter {
          date
          title
        }
      }
    }
  }
`

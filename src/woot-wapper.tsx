import { ChakraProvider, Text } from '@chakra-ui/react'
import { MDXProvider } from '@mdx-js/react'
import React from 'react'
import Layout from './components/layout'

const components = {
  h2: props => <Text fontSize="3xl" {...props} />,
  p: props => <Text fontSize="xl" {...props} />,
}

export const wrapPageElement = ({ element }) => {
  return (
    <ChakraProvider resetCSS>
      <MDXProvider components={components}>
        <Layout>{element}</Layout>
      </MDXProvider>
    </ChakraProvider>
  )
}

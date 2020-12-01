import {
  ChakraProvider,
  extendTheme,
  ListItem,
  Text,
  UnorderedList,
} from '@chakra-ui/react'
import { MDXProvider } from '@mdx-js/react'
import React from 'react'
import Code from './components/code'
import Layout from './components/layout'

const components = {
  h2: props => <Text fontSize="3xl" {...props} />,
  h3: props => <Text fontSize="2xl" {...props} />,
  h4: props => <Text fontSize="1xl" {...props} />,
  p: props => <Text fontSize="xl" {...props} />,
  code: props => <Code {...props} />,
  ul: props => (
    <UnorderedList {...props}>
      <ListItem {...props} />
    </UnorderedList>
  ),
}

const config = {
  useSystemColorMode: true,
  initialColorMode: 'dark',
}

const customTheme = extendTheme({ config })

export const wrapPageElement = ({ element }) => {
  return (
    <ChakraProvider resetCSS theme={customTheme}>
      <MDXProvider components={components}>
        <Layout>{element}</Layout>
      </MDXProvider>
    </ChakraProvider>
  )
}

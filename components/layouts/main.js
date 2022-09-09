import React from 'react'
import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import Navbar from '../navbar.js'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🇮🇹</text></svg>"
        />
        <title>Luigis</title>
      </Head>
      <Navbar path={router.asPath} />

      <Container maxW="100%" pt={6}>
        {children}
      </Container>
    </Box>
  )
}

export default Main

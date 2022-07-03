import Head from 'next/head';
import { Box } from '@chakra-ui/react';

import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({children, setProgress}) => {
  return (
    <>
      <Head>
        <title>Real Estate</title>
      </Head>
      <Box maxWidth="1280px" m="auto">
      <header>
        <Navbar />
      </header>
      <main>
        {children}
        {/* whatever we pass inside the layour component the children become it  */}
      </main>
      <footer>
        <Footer />
      </footer>
      </Box>
    </>
  )
}

export default Layout
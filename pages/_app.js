import Router from 'next/router';
import Head from 'next/head';
import NProgress from 'nprogress';
import { ChakraProvider } from '@chakra-ui/react';
import Layout from '../components/Layout';
import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react';


const MyApp = ({ Component, pageProps })=>{
  const [progress, setProgress] = useState(0)
  NProgress.configure({showSpinner:false})

  Router.events.on('routerChangeStart',()=>{
    NProgress.start()
  })

  Router.events.on('routeChangeComplete',()=>{
    NProgress.done()
  })
    return (
      <>
      <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
        <Head>
        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css' integrity='sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ==' crossOrigin='anonymous' referrerPolicy='no-referrer' />
        </Head>

        <ChakraProvider>
          <Layout>
          <Component {...pageProps} />
          </Layout>          
        </ChakraProvider>
      </>
    )
}
export default MyApp
// we have to do in every next prohject



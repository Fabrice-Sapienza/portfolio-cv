import { useEffect } from 'react';
import '../styles/globals.css'
import Layout from "../components/Container/Layout"

function MyApp({ Component, pageProps }) {

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp;

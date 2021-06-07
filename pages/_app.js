/* eslint-disable react/prop-types */
import Head from 'next/head'
import { Provider as ReduxProvider } from 'react-redux'
import { Provider as NextAuthProvider } from 'next-auth/client'
import store from './../store/redux/store'
import '../public/icons/line-awesome/1.3.0/css/line-awesome.min.css'
import '../styles/globals.css'
import '../styles/layout.css'
import '../styles/utilities.css'
import '../styles/typography.css'
import '../styles/inputs.css'

import ModalManager from '../components/ui/modals/ModalManager'

function MyApp({ Component, pageProps }) {
  return (
    <NextAuthProvider session={pageProps.session} clientMaxAge={60}>
      <ReduxProvider store={store}>
        <Head>
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1"
          />
        </Head>
        <ModalManager />
        <Component {...pageProps} />
      </ReduxProvider>
    </NextAuthProvider>
  )
}

export default MyApp

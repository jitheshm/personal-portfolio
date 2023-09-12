import AdminLayout from '@/components/Layout/AdminLayout';
import UserLayout from '@/components/Layout/UserLayout'

import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  var Layout;
  pageProps.admin?Layout=AdminLayout:Layout=UserLayout
  return (

    <Layout>
      <Component {...pageProps} />
    </Layout>


  )
}

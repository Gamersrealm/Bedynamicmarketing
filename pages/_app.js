import RootLayout from '@/components/Layout'
import '@/styles/globals.css'


function App({ Component, pageProps }) {
  return (
    
  <RootLayout>

  <Component {...pageProps} />
  </RootLayout>
  )
}

export default App
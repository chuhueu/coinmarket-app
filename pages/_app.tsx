import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MoralisProvider } from 'react-moralis'

function MyApp({ Component, pageProps }: AppProps) {
  const envData = {
    serverUrl: 'http://localhost:1337/server',
    appId: '001',
  }
  console.log(envData);
  return (
    <MoralisProvider
      serverUrl={envData.serverUrl}
      appId={envData.appId}
    >
      <Component {...pageProps} />
    </MoralisProvider>
  )
}

export default MyApp

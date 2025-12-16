import type { AppProps } from 'next/app'
import { inject } from '@vercel/analytics'

// Initialize Vercel Web Analytics
inject()

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

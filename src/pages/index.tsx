import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>EEZ$COINZ - Green & Gold Cryptocurrency</title>
        <meta name="description" content="EEZ$COINZ - EZ Green Gold eco-forward cryptocurrency by Lehnhoff Ventures" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{ padding: '2rem', fontFamily: 'sans-serif', maxWidth: '800px', margin: '0 auto' }}>
        <h1>EEZ$COINZ</h1>
        <h2>EZ Green Gold Eco-Forward Cryptocurrency</h2>
        
        <p>Welcome to EEZ$COINZ by Lehnhoff Ventures</p>
        
        <p>
          EEZ$COINZ is a green and gold eco-forward cryptocurrency designed for sustainable and 
          forward-thinking digital finance.
        </p>

        <h3>Features</h3>
        <ul>
          <li>Eco-friendly blockchain infrastructure</li>
          <li>Sustainable cryptocurrency solution</li>
          <li>Vercel Web Analytics integrated</li>
        </ul>

        <p style={{ marginTop: '2rem', fontSize: '0.9em', color: '#666' }}>
          © 2024 Lehnhoff Ventures. All rights reserved.
        </p>
      </main>
    </>
  )
}

export default Home

import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Block, BlockDirection } from '../modules/primitives/block'
import styles from '../styles/Home.module.css'
import solanaBrewingCompany from '../solana-brewing-co.json'
import { SBC } from '../sbc'

const sbc = solanaBrewingCompany as SBC

const Home: NextPage = () => {
  return (
    <div className='bg'>
      <Head>
        <title>Solana Brewing Company</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <header style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Image src={'/solana-brewing-company.png'} width={523} height={287} alt='Solana Brewing Company' />
          <button type='button' style={{
            position: 'fixed',
            backgroundColor: '#FFCE22',
            borderRadius: '4px',
            border: 'none',
            color: '#000',
            fontSize: '1.5rem',
            padding: '0.5rem 1rem',
            top: '1rem',
            right: '1rem',
            boxShadow: '0 2px 8px 4px rgba(0, 0, 0, 0.12)'
          }}>F.A.Q</button>
        </header>
        {sbc.blocks.map((block, index) => {
          return (
            <Block
              key={index}
              text={block.text}
              asset={block.asset && <Image src={`/${block.asset}.png`} width={188} height={188} />}
              dir={block.dir as BlockDirection}
              bg={block.bg}
            />
          )
        })}
        <section
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '50vh'
          }}
        >
          <Image
            className='mint-btn'
            src={'/mint-button.png'}
            width={795}
            height={389}
            alt='Mint your NFT'
          />
        </section>
      </main>
      <style jsx global>
        {`
          :root {
            --primary: #FE7474;
          }
          body {
            background-color: var(--primary);
          }
          .mint-btn {
            cursor: pointer;
          }
        `}
      </style>
    </div>
  )
}

export default Home

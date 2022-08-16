import { GetServerSideProps, GetStaticProps } from 'next'
import styles from './home.module.scss'
import Head from 'next/head';
import { SubscribeButton } from '../components/SubscribeButton';
import { stripe } from '../services/stipe';



interface HomeProps {
  product: {
    priceId: string,
    amount: number
  }
}

export default function Home({ product }: HomeProps) {

  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>🤲 Hey, welcome</span>
          <h1>News about the <span>React</span> world.</h1>
          <p>
            Get access to all the publications <br />
            <span>For {product.amount} month</span>
          </p>
          <SubscribeButton priceId={product.priceId} />
        </section>
        <img src='/images/avatar.svg' alt='Girl coding' />
      </main>
    </>
  )
}

export const getServerSideProps: GetStaticProps = async () => {

  const price = await stripe.prices.retrieve('price_1LXEB1GXPwoCz16itUKmmCZL')

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-Us', {
      style: 'currency',
      currency: 'USD'
    }).format(price.unit_amount / 100,)

  }

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24
  }

}
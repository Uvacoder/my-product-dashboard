import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';

import Layout from '@components/Layout';
import Section from '@components/Section';
import Container from '@components/Container';
import Button from '@components/Button';

export default function Dashboard() {
  const router = useRouter();

  async function handleOnDelete() {
    const results = await fetch('/api/products/delete', {
      method: 'POST',
      body: JSON.stringify({
        id: router.query.id
      })
    }).then(r => r.json())

    if ( results?.results?.deleted_hashes?.includes(router.query.id) ) {
      router.push(`/`);
    }
  }

  return (
    <Layout>
      <Head>
        <title>Delete - Space Jelly Store</title>
        <meta name="description" content="Delete a product" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Section>
        <Container>
          <h1>Delete Product</h1>
          <h2>Are you sure you want to delete <strong>{ router.query.title }</strong>?</h2>
          <Button color="red" onClick={handleOnDelete}>Delete</Button>
        </Container>
      </Section>
    </Layout>
  )
}
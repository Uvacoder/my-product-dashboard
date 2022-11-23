import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';

import Layout from '@components/Layout';
import Section from '@components/Section';
import Container from '@components/Container';
import Button from '@components/Button';
import Form from '@components/Form';
import FormRow from '@components/FormRow';

export default function Dashboard() {
  const router = useRouter();

  async function handleOnAdd(e) {
    e.preventDefault();

    const fields = Array.from(e.currentTarget.elements);
    const product = fields.filter(({ type }) => type !== 'submit').reduce((prev, current) => {
      prev[current.name] = current.value;
      return prev;
    }, {});
  }

  return (
    <Layout>
      <Head>
        <title>Add - Space Jelly Store</title>
        <meta name="description" content="Add a product" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Section>
        <Container>
          <h1>Add Product</h1>
          <Form onSubmit={handleOnAdd}>
            <FormRow>
              <label>Title</label>
              <input type="text" name="title" />
            </FormRow>
            <FormRow>
              <label>Sku</label>
              <input type="text" name="sku" />
            </FormRow>
            <FormRow>
              <label>Price</label>
              <input type="text" name="price" />
            </FormRow>
            <FormRow>
              <label>Image</label>
              <input type="text" name="image" />
            </FormRow>
            <FormRow>
              <Button type="submit">Add Product</Button>
            </FormRow>
          </Form>
        </Container>
      </Section>
    </Layout>
  )
}
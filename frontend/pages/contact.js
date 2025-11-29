import Head from 'next/head';
import Form from '../components/Form';

function ContactPage() {
  return (
    <div>
      <Head>
        <title>Contact Page</title>
      </Head>
      <h2>Contact Us</h2>
      <Form />
    </div>
  );
}

export default ContactPage;
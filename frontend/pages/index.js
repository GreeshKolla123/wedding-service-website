import Head from 'next/head';
import Hero from '../components/Hero';
import Card from '../components/Card';

function HomePage() {
  return (
    <div>
      <Head>
        <title>Home Page</title>
      </Head>
      <Hero />
      <div className="container">
        <h2>Wedding Details</h2>
        <Card title="Wedding Title" date="Wedding Date" time="Wedding Time" location="Wedding Location" dressCode="Wedding Dress Code" />
      </div>
    </div>
  );
}

export default HomePage;
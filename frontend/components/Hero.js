import Image from 'next/image';

function Hero() {
  return (
    <div className="hero">
      <Image src="/images/hero.jpg" width={1200} height={800} />
      <h1>Welcome to our wedding website!</h1>
    </div>
  );
}

export default Hero;
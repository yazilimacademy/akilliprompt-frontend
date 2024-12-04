import Main from '@/components/Main';
import Header from '@/components/landing/Header';
import Hero from '@/components/landing/Hero';
import Benefit from '@/components/landing/Benefit';
import Feature from '@/components/landing/Feature';
import Cta from '@/components/landing/CTA';
import Footer from '@/components/landing/Footer';

export default function Home() {
  return (
    <>
      <Header/>
      <Main>
        <Hero/>
        <Benefit/>
        <Feature/>
        <Cta/>
      </Main>
      <Footer/>
    </>
  );
}

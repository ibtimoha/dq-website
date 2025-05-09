import { useEffect, useState } from 'react';
import ContactUs from '../../components/ContactUs';
import MainLayout from '../../components/MainLayout';
import TabItem from '@theme/TabItem';
import Tabs from '@theme/Tabs';
import Translate from '@docusaurus/Translate';
import clsx from 'clsx';


function PricePageBanner() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

//elfsight number 1 is the price matrix, number 2 is the pop-up demo form:

  return (
    <>
      <section className='homepage-banner'>
        <div className={clsx('hero-25 hero hero--primary heroBanner')}>
          <div className="container">
          <h1 className='section-title'>Priser<span className='orange'>.</span></h1>
          <h4 className='section'>Her er våre priser. Ta gjerne kontakt for en demo!</h4>
            <div className="elfsight-app-ff89e3a5-ee09-41f1-8424-30531e5f84c0" data-elfsight-app-lazy />
            <div class="elfsight-app-954fa691-f581-4d70-a48d-6ba7822b0756" data-elfsight-app-lazy></div>
            <div className="row">
            </div>
          </div>
          <span className="bg"></span>
        </div>
      </section>
    </>
  );
}

function AboutIntegrations() {
  return (
    <section className='about-integrations section-pd'>
      <div className="container">
        <div className='integrations-center'>
          <h2>Integrasjoner<span className='orange'>.</span> </h2>
          <p>Vi jobber løpende med integrasjoner, og integrasjoner er noe vi kan! <a href="https://digiquip.no/about" target="_blank">Ta kontakt med Andreas eller Olav for å høre mer</a>.</p>
        </div>
      </div>
    </section>
  )
}

// Price page
export default function About() {
  return (
    <MainLayout>
      <PricePageBanner />
      <AboutIntegrations />
      <ContactUs />
    </MainLayout>
  );
}



import Head from 'next/head';
import About from '../src/components/Sections/About/About';
import Career from '../src/components/Sections/Career/Career';
import Skill from '../src/components/Sections/Skill/Skill';
import Contact from '../src/components/Sections/Contact/Contact';
import metaImg from '../public/assets/humanDev.gif';

export default function Home() {
  return (
    <>
      <Head>
        <title>Fabrice Sapienza - Développeur Web Front-End React.JS</title>
        <meta name="author" content="Fabrice Sapienza" />
        <meta
          name="description"
          content="Bienvenue sur le site web de Fabrice Sapienza, développeur web front, React js à Marignane. Vous y trouverez mon portfolio, mon cv et les coordonnées pour me contacter !"
        />

        <meta property="og:url" content="https://www.fabrice-sapienza.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Fabrice Sapienza - Développeur Web Front-End React.JS" />
        <meta
          property="og:description"
          content="Bienvenue sur le site web de Fabrice Sapienza, développeur web front, React js à Marignane. Vous y trouverez mon portfolio, mon cv et les coordonnées pour me contacter !"
        />
        <meta property="og:image" content={metaImg.src} />

        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#fefefe" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      </Head>
      <About anchorScrollSpy="about" />
      <Career anchorScrollSpy="career" />
      <Skill anchorScrollSpy="skill" />
      <Contact anchorScrollSpy="contact" />
    </>
  );
}

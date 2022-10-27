import Head from 'next/head';
import About from '../components/Sections/About/About';
import Careers from '../components/Sections/Careers/Careers';
import Skills from '../components/Sections/Skills/Skills';
import Contact from '../components/Sections/Contact/Contact';
export default function Home() {
  return (
    <>
      <Head>
        <title>Fabrice Sapienza - Développeur Web Front-End React.JS</title>
        <meta
          name="description"
          content="Bienvenue sur le site web de Fabrice Sapienza, développeur web front, React js à Marignane. Vous y trouverez mon portfolio, mon cv et les coordonnées pour me contacter !"
        />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#fefefe" />
      </Head>
      <About anchorScrollSpy="about" />
      <Careers anchorScrollSpy="careers" />
      <Skills anchorScrollSpy="skills" />
      <Contact anchorScrollSpy="contact" />
    </>
  );
}

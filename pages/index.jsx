import Head from 'next/head'
import About from '../components/Sections/About/About'
import Careers from '../components/Sections/Careers/Careers'
import Skills from '../components/Sections/Skills/Skills'
import Contact from '../components/Sections/Contact/Contact'
export default function Home() {
  return (
    <>
      <Head>
        <title>Fabrice Sapienza - Développeur Web Front-End React.JS</title>
        <meta name="description" content="Fabrice Sapienza - Portofolio - Développeur Front-End React.JS Javascript" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <About anchorScrollSpy="about" />
      <Careers anchorScrollSpy="careers" />
      <Skills anchorScrollSpy="skills" />
      <Contact anchorScrollSpy="contact" />
    </>
  )
}

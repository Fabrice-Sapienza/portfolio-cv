import Head from 'next/head'
import Presentation from '../components/Sections/Presentation/Presentation'
import Experiences from '../components/Sections/Experiences/Experiences'
import Competences from '../components/Sections/Competences/Competences'
import Contact from '../components/Sections/Contact/Contact'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Fabrice Sapienza - Développeur Web Front-End React.JS</title>
        <meta name="description" content="Portfolio Fabrice Sapienza - Développeur Front-End React JS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Presentation anchorScrollSpy="section-1" />
      <Experiences anchorScrollSpy="section-2" />
      <Competences anchorScrollSpy="section-3" />
      <Contact anchorScrollSpy="section-4" />
    </div>
  )
}

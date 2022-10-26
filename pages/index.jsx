import Head from 'next/head'
import Presentation from '../components/Sections/Presentation/Presentation'
import Experiences from '../components/Sections/Experiences/Experiences'
import Competences from '../components/Sections/Competences/Competences'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio Fabrice Sapienza - Développeur Front-End React JS</title>
        <meta name="description" content="Portfolio Fabrice Sapienza - Développeur Front-End React JS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Presentation anchorScrollSpy="section-1" />
      <Experiences anchorScrollSpy="section-2" />
      <Competences anchorScrollSpy="section-3" />
    </div>
  )
}

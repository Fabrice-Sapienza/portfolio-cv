import Head from 'next/head'
import Presentation from '../components/Sections/Presentation/Presentation'
import Experience from '../components/Sections/Experience/Experience'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio Fabrice Sapienza - Développeur Front-End React JS</title>
        <meta name="description" content="Portfolio Fabrice Sapienza - Développeur Front-End React JS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Presentation anchorScrollSpy="section-1" />
      <Experience anchorScrollSpy="section-2" />
    </div>
  )
}

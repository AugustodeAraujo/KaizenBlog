import { Col, Row, Container, } from 'react-bootstrap';
import Layout from 'components/Layout'
import BlogItem from 'components/BlogItem'
import Link from 'next/link'
import Hero from 'components/hero'
import Wpp from 'components/whatsapp'
import Head from "next/head"




export default function Home() {

  return (
    <>
      <Head>
      <title>Kaizen - A Casa da Autopeça</title>
        <meta name="description" content="Kaizen - A Casa da Autopeça. Todas as linhas de autopeça para o seu carro. Temos mais de 60.000 autopeças diferentes em nosso estoque." />
      </Head>
      <Layout>
        <Hero />
        <Wpp />
      </Layout>

    </>
  )
}
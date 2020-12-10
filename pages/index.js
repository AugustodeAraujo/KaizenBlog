import { Col, Row, Container, } from 'react-bootstrap';
import Layout from 'components/Layout'
import BlogItem from 'components/BlogItem'
import Link from 'next/link'
import Hero from 'components/hero'
import Wpp from 'components/whatsapp'



export default function Home() {

  return (
    <>
      <Layout>
        <Hero />
        <Wpp />
      </Layout>

    </>
  )
}
import { Col, Row, Container, } from 'react-bootstrap';
import Layout from 'components/Layout'
import Wpp from 'components/whatsapp'
import { getBlogBySlug, getAllBlogs } from 'lib/api'
import PostHeader from 'components/postHeader'
import PostContent from 'components/BlogContent';
import { urlFor } from 'lib/api';
import BlogBanner from 'components/BlogBanner'
import BlogInner from 'components/BlogInner'
import moment from 'moment';
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from "next/head"

const Home = ({ blog }) => {

  const router = useRouter(); 

  if (!router.isFallback && !blog?.slug) {
    return <ErrorPage statusCode="404"/>
  }

  if (router.isFallback) {
    console.log('Fallback loading')
    return (
    <h1>Carregando...</h1>)
  }

  moment.locale('pt-br');

  return (
    <>
     <Head>
      <title>Blog Kaizen | {blog.title}</title>
        <meta name="description" content={blog.subtitle} />
      </Head>
      <Layout>
        <BlogInner title={blog.title}/>

        <Container className="blog-detail-page p-5">
          <Row>
          <Col sm={2} />
            <Col sm={8}>
          <PostHeader
            title={blog.title}
            subtitle={blog.subtitle}
            image={urlFor(blog.coverImage).height(600).url()} />
          <PostContent content={blog.content} className="my-2"/>
          
          <p className="blogtag">{blog.tag}</p>
          <hr/>
          <p className="card-date text-muted">Publicado em {moment(blog.date).format('LL')}</p>
          <br/>
          <br/>
            </Col> 
            <Col sm={2} />
          </Row>
        </Container>
      </Layout>
      <Wpp />

    </>
  )
}

{/*API gerando páginas dos posts*/ }

export async function getStaticProps({ params }) {
  const blog = await getBlogBySlug(params.slug);
  return {
    props: { blog }
  }
}

export async function getStaticPaths() {
  const blogs = await getAllBlogs();
  const paths = blogs.map(b => ({ params: { slug: b.slug } }));
  return {
    paths, 
    fallback: true
  }
}

export default Home
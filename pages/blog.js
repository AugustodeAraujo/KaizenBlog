import { useState } from 'react'

import { Button, Row, Container, Spinner, } from 'react-bootstrap';
import Layout from 'components/Layout'
import BlogBanner from 'components/BlogBanner'

import FilteringMenu from 'components/FilteringMenu'

import { useGetBlogPages } from 'actions/pagination'
import { getPaginatedBlogs } from 'lib/api';

import Head from "next/head"



export default function Blog({ blogs }) {

  

  const [filter, setFilter] = useState({
    view: { list: 0 },
    date: { asc: 0 }
  });


  const {
    pages,
    isLoadingMore,
    isReachingEnd,
    loadMore
  } = useGetBlogPages({ blogs, filter });


  return (
    <>
    <Head>
      <title>Blog | Kaizen - A Casa da Autopeça</title>
        <meta name="description" content="Kaizen - A Casa da Autopeça. Todas as linhas de autopeça para o seu carro. Temos mais de 60.000 autopeças diferentes em nosso estoque." />
      </Head>
      <Layout>
        <BlogBanner />
        <Container>
          <div className='d-flex'>
          
          <h4 className="text-muted">Últimos Posts</h4>
          
          </div>
          < hr />
          <FilteringMenu
            filter={filter}
            onChange={(option, value) =>
              setFilter({...filter, [option]: value})
            } />
          
          <Row className="my-5">
            {pages}
          </Row>

          <div style={{ textAlign: 'center', }}>
            <Button
              onClick={loadMore}
              disabled={isReachingEnd || isLoadingMore}
              size="lg"
              variant="outline-primary my-5">
              {isLoadingMore ?  <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />  : isReachingEnd ? 'Isso é tudo' : 'Mais Posts'}
            </Button>
          </div>

        </Container>
      </Layout>
    </>
  )
}

{/*API Posts no /blog */ }

export async function getStaticProps() {
  const blogs = await getPaginatedBlogs({offset: 0, date: 'desc'});
  return {
    props: {
      blogs
    },
    revalidate: 1
  }
}

import Layout from 'components/Layout'
import BlogItem from 'components/BlogItem'
import Link from 'next/link'
import Hero from 'components/hero'
import Wpp from 'components/whatsapp'
import Head from "next/head"
import { AiOutlineWhatsApp } from 'react-icons/ai'
import { RiMotorbikeFill } from 'react-icons/ri'
import { HiOutlineChatAlt2 } from 'react-icons/hi'
import { IoMdArrowRoundForward } from 'react-icons/io'
import { Button, Row, Container, Col, } from 'react-bootstrap';





export default function Home() {

  return (
    <>
      <Head>
        <title>Kaizen - A Casa da Autopeça</title>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <meta name="description" content="Kaizen - A Casa da Autopeça. Todas as linhas de autopeça para o seu carro. Temos mais de 60.000 autopeças diferentes em nosso estoque." />
        <meta property="og:url" content="http://www.kaizenautopecas.com.br" key="ogurl" />
        <meta property="og:site_name" content="Kaizen - A Casa da Autopeça" key="ogsitename" />
        <meta property="og:title" content="Kaizen - A Casa da Autopeça" key="ogtitle" />
        <meta property="og:description" content="Kaizen - A Casa da Autopeça. Todas as linhas de autopeça para o seu carro. Temos mais de 60.000 autopeças diferentes em nosso estoque." key="ogdesc" />
      </Head>
      <Layout>
       
      <div className="jumbotron jumbotron-fluid hero2 d-flex flex-column justify-content-center m-0">
                <div className="container">
                    <div className="row">
                        <div className="col-8">
                            <h1 className='subtitulo-ninja' style={{ fontSize: '32px' }}>
                                SAC - Serviço de Atendimento ao Cliente
                        </h1>
                            <h3 style={{ fontWeight: "300", }}>
                            Com o objetivo de termos um canal aberto entre a empresa e o cliente, esse aqui é um espaço para reclamações, elogios, sugestões, tirar dúvidas ou dar feedbacks. 
                        </h3>
                            <a className='link-ninja my-5' style={{ textDecoration: 'none', }} href="https://docs.google.com/forms/d/e/1FAIpQLSevC6nhU9U1XWAy6XX16CCB57u7dQA7y2c8NnJ3zDAY6wcoXw/viewform" target="_blank">
                                Acessar <IoMdArrowRoundForward />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
      </Layout>

    </>
  )
}
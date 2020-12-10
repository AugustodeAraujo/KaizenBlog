import { Col, Row, Container, } from 'react-bootstrap';
import Layout from 'components/Layout'
import { FiArrowUpRight } from 'react-icons/fi'
import Image from 'next/image'




export default function BancoDeTalentos() {

    return (
        <>
            <Layout>
            <div className=" hero d-flex flex-column justify-content-center" >

                <Container>
                    <Row className="box d-flex m-2">
                        
                        <Col sm={12} className='m-2'>
                            <h1 className='subtitulo-ninja' style={{ fontSize: '30px' }}>
                                Banco de Talentos
                                </h1>
                            <h5 style={{ fontWeight: "300", }}>
                                Faça parte do melhor time de autopeças de Brasília.<br /><br />
                                    A Kaizen é a maior distribuidora de autopeças do Distrito Federal,
                                    reconhecida pela qualidade do seu atendimento.
                                    <br /><br />
                                    Nossos vendedores são referência,
                                    e temos o melhor salário da cidade. Mas, queremos ir além, e por isso estamos
                                    abrindo o nosso processo de formação comercial.
                                    </h5>
                            <a className='link-ninja my-5' style={{ textDecoration: 'none', }}>
                                Faça Parte <FiArrowUpRight />
                            </a>
                        </Col>
                    </Row>
                </Container>

            </div>
            </Layout> 



        </>
    )
}
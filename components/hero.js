import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import { RiMotorbikeFill } from 'react-icons/ri'
import { HiOutlineChatAlt2 } from 'react-icons/hi'
import { IoMdArrowRoundForward } from 'react-icons/io'
import { Button, Row, Container, Col, } from 'react-bootstrap';


const Hero = () => {
    return (
        <>

            <div className="jumbotron jumbotron-fluid hero m-0 d-flex flex-column justify-content-center has-bg-img">
                <div className="container">
                    <Row>
                        <Col sm={7} className='my-3'>
                            <h1 className='subtitulo-ninja'>
                                ORÇAMENTO NINJA
                        </h1>
                            <h3 style={{fontWeight: '300', color: '#fff'}} id='sub'>
                                Todas as peças para o seu carro.
                                Envie a lista de peças e entregamos o seu orçamento em até <strong style={{color: '#00a5ac'}}>15 minutos</strong>.
                        </h3>
                        
                            <a href="https://api.whatsapp.com/send/?phone=5561983660828&text=Ol%C3%A1%2C+eu+gostaria+de+um+or%C3%A7amento.&app_absent=0" target='_blank' className='link-ninja my-5' style={{ textDecoration: 'none', }}>
                                Solicitar Orçamento <AiOutlineWhatsApp />
                            </a>

                        </Col>

                        <Col className='my-3'>
                            <div className='box text-center' style={{borderRadius: '20px'}}>
                            <h4>Entre em contato pelo Whatsapp</h4>
                                <a href="https://api.whatsapp.com/send/?phone=5561983660828&text=Ol%C3%A1%2C+eu+gostaria+de+um+or%C3%A7amento.&app_absent=0" target='_blank' className="btn m-4" style={{ borderRadius: "2px", color: '#00a5ac' }}>
                                    <AiOutlineWhatsApp className="display-2" /> 
                                </a>
                                <h4>Ou ligue em uma de nossas <Link href="/unidades">Unidades</Link></h4>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>



            <div className="jumbotron jumbotron-fluid  m-0 hero d-flex flex-column justify-content-center">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <h1 className="title" style={{ fontSize: "45px", color: "#fff" }}>
                                Um novo jeito<br />
                            de adquirir autopeça<br />
                            em Brasília
                            </h1>
                            <a href="https://api.whatsapp.com/send/?phone=5561983660828&text=Ol%C3%A1%2C+eu+gostaria+de+um+or%C3%A7amento.&app_absent=0" target='_blank' className="btn" style={{ borderRadius: "2px" }}>
                                <button type="button" className="btn btn-outline-light my-2"><AiOutlineWhatsApp className="m-1" /> SOLICITAR ORÇAMENTO</button>
                            </a>
                        </div>
                        <div className="col-sm-6">
                            <div className="my-3 p-3 bg-white rounded box-shadow d-flex">
                                <span className="d-flex flex-column justify-content-center ml-4"><AiOutlineWhatsApp style={{ fontSize: "45px", color: '#00a5ac' }} /></span>
                                <h5 className="m-4" style={{ fontWeight: 700, color: '#00a5ac' }}>Envie a lista com as peças pelo Whatsapp</h5>
                            </div>
                            <div className="my-3 p-3  bg-white rounded box-shadow d-flex">
                                <span className="d-flex flex-column justify-content-center ml-4"><HiOutlineChatAlt2 style={{ fontSize: "45px", color: '#00a5ac' }} /></span>
                                <h5 className="m-4" style={{ fontWeight: 700, color: '#00a5ac' }}>Toda negociação é feita sem burocracia</h5>
                            </div>
                            <div className="mt-3 p-3 bg-white rounded box-shadow d-flex">
                                <span className="d-flex flex-column justify-content-center ml-4"><RiMotorbikeFill style={{ fontSize: "45px", color: '#00a5ac' }} /></span>
                                <h5 className="m-4" style={{ fontWeight: 700, color: '#00a5ac' }}>Entregamos as peças para você</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="jumbotron jumbotron-fluid has-bg-img2 hero d-flex flex-column justify-content-center m-0">
                <div className="container">
                    <h1 style={{ color: "#fff" }}>
                        Experiência Única
                        </h1>
                    <h3 style={{ color: "#fff", fontWeight: "300", }}>
                        Pra quem não quer esperar, em pé, orçamentos demorados.
                        </h3>
                </div>
            </div>

            <div className="jumbotron jumbotron-fluid hero2 d-flex flex-column justify-content-center m-0">
                <div className="container">
                    <div className="row">
                        <div className="col-8">
                            <h1 className='subtitulo-ninja' style={{ fontSize: '40px' }}>
                                Sem burocracia
                        </h1>
                            <h3 style={{ fontWeight: "300", }}>
                                Sem dor de cabeça, esqueça as montanhas de papel.<br />
                         A melhor garantia do Distrito Federal.
                        </h3>
                            <a className='link-ninja my-5' style={{ textDecoration: 'none', }}>
                                Sem complicações <IoMdArrowRoundForward />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="jumbotron jumbotron-fluid has-bg-img3 hero d-flex flex-column justify-content-center m-0">
                <div className="container">
                    <h1 style={{ color: "#fff" }}>
                        Vamos até você
                        </h1>
                    <h3 style={{ color: "#fff", fontWeight: "300", }}>
                        Entregamos as peças para você, ou diretamente no seu mecânico.
                        </h3>
                </div>
            </div>

        </>
    )
}

export default Hero



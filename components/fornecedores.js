import Link from 'next/link'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import { IoMdArrowRoundForward } from 'react-icons/io'
import { Button, Row, Container, Col, } from 'react-bootstrap';

const Fornecedores = () => {
    return (
        <>
            <div className="jumbotron jumbotron-fluid  m-0 hero d-flex flex-column justify-content-center">
                <div className="container">
                    <div className="row">
                        <Col className="mb-5">
                            <h1 className="title " style={{ fontSize: "45px", color: "#fff" }}>
                                Trabalhamos<br />
                                com as melhores<br />
                                marcas
                            </h1>
                            <a className='link-ninja my-5' style={{ textDecoration: 'none', color: '#fff' }}>
                                Catálogo <IoMdArrowRoundForward />
                            </a>
                        </Col>
                        <Col className="box mx-3">
                            <Row className=" d-flex text-center m-3">
                                <Col>
                                  
                                </Col>
                                <Col>
                                   
                                </Col>
                                <Col>
                                    
                                </Col>
                            </Row>
                            <Row className=" d-flex text-center m-3">
                                <Col>
                                    
                                </Col>
                                <Col>
                                    
                                </Col>
                                <Col>
                                    
                                </Col>
                            </Row>
                        </Col>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Fornecedores
import { AiOutlineWhatsApp } from 'react-icons/ai'
import { IoMdCloseCircle } from 'react-icons/io'
import Link from 'next/link'
import { useState, useEffect } from 'react';
import { Navbar, Container, Fade, Row, Col } from 'react-bootstrap';

const Wpp = () => {

    const [wpp, setWpp] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setWpp(true);
        }, 3000);
    }, []);

    return (
        <>

            { wpp === true ?

                <>
                    <Fade in={wpp}>
                        <Navbar variant="dark" fixed="bottom" style={{ backgroundColor: "#232324" }}>
                            <Container className="d-flex justify-content-center">

                                <AiOutlineWhatsApp style={{ fontSize: '40px', color: "#00a5ac" }} className="p-2" />
                                <a href="https://api.whatsapp.com/send/?phone=5561983660828&text=Ol%C3%A1%2C+eu+gostaria+de+um+or%C3%A7amento.&app_absent=0" target='_blank'
                                    style={{
                                        margin: '0px',
                                        padding: '10px',
                                        color: "#fff",
                                        fontWeight: "700",
                                        textDecoration: "none",
                                    }}>Orçamento Ninja em 15min
                                </a>
                                <button onClick={() => setWpp(!true)} type="button" className="close" aria-label="Close"><IoMdCloseCircle style={{ color: "#00a5ac" }} /></button>
                            </Container>
                        </Navbar>
                    </Fade>

                </>

                :

                <></>

            }

        </>
    )
}

export default Wpp
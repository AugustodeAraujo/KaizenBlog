import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineWhatsApp } from 'react-icons/ai'


const NavBar = () => {
  return (
    <>

      <Navbar expand="lg" style={{ backgroundColor: "#fff" }}>
        <div className='container'>
          <Link href="/">
            <Navbar.Brand className="my-3" style={{cursor: 'pointer'}}>

              <Image src="/logo-kaizen.png" alt="me" width="156,6" height="48" />
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link href="/blog"><a className="nav-link">Blog</a></Link>
              <Link href="/unidades"><a className="nav-link">Unidades</a></Link>
              <Link href="/fornecedores"><a className="nav-link">Fornecedores</a></Link>
              <NavDropdown title="Catálogos" id="basic-nav-dropdown" style={{ color: '#fff' }}>
                <NavDropdown.Item href="#action/3.1" >Elétrica</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Óleos</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Mecânica</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Fornecedores</NavDropdown.Item>
              </NavDropdown>           
            </Nav>
            <Link href="https://api.whatsapp.com/send/?phone=5561983660828&text=Ol%C3%A1%2C+eu+gostaria+de+um+or%C3%A7amento.&app_absent=0" target='_blank' className="btn ml-auto" style={{ borderRadius: "2px" }}>
                <button type="button" className="btn btn-primary my-3"><AiOutlineWhatsApp className="m-1" /> SOLICITAR ORÇAMENTO</button>
              </Link>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  )

}

export default NavBar
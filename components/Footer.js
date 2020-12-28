
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="py-5 mt-5" style={{ color: "#00a5ac" }}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md">
            <Image src="/logo-kaizen.png" alt="me" width="130.5" height="40" />
            <small className="d-block mb-3 text-muted">&copy; 2020</small>
          </div>
          <div className="col-6 col-md">
            <h5>Kaizen</h5>
            <ul className="list-unstyled text-small">
              <li><Link href="/unidades"><a className="text-muted" href="#">Unidades</a></Link> </li>
              <li><a className="text-muted" href="#">Perguntas Frequentes</a></li>
              <li><Link href="/bancodetalentos"><a className="text-muted" href="#">Trabalhe Conosco</a></Link></li>
              <li><a className="text-muted" href="#">Fornecedores</a></li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>Explore</h5>
            <ul className="list-unstyled text-small">

              <li><Link href="/blog"><a className="text-muted">Blog</a></Link></li>
              <li><a className="text-muted" href="#">Catálogos</a></li>

            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>Fale com a gente</h5>
            <ul className="list-unstyled text-small">
              <li><a className="text-muted" href="#">(61) 3041-5641</a></li>
              <li><a className="text-muted" href="#">kaizen@kaizenautopecas.com.br</a></li>
              <li><a className="text-muted" href="#">Política de Trocas</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>

  )
}

export default Footer
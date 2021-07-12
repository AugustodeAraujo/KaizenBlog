import { Col, Row, Container } from 'react-bootstrap'
import Image from 'next/image'
import { FaMapMarkerAlt, FaPhone, FaRoad  } from 'react-icons/fa'


export default function GoogleMaps() {
  return (<>

    <Container>
      <h1 className="my-5 primary font-weight-bold text-primary">Unidades</h1>
      <Row>
        <Col>
          <div className="card">
            <Image
              src="/asanorte.png"
              alt="Kaizen Asa Norte"
              width={500}
              height={500}
            />
            <div className="card-body">
              <h5 className="card-title text-primary">Asa Norte</h5>
              <p className="text-muted"><FaMapMarkerAlt /> CLN 704 - Asa Norte | Brasília - DF</p>
              <p className="text-muted"><FaPhone /> (61) 3575-7650</p>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3839.5285712129503!2d-47.89054518491375!3d-15.776059126707615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3b0e2f3afb1f%3A0x393b0dde3e64e1c0!2sKAIZEN%20-%20A%20Casa%20da%20Autope%C3%A7a!5e0!3m2!1spt-BR!2sbr!4v1609172085186!5m2!1spt-BR!2sbr" width="300" height="200" frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
              
            </div>
          </div>
        </Col>
        <Col>
          <div className="card">
            <Image
              src="/ceilandiaunidade.png"
              alt="Kaizen Ceilândia"
              width={500}
              height={500}
            />
            <div className="card-body">
              <h5 className="card-title text-primary">Ceilândia</h5>
              <p className="text-muted"><FaMapMarkerAlt /> St. O QNO 12 - Ceilândia | Brasília - DF </p>
              <p className="text-muted"><FaPhone /> (61) 3550-8585</p>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3839.186187898555!2d-48.13525418514503!3d-15.794133589051405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a31f326a246cb%3A0x4161c48ea1c252ac!2sKaizen%20-%20A%20Casa%20da%20Autope%C3%A7a!5e0!3m2!1spt-BR!2sbr!4v1609171658116!5m2!1spt-BR!2sbr" width="300" height="200" frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
             
            </div>
          </div>
        </Col>
        <Col></Col>
      </Row>
    </Container>



  </>
  );
}

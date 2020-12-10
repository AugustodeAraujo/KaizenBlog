import { Card } from 'react-bootstrap';
import Link from 'next/link'
import { urlFor } from 'lib/api';
import Image from 'next/image'
import { Col, ProgressBar, Spinner } from 'react-bootstrap';


const BlogItem = ({ title, subtitle, link, tag, image, date, mode = 'normal' }) => {
  return (
    <Card className={`kz-card ${mode}`}>
      <div className="card-body-wrapper">

        <Card.Header className="d-flex flex-row">
          {
            mode === 'placeholder' ?
              <Card.Text className="blogtag">Placeholder</Card.Text>
              :
              <Card.Text className="blogtag">{tag}</Card.Text>
          }

        </Card.Header>

        <div className="view overlay">
          {
            mode === 'placeholder' ?
            <Image src="/holder.png" alt="me" width="300" height="300" />
              :
              <Card.Img
                src={
                  urlFor(image)
                    .height(300)
                    .crop('center')
                    .fit('clip')
                    .url()} />
          }
        </div>

        <Card.Body>
          {mode === 'placeholder' ?
            <>
              <Card.Title className="card-main-title"></Card.Title>
              <Card.Text></Card.Text>
              <hr />
              <Card.Text className="card-date text-muted"></Card.Text>
            </>

            :
            <>
              <Card.Title className="card-main-title" style={{ color: "#00a5ac" }}>{title}</Card.Title>
              <Card.Text>{subtitle}</Card.Text>
              <hr />
              <Card.Text className="card-date text-muted">Publicado em {date}</Card.Text>
            </>
          }
        </Card.Body>

      </div>

      { mode === 'placeholder' ?
        <></>
        :

        <Link {...link}>
          <a className="card-button" href="" >
            Continuar Lendo
        </a>
        </Link>
      }

    </Card>
  )
}

export default BlogItem;
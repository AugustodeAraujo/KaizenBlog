import { Card } from 'react-bootstrap';
import Link from 'next/link'
import { urlFor } from 'lib/api';
import Image from 'next/image'

const BlogItem2 = ({ title, subtitle, link, tag, image, date, mode = 'normal' }) => {
    return (
        <>
            <div className={`card mb-3 ${mode}`}>

                {
                    mode === 'placeholder' ?
                        <Image src="/holder.png" alt="me" width="1920" height="300" />

                        :
                        <img className="img-fluid" style={{ objectFit: 'cover', width: '100%', height: '300px', }} src={
                            urlFor(image)
                                .crop('center')
                                .fit('clip')
                                .quality(100)
                                .url()} />
                }
                <Card.Body>
                    {
                        mode === 'placeholder' ?
                            <>
                                <Card.Title></Card.Title>
                                <Card.Text></Card.Text>
                            </>
                            :
                            <>
                                <Card.Title>{title}</Card.Title>
                                <Card.Text>{subtitle}</Card.Text>
                            </>
                    }

                    {mode === 'placeholder' ?
                        <></>
                        :

                        <Link {...link}>
                            <a className="btn btn-outline-primary btn-sm" href="" >
                                Continuar Lendo
                        </a>
                        </Link>
                    }
                    <hr />
                    <Card.Text>Publicado em {date}</Card.Text>

                </Card.Body>
            </div>
        </>
    )
}

export default BlogItem2


import Layout from 'components/Layout'
import GoogleMaps from 'components/map'
import Head from "next/head"

export default function Unidades () {
    return (
        <>
        <Head>
        <title>Unidades | Kaizen - A Casa da Autopeça</title>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <meta name="description" content="Kaizen - A Casa da Autopeça. Todas as linhas de autopeça para o seu carro. Temos mais de 60.000 autopeças diferentes em nosso estoque." />
        <meta property="og:url" content="http://www.kaizenautopecas.com.br" key="ogurl" />
        <meta property="og:site_name" content="Kaizen - A Casa da Autopeça" key="ogsitename" />
        <meta property="og:title" content="Kaizen - A Casa da Autopeça" key="ogtitle" />
        <meta property="og:description" content="Kaizen - A Casa da Autopeça. Todas as linhas de autopeça para o seu carro. Temos mais de 60.000 autopeças diferentes em nosso estoque." key="ogdesc" />
      </Head>
        <Layout>
            <GoogleMaps/>
        </Layout>
        </>
        
    )
}



import Navbar from './Navbar';
import Footer from 'components/Footer'


export default function PageLayout({ children, className }) {
 

  return (
    <>
     
      <Navbar />
      <div className={`page-wrapper ${className} mb-5`} style={{ padding: "0px", backgroundColor: "#fff" }}> {children} </div>
      <Footer />
    </>
  )
}
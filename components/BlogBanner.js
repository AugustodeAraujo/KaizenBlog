import { AiOutlineWhatsApp } from 'react-icons/ai'
import { RiMotorbikeFill } from 'react-icons/ri'
import { HiOutlineChatAlt2 } from 'react-icons/hi'
import { IoMdArrowRoundForward } from 'react-icons/io'

const BlogBanner = () => {
    return (
        <>
            <div className="jumbotron jumbotron-fluid blogbanner d-flex flex-column justify-content-center ">
                <div className="container">
                    <div className="row">
                        <div className="col-8">
                            <h1 className='titulo-ninja' style={{ fontSize: '40px' }}>
                                Blog Kaizen
                        </h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogBanner
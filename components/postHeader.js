export default function PostHeader({ date, title, subtitle, image }) {
    return (
        <>
            <div className="blog-detail-header">

                <h1 className="font-weight-bold blog-detail-header-title mt-3 mb-3">{title}</h1>
                <h2 className="blog-detail-header-subtitle mb-5">{subtitle}</h2>
                
                {/* Check if contains cover image */}
                <div class="text-center">
                    <img
                        className="img-fluid rounded"
                        src={image} alt="" />
                    <hr className="m-5" />
                </div>
            </div>

        </>
    )
}

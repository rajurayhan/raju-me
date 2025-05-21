import React from 'react'
import { RiBookReadLine } from '@remixicon/react'
import Title from '../ui/title'
import { Link } from 'react-router-dom'

import ZoomIn from '../animations/zoomIn'
import { blodData } from '../../utlits/fackData/blogsData'


const Blogs = () => {
    return (
        <section id="blog" className="blog-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12">
                        <Title>
                            <p>blog</p>
                            <h2>Latest Blog</h2>
                        </Title>
                    </div>
                </div>
                <div className="row">
                    {blodData.map(({ date, descripation, id, src, title, slug }) => 
                        <Card key={id} date={date} src={src} descripation={descripation} 
                              title={title} id={id} slug={slug} />
                    )}
                </div>
            </div>
        </section>
    )
}

export default Blogs


const Card = ({ date, src, title, descripation, id, slug }) => {
    return (
        <div className="col-lg-4 col-md-6">
            <ZoomIn id={id}>
                <div className="blog-item" style={{ height: '600px', display: 'flex', flexDirection: 'column' }}>
                    <div className="image" style={{ height: '300px', overflow: 'hidden' }}>
                        <img src={src} alt="Blog" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div className="content" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <div>
                            <div className="blog-meta mt-15">
                                <a className="date" href="#"><i className="far fa-calendar-alt"></i>{date}</a>
                            </div>
                            <h5>
                                <Link to={`/blog/${slug}`}>{title}</Link>
                            </h5>
                            <p>{descripation}</p>
                        </div>
                        <div>
                            <hr />
                            <Link to={`/blog/${slug}`} className="theme-btn">
                                Read More<i><RiBookReadLine size={15} /></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </ZoomIn>
        </div>
    )
}
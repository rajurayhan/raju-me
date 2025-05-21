import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { blodData } from '../../utlits/fackData/blogsData'
import ReactMarkdown from 'react-markdown'
import { RiArrowLeftLine } from '@remixicon/react'

const BlogDetails = () => {
    const { slug } = useParams()
    const navigate = useNavigate()
    
    // Find the blog post that matches the slug
    const blog = blodData.find(blog => blog.slug === slug)

    if (!blog) {
        return <div className="container mt-5">
            <h2>Blog post not found</h2>
        </div>
    }

    return (
        <>
            <Helmet>
                <title>{blog.title} | Raju Rayhan</title>
                <meta name="description" content={blog.descripation} />
                
                {/* Open Graph / Facebook */}
                <meta property="og:type" content="article" />
                <meta property="og:title" content={blog.title} />
                <meta property="og:description" content={blog.descripation} />
                <meta property="og:image" content={blog.src} />
                <meta property="og:url" content={`https://rajurayhan.com/blog/${blog.slug}`} />
                
                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={blog.title} />
                <meta name="twitter:description" content={blog.descripation} />
                <meta name="twitter:image" content={blog.src} />
            </Helmet>

            <header className="blog-header" style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                backgroundColor: 'white',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                padding: '20px 0'
            }}>
                <div className="container">
                    <button 
                        onClick={() => navigate('/')}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            fontSize: '16px',
                            color: '#333'
                        }}
                    >
                        <RiArrowLeftLine size={20} />
                        Back to Home
                    </button>
                </div>
            </header>

            <section className="blog-details-area" style={{ marginTop: '100px', paddingTop: '50px' }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="blog-details-wrapper">
                                <div className="blog-thumb">
                                    <img src={blog.src} alt={blog.title} 
                                        style={{ 
                                            width: '100%', 
                                            height: '400px', 
                                            objectFit: 'cover',
                                            borderRadius: '10px'
                                        }} 
                                    />
                                </div>
                                <div className="blog-meta mt-4">
                                    <span className="date">
                                        <i className="far fa-calendar-alt"></i> {blog.date}
                                    </span>
                                </div>
                                <div className="blog-content">
                                    <h2 className="title mt-4">{blog.title}</h2>
                                    <div className="markdown-content">
                                        <ReactMarkdown>{blog.detail}</ReactMarkdown>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BlogDetails 
import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import ReactMarkdown from 'react-markdown'
import { RiArrowLeftLine } from '@remixicon/react'
import { blogApi } from '../../services/api'

const BlogDetails = () => {
    const { slug } = useParams()
    const navigate = useNavigate()
    const [blog, setBlog] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await blogApi.getBySlug(slug)
                if (response.success) {
                    setBlog(response.data.data)
                } else {
                    setError(response.message)
                }
            } catch (err) {
                setError('Failed to fetch blog post')
                console.error('Error fetching blog post:', err)
            } finally {
                setLoading(false)
            }
        }

        fetchBlog()
    }, [slug])

    if (loading) {
        return (
            <div className="container mt-5">
                <div className="text-center">Loading blog post...</div>
            </div>
        )
    }

    if (error || !blog) {
        return (
            <div className="container mt-5">
                <h2>{error || 'Blog post not found'}</h2>
            </div>
        )
    }

    const ogImageUrl = blog.image.startsWith('http') 
        ? blog.image 
        : `${import.meta.env.VITE_API_URL}/${blog.image}`

    return (
        <>
            <Helmet>
                <title>{blog.title} | Raju Rayhan</title>
                <meta name="description" content={blog.content.substring(0, 160)} />
                
                {/* Open Graph / Facebook */}
                <meta property="og:type" content="article" />
                <meta property="og:title" content={blog.title} />
                <meta property="og:description" content={blog.content.substring(0, 160)} />
                <meta property="og:image" content={ogImageUrl} />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:url" content={`https://rajurayhan.com/blog/${blog.slug}`} />
                
                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={blog.title} />
                <meta name="twitter:description" content={blog.content.substring(0, 160)} />
                <meta name="twitter:image" content={ogImageUrl} />
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
                                    <img 
                                        src={ogImageUrl} 
                                        alt={blog.title} 
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
                                        <i className="far fa-calendar-alt"></i> {new Date(blog.createdAt).toLocaleDateString()}
                                    </span>
                                    {blog.author && (
                                        <span className="author ms-3">
                                            <i className="far fa-user"></i> {blog.author.email}
                                        </span>
                                    )}
                                </div>
                                <div className="blog-content">
                                    <h2 className="title mt-4">{blog.title}</h2>
                                    <div className="markdown-content">
                                        <ReactMarkdown>{blog.content}</ReactMarkdown>
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
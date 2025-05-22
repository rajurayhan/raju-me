import React, { useState, useEffect } from 'react'
import { RiBookReadLine } from '@remixicon/react'
import Title from '../ui/title'
import { Link } from 'react-router-dom'
import ZoomIn from '../animations/zoomIn'
import { blogApi } from '../../services/api'

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await blogApi.getAll();
                if (response.success) {
                    setBlogs(response.data.data);
                } else {
                    setError(response.message);
                }
            } catch (err) {
                setError('Failed to fetch blog posts');
                console.error('Error fetching blog posts:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    if (loading) {
        return (
            <section id="blog" className="blog-area">
                <div className="container">
                    <div className="text-center">Loading blog posts...</div>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section id="blog" className="blog-area">
                <div className="container">
                    <div className="text-center text-danger">{error}</div>
                </div>
            </section>
        );
    }

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
                    {blogs.map(({ createdAt, content, id, image, title, slug, author }) => 
                        <Card 
                            key={id} 
                            date={new Date(createdAt).toLocaleDateString()} 
                            src={image.startsWith('http') ? image : `${import.meta.env.VITE_API_URL}/uploads/${image}`} 
                            description={content.substring(0, 150) + '...'} 
                            title={title} 
                            id={id} 
                            slug={slug}
                            author={author}
                        />
                    )}
                </div>
            </div>
        </section>
    )
}

export default Blogs

const Card = ({ date, src, title, description, id, slug, author }) => {
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
                                {author && (
                                    <a className="author" href="#"><i className="far fa-user"></i>{author.email}</a>
                                )}
                            </div>
                            <h5>
                                <Link to={`/blog/${slug}`}>{title}</Link>
                            </h5>
                            <p>{description}</p>
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
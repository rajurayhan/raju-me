import React from 'react'
import { useParams } from 'react-router-dom'
import { blodData } from '../../utlits/fackData/blogsData'
import { RiCalendarLine, RiUser3Line, RiMessage2Line } from '@remixicon/react'

const BlogDetails = () => {
    const { id } = useParams()
    const blog = blodData.find(blog => blog.id === parseInt(id))

    if (!blog) {
        return <div>Blog not found</div>
    }

    return (
        <section className="blog-details-area">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="blog-details-content">
                            <div className="image">
                                <img src={blog.src} alt={blog.title} style={{ width: '100%', height: 'auto', borderRadius: '10px' }} />
                            </div>
                            <div className="content mt-45">
                                <div className="blog-meta">
                                    <span><i><RiCalendarLine /></i> {blog.date}</span>
                                    <span><i><RiUser3Line /></i> By Raju Rayhan</span>
                                    <span><i><RiMessage2Line /></i> 2 Comments</span>
                                </div>
                                <h2>{blog.title}</h2>
                                <p>{blog.descripation}</p>
                                
                                {/* Example content sections */}
                                <h3>Introduction</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                
                                <h3>Main Points</h3>
                                <ul>
                                    <li>Point 1: Details and explanation</li>
                                    <li>Point 2: More insights</li>
                                    <li>Point 3: Technical aspects</li>
                                </ul>
                                
                                <h3>Conclusion</h3>
                                <p>Wrapping up the main ideas and key takeaways from this article.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BlogDetails 
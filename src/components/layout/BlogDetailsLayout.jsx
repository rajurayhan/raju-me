import React from 'react'
import Header from '../sections/header'
import Footer from '../sections/footer'
import ProgressBar from '../ui/progressBar'

const BlogDetailsLayout = ({ children }) => {
    return (
        <main>
            {children}
            <Footer />
            <ProgressBar />
        </main>
    )
}

export default BlogDetailsLayout 
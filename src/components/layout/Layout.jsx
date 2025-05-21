import React from 'react'
import Header from '../sections/header'
import Footer from '../sections/footer'
import ProgressBar from '../ui/progressBar'

const Layout = ({ children }) => {
    return (
        <main>
            <Header />
            {children}
            <Footer />
            <ProgressBar />
        </main>
    )
}

export default Layout 
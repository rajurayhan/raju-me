import React from 'react'
import { Helmet } from 'react-helmet-async'

const HomeMeta = () => {
    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>Raju | Full-Stack Developer & Innovation Consultant</title>
            <meta name="title" content="Raju | Full-Stack Developer & Innovation Consultant" />
            <meta name="description" content="Experienced Full-Stack Developer and AI Integration Specialist building scalable solutions that drive business growth" />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://rajurayhan.com/" />
            <meta property="og:title" content="Raju | Full-Stack Developer & Innovation Consultant" />
            <meta property="og:description" content="Experienced Full-Stack Developer and AI Integration Specialist building scalable solutions that drive business growth" />
            <meta property="og:image" content="https://rajurayhan.com/og-image.jpg" />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://rajurayhan.com/" />
            <meta property="twitter:title" content="Raju | Full-Stack Developer & Innovation Consultant" />
            <meta property="twitter:description" content="Experienced Full-Stack Developer and AI Integration Specialist building scalable solutions that drive business growth" />
            <meta property="twitter:image" content="https://rajurayhan.com/og-image.jpg" />
        </Helmet>
    )
}

export default HomeMeta 
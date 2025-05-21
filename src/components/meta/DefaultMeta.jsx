import React from 'react'
import { Helmet } from 'react-helmet-async'
import ogImage from '../../assets/images/about/raju-og.jpg'

const DefaultMeta = () => {
    return (
        <Helmet>
            <title>Raju | Full-Stack Developer & Innovation Consultant</title>
            <meta name="title" content="Raju | Full-Stack Developer & Innovation Consultant" />
            <meta name="description" content="Experienced Full-Stack Developer and AI Integration Specialist building scalable solutions that drive business growth" />

            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://rajurayhan.com/" />
            <meta property="og:title" content="Raju | Full-Stack Developer & Innovation Consultant" />
            <meta property="og:description" content="Experienced Full-Stack Developer and AI Integration Specialist building scalable solutions that drive business growth" />
            <meta property="og:image" content={ogImage} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Raju | Full-Stack Developer & Innovation Consultant" />
            <meta name="twitter:description" content="Experienced Full-Stack Developer and AI Integration Specialist building scalable solutions that drive business growth" />
            <meta name="twitter:image" content={ogImage} />
        </Helmet>
    )
}

export default DefaultMeta 
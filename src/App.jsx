import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BlogDetails from './components/sections/blogDetails'
import Layout from './components/layout/Layout'
import About from './components/sections/about'
import Services from './components/sections/services'
import Experience from './components/sections/experience'
import Portfolio from './components/sections/portfolio'
import Testimonial from './components/sections/testimonial'
import Blogs from './components/sections/blogs'
import Contact from './components/sections/contact/contact'
import BlogDetailsLayout from './components/layout/BlogDetailsLayout'
import HomeMeta from './components/meta/HomeMeta'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
            <HomeMeta />
            <Layout>
              <About />
              <Services />
              <Experience />
              <Portfolio />
              <Testimonial />
              <Blogs />
              <Contact />
            </Layout>
          </>
        } />
        <Route path="/blog/:slug" element={
          <BlogDetailsLayout>
            <BlogDetails />
          </BlogDetailsLayout>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
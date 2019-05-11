import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Layout from '../components/Layout'
import BlogSection from '../components/BlogSection';
import Summary from '../components/Summary';

// Export Template for use in CMS preview
export const HomePageTemplate = ({
         title,
         subtitle,
         featuredImage,
         excerpt,
         section1,
         section2,
         body,
         blogs = []
       }) => (
         <main className="Home">
           <PageHeader
             large
             title={title}
             subtitle={subtitle}
             backgroundImage={featuredImage}
             excerpt={excerpt}
             section1={section1}
             section2={section2}
           />

           <Summary/>

           <section className="section">
             <div className="container">              
               <div className="taCenter subtitle">
                 How do we help our clients reach their digital<br/>
                 peak in Africa?
               </div>
               <BlogSection blogs={blogs} />
             </div>
           </section>
         </main>
       )

// Export Default HomePage for front-end
const HomePage = ({ data: { page, blogs } }) => (
  <Layout meta={page.frontmatter.meta || false}>
    <HomePageTemplate {...page} {...page.frontmatter} body={page.html} 
      blogs={blogs.edges.map(blog => ({
        html: blog.node.html,
        ...blog.node.frontmatter
      }))}
      />
  </Layout>
)

export default HomePage

export const pageQuery = graphql`
         ## Query for HomePage data
         ## Use GraphiQL interface (http://localhost:8000/___graphql)
         ## $id is processed via gatsby-node.js
         ## query name must be unique to this file
         query HomePage($id: String!) {
           page: markdownRemark(id: { eq: $id }) {
             ...Meta
             html
             frontmatter {
               title
               subtitle
               featuredImage
               excerpt
               section1
               section2
             }
           }
           blogs: allMarkdownRemark(
             filter: { fields: { contentType: { eq: "blogs" } } }
             sort: { order: ASC, fields: [fields___contentType] }
           ) {
             edges {
               node {
                 fields {
                   slug
                   contentType
                 }
                 html
                 frontmatter {
                   title
                   featuredImage
                   template
                   status
                   date
                 }
               }
             }
           }
         }
       `

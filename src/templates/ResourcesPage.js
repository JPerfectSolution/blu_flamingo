import React from 'react'
import { MapPin, Smartphone, Mail } from 'react-feather'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import FormSimpleAjax from '../components/FormSimpleAjax'
import Content from '../components/Content'
import GoogleMap from '../components/GoogleMap'
import Layout from '../components/Layout'
import './ResourcesPage.css'
import BlogSection from '../components/BlogSection';

// Export Template for use in CMS preview
export const ResourcesPageTemplate = ({
  title,
  subtitle,
  featuredImage,
  section1,
  blogs = [],

}) => (
  <main className="Resources">
    <PageHeader
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
      section1={section1}
    />
    <section className="section Resources--Section1">
      <div className="container Resources--Section1--Container">
          <BlogSection blogs={blogs} />
      </div>
    </section>
  </main>
)

const ResourcesPage = ({ data: { page, blogs } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <ResourcesPageTemplate {...page.frontmatter} body={page.html} 
      blogs={blogs.edges.map(blog => ({
        html: blog.node.html,
        ...blog.node.frontmatter
      }))}
    />
  </Layout>
)

export default ResourcesPage

export const pageQuery = graphql`
         query ResourcesPage($id: String!) {
           page: markdownRemark(id: { eq: $id }) {
             html
             frontmatter {
               title
               template
               subtitle
               featuredImage
               section1
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

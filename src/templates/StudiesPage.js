import React from 'react'
import { MapPin, Smartphone, Mail } from 'react-feather'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import FormSimpleAjax from '../components/FormSimpleAjax'
import Content from '../components/Content'
import GoogleMap from '../components/GoogleMap'
import Layout from '../components/Layout'
import './StudiesPage.css'
import '../components/Summary.css'
import Image from '../components/Image';

// Export Template for use in CMS preview
export const StudiesPageTemplate = ({
         title,
         subtitle,
         featuredImage,
         excerpt
       }) => (
         <main className="Studies">
           <PageHeader
             large
             title={title}
             subtitle={subtitle}
             backgroundImage={featuredImage}
             excerpt={excerpt}
           />
           <section className="section">
             <div className="container taCenter ">
               <div className="Studies">
                 <div className="subtitle Studies">
                   lorem ipsum this is a subtiltle of text highlighting.
                 </div>
                 <div>
                   lorem ipsum dolor sit amet, consectetur adipisicing
                   elit, sed do eiusmod tempor incididunt ut labore et
                   dolore magna aliqua. Ut enim ad minim veniam, quis
                   nostrud exercitation ullamco laboris nisi ut aliquip
                   ex ea commodo consequat.
                   <br /> <br />
                   Duis aute irure dolor in reprehenderit in voluptate
                   velit esse cillum dolore eu fugiat nulla pariatur.
                   Excepteur sint occaecat cupidatat non proident, sunt
                   in culpa qui officia deserunt mollit anim id est
                   laborum.
                </div>
                <div className="Summary-pan">
                  <div className="Summary-item">
                    <div className="Summary-Img relative">
                      <Image background src={`/images/Untitled-8.png`} alt={title} />
                    </div>
                    <div><h2>Nancy Kacungira</h2></div>
                    <div>Creative Director</div>
                  </div>
                  <div className="Summary-item">
                    <div className="Summary-Img relative">
                      <Image background src={`/images/Untitled-4.png`} alt={title} />
                    </div>
                <div><h2>Seanice Lojede</h2></div>
                <div>Group CEO</div>
                  </div>
                  <div className="Summary-item">
                    <div className="Summary-Img relative">
                      <Image background src={`/images/Untitled-5.png`} alt={title} />
                    </div>
                <div><h2>Fabian Adeoye Lojede</h2></div>
                <div>Director</div>
                  </div>
                  <div className="Summary-item">
                    <div className="Summary-Img relative">
                      <Image background src={`/images/Untitled-9.png`} alt={title} />
                    </div>
                <div><h2>Julius Nadduli</h2></div>
                <div>Group C.F.O</div>
                  </div>
                  <div className="Summary-item">
                    <div className="Summary-Img relative">
                      <Image background src={`/images/Untitled-6.png`} alt={title} />
                    </div>
                <div><h2>Mickey Dube</h2></div>
                <div>Director</div>
                  </div>
                  <div className="Summary-item">
                    <div className="Summary-Img relative">
                      <Image background src={`/images/Untitled-7.png`} alt={title} />
                    </div>
                <div><h2>Arnold Babasa</h2></div>
                <div>C.T.O</div>
                  </div>
                </div>
               </div>
             </div>
             <div className="container Studies--Map">
               <div className="Studies--Map-Content">
                 <div className="Studies--Map-Content-Head">
                   We use digital to generate leads for businesses all
                   over the African continent
                 </div>
                 <div>
                   And we’ve developed teams, and own offices in key
                   markets accross Africa that give us access, and
                   on-the-ground skills in every region your business
                   will enter
                 </div>
               </div>
               <div className="Studies--Map-Image relative">
                 <Image
                   background
                   src={`/images/Untitled-15.png`}
                   alt={title}
                 />
               </div>
             </div>
             <div className="container taCenter">
               <div className="Studies">
                 <div>
                   lorem ipsum dolor sit amet, consectetur adipisicing
                   elit, sed do eiusmod tempor incididunt ut labore et
                   dolore magna aliqua. Ut enim ad minim veniam, quis
                   nostrud exercitation ullamco laboris nisi ut aliquip
                   ex ea commodo consequat.
                   <br /> <br />
                   Duis aute irure dolor in reprehenderit in voluptate
                   velit esse cillum dolore eu fugiat nulla pariatur.
                   Excepteur sint occaecat cupidatat non proident, sunt
                   in culpa qui officia deserunt mollit anim id est
                   laborum.
                 </div>
               </div>
             </div>
           </section>
         </main>
       )

const StudiesPage = ({ data: { page } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <StudiesPageTemplate {...page.frontmatter} body={page.html} />
  </Layout>
)

export default StudiesPage

export const pageQuery = graphql`
  query StudiesPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        template
        subtitle
        featuredImage
        excerpt
      }
    }
  }
`

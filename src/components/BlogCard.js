import React from 'react'
import { Link } from 'gatsby'

import Image from './Image'
import './BlogCard.css'
import Content from './Content';

const BlogCard = ({
  date,
  featuredImage,
  html,
  status,
  template,
  title,
  slug
}) => (
  <div className={`BlogCard`}>
    <div className="BlogCard--Content">
      {html && <Content src={html} />}

      <div>
        <button type="button" className="Button">
          I want this!
        </button>
        <button type="button" className="Button-blank">
          See More Examples
        </button>
      </div>
    </div>
    {featuredImage && (
      <div className="BlogCard--Image relative">
        <Image background src={featuredImage} alt={title} />
      </div>
    )}
  </div>
)

export default BlogCard

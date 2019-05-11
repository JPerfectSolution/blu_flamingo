import React from 'react'

import BlogCard from './BlogCard'
import './BlogSection.css'

class BlogSection extends React.Component {
  static defaultProps = {
    blogs: []
  }

  render() {
    const { blogs} = this.props;
    console.log(blogs);

    return (
      <div className="BlogSection">
        {!!blogs.length && (
          <div className="BlogSection--Grid">
            {blogs.map((blog, index) => (
              <BlogCard key={blog.title + index} {...blog} />
            ))}
          </div>
        )}
      </div>
    )
  }
}

export default BlogSection

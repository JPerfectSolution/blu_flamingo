import React from 'react'
import PropTypes from 'prop-types'

import Image from './Image'
import Content from './Content'
import './PageHeader.css'

const PageHeader = ({
  title,
  subtitle,
  backgroundImage,
  excerpt,
  section1,
  section2,
  large,
  aline,
  className = '',
  className1 = '',
  className2 = '',
}) => {
  className += ' PageHeader-large'
  if (large) {
    className1 = 'PageHeader--Two-col'
    className2 = '';
  }
  else {
    aline = 'center';
    className2 = 'display-none';
  }
  return (
    <div className={`PageHeader container ${className}`}>
      <div className={`${className1}`}>
        <h1 className={`PageHeader--Title ${aline}`}>{title}</h1>
        {subtitle && (
          <Content
            className={`PageHeader--Subtitle ${aline}`}
            src={subtitle}
          />
        )}
        {excerpt && <div className={`${aline}`}>{excerpt}</div>}

        <div className = {`PageHeader-Btn ${aline}`}>
          {section1 && (
            <button type="button" className="Button">
              {section1}
            </button>
          )}
          {section2 && (
            <button type="button" className="Button-blank">
              {section2}
            </button>
          )}
        </div>
      </div>

      <div className={`${className1} ${className2}`}>
        {backgroundImage && (
          <div className="PageHeader--Img relative">
            <Image
              background
              resolutions="large"
              src={backgroundImage}
              alt={title}
              size="cover"
            />
          </div>
        )}
      </div>
    </div>
  )
}

PageHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
}

export default PageHeader

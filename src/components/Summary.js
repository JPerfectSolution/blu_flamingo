import React from 'react'
import { Link } from 'gatsby'

import Image from './Image'
import './Summary.css'
import Content from './Content'

const Summary = ({
  date,
  featuredImage,
  html,
  status,
  template,
  title,
  slug
}) => (
  <section className="section Summary">
    <div className="Summary-line" />
    <div className="container Summary-content taCenter">
      <div className="taCenter subtitle">Who is Blu Flamingo?</div>
      <div className="Summary-pan">
        <div className="Summary-item">
          <div className="Summary-Img relative">
            <Image background src={`/images/Untitled-1.png`} alt={title} />
          </div>
          <div><h2>Domestic Teams & Capability</h2></div>
          <div>lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        </div>

        <div className="Summary-item">
          <div className="Summary-Img relative">
            <Image background src={`/images/Untitled-2.png`} alt={title} />
          </div>
            <div><h2>Domestic Teams & Capability</h2></div>
            <div>lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        </div>

        <div className="Summary-item">
          <div className="Summary-Img relative">
            <Image background src={`/images/Untitled-3.png`} alt={title} />
          </div>
            <div><h2>Domestic Teams & Capability</h2></div>
            <div>lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        </div>
      </div>
      <div className="Summary-Read-more">
        <button class="Button">Read More</button>
      </div>
    </div>
  </section>
)

export default Summary

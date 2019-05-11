import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Footer.css'
import Logo from './Logo';
import BriefUs from './BriefUs';

export default () => (
  <div>
    <footer className="footer">
      <div className="newsletter">
        <div className="container taCenter">
          <h2 className="color-white">Stay up to digital trends in Africa</h2>
          <h3 className="color-white">sign up for our newsletter</h3>
          <div class="input-group newsletter-group">
            <input
              type="text"
              class="form-control group-left-control padding-lr-20px"
              placeholder="Your email here"
              aria-label="Your email here"
            />
            <button className="Button group-right-control" type="button">
              Join Newsletter
            </button>
          </div>
          <div className="color-white">
            Updated monthly. Spam-free. Full of Valuable digital goodness
          </div>
        </div>
      </div>
    
      <div className="container taCenter footer-link">
        <div className="footer-col">
          <Logo />
          <br />
          <BriefUs />
        </div>
        <div className="footer-col">
          <div className="footer-col-top-item">Company</div>
          <div className="footer-col-item">Culture & Initiatives</div>
          <div className="footer-col-item">Management Team</div>
          <div className="footer-col-item">African Footprint</div>
        </div>

        <div className="footer-col">
          <div className="footer-col-top-item">Case Studies</div>
          <div className="footer-col-item">In Key African Territories</div>
          <div className="footer-col-item">
            Supporting expansion across Africa
          </div>
          <div className="footer-col-item">Multinational entry into Africa</div>
        </div>

        <div className="footer-col">
          <div className="footer-col-top-item">Resources</div>
          <div className="footer-col-item">Blog</div>
          <div className="footer-col-item">Our White Papers</div>
          <div className="footer-col-item">Digital Readiness Assessment</div>
          <div className="footer-col-item">Digital Services Map</div>
        </div>

        <div className="footer-col">
          <div className="footer-col-top-item">
            <i className="fab fa-facebook-f sns-icon" />
            <i className="fab fa-twitter sns-icon" />
            <i className="fab fa-google-plus-g sns-icon" />
            <i className="fab fa-linkedin-in sns-icon" />
            <i className="fab fa-whatsapp sns-icon" />
            <i className="fas fa-envelope sns-icon" />
          </div>
          <div className="footer-col-item">Contact Us</div>
          <div className="footer-col-item">Join the team</div>
        </div>
      </div>
      <div className="container taCenter">
        <span>
          {new Date().getFullYear()} © Blu Flamingo Digital - Made with style by
          Kagiso Creative | Privacy Policy & Terms of Use
        </span>
      </div>
    </footer>
  </div>
)

import React from 'react'
import './Footer.css'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import CopyrightIcon from '@mui/icons-material/Copyright';

function Footer() {
  return (
    <>
      <div className="footer-outer-container">
        <div className="footer-inner-container">
          <div className="footer-icons">
            <ul>
              <li>
                <FacebookOutlinedIcon />
              </li>
              <li>
                <InstagramIcon />
              </li>
              <li>
                <YouTubeIcon />
              </li>
            </ul>
          </div>

          <div className="footer-data">
            <div>
              <ul>
                <li>Audio Description</li>
                <li>Investor relations</li>
                <li>Legal Notices</li>
              </ul>
            </div>

            <div>
              <ul>
                <li>Help Center</li>
                <li>Jobs</li>
                <li> Preferences</li>
              </ul>
            </div>

            <div>
              <ul>
                <li>Gift Cards </li>
                <li> Terms of Use</li>
                <li> Information</li>
              </ul>
            </div>

            <div>
              <ul>
                <li>Media Center</li>
                <li>Privacy</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>

          <div className="service-code">
            <p>Service Code</p>
          </div>

          <div className="copy-right"> &copy; 1997 - 2025 Netflix, Inc</div>
        </div>
      </div>
    </>
  );
}

export default Footer;
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
                <li>Investor Relations</li>
                <li>Legal Notices</li>
                <li>Only on Netflix</li>
              </ul>
            </div>

            <div>
              <ul>
                <li>Help Center</li>
                <li>Jobs</li>
                <li>Cookie Preferences</li>
                <li>Gift Cards</li>
              </ul>
            </div>

            <div>
              <ul>
                <li>Media Center</li>
                <li>Terms of Use</li>
                <li>Contact Us</li>
                <li>Netflix Shop</li>
              </ul>
            </div>

            <div>
              <ul>
                <li>Privacy</li>
                <li>Corporate Information</li>
                <li>Speed Test</li>
                <li>Ad Choices</li>
              </ul>
            </div>

            <div>
              <ul>
                <li>Account</li>
                <li>Ways to Watch</li>
                <li>Do Not Sell or Share My Personal Information</li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="service-code">
              <p>Service Code</p>
            </div>
            
            <div className="language-selector">
              <select>
                <option value="en">English</option>
                <option value="es">Español</option>
                <option value="fr">Français</option>
                <option value="de">Deutsch</option>
                <option value="it">Italiano</option>
                <option value="pt">Português</option>
                <option value="ja">日本語</option>
                <option value="ko">한국어</option>
                <option value="zh">中文</option>
              </select>
            </div>
          </div>

          <div className="copy-right"> &copy; 1997 - 2025 Netflix, Inc</div>
        </div>
      </div>
    </>
  );
}

export default Footer;
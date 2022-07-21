import React from 'react';
import './footer.css';
import github from '../../assets/github.png';
import linkedin from '../../assets/linkedin.png';
import youtube from '../../assets/youtube.png';

const Footer = () => (
  <div className="gpt3__footer section__padding" id="footer">
    <div className="gpt3__footer-heading">
      <div className="bar1" />
      &nbsp;
      <h1 className="gradient__text">Get in touch.</h1>
      <p>Feel free to shoot out a message or connect on LinkedIn! :D</p>
      <h2 className="white__text">
        <a href="mailto: richard@bann.com">richard@bann.com</a>
      </h2>
    </div>
    {/* <div className="gpt3__footer-btn">
      <p>Request Early Access</p>
    </div> */}

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <a href="https://github.com/drahc1R">
          <img src={github} />
        </a>
      </div>
      <div className="gpt3__footer-links_logo">
        <a href="https://www.linkedin.com/in/richard-bann/">
          <img src={linkedin} />
        </a>
      </div>
      <div className="gpt3__footer-links_logo">
        <a href="https://www.youtube.com/channel/UCHdbCXU7LxBiNDpFpPQs37g">
          <img src={youtube} />
        </a>
      </div>
      {/* <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
      </div> */}
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2022 Bann. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;

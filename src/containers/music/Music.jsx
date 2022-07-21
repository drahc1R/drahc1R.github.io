import React from 'react';
// import people from '../../assets/people.png';
// import guitar from '../../assets/guitar.png';
import './music.css';
import { Container } from 'react-bootstrap';

const Music = () => (
  <div className="gpt3__header projectsection__padding" id="music">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">
        <a href="https://www.youtube.com/channel/UCHdbCXU7LxBiNDpFpPQs37g">
          Music
        </a>
      </h1>
      &nbsp;&nbsp;
      <div className="bar" />
      &nbsp;
      <Container>
        <div className="ratio ratio-16x9">
          <iframe
            width="560"
            height="349"
            src="https://www.youtube.com/embed/nLak8k-7F8g"
            title="Sounds of Bells"
            allowFullScreen
          />
        </div>
      </Container>
      {/* <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div> */}
    </div>
    {/* <div className="gpt3__header-image"><img src={guitar} /></div> */}
  </div>
);

export default Music;

import React from 'react';
// import people from '../../assets/people.png';
import guitar from '../../assets/guitar.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header headersection__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="white__text">Hello, I am</h1>
      <h1 className="gradient__text">Richard Bann</h1>
      <p>
        A computer science and classical guitar performance student from
        Northwestern University. I aim to deepen my understanding in various
        areas of technology and product development.
      </p>
    </div>
    <div className="gpt3__header-image">
      <img src={guitar} />
    </div>
  </div>
);

export default Header;

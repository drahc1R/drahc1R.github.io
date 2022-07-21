import React from 'react';

import {
  Footer,
  Blog,
  // Possibility,
  // Features,
  // WhatGPT3,
  Header,
  Projects,
  // Music,
  // Contact,
} from './containers';
import { Navbar } from './components';

import './App.css';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
    </div>
    <Header />
    <Projects />
    <Blog />
    {/* <Music /> */}
    {/* <Possibility /> */}
    {/* <Features /> */}
    {/* <Contact /> */}
    {/* <Brand />
    <WhatGPT3 />

    <CTA /> */}
    <Footer />
  </div>
);

export default App;

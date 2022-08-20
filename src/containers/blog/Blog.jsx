import React from 'react';
import Article from '../../components/article/Article';
import {
  nuft,
  discord,
  reddit,
  unity,
  // MERN,
  youtube,
  nuse,
  messenger,
  friday,
} from './imports';
import './blog.css';
import Article2 from '../../components/article2/Article2';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    {/* <div className="gpt3__blog-heading">
      <h1 className="gradient__text">
        A lot is happening, <br /> We are blogging about it.
      </h1>
    </div> */}
    <div className="gpt3__blog-container">
      {/* <div className="gpt3__blog-container_groupA">
        <Article
          imgUrl={blog01}
          date="Sep 26, 2021"
          text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
        />
      </div> */}
      <div className="gpt3__blog-container_groupB">
        <Article
          imgUrl={nuse}
          link="https://github.com/northwesternfintech"
          date="July 2022"
          text="NUSE Trade Site"
          description="The Northwestern University Stock Exchange website developed with React, Typescript, Next.js, and TailwindCSS to run stock market simulations."
        />
        <Article
          imgUrl={nuft}
          link="https://github.com/drahc1R/NUFT"
          date="March, 2022"
          text="NUFT System Infrastracture"
          description="Developed high performance, multithreaded WebSocket servers in Python to allow trading to occur in all cryptocurrency exchanges simultaneously. Data network/infrastructure for the NUSE trade site."
        />
        <Article
          imgUrl={messenger}
          link="https://github.com/northwesternfintech"
          date="July 2022"
          text="Messenger Data Bot"
          description="A Messenger bot used to query market data from MongoDB for the Northwestern University Stock Exchange website."
        />
        <Article
          imgUrl={friday}
          link="https://friday-food.herokuapp.com"
          date="July 2022"
          text="The Friday Food E-commerce Website"
          description="A full stack e-commerce website developed with the MERN stack for the Friday Food Service."
        />
        <Article
          imgUrl={discord}
          link="https://github.com/drahc1R/DoggoBot"
          date="December 2021"
          text="Multi-role Discord Bot"
          description="A Discord bot that can be used to manage multiple roles on a server."
        />
        <Article
          imgUrl={reddit}
          link="https://github.com/drahc1R/NLP-Reddit-Bot"
          date="June 2022"
          text="NLP Sentiment Analysis Reddit Bot"
          description="A Reddit bot that can be used to analyze the sentiment of a post."
        />
        <Article2
          imgUrl={unity}
          link="https://richbann.itch.io/"
          date="September 2021"
          text="Dig It!"
          description="An original 2D action game developed in Unity and C#."
        />
        <Article
          imgUrl={youtube}
          link="https://www.youtube.com/channel/UCHdbCXU7LxBiNDpFpPQs37g"
          date="Ongoing"
          text="Youtube Channel"
          description="My personal classical guitar youtube channel. Feel free to check it out!"
        />
      </div>
    </div>
  </div>
);

export default Blog;

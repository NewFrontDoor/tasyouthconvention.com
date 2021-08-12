import React from 'react';
import speaker1 from './speakers/Reuben.png';
//import speaker2 from './speakers/tyc-speaker-2.png';


export default () => (
  <section id="speakers">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="section-title">
            <h2 className="text-center"><span>Speakers</span></h2>
            <p className="subtitle text-center">Come and meet our TYC speaker for this year!</p>
            <p className="subtitle text-center"><i className="fa fa-angle-down fa-lg"></i></p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <div className="col-sm-3"></div>
          <div className="col-sm-6 text-center">
            <div className="speaker-item">
              <figure className="speaker accent-bg hideForSM">
                <img src={speaker1} width="300" height="300" alt="Speaker" className="img-responsive center-block" />
                <figcaption>
                  <p>I’m Reuben, a 28 year old mainlander from Geelong, Victoria. This year I moved to Launceston to work as an apprentice pastor at Riverbank Christian Church... and I’m learning that Tassie people are pretty alright! I’ve been married to the lovely Sjaan for nearly 8 years and our boy Ravi is one year old. I like to drink coffee, play music, and hang out with friends and family. My biggest passion is Jesus. I’m repeatedly amazed at how much he loves me and I’m excited about what he is doing in our world. I still can’t believe I get paid to do what I love: preach the Bible and help people to follow Jesus!</p>
                </figcaption>
              </figure>
              <figure className="showForSM">
                <img src={speaker1} width="300" height="300" alt="Speaker" className="img-responsive center-block" />
                <figcaption>

                </figcaption>
              </figure>
              <p><span className="speaker-accent">Reuben Capill</span><br />
                Apprentice Pastor, <a className="redLink" href="https://www.riverbankcc.org.au/" target="_blank" rel="noreferrer noopener">Riverbank Christian Church</a>
              </p>
              <p className="showForSM">I’m Reuben, a 28 year old mainlander from Geelong, Victoria. This year I moved to Launceston to work as an apprentice pastor at Riverbank Christian Church... and I’m learning that Tassie people are pretty alright! I’ve been married to the lovely Sjaan for nearly 8 years and our boy Ravi is one year old. I like to drink coffee, play music, and hang out with friends and family. My biggest passion is Jesus. I’m repeatedly amazed at how much he loves me and I’m excited about what he is doing in our world. I still can’t believe I get paid to do what I love: preach the Bible and help people to follow Jesus!</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  </section>
)

import React from 'react';
import speaker1 from './speakers/tyc-speaker-1.png';
import speaker2 from './speakers/tyc-speaker-2.png';


export default () => (
  <section id="speakers">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="section-title">
            <h2 className="text-center"><span>Speakers</span></h2>
            <p className="subtitle text-center">Come and meet our TYC speakers for this year!</p>
            <p className="subtitle text-center"><i className="fa fa-angle-down fa-lg"></i></p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 text-center">
          <div className="speaker-item">
            <figure className="speaker accent-bg">
              <img src={speaker1} width="300" height="300" alt="Speaker" className="img-responsive center-block" />
              <figcaption>
                <p>Mike Hall loves his family, fishing, football and Jesus. He has worked in both churches and the corporate sector. He is married to Helen and they have two young girls and a bulldog named Basil.</p>
              </figcaption>
            </figure>
            <p><span className="speaker-accent">Mike Hall</span><br />
              {/*Title, <a className="redLink" href="http://website" target="_blank" rel="noreferrer noopener">Website</a>*/}
            </p>
          </div>
        </div>
        <div className="col-sm-6 text-center">
          <div className="speaker-item">
            <figure className="speaker accent-bg">
              <img src={speaker2} width="300" height="300" alt="Speaker" className="img-responsive center-block" />
              <figcaption>
                <p>Stu White is an AFES Campus Director at Monash University Melbourne. That means he leads a team of people in proclaiming Christ to the campus. His job is a great source of joy. Another great source of joy is his wife, Alicia, and their three kids. Apart from work, family, church and Netflix, he doesn’t do much but he would love to be someone who surfs and paints.</p>
              </figcaption>
            </figure>
            <p>
              <span className="speaker-accent">Stu White</span><br />
              {/*Title, <a className="redLink" href="http://website" target="_blank" rel="noreferrer noopener">Website</a>*/}
            </p>
          </div>

        </div>

      </div>
    </div>

  </section>
)

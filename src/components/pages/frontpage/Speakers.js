import React from 'react';
import speaker1 from './speakers/tyc-speaker-1.jpg';
import speaker2 from './speakers/tyc-speaker-2.jpg';


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
                <p>Sam Terry is a Theological Student at Moore College in Sydney. He and his wife have done ministry to fine arts students, they attend a church that does particular ministry to Islamic people.</p><p>Sam directs a website, enoughroom.org, which is an initiative to source temporary mid-term accommodation for asylum seekers. He has worked as a weather forecaster. He attempts to paint clouds and dreams of one day building a robot with his son.</p>
              </figcaption>
            </figure>
            <p><span className="speaker-accent">Sam Terry</span><br/>
              Moore College Student, Director of <a href="https://enoughroom.org/">Enough Room</a>.</p>
          </div>
        </div>
        <div className="col-sm-6 text-center">
          <div className="speaker-item">
            <figure className="speaker accent-bg">
            <img src={speaker2} width="300" height="300" alt="Speaker" className="img-responsive center-block" />
              <figcaption>
                <p>James Galea, works at Church by the Bridge in Sydney looking after newcomers, getting them connected, and he oversees youth work. He’s married to Charlotte and they have two daughters. </p><p>James’ father is Ray Galea, Australian paster and author of well-known books “Nothing in My Hand I Bring”, and “God is Enough”. He enjoys bird watching, comedy, house-dance music and cooking. Hates watermelon and traffic.</p>
              </figcaption>
            </figure>
            <p>
              <span className="speaker-accent">James Galea</span>
              <br/>
              Assistant Pastor, <a href="https://cbtb.org.au/">Church By the Bridge</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
)

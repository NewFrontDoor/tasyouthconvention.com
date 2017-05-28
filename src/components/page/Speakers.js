import React from 'react';
import speaker1 from './speakers/speaker-01.jpg';
import speaker2 from './speakers/speaker-02.jpg';
import speaker3 from './speakers/speaker-03.jpg';

export default () => (
  <section id="speakers">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="section-title">
            <h2 className="text-center"><span>Speakers</span></h2>
            <p className="subtitle text-center">Satisne ergo pudori consulat, si quis sine teste libidini pareat</p>
            <p className="subtitle text-center"><i className="fa fa-angle-down fa-lg"></i></p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-3 col-sm-6 text-center">
          <div className="speaker-item"> <a href="speaker-details2.html#speaker1">
            <figure className="speaker accent-bg">
              <img src={speaker1} width="300" height="300" alt="Speaker" className="img-responsive center-block" />
              <figcaption>
                <p className="text-uppercase accent">Tech Hall</p>
                <p>04/10/2016 - 3PM</p>
              </figcaption>
            </figure>
            </a>
            <p><span className="speaker-accent">Joshua Cull</span><br/>
              Lean UX</p>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 text-center">
          <div className="speaker-item">
            <a href="speaker-details2.html#speaker2">
              <figure className="speaker accent-bg">
              <img src={speaker2} width="300" height="300" alt="Speaker" className="img-responsive center-block" />
                <figcaption>
                  <p className="text-uppercase accent">Design Hall</p>
                  <p>04/10/2016 - 3PM</p>
                </figcaption>
              </figure>
            </a>
            <p>
              <span className="speaker-accent">Isabel Hudson</span>
              <br/>
              Freelancing is a great job
            </p>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 text-center">
          <div className="speaker-item">
            <a href="speaker-details2.html#speaker3">
              <figure className="speaker accent-bg">
                <img src={speaker3} width="300" height="300" alt="Speaker" className="img-responsive center-block" />
                <figcaption>
                  <p className="text-uppercase accent">Design Hall</p>
                  <p>04/10/2016 - 3PM</p>
                </figcaption>
              </figure>
            </a>
            <p><span className="speaker-accent">Fin Kerring</span><br/>
              Handlettering Techniques</p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <p className="mrgn-50-top text-center"><a href="speakers.html" className="btn btn-main-ghost">See more speakers</a></p>
        </div>
      </div>
    </div>
  </section>
)

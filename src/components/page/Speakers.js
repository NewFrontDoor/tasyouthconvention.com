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
            <p className="subtitle text-center">TYC speakers are the hippest!</p>
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
                <p className="text-uppercase accent">Speaker 1</p>
                <p>Friday Evening</p>
              </figcaption>
            </figure>
            </a>
            <p><span className="speaker-accent">Speaker 1</span><br/>
              Speaker Topic</p>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 text-center">
          <div className="speaker-item">
            <a href="speaker-details2.html#speaker2">
              <figure className="speaker accent-bg">
              <img src={speaker2} width="300" height="300" alt="Speaker" className="img-responsive center-block" />
                <figcaption>
                  <p className="text-uppercase accent">Speaker 2</p>
                  <p>Saturday Afternoon</p>
                </figcaption>
              </figure>
            </a>
            <p>
              <span className="speaker-accent">Speaker 2</span>
              <br/>
              Get your life in gear
            </p>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 text-center">
          <div className="speaker-item">
            <a href="speaker-details2.html#speaker3">
              <figure className="speaker accent-bg">
                <img src={speaker3} width="300" height="300" alt="Speaker" className="img-responsive center-block" />
                <figcaption>
                  <p className="text-uppercase accent">Speaker 3</p>
                  <p>Saturday Evening</p>
                </figcaption>
              </figure>
            </a>
            <p><span className="speaker-accent">Speaker 3</span><br/>
              Trials in Leviticus</p>
          </div>
        </div>
      </div>
    </div>
  </section>
)

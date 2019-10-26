import React from 'react';

const DRUPAL_FILE_PREFIX = "https://tasyouthconvention.vision100it.org/sites/tasyouthconvention.vision100it.org/files/";

export default () => (
    <section id="past-talks">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="section-title">
                        <h2 className="text-center"><span>Past Talks</span></h2>
                        <p className="subtitle text-center">Listen to the talks from our previous conferences below</p>
                    </div>
                </div>
            </div>
            <h3>TYC 2018</h3>
            <div className="row">
                <div className="col-sm-4 text-center pddn-40-top">
                    <div className="speaker-item">
                        <p><span className="speaker-accent"><a className="redLink" href={DRUPAL_FILE_PREFIX + `TYC18 Session 1 Dave Lynch.mp3`} target="_blank" rel="noreferrer noopener">Session 1</a></span><br />
                            Speaker: Dave Lynch</p>
                    </div>
                </div>
                <div className="col-sm-4 text-center pddn-40-top">
                    <div className="speaker-item">
                        <p><span className="speaker-accent"><a className="redLink" href={DRUPAL_FILE_PREFIX + `TYC18 Session 2 Murray Capill.mp3`} target="_blank" rel="noreferrer noopener">Session 2</a></span><br />
                            Speaker: Murray Capill</p>
                    </div>
                </div>
                <div className="col-sm-4 text-center pddn-40-top">
                    <div className="speaker-item">
                        <p><span className="speaker-accent"><a className="redLink" href={DRUPAL_FILE_PREFIX + `TYC18 Session 3 Dave Lynch.mp3`} target="_blank" rel="noreferrer noopener">Session 3</a></span><br />
                            Speaker: Dave Lynch</p>
                    </div>
                </div>
                <div className="col-sm-4 text-center pddn-40-top">
                    <div className="speaker-item">
                        <p><span className="speaker-accent"><a className="redLink" href={DRUPAL_FILE_PREFIX + `TYC18 Session 4 Murray Capill.mp3`} target="_blank" rel="noreferrer noopener">Session 4</a></span><br />
                            Speaker: Murray Capill</p>
                    </div>
                </div>
                <div className="col-sm-4 text-center pddn-40-top">
                    <div className="speaker-item">
                        <p><span className="speaker-accent"><a className="redLink" href={DRUPAL_FILE_PREFIX + `TYC18 Session 5 Murray Capill.mp3`} target="_blank" rel="noreferrer noopener">Session 5</a></span><br />
                            Speaker: Murray Capill</p>
                    </div>
                </div>
                <div className="col-sm-4 text-center pddn-40-top">
                    <div className="speaker-item">
                        <p><span className="speaker-accent"><a className="redLink" href={DRUPAL_FILE_PREFIX + `TYC18 Session 6 Dave Lynch.mp3`} target="_blank" rel="noreferrer noopener">Session 6</a></span><br />
                            Speaker: Dave Lynch</p>
                    </div>
                </div>
            </div>
        </div>

    </section >
)

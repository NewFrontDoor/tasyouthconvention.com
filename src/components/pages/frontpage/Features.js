import React from 'react';

import ideas from './icons/ideas.svg';
import discussions from './icons/discussions.svg';
import exhibitions from './icons/exhibitions.svg';
import workshops from './icons/workshops.svg';

export default () => (
  <section id="event-features">
    <div className="container">
      <div className="row">
        <div className="col-md-3 col-sm-6  col-xs-6"> <img src={ideas} width="49" height="80" className="img-responsive" alt="Ideas" />
          <h2 className="accent">Bible Talks</h2>
          <p> Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. </p>
        </div>
        <div className="col-md-3 col-sm-6  col-xs-6"> <img src={discussions} width="76" height="80" className="img-responsive" alt="Discussions" />
          <h2 className="accent">Social Time</h2>
          <p> Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. </p>
        </div>
        <div className="col-md-3 col-sm-6  col-xs-6"> <img src={exhibitions} width="76" height="80" className="img-responsive" alt="Exhibitions" />
          <h2 className="accent">Stuff to Do</h2>
          <p> Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. </p>
        </div>
        <div className="col-md-3 col-sm-6  col-xs-6"> <img src={workshops} width="70" height="70" className="img-responsive" alt="Workshops" />
          <h2 className="accent">More Stuff</h2>
          <p> Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. </p>
        </div>
      </div>
    </div>
  </section>
);

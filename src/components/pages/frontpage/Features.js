import React from 'react';

import ideas from './icons/ideas.svg';
import discussions from './icons/discussions.svg';
import exhibitions from './icons/exhibitions.svg';
import workshops from './icons/workshops.svg';

export default () => (
  <section id="event-features">
    <div className="container">
      <div className="row">
        <div className="col-md-4 col-xs-6"> <img src={ideas} width="49" height="80" className="img-responsive" alt="Ideas" />
          <h2 className="accent">Bible Talks</h2>
          <p>At TYC, we really get stuck into God's word with 6 talks across the weekend.  It's a great chance to take time out and think together about what it means to follow Jesus.</p>
        </div>
        <div className="col-md-4 col-xs-6"> <img src={discussions} width="76" height="80" className="img-responsive" alt="Discussions" />
          <h2 className="accent">Social Time</h2>
          <p>In between the talks and on the Saturday afternoon there is also plenty of time to catch up with friends, chat about the talks, play a little sport and enjoy some of the sights in Bicheno. Youth groups usually let each other know if what they are planning so everyone can hang out togethe</p>
        </div>
        <div className="col-md-4 col-sm-6  col-xs-6"> <img src={exhibitions} width="76" height="80" className="img-responsive" alt="Exhibitions" />
          <h2 className="accent">Stuff to Do</h2>
          <p>Bicheno is a great little seaside town to enjoy for a weekend. In your free time if you're brave you could go for a swim at the beach, or walk around the blowhole or up to a great lookout. There's often a soccer or basketball game happening on Saturday afternoon that you're welcome to join.</p>
        </div>
      </div>
    </div>
  </section>
);

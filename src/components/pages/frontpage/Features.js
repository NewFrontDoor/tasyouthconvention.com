import React from 'react';

import ideas from '../../../images/icons/ideas.svg';
import discussions from '../../../images/icons/discussions.svg';
import exhibitions from '../../../images/icons/exhibitions.svg';

export default () => (
  <section id="event-features">
    <div className="container text-center">
      <div className="row">
        <div className="col-md-4 col-xs-6"> <img src={ideas} width="49" height="80" className="img-responsive" alt="Ideas" style={{ display: "inline-block" }} />
          <h2 className="accent">Bible Talks</h2>
          <p className="subtitle">At Tas Youth Convention, we get stuck into God’s word. Every year we draw our theme from the books of the Bible. We centre everything around the good news of Jesus. Over the weekend there are six talks from two key speakers.</p>
        </div>
        <div className="col-md-4 col-xs-6"> <img src={discussions} width="76" height="80" className="img-responsive" alt="Discussions" style={{ display: "inline-block" }} />
          <h2 className="accent text-center">Social Time</h2>
          <p className="subtitle">In between the talks and on Saturday afternoon there is plenty of time to meet other young Christians, chat about the talks, play a little sport and enjoy the beachside town of Bicheno.</p>
          <br />
          <br />
          <br />
        </div>
        <div className="col-md-4 col-sm-12"> <img src={exhibitions} width="76" height="80" className="img-responsive" alt="Exhibitions" style={{ display: "inline-block" }} />
          <h2 className="accent">Stuff to Do</h2>
          <p className="subtitle">On Saturday afternoon youth can split up into groups under the supervision of leaders to be involved in a range of activities. You could go for a swim at the beach or walk around the blowhole or up to the lookout. There's always a soccer or basketball game happening on Saturday afternoon.</p>
        </div>
      </div>
    </div>
  </section>
);

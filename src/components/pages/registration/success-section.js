import React from 'react';

export default class SuccessSection extends React.Component {
  componentWillUnmount() {
    this.props.resetRegistration();
  }
  render() {
    if (!this.props.show) return null;

    return (
        <div>
          <div className="alert alert-success">Success! you have successfully registered for TYC.</div>
          <p>If you have any questions please send us an email at <a href="mailto:tasyouthcon@gmail.com">tasyouthcon@gmail.com</a> or contact us on Facebook about your registration.</p>
          {this.props.isGroupRegistration &&
            <p>As you've registered your group, once we've authorised it, people in your youth group should be able to register for TYC.</p>
          }
          <p>We look forward to seeing you at TYC!</p>
        </div>
      )
    }
}

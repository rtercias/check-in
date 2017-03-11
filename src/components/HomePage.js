import React, { PropTypes } from 'react';


class Home extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Territory Check-Out</h1>
        <p>Check-out or return a Territory.</p> 
    );
  }
}

Home.propTypes = {
  children: PropTypes.element
};

export default Home;
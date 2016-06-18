/* @flow */

import React from 'react';

export default class JustPrint extends React.Component {
  constructor() {
    super();
    this.state = {
      liked: false
    };
  }
  handleClick = () => {
    this.setState({liked: !this.state.liked});
  }
  render() {
    return (
      <div>
        <div>{this.props.name}</div>
        <div>{ this.state.liked ? '\n' + this.props.description : undefined }</div>
        <span onClick={this.handleClick} style={{cursor: 'pointer', color: 'blue', fontStyle: 'underline'}}>Click to toggle.</span>
      </div>
    );
  }
}

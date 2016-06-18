/* @flow */

import React, { Component } from 'react';
import JustPrint from '../JustPrint';

export default class LikeButton extends Component {
  render() {
    const { data } = this.props;
    return (
      <div>
      {
        data.map(function(comment, index) {
          return <JustPrint key={index} {...data[index]} />
        })
      }
      </div>
    )
  };
}

/* @flow */

import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../css/normalize.css'; // eslint-disable-line no-unused-vars
import LikeButton from './components/LikeButton';

var data = [
  {id: 1, name: "Pete Hunt", description: "This is first comment"},
  {id: 2, name: "Jordan Walke", description: "This is second comment"},
  {id: 3, name: "Alam Walker", description: "This is third comment"}
];

ReactDOM.render(
  <LikeButton data={data}/>,
  document.getElementById('app')
);

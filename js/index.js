require('babel-polyfill');
import React from 'react';
import ReactDOM from 'react-dom';
import MemeCard from './components/meme-card';
import MemeContainer from './components/meme-container';

document.addEventListener('DOMContentLoaded', () =>
  ReactDOM.render(<MemeContainer />, document.getElementById('app'))
);

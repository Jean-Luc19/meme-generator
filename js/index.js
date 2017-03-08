require('babel-polyfill');
import React from 'react';
import ReactDOM from 'react-dom';
import MemeCard from './components/meme-card'

document.addEventListener('DOMContentLoaded', () =>
  ReactDOM.render(<MemeCard />, document.getElementById('app'))
);

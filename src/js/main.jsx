import React from 'react'
import ReactDOM from 'react-dom/client'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

import './styles/index.css'

import SimpleCounter from './components/SimpleCounter';

let counter = 0;
const root = ReactDOM.createRoot(document.getElementById('root'));

setInterval(() => {
  const sixth = Math.floor(counter / 10000);
  const fifth = Math.floor(counter / 10000);
  const four = Math.floor(counter / 1000);
  const three = Math.floor(counter / 100);
  const two = Math.floor(counter / 10);
  const one = Math.floor(counter / 1);
  counter++;

  root.render(
    <SimpleCounter second={one} seconds={two} minute={three} minutes={four} hour={fifth} hours={sixth} />
  );
}, 1000);
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const {SHOW_WIDGETS: widgets = ['FAQ', 'HELP'], LOCATION: locations = {FAQ : 'faq', HELP: 'help'}} = window.__subscribili__ || {};

console.log('widgets', widgets);
console.log('locations', locations);

widgets.map((item) => 
  ReactDOM.render(
    <React.StrictMode>
      <App widget={item} />
    </React.StrictMode>,
    document.getElementById(locations[item]))
  )  


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

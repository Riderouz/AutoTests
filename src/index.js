import React from 'react';
import ReactDOM from 'react-dom';
import "./assets/styles/style.css";
import App from './screens/main/App';
ReactDOM.render(
    <App />,
  document.querySelector('body')
);
var reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};
reportWebVitals()

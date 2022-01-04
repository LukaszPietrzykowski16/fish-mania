import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Content from './Content';
import About from './About';
import Subsection from './Subsection';
import Opinion from './Opinion';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Content /> 
    <About /> 
    <Subsection />
    <Opinion />
  </React.StrictMode>,
  document.getElementById('root')
);



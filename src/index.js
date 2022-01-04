import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Content from './Content';
import About from './About';
import Subsection from './Subsection';
import Opinion from './Opinion';
import Number from './Number';
import Footer from './Footer';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Content /> 
    <About /> 
    <Subsection />
    <Opinion />
    <Number />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);



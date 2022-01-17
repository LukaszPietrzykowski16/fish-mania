import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Content from './Content';
import About from './About';
import Subsection from './Subsection';
import Opinion from './Opinion';
import Galery from './Galery';
import Number from './Number';
import Textes from './Textes';
import Footer from './Footer';


ReactDOM.render(
  <React.StrictMode>
    <App />
    <Content /> 
    <About /> 
    <Subsection />
    <Opinion />
    <Galery />
    <Number />
    <Textes />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);



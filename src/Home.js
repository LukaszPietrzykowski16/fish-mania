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
import Fishes from './Fishes';

export default function Home() {
    return (
        <>
        <Content /> 
        <About /> 
        <Subsection />
        <Fishes />
        <Opinion />
        <Galery />
        <Number />
        <Textes />
        </>
    )
}


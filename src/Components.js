import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Galeria from './Galeria';
import Footer from './Footer';

function Components() {
    return (
        <>
        <Router>
            <div className='navigation'>
                <div className='sub-nav'><Link to="/"> Home </Link> </div>
                <div className='sub-nav'> <Link to="/gallery"> Gallery </Link> </div>
            </div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Galeria />} />
        </Routes>

        </Router>
        
        <Footer />
        </>
    )
}

export default Components

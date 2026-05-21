import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../component/Home';   
import About from '../component/About';
import Login from '../component/Login';
import Services from '../component/Services';
import Register from '../component/Register';

const Main = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/register" element={<Register/>} />
        </Routes>
    );
};

export default Main;
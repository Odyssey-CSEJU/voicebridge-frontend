// frontend/src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import VideoCapture from "./components/VideoCapture";


function App() {

    return (
        <Router>

            <Routes>
                <Route path="/video-capture" element={<VideoCapture />} />

            </Routes>
        </Router>


    );
}

export default App;
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';

import { HomePage, AboutMePage, WrittenWorkPage, WrittenWorkPage2, ContactPage, TestPage } from "./pages";
import { AboutMeMobile, ContactMobile } from "./pages";

const App = () => {
    
    const [darkModeEnabled, setDarkModeEnabled] = useState(true);

    return (
        <Box>
            <Routes>
                <Route path="/" element={<HomePage darkModeEnabled={darkModeEnabled} setDarkModeEnabled={setDarkModeEnabled} />} />

                <Route path="/about-me" element={<AboutMePage darkModeEnabled={darkModeEnabled} setDarkModeEnabled={setDarkModeEnabled} />} />
                <Route path="/about-me-mobile" element={<AboutMeMobile darkModeEnabled={darkModeEnabled} setDarkModeEnabled={setDarkModeEnabled} />} />

                <Route path="/written-work" element={<WrittenWorkPage darkModeEnabled={darkModeEnabled} setDarkModeEnabled={setDarkModeEnabled} />} />
                <Route path="/written-work-2" element={<WrittenWorkPage2 darkModeEnabled={darkModeEnabled} setDarkModeEnabled={setDarkModeEnabled} />} />

                <Route path="/contact" element={<ContactPage darkModeEnabled={darkModeEnabled} setDarkModeEnabled={setDarkModeEnabled} />} />
                <Route path="/contact-mobile" element={<ContactMobile darkModeEnabled={darkModeEnabled} setDarkModeEnabled={setDarkModeEnabled} />} />

                <Route path="/test" element={<TestPage darkModeEnabled={darkModeEnabled} setDarkModeEnabled={setDarkModeEnabled} />} />
            </Routes>
        </Box>
    );
}

export default App;
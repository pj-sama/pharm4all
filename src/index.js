import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes , Route } from "react-router-dom";
import './index.css';
import App from './App';
import About from './routes/About';
import Locations from './routes/Locations';
import AvailabilityChecker from './routes/AvailabilityChecker';
import MedInfo from './routes/MedInfo';
import Login from './routes/Login';
import Home from './routes/Home';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<Home />} />
                    <Route path="About" element={<About />} />
                    <Route path="Locations" element={<Locations />} />
                    <Route path="AvailabilityChecker" element={<AvailabilityChecker />} />
                    <Route path="MedInfo" element={<MedInfo />} />
                    <Route path="Login" element={<Login />} />
                </Route>    
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import './index.css';
import { SearchContextProvider } from "./contexts/SearchContext";


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    // <React.StrictMode>
        <SearchContextProvider>
            <Router>
                <App />
            </Router>
        </SearchContextProvider>
    // </React.StrictMode>
);
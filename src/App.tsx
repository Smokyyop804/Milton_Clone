import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Cart from './components/Cart/Cart';

const App: React.FC = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                {/* ... other routes ... */}
                <Route path="/cart" element={<Cart />} />
                {/* ... other routes ... */}
            </Routes>
        </Router>
    );
};

export default App; 
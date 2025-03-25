import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <nav>
            {/* ... other nav items ... */}
            <Link to="/cart">
                <button>Cart</button>
            </Link>
            {/* ... other nav items ... */}
        </nav>
    );
};

export default Navbar; 
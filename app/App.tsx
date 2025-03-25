import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Cart from './components/Cart/Cart';

const App: React.FC = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                {/* ... other routes ... */}
                <Route path="/cart" component={Cart} />
                {/* ... other routes ... */}
            </Switch>
        </Router>
    );
};

export default App; 
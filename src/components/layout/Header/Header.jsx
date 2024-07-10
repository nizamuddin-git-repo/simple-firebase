import React from 'react';
import { Link } from 'react-router-dom';
import UserLogin from '../UserLogin/UserLogin';

const Header = () => {
    return (
        <div>
            <div>
                <UserLogin></UserLogin>
            </div>
            <h2>This is Header</h2>
            <Link to="/"></Link>
            <Link to="/login">Login</Link>
            
        </div>
    );
};

export default Header;
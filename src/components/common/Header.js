import React from 'react';
import { Link, IndexLink } from 'react-router';
import LoadnigDots from './LoadingDots'

const Header = () => {
    return (
        <nav>
            <IndexLink to="/" activeClassName="active">Home</IndexLink>
            {" | "}
            <Link to="/courses" activeClassName="active">Courses</Link>
            {" | "}
            <Link to="/about" activeClassName="active">About</Link>
            <LoadnigDots interval={100} dots={20}/>
        </nav>
    );
};

export default Header;

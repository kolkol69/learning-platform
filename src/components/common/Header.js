import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import LoadnigDots from './LoadingDots'

const Header = ({loading}) => {
    return (
        <nav>
            <IndexLink to="/" activeClassName="active">Home</IndexLink>
            {" | "}
            <Link to="/courses" activeClassName="active">Courses</Link>
            {" | "}
            <Link to="/about" activeClassName="active">About</Link>
            {loading && <LoadnigDots interval={100} dots={20}/>}
        </nav>
    );
};

Header.propTypes = {
    loading: PropTypes.bool.isRequired
}

export default Header;

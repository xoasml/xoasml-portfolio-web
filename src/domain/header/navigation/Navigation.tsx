import React from 'react';
import {Link} from "react-router-dom";

function Navigation() {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/project">Project</Link>
            <Link to="/learning">Learning</Link>
        </div>
    );
}

export default Navigation;
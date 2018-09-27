import React, { Component } from 'react';

//Stateless Functional Component
const NavBar = (props) => {
    return ( 
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
            Navbar <span
             className="badge badge-pill badge-secondary">{props.totalCounters}
             </span>
            </a>
        </nav>
    );
}
// no need to make a class as can be done by a stateless functional component


/*class NavBar extends Component {
    render() { 
        return ( 
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
            Navbar <span
             className="badge badge-pill badge-secondary">{this.props.totalCounters}
             </span>
            </a>
        </nav>
         );
    }
}
 
export default NavBar;
*/
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <div className="container ">
                <div className="row padingitem">
                    <div className="col-md-5">
                        <h2><b>Speed Riders Transport</b></h2>
                    </div>
                    <div className="col-md-7">
                        <div className="floatRight">
                            <nav>
                                <Link to="/">Home</Link>
                                <Link to="/destination">Destination</Link>
                                <Link to="/blog">Blog</Link>
                                <Link to="/contact">Contact</Link>
                                <Link className="loginstyle" to="/login">Log In</Link>
                            </nav>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
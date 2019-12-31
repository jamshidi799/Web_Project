import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
                <Link to="/" className="navbar-brand">Home</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link to="/channels" className="nav-item nav-link">Channels</Link>
                        <Link to="/signin" className="nav-item nav-link ">Signin</Link>
                        <Link to="/profile" className="nav-item nav-link">Profile</Link>
                        <Link to="/signup" className="nav-item nav-link">signup</Link>
                    </div>
                </div>
                <div className="navbar-collapse collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to="/notifications" className="nav-item nav-link right">Notifications</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/signin" className="nav-item nav-link">Logout</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar
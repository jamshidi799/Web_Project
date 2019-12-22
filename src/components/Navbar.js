import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
                <Link to="/" class="navbar-brand">Home</Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link to="/channels" class="nav-item nav-link">Channels</Link>
                        <Link to="/newPost" class="nav-item nav-link ">New Post</Link>
                        <Link to="/profile" class="nav-item nav-link">Profile</Link>
                    </div>
                </div>
                <div class="navbar-collapse collapse">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <Link to="/notifications" class="nav-item nav-link right">Notifications</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/signin" class="nav-item nav-link">Logout</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar
import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Example from './Modal'
import { logout } from '../../actions/auth'
import TransitionsModal from "../notification/Modal";

class Navbar extends Component {
    logout = () => {
        this.props.logout()
    }

    getState = () => {
        if (this.props.isAuthenticated)
            return (
                <Fragment>
                    <li className="nav-item">
                        <button className="nav-item nav-link btn">{this.props.user.username}</button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-item nav-link btn" onClick={this.logout}>Logout</button>
                    </li>
                    <li>
                        <TransitionsModal content="notification" buttonName="notification" variant="contained" />
                    </li>
                </Fragment>
            )
        return (
            <Fragment>
                <li className="nav-item">
                    <Link to="/signin" className="nav-item nav-link ">Signin</Link>
                </li>
                <li className="nav-item">
                    <Link to="/signup" className="nav-item nav-link">signup</Link>
                </li>
            </Fragment>
        )
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
                <Link to="/" className="navbar-brand">Home</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link to="/profile" className="nav-item nav-link">Profile</Link>
                        <Example />
                    </div>
                </div>
                <div className="navbar-collapse collapse">
                    <ul className="navbar-nav ml-auto">
                        {this.getState()}
                    </ul>
                </div>
            </nav>
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        user: state.auth.user
    }
}

export default connect(mapStateToProps, { logout })(Navbar)
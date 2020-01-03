import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Example from './Modal'
import { logout } from '../../actions/auth'
import TransitionsModal from "../notification/Modal";
import SearchIcon from '@material-ui/icons/Search';
import sidebarIcon from '../../img/sidebar.png'
import InputBase from "@material-ui/core/InputBase";

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
    };
    componentDidMount() {
        var searchTextField = document.getElementById("searchTextField");
        searchTextField.addEventListener("keypress", event => {
            var key = event.keyCode;
            console.log(key)
            if (key === 13) {
                window.location.href = "/search/" + searchTextField.value;
                //    this.props.history.push('/search'); dunno how the fuck to redirect this to search page
                searchTextField.value = "";
            }
        });
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
                <div id="sidebarCollapse" className="btn navbar-brand">
                    <img src={sidebarIcon} width="30px" />
                </div>
                <div className='d-flex flex-row'>
                    <div>
                        <SearchIcon />
                    </div>
                    <InputBase
                        placeholder="Search…"
                        id="searchTextField"
                        inputProps={{ 'aria-label': 'search' }}
                        color='primary'
                    />
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link to="/" className="nav-item nav-link">Home</Link>
                        <Link to={`/profile/${this.props.user.username}`} className="nav-item nav-link">Profile</Link>
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
        user: state.auth.user,
    }
}

export default connect(mapStateToProps, { logout })(Navbar)
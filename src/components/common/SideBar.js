import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
    return (
        <Fragment>
            <nav id="sidebar">
                <ul className="list-unstyled components m-3">
                    <li id="home" className="active">
                        <Link onClick={onHome} to="/" aria-expanded="false" >Home</Link>
                    </li>
                    <li id="trend">
                        <Link onClick={onTrend} to="/trending">Trending</Link>
                    </li>
                    <li id="followed">
                        <Link onClick={onFollowed} to="/followed" >Followed</Link>
                    </li>
                    <li id="sub">
                        <Link onClick={onSub} to="/subscriptions">Subscriptions</Link>
                    </li>
                    <li id="latest">
                        <Link onClick={onLatest} to="/latest">Latest</Link>
                    </li>
                </ul>
            </nav>
        </Fragment>

    )

    function onHome() {
        const active = document.getElementsByClassName("active")[0];
        active.classList.remove("active");
        const clicked = document.getElementById("home");
        clicked.classList.add("active");
    }
    function onTrend() {
        const active = document.getElementsByClassName("active")[0];
        active.classList.remove("active");
        const clicked = document.getElementById("trend");
        clicked.classList.add("active");
    }
    function onFollowed() {
        const active = document.getElementsByClassName("active")[0];
        active.classList.remove("active");
        const clicked = document.getElementById("followed");
        clicked.classList.add("active");
    }
    function onSub() {
        const active = document.getElementsByClassName("active")[0];
        active.classList.remove("active");
        const clicked = document.getElementById("sub");
        clicked.classList.add("active");
    }
    function onLatest() {
        const active = document.getElementsByClassName("active")[0];
        active.classList.remove("active");
        const clicked = document.getElementById("latest");
        clicked.classList.add("active");
    }
}

export default SideBar
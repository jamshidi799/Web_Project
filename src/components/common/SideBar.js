import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
    return (
        <Fragment>
            <nav id="sidebar" className="active">
                <ul className="list-unstyled components m-3">
                    <li id="home" className="active">
                        <Link onClick={onHome} to="/" aria-expanded="false" >Home</Link>
                    </li>
                    <li id="trend">
                        <Link onClick={onTrend} to="/feed/trending">Trending</Link>
                    </li>
                    <li id="followed">
                        <Link onClick={onLiked} to="/feed/liked" >Liked Post</Link>
                    </li>
                    <li id="sub">
                        <Link onClick={onSub} to="/feed/subscriptions">Subscription</Link>
                    </li>
                    <li id="latest">
                        <Link onClick={onLatest} to="/feed/latest">Latest</Link>
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
    function onLiked() {
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
import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
    return (
        <Fragment>
            <nav id="sidebar" className="active">
                <ul className="list-unstyled components m-3">
                    <li className="active">
                        <Link to="/" aria-expanded="false" >Home</Link>
                    </li>
                    <li>
                        <Link to="/">Trending</Link>
                    </li>
                    <li>
                        <Link to="/" >Liked Post</Link>
                    </li>
                    <li>
                        <Link to="/">Subscriptions</Link>
                    </li>
                    <li>
                        <Link to="/">Latest</Link>
                    </li>
                </ul>
            </nav>
        </Fragment>

    )
}

export default SideBar
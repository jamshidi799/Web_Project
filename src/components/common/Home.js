import React, { Component } from 'react'
import SideBar from './SideBar'
import { Link } from 'react-router-dom'
import Posts from '../Post/Posts'

class Home extends Component {
    render() {
        return (
            <div className="wrapper">
                <SideBar />
                <div className="container-fluid">
                    <div className="row d-flex justify-content-around flex-wrap">
                        <Posts />
                    </div>
                </div>

            </div>
        )
    }
}

export default Home
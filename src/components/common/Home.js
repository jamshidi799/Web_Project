import React, { Component } from 'react'
import SideBar from './SideBar'
import { Link } from 'react-router-dom'
import Posts from '../Post/Posts'

class Home extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row text-center text-lg-left">
                    <Posts />
                </div>
            </div>
        )
    }
}

export default Home
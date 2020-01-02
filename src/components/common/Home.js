import React, { Component } from 'react'
import SideBar from './SideBar'
import { Link } from 'react-router-dom'
import Posts from '../Post/Posts'

class Home extends Component {
    render() {
        return (
            <div className="wrapper">
                <div className="">
                    <SideBar />
                </div>
                <div className="">
                    <div className="row m-3">
                        <Posts />
                    </div>

                </div>
            </div>
        )
    }
}

export default Home
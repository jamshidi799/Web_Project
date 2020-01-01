import React, { Component } from 'react'
import SideBar from './SideBar'
import { Link } from 'react-router-dom'
import Posts from '../Post/Posts'

class Home extends Component {
    render() {
        return (
            <div className="row home">
                <SideBar />
                <div className="col-sm-10 bg-dark posts">
                    <div className="row">
                        <Posts />
                    </div>

                </div>
            </div>
        )
    }
}

export default Home
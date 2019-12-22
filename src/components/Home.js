import React, { Component } from 'react'
import PostCard from './Post/PostCard'
import SideBar from './SideBar'
import { Link } from 'react-router-dom'

class Home extends Component {
    render() {
        return (
            <div className="row home">
                <SideBar />
                <div className="col-sm-10 bg-dark posts">
                    <div className="row">
                        <PostCard />
                        <PostCard />
                        <PostCard />
                        <PostCard />
                        <PostCard />
                    </div>

                </div>
            </div>
        )
    }
}

export default Home
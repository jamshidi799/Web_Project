import React, { Component } from 'react'
import Post from './Post'
import SideBar from './SideBar'

class Home extends Component {
    render() {
        return (
            <div className="row home">
                <SideBar />
                <div className="col-sm-10 bg-dark posts">
                    <div className="row">
                        <Post />
                        <Post />
                        <Post />
                        <Post />
                        <Post />
                        <Post />
                        <Post />
                        <Post />
                        <Post />
                    </div>

                </div>
            </div>
        )
    }
}

export default Home
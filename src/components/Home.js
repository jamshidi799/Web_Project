import React, { Component } from 'react'
import Post from './Post'

class Home extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-sm-2 bg-secondary side-bar">
                    <h1>side bar</h1>
                    <ul>
                        <li>
                            <h5>Following</h5>
                        </li>
                        <li>
                            <h5>Latest</h5>
                        </li>
                        <li>
                            <h5>Hotest!</h5>
                        </li>
                        <li>
                            <h5>!!!</h5>
                        </li>
                    </ul>
                </div>
                <div className="col-sm-10 bg-dark posts">
                    {/* <Post /> */}
                </div>
            </div>
        )
    }
}

export default Home
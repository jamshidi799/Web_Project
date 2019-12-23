import React, { Component } from 'react'
import img from '../img/kim.jpg'
import PostCard from './Post/PostCard'

class Profile extends Component {
    render() {
        return (
            <div class="container">
                <div class="jumbotron bg-light">
                    <div class="row">
                        <div class="col-3">
                            <img src={img} class="img-fluid rounded-circle profile-image" alt="Cinque Terre" />
                        </div>
                        <div class="col-1">

                        </div>
                        <div class="col-6">
                            <h3>Kim Kardashian</h3>
                            <div class="row">
                                <div class="col-3">
                                    <h6>6 posts</h6>
                                </div>
                                <div class="col-5">
                                    <h6>132M followers</h6>
                                </div>
                                <div class="col-4">
                                    <h6>22 following</h6>
                                </div>
                            </div>
                            <p class="font-weight-light">bio: Search for the keywords to learn more about each warning</p>
                        </div>
                    </div>
                </div>
                <div class="jumbotron row bg-light">
                    <div class="col-4">
                        <PostCard />
                    </div>
                    <div class="col-4">
                        <PostCard />
                    </div>
                    <div class="col-4">
                        <PostCard />
                    </div>
                    <div class="col-4">
                        <PostCard />
                    </div>
                </div>
            </div>
        )
    }

}

export default Profile
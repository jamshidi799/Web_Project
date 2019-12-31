import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getPosts } from '../actions/posts'
import PostCard from './Post/PostCard'

import img from '../img/kim.jpg'
import { Link } from 'react-router-dom'
import Posts from './Post/Posts'

class Profile extends Component {
    componentDidMount() {
        this.props.getPosts()
    }

    render() {
        return (
            <div className="container">
                <div className="jumbotron bg-light">
                    <div className="row">
                        <div className="col-3">
                            <img src={img} className="img-fluid rounded-circle profile-image" alt="Cinque Terre" />
                        </div>
                        <div className="col-1">

                        </div>
                        <div className="col-6">
                            <h3>Kim Kardashian</h3>
                            <div className="row">
                                <div className="col-3">
                                    <h6>6 posts</h6>
                                </div>
                                <div className="col-5">
                                    <h6>132M followers</h6>
                                </div>
                                <div className="col-4">
                                    <h6>22 following</h6>
                                </div>
                            </div>
                            <p className="font-weight-light">bio: Search for the keywords to learn more about each warning</p>
                        </div>
                    </div>
                    <div className="row text-center">
                        <div className="container">
                            <Link to="/newPost">
                                <button className="btn btn-primary">new post</button>
                            </Link>
                            <button className="btn btn-primary">new channel</button>
                        </div>
                    </div>
                </div>
                <div className="jumbotron row bg-light">
                    <Posts />
                </div>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        posts: state.post.posts
    }
}

export default connect(mapStateToProps, { getPosts })(Profile)
import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import { getPosts } from '../../actions/posts'
import PostCard from '../Post/PostCard'
import FollowList from './FollowList'

import img from '../../img/kim.jpg'
import { Link } from 'react-router-dom'
import Posts from '../Post/Posts'

class Profile extends Component {

    getNumberOfPost = () => this.props.posts.filter(post => post.userid === this.props.user.id).length

    getFollowerCount = () => this.props.user.followers.length

    getFollowingCount = () => this.props.user.followings.length

    render() {
        const user = this.props.user
        return (
            <div className="row">
                <div className="col-8 container">
                    <div className=" jumbotron bg-light">
                        <div className="row">
                            <div className="col-3">
                                <img src={img} className="img-fluid rounded-circle profile-image" alt="Cinque Terre" />
                            </div>
                            <div className="col-1">

                            </div>
                            <div className="col-6">
                                <h3>{user.username}</h3>
                                <div className="row">
                                    <div className="col-3">
                                        <h6>{`${this.getNumberOfPost()} post`}</h6>
                                    </div>
                                    <div className="col-5">
                                        <h6>{`${this.getFollowerCount()} Follower`}</h6>
                                    </div>
                                    <div className="col-4">
                                        <h6>{`${this.getFollowingCount()} Following`}</h6>
                                    </div>
                                </div>
                                <p className="text-muted">{user.bio}</p>
                            </div>
                        </div>
                        <div className="row text-center">
                            <div className="container">

                                <Link to="/newPost/0" className='m-3'>
                                    <button className="btn btn-dark">new post</button>
                                </Link>
                                <Link to="/newChannel">
                                    <button className="btn btn-dark">new channel</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="jumbotron row bg-light">
                        <Posts />
                    </div>
                </div>
                <div className="col-2 container">
                    <FollowList />
                </div>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        posts: state.post.posts,
        user: state.auth.user
    }
}

export default connect(mapStateToProps, { getPosts })(Profile)
import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import { getPosts } from '../../actions/posts'
import PostCard from '../Post/PostCard'
import FollowList from './FollowList'
import { follow, unfollow } from '../../actions/auth'

import img from '../../img/kim.jpg'
import editIcon from '../../img/edit.png'
import { Link } from 'react-router-dom'
import Posts from '../Post/Posts'

class Profile extends Component {
    state = {
        user: '',
    }

    updateState = (user) => {
        this.setState({ user })
    }

    getButton = (user) => {
        if (user.id === this.props.user.id)
            return <Link to="/edit_profile"><img src={editIcon} /></Link>
        const isFollowing = this.props.user.followings.find(followingId => followingId === user.id)
        if (isFollowing === undefined)
            return <button className="btn btn-sm btn-info" onClick={() => this.onFollowClicked(user)}>follow</button>
        return <button className="btn btn-sm btn-info" onClick={() => this.onUnFollowClicked(user)}>unfollow</button>
    }

    onFollowClicked = (user) => {
        this.props.follow(user.id)
    }

    onUnFollowClicked = (user) => {
        this.props.unfollow(user.id)
    }

    getNumberOfPost = (user) => this.props.posts.filter(post => post.userid === user.id).length

    getFollowerCount = (user) => user.followers.length

    getFollowingCount = (user) => user.followings.length

    render() {
        const user = this.props.users.find(user => user.username === this.props.match.params.user_name)
        return (
            <div className="row">
                <div className="col-8 container">
                    <div className=" jumbotron m-3 bg-light">
                        <div className="row">
                            <div className="col-3">
                                <img src={img} className="img-fluid rounded-circle profile-image" alt="Cinque Terre" />
                            </div>
                            <div className="col-1">

                            </div>
                            <div className="col-6">
                                <div className='row d-flex align-items-center'>
                                    <h3 className="m-3">{user.username}</h3>
                                    <div>
                                        {this.getButton(user)}
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-3">
                                        <h6>{`${this.getNumberOfPost(user)} post`}</h6>
                                    </div>
                                    <div className="col-5">
                                        <h6>{`${this.getFollowerCount(user)} Follower`}</h6>
                                    </div>
                                    <div className="col-4">
                                        <h6>{`${this.getFollowingCount(user)} Following`}</h6>
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
                    <div className="container">
                        <div className="row text-center text-lg-left">
                            <Posts posts={this.props.posts.filter(post => post.userid === user.id)} />
                        </div>
                    </div>

                </div>
                <div className="col-2 container mt-3">
                    <FollowList />
                </div>
            </div >
        )
    }

}

const mapStateToProps = state => {
    return {
        posts: state.post.posts,
        user: state.auth.user,
        users: state.auth.users,
    }
}

export default connect(mapStateToProps, { getPosts, follow, unfollow })(Profile)
import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import { getPosts } from '../../actions/posts'
import PostCard from '../Post/PostCard'
import FollowList from './FollowList'
import { follow, unfollow, getUsersList, getProfile } from '../../actions/auth'

import img from '../../img/kim.jpg'
import editIcon from '../../img/edit.png'
import { Link } from 'react-router-dom'
import Posts from '../Post/Posts'

class Profile extends Component {
    state = {
        profile: '',
    }

    componentDidMount() {
        this.props.getUsersList()
        this.props.getProfile(this.props.match.params.user_name)
    }

    updateState = (profile) => {
        this.setState({ profile })
    }

    getButton = (profile) => {
        if (profile.id === this.props.user.id)
            return <Link to="/edit_profile"><img src={editIcon} /></Link>
        // const isFollowing = this.props.profile.followings.find(followingId => followingId === profile.id)
        // if (isFollowing === undefined)
        //     return <button className="btn btn-sm btn-info" onClick={() => this.onFollowClicked(profile)}>follow</button>
        // return <button className="btn btn-sm btn-info" onClick={() => this.onUnFollowClicked(profile)}>unfollow</button>
    }

    getNewPostBtn = (profile) => {
        if (profile.id === this.props.user.id)
            return (
                <Fragment>
                    <Link to="/newPost/0" className='m-3'>
                        <button className="btn btn-dark">new post</button>
                    </Link>
                    <Link to="/newChannel">
                        <button className="btn btn-dark">new channel</button>
                    </Link>
                </Fragment>
            )
    }

    onFollowClicked = (profile) => {
        this.props.follow(profile.id)
    }

    onUnFollowClicked = (profile) => {
        this.props.unfollow(profile.id)
    }

    getNumberOfPost = (profile) => this.props.posts.filter(post => post.owner === profile.id).length

    getFollowerCount = (profile) => profile.creator.length

    getFollowingCount = (profile) => profile.following.length

    getShortBio = (bio) => bio.length < 50 ? bio : bio.substring(0, 50) + "..."

    render() {
        if (this.props.profile.username !== this.props.match.params.user_name)
            this.props.getProfile(this.props.match.params.user_name)
        const profile = this.props.profile
        return (
            <div className="row">
                <div className="col-7 container">
                    <div className=" jumbotron m-3 bg-light">
                        <div className="row">
                            <div className="col-3">
                                <img src={img} className="img-fluid rounded-circle profile-image" alt="Cinque Terre" />
                            </div>
                            <div className="col-1">

                            </div>
                            <div className="col-6">
                                <div className='row d-flex align-items-center'>
                                    <h3 className="m-3">{profile.username}</h3>
                                    <div>
                                        {this.getButton(profile)}
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-3">
                                        <h6>{`${this.getNumberOfPost(profile)} post`}</h6>
                                    </div>
                                    <div className="col-5">
                                        <h6>{`${this.getFollowerCount(profile)} Follower`}</h6>
                                    </div>
                                    <div className="col-4">
                                        <h6>{`${this.getFollowingCount(profile)} Following`}</h6>
                                    </div>
                                </div>
                                <p className="text-muted">{profile.profile.bio}</p>
                            </div>
                        </div>
                        <div className="row text-center">
                            <div className="container">

                                {
                                    this.getNewPostBtn(profile)
                                }

                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row text-center text-lg-left">
                            <Posts posts={this.props.posts.filter(post => post.owner === profile.id)} />
                        </div>
                    </div>

                </div>
                <div className="col-3 mt-3 follow-list">
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
        profilesList: state.auth.users,
        profile: state.auth.profile,
    }
}

export default connect(mapStateToProps, { getPosts, getUsersList, getProfile, follow, unfollow })(Profile)
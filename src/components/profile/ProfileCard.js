import React, { Component } from 'react'
import { connect } from 'react-redux'
import { follow, unfollow } from '../../actions/auth'

import img from '../../img/img1.jpg'
import smProfile from '../../img/Animals_533.jpg'
import ImageAvatars from "../common/Avatar";

class ProfileCard extends Component {
    onFollowClicked = () => {
        this.props.follow(this.props.otherUser.id)
    }

    onUnFollowClicked = () => {
        this.props.unfollow(this.props.otherUser.id)
    }

    getButton = () => {
        const isFollowing = this.props.currentUser.followings.find(followingId => followingId === this.props.otherUser.id)
        if (isFollowing === undefined)
            return <button className="btn btn-sm btn-info" onClick={this.onFollowClicked}>follow</button>
        return <button className="btn btn-sm btn-info" onClick={this.onUnFollowClicked}>unfollow</button>
    }

    render() {
        return (
            <div style={{ width: 23 + 'rem' }}>
                <div>

                    <div className="d-flex justify-content-between align-items-center">
                        <ImageAvatars avatar_src={smProfile} />
                        <div className=' d-flex align-items-center justify-content-around'>
                            <b>{this.props.otherUser.username}</b>
                            {this.getButton()}
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}


const mapStateToProps = state => {
    return {
        currentUser: state.auth.user
    }
}

export default connect(mapStateToProps, { follow, unfollow })(ProfileCard)
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import smProfile from '../../img/Animals_533.jpg'
import ImageAvatars from "../common/Avatar";

class ProfileCard extends Component {
    state = {
        isClicked: false,
    }

    onCardClick = () => {
        this.setState({ isClicked: true })
    }

    render() {
        if (this.state.isClicked) {
            this.setState({ isClicked: false })
            return <Redirect to={`/profile/${this.props.user.username}`} />
        }
        return (
            <div onClick={this.onCardClick} style={{ width: 23 + 'rem', cursor: 'pointer' }}>
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-6">
                            <ImageAvatars avatar_src={smProfile} />
                        </div>
                        <div className='col-6 text-center'>
                            <p className="text-secondary">{this.props.user.username}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        // currentUser: state.auth.user
    }
}

export default connect(mapStateToProps)(ProfileCard)
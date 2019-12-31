import React, { Component } from 'react'
import img from '../../img/img1.jpg'
import smProfile from '../../img/Animals_533.jpg'
import { Link } from 'react-router-dom'
import ImageAvatars from "../common/Avatar";

class ProfileCard extends Component {
    render() {
        return (
            <div style={{ width: 23 + 'rem' }}>
                <div>
                    <div className=' d-flex justify-content-center'>
                        <div className="d-flex flex-column">
                            <ImageAvatars avatar_src={smProfile} />
                            <div className=' d-flex justify-content-center'>
                                <Link to={this.props.username}><b>{this.props.username}</b></Link>
                            </div>
                        </div>
                    </div>
                    <p>
                        this is {this.props.username}'s Profile
                    </p>

                </div>
            </div>
        )
    }
}

export default ProfileCard
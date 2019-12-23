import React, { Component } from 'react'
import img from '../../img/img1.jpg'
import likeIcon from '../../icons/icons8-facebook-like-24.png'
import { Link } from 'react-router-dom'
import ImageAvatars from "../Avatar";

class ChannelCard extends Component {
    render() {
        return (
            <div style={{ width: 33 + 'rem' }}>
                <div>
                    <div className=' d-flex justify-content-center'>
                        <div className="d-flex flex-column">
                            <ImageAvatars/>
                            <b>Channel {this.props.username}</b>
                        </div>
                    </div>
                    <p>
                        this is {this.props.username}'s Channel
                    </p>

                </div>
            </div>
        )
    }
}

export default ChannelCard
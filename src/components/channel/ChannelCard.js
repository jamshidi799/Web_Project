import React, { Component } from 'react'

import smProfile from '../../img/Animals_533.jpg'
import { Link } from 'react-router-dom'
import ImageAvatars from "../common/Avatar";

class ChannelCard extends Component {
    render() {
        return (
            <div className='container'>
                <div className="row align-items-center">
                    <ImageAvatars className="col-4" avatar_src={smProfile} />
                    <div className='col-8 ml-3'>
                        <Link to={`/channel/${this.props.channel.id}`} onClick={this.props.closeModal}><b>{this.props.channel.name}</b></Link>
                    </div>
                </div>
                <hr />
            </div>
        )
    }
}

export default ChannelCard
import React, {Component} from 'react'

import smProfile from '../../img/Animals_533.jpg'
import {Link} from 'react-router-dom'
import ImageAvatars from "../common/Avatar";

class ChannelCard extends Component {
    render() {
        return (
<<<<<<< HEAD
            <div className='container'>
                <div className="row align-items-center">
                    <ImageAvatars className="col-4" avatar_src={smProfile} />
                    <div className='col-8 ml-3'>
                        <Link to={`/channel/${this.props.channel.id}`} onClick={this.props.closeModal}><b>{this.props.channel.name}</b></Link>
=======
            <div style={{width: 23 + 'rem'}}>
                <div>
                    <div className=' d-flex justify-content-center'>
                        <div className="d-flex flex-column">
                            <ImageAvatars avatar_src={smProfile}/>
                            <div className=' d-flex justify-content-center'>
                                <Link to={`/channel/${this.props.channel.id}`}
                                      onClick={this.props.closeModal}><b>Channel {this.props.channel.name}</b></Link>
                            </div>
                        </div>
>>>>>>> cf4952348de82acee9309256e2e8e666ebdfa14d
                    </div>
                </div>
                <hr />
            </div>
        )
    }
}

export default ChannelCard
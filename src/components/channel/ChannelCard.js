import React, {Component} from 'react'

import smProfile from '../../img/Animals_533.jpg'
import {Link} from 'react-router-dom'
import ImageAvatars from "../common/Avatar";

class ChannelCard extends Component {
    render() {
        return (
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
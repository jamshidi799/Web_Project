import React, { Component } from 'react'
import { connect } from 'react-redux'

import 'bootstrap/dist/css/bootstrap.min.css';
import ListOfPosts from "./ListOfPosts";
import AboutChannel from "./AboutChannel";
import ListOfAuthors from './ListOfAuthors';
import { getChannel } from '../../actions/channel'

class Channel extends Component {

    componentDidMount() {
        this.props.getChannel(this.props.match.params.channel_id)
    }

    render() {
        if (this.props.channel.id != this.props.match.params.channel_id)
            this.props.getChannel(this.props.match.params.channel_id)
        const channel = this.props.channel
        return (
            <React.Fragment>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-3 m-3">
                            <ListOfAuthors channel={channel} />
                        </div>
                        <div className="col-6">
                            <ListOfPosts channel={channel} />
                        </div>
                        <div className='col-2'>
                            <AboutChannel channel={channel} />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        channel: state.channel.currentchannel
    }
}

export default connect(mapStateToProps, { getChannel })(Channel)
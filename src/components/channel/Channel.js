import React, { Component } from 'react'
import { connect } from 'react-redux'

import 'bootstrap/dist/css/bootstrap.min.css';
import ListOfPosts from "./ListOfPosts";
import AboutChannel from "./AboutChannel";
import ListOfAuthors from './ListOfAuthors';

class Channel extends Component {
    state = {
        channelName: null,
        aboutChannel: "Channel for Animals",

    };

    componentDidMount() {
        this.setState(() => this.props.match.params);
    }

    render() {
        const channelId = this.props.match.params.channelName
        const channel = this.props.channels.find(channel => channel.id === channelId)
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
        channels: state.channel.channels,
    }
}

export default connect(mapStateToProps, {})(Channel)
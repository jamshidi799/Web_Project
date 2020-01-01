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
                <div>
                    <div className="d-flex justify-content-around">
                        <div className="m-3 fixed">
                            <ListOfAuthors channel={channel} />
                        </div>
                        <div>
                            <ListOfPosts className="m-3" channel={channel} />
                        </div>
                        <div className='m-3'>
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
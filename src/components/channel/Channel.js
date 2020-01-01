import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ListOfPosts from "./ListOfPosts";
import AboutChannel from "./AboutChannel";
import ListOfChannel from "./ListOfChannel";

class Channel extends Component {
    state = {
        channelName: null,
        aboutChannel: "Channel for Animals",

    };

    componentDidMount() {
        this.setState(() => this.props.match.params);
    }

    render() {
        const channelName = this.props.match.params.channelName;
        return (
            <React.Fragment>
                <div>
                    <div className="d-flex justify-content-around">
                        <div className='m-5'>
                            <AboutChannel username={channelName} massege={this.state.aboutChannel}/>
                        </div>
                        <div>
                            <ListOfPosts/>
                        </div>
                        <div>
                            <ListOfChannel/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Channel
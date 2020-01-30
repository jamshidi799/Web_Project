import React, {Component} from 'react';
import TrendPosts from '../../Post/postAssortment/TrendPosts';
import FollowedPosts from "../../Post/postAssortment/FollowedPosts";

class Followed extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row text-center text-lg-left">
                    <FollowedPosts />
                </div>
            </div>
        )
    }

}

export default Followed;
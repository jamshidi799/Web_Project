import React, { Component } from 'react';
import { connect } from 'react-redux'

import { getFeed } from '../../../actions/posts'
import Posts from '../../Post/Posts'

class Liked extends Component {
    componentDidMount() {
        this.props.getFeed('liked')
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row text-center text-lg-left">
                    <Posts posts={this.props.posts} />
                </div>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        posts: state.post.posts,
    }
}

export default connect(mapStateToProps, { getFeed })(Liked)
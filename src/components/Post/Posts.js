import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import PostCard from './PostCard'
import { getPosts } from '../../actions/posts'

class Posts extends Component {
    render() {
        return (
            <Fragment>
                {this.props.posts.map(post => {
                    return (
                        <div className="col-lg-3 col-md-4 col-6" style={{ maxWidth: 500 + "px" }} key={post.id}>
                            <PostCard post={post} />
                        </div>
                    )
                })}
            </Fragment>

        )
    }
}



export default connect(null)(Posts)
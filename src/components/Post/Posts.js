import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import PostCard from './PostCard'
import { getPosts } from '../../actions/posts'

class Posts extends Component {
    render() {
        const user = this.props.user
        return (
            <Fragment>
                {this.props.posts.map(post => {
                    // if (post.userid === user.id)
                    return (
                        <div className="  m-1">
                            <div className="card" style={{ maxWidth: 500 + "px" }} key={post.id}>
                                <PostCard post={post} />
                            </div>
                        </div>
                    )
                })}
            </Fragment>

        )
    }
}

const mapStateToProps = state => {
    return {
        posts: state.post.posts,
        user: state.auth.user
    }
}

export default connect(mapStateToProps, { getPosts })(Posts)
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import PostCard from './PostCard'
import { getPosts } from '../../actions/posts'

class Posts extends Component {

    componentDidMount() {
        this.props.getPosts()
    }

    render() {
        const user = this.props.user
        return (
            <Fragment>
                {this.props.posts.map(post => {
                    if (post.userid === user.id)
                        return <PostCard key={post.id} post={post} />
                })}
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    console.log("mapStateTo", state)
    return {
        posts: state.post.posts,
        user: state.auth.user
    }
}

export default connect(mapStateToProps, { getPosts })(Posts)
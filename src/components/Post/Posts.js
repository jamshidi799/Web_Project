import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import PostCard from './PostCard'
import { getPosts } from '../../actions/posts'

class Posts extends Component {

    componentDidMount() {
        this.props.getPosts()
        // console.log("get posts in component did mount", this.props)
    }

    render() {
        // console.log('render', this.props)
        return (
            <Fragment>
                {this.props.posts.map(post => <PostCard key={post.id} post={post} />)}
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    console.log("mapStateTo", state)
    return {
        posts: state.post.posts
    }
}

export default connect(mapStateToProps, { getPosts })(Posts)
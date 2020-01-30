import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getPosts } from '../../actions/posts'
import { getUsersList } from '../../actions/auth'
import Posts from '../Post/Posts'

class Home extends Component {
    componentDidMount() {
        this.props.getPosts()
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

export default connect(mapStateToProps, { getPosts, getUsersList })(Home)
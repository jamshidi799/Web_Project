import React, { Component } from 'react'
import { connect } from 'react-redux'
import SideBar from './SideBar'
import { Link } from 'react-router-dom'
import Posts from '../Post/Posts'

class Home extends Component {
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

export default connect(mapStateToProps)(Home)
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import PostCard from './PostCard'
import { getPosts } from '../../actions/posts'

class Posts extends Component {
    static propTypes = {
        posts: PropTypes.array.isRequired,
        getPosts: PropTypes.func.isRequired,
    }

    componentDidMount() {
        // console.log(this.props)

        this.props.getPosts()
        console.log("111", this.props)
    }

    render() {
        console.log('render', this.props.posts)
        return (
            <Fragment>
                {console.log('return', this.props.posts)}
                {/* {this.props.posts.map(post => console.log(post))} */}
                {/* {this.props.posts.forEach(element => {
                    console.log(element)
                })} */}
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    console.log("mapStateTo", state)
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps, { getPosts })(Posts)
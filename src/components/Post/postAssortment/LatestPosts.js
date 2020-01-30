import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux'
import PostCard from '../PostCard'
import {getLatest, getPosts, getTrends} from '../../../actions/posts'

class LatestPosts extends Component {
    componentDidMount() {
        this.props.getLatest()
        //this.props.getUsers()
    }

    render() {
        // const user = this.props.user;
        // const followings = undefined
        // if (user.followings !== undefined)
        //     user.followings.filter(followingId => followingId === user.id);
        return (
            <Fragment>
                {this.props.posts.map(post => {
                    // if (followings !== undefined)
                    //     for (let i = 0; i < followings.length; i++)
                    //         if (post.userid === followings[i].id)
                    return (
                        <div className="col-lg-3 col-md-4 col-6" style={{maxWidth: 500 + "px"}}
                             key={post.id}>
                            <PostCard post={post}/>
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
        //user: state.auth.user
    }
}

export default connect(mapStateToProps, {getLatest})(LatestPosts)
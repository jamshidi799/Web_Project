import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux'
import PostCard from '../PostCard'
import {getPosts, getSubs, getTrends} from '../../../actions/posts'

class SubPosts extends Component {
    componentDidMount() {
        this.props.getSubs()
        //this.props.getUsers()
    }

    render() {
        const user = this.props.user;
        return (
            <Fragment>
                {this.props.posts.map(post => {
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

export default connect(mapStateToProps, {getSubs})(SubPosts)
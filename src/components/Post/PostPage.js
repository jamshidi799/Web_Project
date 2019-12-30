import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getComments } from '../../actions/comments'
import { getPost } from '../../actions/posts'
import Comment from '../Comment'


import img from '../../img/img1.jpg'
import likeIcon from '../../icons/icons8-facebook-like-24.png'

class PostPage extends Component {
    componentDidMount() {
        this.props.getPost(this.props.match.params.post_id)
        this.props.getComments(this.props.match.params.post_id)
    }


    render() {
        const { title, content } = this.props.currentPost
        return (
            <div className="container">
                <div className="jumbotron">
                    <img className="card-img-top" src={img} alt="post" />
                    <div className="card-body">
                        <h3 className="card-title text-success">{title}</h3>
                        <p className="card-text"> {content}</p>
                        <div ><span className="text-success">132,231 views</span></div>
                        <img src={likeIcon} alt="like" /> <span>3.1k   </span>
                        <img src={likeIcon} alt="unlike" /> <span>123    </span>

                    </div>
                    <div className="jumbotron">
                        <h3 className="text-primary">Comments:</h3>
                        {this.props.comments.map(comment => <Comment key={comment.id} />)}
                    </div>

                </div>
            </div>

        )
    }

}

const mapStateToProps = state => {
    // console.log("mapStateTo", state)
    return {
        comments: state.comment.comments,
        currentPost: state.post.currentPost
    }
}

export default connect(mapStateToProps, { getComments, getPost })(PostPage)
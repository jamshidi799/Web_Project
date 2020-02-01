import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addComment } from '../../actions/comments'
import { getPost, deletePost, likePost } from '../../actions/posts'
import Comment from '../common/Comment'


import img from '../../img/img1.jpg'
import likeIcon from '../../icons/icons8-facebook-like-24.png'
import { Redirect } from 'react-router'

class PostPage extends Component {
    state = {
        comment: '',
        isPostDeleted: false,
    }

    componentDidMount() {
        const postid = this.props.match.params.post_id
        this.props.getPost(postid)
    }

    onCommentSubmit = e => {
        e.preventDefault()
        const content = this.state.comment
        const comment = {
            post: this.props.post.id,
            owner: this.props.user.id, like: [], dislike: [], content
        }
        this.props.addComment(comment)
    }

    onCommentChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onDeletePostClicked = () => {
        this.props.deletePost(this.props.post.id)
        this.setState({ ...this.state, isPostDeleted: true })
    }

    onLikeClicked = () => this.props.likePost({ post: this.props.post, userid: this.props.user.id })

    getButtons = () => {
        if (this.props.post.owner === this.props.user.id)
            return (
                <div className="mb-3">
                    <button className="btn btn-sm btn-dark">edit</button>
                    <span>  </span>
                    <button className="btn btn-sm btn-dark" onClick={this.onDeletePostClicked}>delete</button>
                </div>
            )
    }

    render() {
        const { title, content } = this.props.post

        if (this.state.isPostDeleted)
            return <Redirect to="/" />

        return (
            <div className="container">
                <div className="jumbotron">
                    {this.getButtons()}
                    <img className="card-img-top" src={img} alt="post" />
                    <div className="card-body">
                        <h3 className="card-title text-success">{title}</h3>
                        <p className="card-text font-weight-normal text-body"> {content}</p>
                        <div >
                            <span className="text-success mr-2">132,231 views</span>
                            <img src={likeIcon} alt="like" onClick={this.onLikeClicked} /> <span>{this.props.post.like.length}   </span>
                        </div>
                    </div>
                    <div className="jumbotron">
                        <div className="row">
                            <h3 className="text-primary col-1">Comments:</h3>
                            <div className="col-9"></div>
                            <button className="btn btn-primary btn-sm m-r-0 " type="button" data-toggle="collapse" data-target="#collapseComment" aria-expanded="false" aria-controls="collapseExample">
                                Add Comment
                            </button>
                        </div>
                        <br />
                        <div className="collapse" id="collapseComment">
                            <form onSubmit={this.onCommentSubmit}>
                                <div className="form-group">
                                    <input type="text" className="form-control" name="comment" value={this.state.comment} onChange={this.onCommentChange}
                                        placeholder="Enter comment" />
                                </div>
                                <button type="submit" className="btn btn-primary btn-sm" >Submit</button>
                            </form>
                        </div>
                        <br />
                        <Comment comments={this.props.post.comments} />
                    </div>

                </div>
            </div>

        )
    }

}

const mapStateToProps = state => {
    return {
        post: state.post.currentPost,
        user: state.auth.user
    }
}

export default connect(mapStateToProps, { addComment, getPost, deletePost, likePost })(PostPage)
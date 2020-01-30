import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getComments, addComment } from '../../actions/comments'
import { getPost } from '../../actions/posts'
import Comment from '../common/Comment'


import img from '../../img/img1.jpg'
import likeIcon from '../../icons/icons8-facebook-like-24.png'

class PostPage extends Component {
    state = {
        comment: ''
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

    getButtons = () => {
        if (this.props.post.userid === this.props.user.id)
            return (
                <div className="mb-3">
                    <button className="btn btn-sm btn-dark">edit</button>
                    <span>  </span>
                    <button className="btn btn-sm btn-dark">delete</button>
                </div>
            )
    }


    render() {
        const { id, title, content } = this.props.post
        return (
            <div className="container">
                <div className="jumbotron">
                    {this.getButtons()}
                    <img className="card-img-top" src={img} alt="post" />
                    <div className="card-body">
                        <h3 className="card-title text-success">{title}</h3>
                        <p className="card-text font-weight-normal text-body"> {content}</p>
                        <div ><span className="text-success">132,231 views</span></div>
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
                        {
                            this.props.post.comments.map(comment => {
                                return <Comment key={comment.id} comment={comment} />
                            })
                        }

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

export default connect(mapStateToProps, { addComment, getPost })(PostPage)
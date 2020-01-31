import React, { Component } from 'react'
import { connect } from 'react-redux'

import { LIKE_COMMENT, DISLIKE_COMMENT } from '../../actions/types'
import { likeComment, dislikeComment, deleteComment, addComment } from '../../actions/comments'

import likeIcon from '../../icons/icons8-facebook-like-24.png'
import unlikeIcon from '../../icons/icons8-thumbs-down-24.png'
import edit from '../../img/edit.png'

class Comment extends Component {
    state = {
        comment: '',
        comment_id: 1,
    }


    onLikeClicked = (comment) => this.props.likeComment({ comment, userid: this.props.user.id })

    onUnlikeClicked = (comment) => this.props.dislikeComment({ comment, userid: this.props.user.id })

    onReplyCommentChanged = (e) => {
        this.setState({ [e.target.name]: e.target.value, comment_id: e.target.id })
    }

    onReplyClicked = (e) => {
        e.preventDefault()
        const replyComment = {
            owner: this.props.user.id, post: this.props.post.id, content: this.state.comment,
            reply_to: this.state.comment_id
        }
        this.props.addComment(replyComment)
    }

    onEditClicked = (e) => {

    }

    onDeleteClicked = commentid => this.props.deleteComment({
        postid: this.props.post.id,
        commentid: commentid
    })


    getComment = (comment) => {
        return (
            <React.Fragment key={comment.id}>
                <p className="font-weight-normal text-body">{comment.content}</p>
                <div>
                    <img src={likeIcon} alt="like" onClick={() => this.onLikeClicked(comment)} /> <span>{comment.like.length}   </span>
                    <img src={unlikeIcon} alt="unlike" onClick={() => this.onUnlikeClicked(comment)} /> <span>{comment.dislike.length}   </span>
                    <button className="btn btn-dark btn-sm" type="button" data-toggle="collapse" data-target={`#collapseReply${comment.id}`} aria-expanded="false" aria-controls="collapseExample">
                        replys
                    </button>
                    <span>  </span>
                    <button className='btn btn-dark btn-sm' onClick={this.onEditClicked} >edit</button>
                    <span>  </span>
                    <button className='btn btn-dark btn-sm' onClick={() => this.onDeleteClicked(comment.id)} >delete</button>
                </div>
                <div>
                    {
                        this.props.comments.map(c => {
                            if (comment.id === c.reply_to)
                                return this.getReply(c)
                        })
                    }
                </div>

                <div className="collapse" id={`collapseReply${comment.id}`}>
                    <hr />
                    <form onSubmit={this.onReplyClicked}>
                        <div className="form-group">
                            <input type="text" className="form-control" id={comment.id} name="comment" value={this.state.comment} onChange={this.onReplyCommentChanged}
                                placeholder="Enter comment" />
                        </div>
                        <button type="submit" className="btn btn-dark btn-sm">Reply</button>
                    </form>
                </div>
            </React.Fragment>
        )
    }

    getReply = reply => (
        <div className="container ml-3" key={reply.id}>
            <hr />
            <p className="font-weight-light" >{reply.content}</p>
            <span>  </span>
            <button className='btn btn-dark btn-sm' onClick={this.onEditClicked} >edit</button>
            <span>  </span>
            <button className='btn btn-dark btn-sm' onClick={() => this.onDeleteClicked(reply.id)} >delete</button>
            <hr />
        </div>
    )

    render() {
        return (
            <div>
                {this.props.comments.map(comment => {
                    if (comment.reply_to === null)
                        return this.getComment(comment)
                })
                }
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

export default connect(mapStateToProps, { likeComment, dislikeComment, addComment, deleteComment })(Comment)
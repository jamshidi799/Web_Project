import React, { Component } from 'react'
import { connect } from 'react-redux'

import { LIKE_COMMENT, DISLIKE_COMMENT } from '../../actions/types'
import { likeComment, dislikeComment } from '../../actions/comments'

import likeIcon from '../../icons/icons8-facebook-like-24.png'
import unlikeIcon from '../../icons/icons8-thumbs-down-24.png'
import edit from '../../img/edit.png'

class Comment extends Component {
    state = {
        comment: ''
    }

    onReplyCommentChanged = (e) => {

    }

    onLikeClicked = () => {
        this.props.likeComment(this.props.comment)
    }

    onUnlikeClicked = () => {
        this.props.dislikeComment(this.props.comment)
    }

    onReplyClicked = (e) => {
        e.preventDefault()
    }

    onEditClicked = (e) => {

    }

    render() {
        const { content, like, dislike } = this.props.comment
        return (
            <div>
                <p className="font-weight-normal text-body">{content}</p>
                <div>
                    <img src={likeIcon} alt="like" onClick={this.onLikeClicked} /> <span>{like.length}   </span>
                    <img src={unlikeIcon} alt="unlike" onClick={this.onUnlikeClicked} /> <span>{dislike.length}   </span>
                    <button className="btn btn-dark btn-sm" type="button" data-toggle="collapse" data-target={`#collapseReply${this.props.comment.id}`} aria-expanded="false" aria-controls="collapseExample">
                        reply
                    </button>
                    <span>  </span>
                    <button className='btn btn-dark btn-sm' onClick={this.onEditClicked} >edit</button>
                    <span>  </span>
                    <button className='btn btn-dark btn-sm' onClick={this.onEditClicked} >delete</button>

                    <div className="container ml-3">
                        <hr />
                        <p className="font-weight-light" >Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC</p>
                        <span>  </span>
                        <button className='btn btn-dark btn-sm' onClick={this.onEditClicked} >edit</button>
                        <span>  </span>
                        <button className='btn btn-dark btn-sm' onClick={this.onEditClicked} >delete</button>
                        <hr />

                        <p className="font-weight-light" >Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC</p>
                        <span>  </span>
                        <button className='btn btn-dark btn-sm' onClick={this.onEditClicked} >edit</button>
                        <span>  </span>
                        <button className='btn btn-dark btn-sm' onClick={this.onEditClicked} >delete</button>
                        <hr />
                    </div>






                    <div className="collapse" id={`collapseReply${this.props.comment.id}`}>
                        <hr />
                        <form onSubmit={this.onReplyClicked}>
                            <div className="form-group">
                                <input type="text" className="form-control" name="comment" value={this.state.comment} onChange={this.onReplyCommentChanged}
                                    placeholder="Enter comment" />
                            </div>
                            <button type="submit" className="btn btn-dark btn-sm">Reply</button>
                        </form>
                    </div>

                </div>
                <hr className="my-4" />
            </div>
        )
    }

}

const mapStateToProps = state => {
    // console.log("mapStateTo", state)
    return {
        comments: state.comment.comments,
    }
}

export default connect(mapStateToProps, { likeComment, dislikeComment })(Comment)
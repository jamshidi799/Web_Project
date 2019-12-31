import React, { Component } from 'react'
import { connect } from 'react-redux'

import { LIKE_COMMENT, DISLIKE_COMMENT } from '../../actions/types'
import { likeComment, dislikeComment } from '../../actions/comments'

import likeIcon from '../../icons/icons8-facebook-like-24.png'
import unlikeIcon from '../../icons/icons8-thumbs-down-24.png'

class Comment extends Component {
    onLikeClicked = () => {
        this.props.likeComment(this.props.comment)
    }

    onUnlikeClicked = () => {
        this.props.dislikeComment(this.props.comment)
    }

    render() {
        const { content, like, dislike } = this.props.comment
        return (
            <div>
                <p className="lead">{content}</p>
                <div>
                    <img src={likeIcon} alt="like" onClick={this.onLikeClicked} /> <span>{like.length}   </span>
                    <img src={unlikeIcon} alt="unlike" onClick={this.onUnlikeClicked} /> <span>{dislike.length}   </span>
                    <span>reply</span>
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
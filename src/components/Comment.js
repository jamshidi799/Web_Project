import React, { Component } from 'react'
import { connect } from 'react-redux'

import likeIcon from '../icons/icons8-facebook-like-24.png'
import unlikeIcon from '../icons/icons8-thumbs-down-24.png'

class Comment extends Component {
    onLikeClicked = () => {

    }

    onUnlikeClicked = () => {

    }

    render() {
        const { content } = this.props.comment
        return (
            <div>
                <p className="lead">{content}</p>
                <div>
                    <img src={likeIcon} alt="like" onClick={this.onLikeClicked} /> <span>3.1k   </span>
                    <img src={unlikeIcon} alt="unlike" onClick={this.onUnlikeClicked} /> <span>123   </span>
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

export default connect(mapStateToProps)(Comment)
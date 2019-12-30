import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getComments, addComment } from '../../actions/comments'
import { getPost } from '../../actions/posts'
import Comment from '../Comment'


import img from '../../img/img1.jpg'
import likeIcon from '../../icons/icons8-facebook-like-24.png'

class PostPage extends Component {
    state = {
        comment: ''
    }

    componentDidMount() {
        this.props.getPost(this.props.match.params.post_id)
        this.props.getComments(this.props.match.params.post_id)
    }

    onCommentSubmit = e => {
        e.preventDefault()
        const content = this.state.comment
        const comment = { postid: this.props.currentPost.id, userid: this.props.currentPost.userid, parentid: '', content }
        this.props.addComment(comment)
    }

    onCommentChange = e => {
        this.setState({ [e.target.name]: e.target.value })
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
                    </div>
                    <div className="jumbotron">
                        <div className="row">
                            <h3 className="text-primary col-1">Comments:</h3>
                            <div className="col-9"></div>
                            <button className="btn btn-primary m-r-0 col-2" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                Add Comment
                            </button>
                        </div>
                        <br />
                        <div className="collapse" id="collapseExample">
                            <form onSubmit={this.onCommentSubmit}>
                                <div className="form-group">
                                    <label>comment</label>
                                    <input type="text" className="form-control" name="comment" id="exampleInputEmail1" value={this.state.comment} onChange={this.onCommentChange}
                                        aria-describedby="emailHelp" placeholder="Enter email" />
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                        {this.props.comments.map(comment => <Comment key={comment.id} comment={comment} />)}
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

export default connect(mapStateToProps, { getComments, addComment, getPost })(PostPage)
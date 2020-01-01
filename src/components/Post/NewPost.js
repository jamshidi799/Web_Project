import React, { Component } from 'react'
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux'
import { addPost } from '../../actions/posts'

class NewPost extends Component {
    state = {
        title: "",
        content: "",
        isPostCreated: false
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit = e => {
        e.preventDefault()
        const { title, content } = this.state
        const channelid = this.props.match.params.chennel_id
        const post = { channelid, title, content, image_url: "_" }
        this.setState({ ...this.state, isPostCreated: true })
        console.log(post)
        this.props.addPost(post)
    }


    render() {
        const { title, content } = this.state
        if (this.state.isPostCreated)
            return <Redirect to="/profile" />;
        return (
            <div className="container col-md-6 mb-4">
                <form className="jumbotron" onSubmit={this.onSubmit}>
                    <h2 className="text-center text-success">create new post</h2>
                    <br />
                    <div className="form-group">
                        <label >Title</label>
                        <input type="text" name="title" className="form-control" onChange={this.onChange} value={title} required />
                    </div>
                    <div className="form-group">
                        <label >Text</label>
                        <textarea type="text" name="content" value={content} onChange={this.onChange} className="form-control" id="Text" rows="3" required />
                    </div>
                    <div className="form-group">
                        <label className="form-check-label" >image</label>
                        <input type="file" className="form-control-file" id="image" />
                    </div>
                    <button type="submit" className="btn btn-primary">Create</button>
                </form>
            </div>
        )
    }
}

export default connect(null, { addPost })(NewPost)
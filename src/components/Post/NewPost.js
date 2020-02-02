import React, { Component } from 'react'
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux'
import { addPost } from '../../actions/posts'

class NewPost extends Component {
    state = {
        title: "",
        content: "",
        image: "",
        isPostCreated: false
    }

    constructor(props) {
        // highlight-range{3}
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this)
        this.fileInput = React.createRef();
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit = e => {
        e.preventDefault()
        const { title, content, image } = this.state
        let channel = this.props.match.params.channel_id
        if (channel === '0')
            channel = null
        const post = { channel, title, content, image: this.fileInput.current.files[0], owner: this.props.user.id, like: [] }
        this.setState({ ...this.state, isPostCreated: true })
        console.log(post)
        this.props.addPost(post)
    }


    render() {
        const { title, content, image } = this.state
        if (this.state.isPostCreated)
            return <Redirect to={`/profile/${this.props.user.username}`} />;
        return (
            <div className="container col-md-6 mb-4">
                <form className="jumbotron form" onSubmit={this.onSubmit}>
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
                        <input type="file" ref={this.fileInput} className="form-control-file" id="image" name="image" value={image} onChange={this.onChange} />
                    </div>
                    <button type="submit" className="btn btn-primary">Create</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.auth.user,
    }
}


export default connect(mapStateToProps, { addPost })(NewPost)
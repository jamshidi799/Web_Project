import React, { Component } from 'react'
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux'
import { addChannel } from '../../actions/channel'

class NewChannel extends Component {
    state = {
        name: "",
        title: "",
        content: "",
        isChannelCreated: false
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit = e => {
        e.preventDefault()
        const { name, title, content } = this.state
        const channel = { userid: this.props.user.id, name, title, content, image_url: "_" }
        this.setState({ ...this.state, isChannelCreated: true })
        this.props.addChannel(channel)
    }


    render() {
        const { name, title, content } = this.state
        if (this.state.isChannelCreated)
            return <Redirect to={`/profile/${this.props.user.username}`} />;
        return (
            <div className="container col-md-6 mb-4">
                <form className="jumbotron" onSubmit={this.onSubmit}>
                    <h2 className="text-center text-success">create new channel</h2>
                    <br />
                    <div className="form-group">
                        <label >Name</label>
                        <input type="text" name="name" className="form-control" onChange={this.onChange} value={name} required />
                    </div>
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

const mapStateToProps = state => {
    return {
        user: state.auth.user
    }
}

export default connect(mapStateToProps, { addChannel })(NewChannel)
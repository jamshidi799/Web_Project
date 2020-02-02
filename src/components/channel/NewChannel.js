import React, { Component } from 'react'
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux'
import { addChannel } from '../../actions/channel'

class NewChannel extends Component {
    state = {
        name: "",
        about: "",
        image: '',
        isChannelCreated: false
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit = e => {
        e.preventDefault()
        const { name, about } = this.state
        const channel = { owner: this.props.user.id, name, about, posts: [], authors: [] }
        this.setState({ ...this.state, isChannelCreated: true })
        this.props.addChannel(channel)
    }


    render() {
        const { name, about } = this.state
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
                        <label >Text</label>
                        <textarea type="text" name="about" value={about} onChange={this.onChange} className="form-control" id="Text" rows="3" required />
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
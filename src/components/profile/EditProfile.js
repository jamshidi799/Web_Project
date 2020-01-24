import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { edit } from '../../actions/auth'

class EditProfile extends Component {
    state = {
        user: {
            username: '',
            email: '',
            password: '',
        },
        bio: '',
        isRegistered: false
    }

    componentDidMount() {
        const { username, password, email, bio } = this.props.user
        this.setState({
            ...this.state, user: {
                username,
                password,
                email,
            },
            bio
        })
    }

    onUserChange = e => {
        this.setState({
            user: {
                ...this.state.user,
                [e.target.name]: e.target.value
            },
            isRegistered: this.state.isRegistered
        })
    }

    onBioChange = e => {
        this.setState({
            ...this.state,
            bio: e.target.value
        })
    }

    onSubmit = e => {
        e.preventDefault()
        const profile = { user: this.state.user, bio: this.state.bio }
        this.props.edit(profile)
        this.setState({ ...this.state, isRegistered: true })
    }

    render() {
        const { username, email, password, bio } = this.state.user
        if (this.state.isRegistered)
            return <Redirect to={`/profile/${this.state.user.username}`} />;
        return (
            <div className="col-md-6 mb-4 container" >
                <div className="card">
                    <div className="card-body">
                        <form onSubmit={this.onSubmit}>
                            <h2 className="text-center font-up font-bold deep-orange-text py-4 text-info">profile</h2>
                            <div className="md-form">
                                <i className="fa fa-user prefix grey-text"></i>
                                <label >User Name</label>
                                <input type="text" name="username" value={username} onChange={this.onUserChange} className="form-control" />
                            </div>
                            <div className="md-form">
                                <i className="fa fa-envelope prefix grey-text"></i>
                                <label >Your email</label>
                                <input type="text" name="email" value={email} onChange={this.onUserChange} className="form-control" />
                            </div>
                            <div className="md-form">
                                <i className="fa fa-envelope prefix grey-text"></i>
                                <label >Bio</label>
                                <input type="text" name="bio" value={bio} onChange={this.onBioChange} className="form-control" />
                            </div>
                            <div className="md-form">
                                <i className="fa fa-lock prefix grey-text"></i>
                                <label >Your password</label>
                                <input type="password" name="password" value={password} onChange={this.onUserChange} className="form-control" />
                            </div>
                            <br />
                            <div className="text-center">
                                <button type='submit' className="btn btn-info btn-sm">edit<i className="fa fa-angle-double-right pl-2" aria-hidden="true"></i></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.auth.user
    }
}

export default connect(mapStateToProps, { edit })(EditProfile)
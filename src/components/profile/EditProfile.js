import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { edit } from '../../actions/auth'

class EditProfile extends Component {
    state = {
        user: {
            username: '',
            email: '',
            password: '',
            bio: '',
        },
        isRegistered: false
    }

    componentDidMount() {
        this.setState({ ...this.state, user: this.props.user })
    }

    onChange = e => {
        this.setState({
            user: {
                ...this.state.user,
                [e.target.name]: e.target.value
            },
            isRegistered: this.state.isRegistered
        })
    }

    onSubmit = e => {
        e.preventDefault()
        this.setState({ ...this.state, isRegistered: true })
        this.props.edit(this.state.user)
    }

    render() {
        const { username, email, password, bio } = this.state.user
        if (this.state.isRegistered)
            return <Redirect to="/profile" />;
        return (
            <div className="col-md-6 mb-4 container" >
                <div className="card">
                    <div className="card-body">
                        <form onSubmit={this.onSubmit}>
                            <h2 className="text-center font-up font-bold deep-orange-text py-4 text-info">Sign up</h2>
                            <div className="md-form">
                                <i className="fa fa-user prefix grey-text"></i>
                                <label >User Name</label>
                                <input type="text" name="username" value={username} onChange={this.onChange} className="form-control" />
                            </div>
                            <div className="md-form">
                                <i className="fa fa-envelope prefix grey-text"></i>
                                <label >Your email</label>
                                <input type="text" name="email" value={email} onChange={this.onChange} className="form-control" />
                            </div>
                            <div className="md-form">
                                <i className="fa fa-envelope prefix grey-text"></i>
                                <label >Bio</label>
                                <input type="text" name="bio" value={bio} onChange={this.onChange} className="form-control" />
                            </div>
                            <div className="md-form">
                                <i className="fa fa-lock prefix grey-text"></i>
                                <label >Your password</label>
                                <input type="password" name="password" value={password} onChange={this.onChange} className="form-control" />
                            </div>
                            <br />
                            <div className="text-center">
                                <button className="btn btn-info btn-sm">edit<i className="fa fa-angle-double-right pl-2" aria-hidden="true"></i></button>
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
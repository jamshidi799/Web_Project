import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { register } from '../../actions/auth'

class SignUp extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        isRegistered: false
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit = e => {
        e.preventDefault()
        const { username, email, password } = this.state
        const user = { username, email, password, bio: '', image_url: '', followers: [], following: [] }
        this.setState({ ...this.state, isRegistered: true })
        this.props.register(user)
    }

    render() {
        const { username, email, password } = this.state
        if (this.state.isRegistered)
            return <Redirect to="/signin" />;
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
                                <i className="fa fa-lock prefix grey-text"></i>
                                <label >Your password</label>
                                <input type="password" name="password" value={password} onChange={this.onChange} className="form-control" />
                            </div>
                            <br />
                            <div className="text-center">
                                <button className="btn btn-info btn-sm">SignUp<i className="fa fa-angle-double-right pl-2" aria-hidden="true"></i></button>
                            </div>
                            <div className="text-center">
                                <p>if you have account please <Link to="/signin">sign in</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null, { register })(SignUp)
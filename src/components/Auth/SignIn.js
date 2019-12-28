import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login } from '../../actions/auth'

class SignIn extends Component {
    state = {
        username: '',
        password: ''
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit = e => {
        e.preventDefault()
        const { username, password } = this.state
        const user = { username, password }
        console.log(user)
        this.props.login(user)
    }


    render() {
        const { username, password } = this.state
        return (
            <div className="col-md-6 mb-4 container">
                <div className="card">
                    <form className="card-body" onSubmit={this.onSubmit}>
                        <h3 className="text-center default-text py-3"><i className="fa fa-lock"></i> Login</h3>
                        <div className="md-form">
                            <i className="fa fa-envelope prefix grey-text"></i>
                            <label>User name</label>
                            <input type="text" name="username" value={username} onChange={this.onChange} className="form-control" />
                        </div>
                        <div className="md-form">
                            <i className="fa fa-lock prefix grey-text"></i>
                            <label>Your password</label>
                            <input type="password" name="password" value={password} onChange={this.onChange} className="form-control" />
                        </div>
                        <br />
                        <div className="text-center">
                            <button className="btn btn-sm btn-info">SignIn</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default connect(null, { login })(SignIn)
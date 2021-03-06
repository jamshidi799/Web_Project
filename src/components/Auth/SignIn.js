import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from "react-router-dom";
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
        this.props.login(this.state.username, this.state.password)
    }


    render() {
        const { username, password } = this.state
        if (this.props.isAuthenticated)
            return <Redirect to="/" />;

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
                        <a className="btn text-secondary" role="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                            forget password?
                            </a>
                    </form>
                    <div className="collapse" id="collapseExample">
                        <form className="container">
                            <div className="form-group">
                                <input type="email" className="form-control" name="email" id="email"
                                    placeholder="Enter email" />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(
    mapStateToProps,
    { login }
)(SignIn);

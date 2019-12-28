import React, { Component } from 'react'

class SignIn extends Component {
    render() {
        return (
            <div className="col-md-6 mb-4 container">
                <div className="card">
                    <div className="card-body">
                        <h3 className="text-center default-text py-3"><i className="fa fa-lock"></i> Login</h3>
                        <div className="md-form">
                            <i className="fa fa-envelope prefix grey-text"></i>
                            <label>User name</label>
                            <input type="text" id="username" className="form-control" />
                        </div>
                        <div className="md-form">
                            <i className="fa fa-lock prefix grey-text"></i>
                            <label>Your password</label>
                            <input type="password" id="defaultForm-pass" className="form-control" />
                        </div>
                        <br />
                        <div className="text-center">
                            <button className="btn btn-sm btn-info">SignIn</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignIn
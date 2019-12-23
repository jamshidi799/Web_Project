import React, { Component } from 'react'

class SignIn extends Component {
    render() {
        return (
            <div class="col-md-6 mb-4 container">
                <div class="card">
                    <div class="card-body">
                        <h3 class="text-center default-text py-3"><i class="fa fa-lock"></i> Login</h3>
                        <div class="md-form">
                            <i class="fa fa-envelope prefix grey-text"></i>
                            <label for="username">User name</label>
                            <input type="text" id="username" class="form-control" />
                        </div>
                        <div class="md-form">
                            <i class="fa fa-lock prefix grey-text"></i>
                            <label for="defaultForm-pass">Your password</label>
                            <input type="password" id="defaultForm-pass" class="form-control" />
                        </div>
                        <br />
                        <div class="text-center">
                            <button class="btn btn-sm btn-info">SignIn</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignIn
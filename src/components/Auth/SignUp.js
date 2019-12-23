import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SignUp extends Component {
    render() {
        return (
            <div class="col-md-6 mb-4 container" >
                <div class="card">
                    <div class="card-body">
                        <form>
                            <h2 class="text-center font-up font-bold deep-orange-text py-4 text-info">Sign up</h2>
                            <div class="md-form">
                                <i class="fa fa-user prefix grey-text"></i>
                                <label for="orangeForm-name3">User Name</label>
                                <input type="text" id="orangeForm-name3" class="form-control" />
                            </div>
                            <div class="md-form">
                                <i class="fa fa-envelope prefix grey-text"></i>
                                <label for="orangeForm-email3">Your email</label>
                                <input type="text" id="orangeForm-email3" class="form-control" />
                            </div>
                            <div class="md-form">
                                <i class="fa fa-lock prefix grey-text"></i>
                                <label for="orangeForm-pass3">Your password</label>
                                <input type="password" id="orangeForm-pass3" class="form-control" />
                            </div>
                            <br />
                            <div class="text-center">
                                <button class="btn btn-info btn-sm">SignUp<i class="fa fa-angle-double-right pl-2" aria-hidden="true"></i></button>
                            </div>
                            <div class="text-center">
                                <p>if you have account please <Link to="/signin">sign in</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignUp
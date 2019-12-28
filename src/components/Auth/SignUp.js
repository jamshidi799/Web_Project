import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SignUp extends Component {
    render() {
        return (
            <div className="col-md-6 mb-4 container" >
                <div className="card">
                    <div className="card-body">
                        <form>
                            <h2 className="text-center font-up font-bold deep-orange-text py-4 text-info">Sign up</h2>
                            <div className="md-form">
                                <i className="fa fa-user prefix grey-text"></i>
                                <label >User Name</label>
                                <input type="text" id="orangeForm-name3" className="form-control" />
                            </div>
                            <div className="md-form">
                                <i className="fa fa-envelope prefix grey-text"></i>
                                <label >Your email</label>
                                <input type="text" id="orangeForm-email3" className="form-control" />
                            </div>
                            <div className="md-form">
                                <i className="fa fa-lock prefix grey-text"></i>
                                <label >Your password</label>
                                <input type="password" id="orangeForm-pass3" className="form-control" />
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

export default SignUp
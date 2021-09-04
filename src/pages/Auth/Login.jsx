import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import AuthCardFooter from "../../components/Partials/AuthCardFooter";
import AuthCardHeader from "../../components/Partials/AuthCardHeader";
import AuthFooter from "../../components/Partials/AuthFooter";

class Login extends React.Component {
    render() {
        return (
            <div class="bg-primary">
                <div id="layoutAuthentication">
                    <div id="layoutAuthentication_content">
                        <main>
                            <div class="container">
                                <div class="row justify-content-center">
                                    <div class="col-lg-5">
                                        <div class="card shadow-lg border-0 rounded-lg mt-5">
                                            <AuthCardHeader />
                                            <div class="card-body">
                                                <form>
                                                    <div class="form-group">
                                                        <label class="small mb-1" for="inputEmailAddress">
                                                            Email
                                                        </label>
                                                        <Input
                                                            id="inputEmailAddress"
                                                            type="email"
                                                            placeholder="Enter email address" />
                                                    </div>
                                                    <div class="form-group">
                                                        <label class="small mb-1" for="inputPassword">
                                                            Password
                                                        </label>
                                                        <Input
                                                            id="inputPassword"
                                                            type="password"
                                                            placeholder="Enter password" />
                                                    </div>
                                                    <div class="form-group d-flex align-items-center justify-content-between mt-4 mb-0">
                                                        <div class="btn_a">
                                                            <Button to="/" btn_name="Login" btn_class="btn btn-primary" />
                                                        </div>
                                                        <Link class="small" to="/forgotpass">Forgot Password?</Link>
                                                    </div>
                                                </form>
                                            </div>
                                            <AuthCardFooter to="/register" text="Need an account? Sign up!" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                    <AuthFooter />
                </div>
            </div>
        );
    }
}

export default Login;
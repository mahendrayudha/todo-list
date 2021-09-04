import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import AuthCardFooter from "../../components/Partials/AuthCardFooter";
import AuthCardHeader from "../../components/Partials/AuthCardHeader";
import AuthFooter from "../../components/Partials/AuthFooter";

class Register extends React.Component {
    render() {
        return (
            <div class="bg-primary">
                <div id="layoutAuthentication">
                    <div id="layoutAuthentication_content">
                        <main>
                            <div class="container">
                                <div class="row justify-content-center">
                                    <div class="col-lg-7">
                                        <div class="card shadow-lg border-0 rounded-lg mt-5">
                                            <AuthCardHeader />
                                            <div class="card-body">
                                                <form>
                                                    <div class="form-row">
                                                        <div class="col-md-12">
                                                            <div class="form-group">
                                                                <label class="small mb-1" for="inputFullName">
                                                                    Full Name
                                                                </label>
                                                                <Input
                                                                    id="inputFullName"
                                                                    type="text"
                                                                    placeholder="Enter full name" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <label class="small mb-1" for="inputEmailAddress">
                                                            Email
                                                        </label>
                                                        <Input
                                                            id="inputEmailAddress"
                                                            type="email"
                                                            placeholder="Enter email address" />
                                                    </div>
                                                    <div class="form-row">
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label class="small mb-1" for="inputPassword">
                                                                    Password
                                                                </label>
                                                                <Input
                                                                    id="inputPassword"
                                                                    type="password"
                                                                    placeholder="Enter password" />
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label
                                                                    class="small mb-1"
                                                                    for="inputConfirmPassword"
                                                                >
                                                                    Confirm Password
                                                                </label>
                                                                <Input
                                                                    id="inputConfirmPassword"
                                                                    type="password"
                                                                    placeholder="Confirm password" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="form-group mt-4 mb-0">
                                                        <div class="btn_a">
                                                            <Button to="/login" btn_name="Create Account" btn_class="btn btn-primary btn-block" />
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                            <AuthCardFooter to="/login" text="Have an account? Go to login" />
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

export default Register;
import React from "react";
import { Link } from "react-router-dom";

class Login extends React.Component {
  render() {
    const logo = {
      width: "25rem",
      padding: "0rem 5rem",
    };
    return (
      <div>
        <div class="bg-primary">
          <div id="layoutAuthentication">
            <div id="layoutAuthentication_content">
              <main>
                <div class="container">
                  <div class="row justify-content-center">
                    <div class="col-lg-5">
                      <div class="card shadow-lg border-0 rounded-lg mt-5">
                        <div class="card-header justify-content-center bg-white">
                          <img src="assets/images/logo.png" style={logo} />
                        </div>
                        <div class="card-body">
                          <form>
                            <div class="form-group">
                              <label class="small mb-1" for="inputEmailAddress">
                                Email
                              </label>
                              <input
                                class="form-control py-4"
                                id="inputEmailAddress"
                                type="email"
                                placeholder="Enter email address"
                              />
                            </div>
                            <div class="form-group">
                              <label class="small mb-1" for="inputPassword">
                                Password
                              </label>
                              <input
                                class="form-control py-4"
                                id="inputPassword"
                                type="password"
                                placeholder="Enter password"
                              />
                            </div>
                            <div class="form-group d-flex align-items-center justify-content-between mt-4 mb-0">
                              <a class="btn btn-primary" href="index.html">
                                Login
                              </a>
                              <a class="small" href="password-basic.html">
                                Forgot Password?
                              </a>
                            </div>
                          </form>
                        </div>
                        <div class="card-footer text-center">
                          <div class="small">
                            <Link to="/register">
                              Need an account? Sign up!
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
            </div>
            <div id="layoutAuthentication_footer">
              <footer class="footer mt-auto footer-dark">
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-md-12 text-md-right small">
                      Copyright &copy; Kelompok 3 2021
                    </div>
                  </div>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;

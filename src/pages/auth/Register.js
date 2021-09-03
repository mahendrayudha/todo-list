import React from "react";
// import {Link} from 'react-router-dom';

class Register extends React.Component {
  render() {
    const logo = {
      width: "25rem",
      padding: "0rem 5rem",
    };
    return (
      <div class="bg-primary">
        <div id="layoutAuthentication">
          <div id="layoutAuthentication_content">
            <main>
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-lg-7">
                    <div class="card shadow-lg border-0 rounded-lg mt-5">
                      <div class="card-header justify-content-center bg-white">
                        <img src="assets/images/logo.png" style={logo} />
                      </div>
                      <div class="card-body">
                        <form>
                          <div class="form-row">
                            <div class="col-md-12">
                              <div class="form-group">
                                <label class="small mb-1" for="inputFullName">
                                  Full Name
                                </label>
                                <input
                                  class="form-control py-4"
                                  id="inputFullName"
                                  type="text"
                                  placeholder="Enter full name"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="form-group">
                            <label class="small mb-1" for="inputEmailAddress">
                              Email
                            </label>
                            <input
                              class="form-control py-4"
                              id="inputEmailAddress"
                              type="email"
                              aria-describedby="emailHelp"
                              placeholder="Enter email address"
                            />
                          </div>
                          <div class="form-row">
                            <div class="col-md-6">
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
                            </div>
                            <div class="col-md-6">
                              <div class="form-group">
                                <label
                                  class="small mb-1"
                                  for="inputConfirmPassword"
                                >
                                  Confirm Password
                                </label>
                                <input
                                  class="form-control py-4"
                                  id="inputConfirmPassword"
                                  type="password"
                                  placeholder="Confirm password"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="form-group mt-4 mb-0">
                            <a
                              class="btn btn-primary btn-block"
                              href="login-basic.html"
                            >
                              Create Account
                            </a>
                          </div>
                        </form>
                      </div>
                      <div class="card-footer text-center">
                        <div class="small">
                          <a href="login-basic.html">
                            Have an account? Go to login
                          </a>
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
    );
  }
}

export default Register;

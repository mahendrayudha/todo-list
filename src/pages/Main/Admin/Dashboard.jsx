import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../../components/Partials/Footer";
import Navbar from "../../../components/Partials/Navbar";

class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <div id="layoutSidenav">
                    <div id="layoutSidenav_nav">
                        <nav class="sidenav shadow-right sidenav-light">
                            <div class="sidenav-menu">
                                <div class="nav accordion" id="accordionSidenav">
                                    <div class="sidenav-menu-heading">Dashboard</div>
                                    <a class="nav-link">
                                        <div class="nav-link-icon">
                                            <i data-feather="bar-chart"></i>
                                        </div>
                                        <Link class="a-nav-link" to="/dashboard">Dashboard</Link>
                                    </a>
                                    <div class="sidenav-menu-heading">Logout</div>
                                    <a class="nav-link">
                                        <div class="nav-link-icon">
                                            <i data-feather="bar-chart"></i>
                                        </div>
                                        <Link class="a-nav-link" to="/login">Logout</Link>
                                    </a>
                                </div>
                            </div>
                            <div class="sidenav-footer">
                                <div class="sidenav-footer-content">
                                    <div class="sidenav-footer-subtitle">Logged in as:</div>
                                    <div class="sidenav-footer-title">Fullname</div>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div id="layoutSidenav_content">
                        <main>
                            <div class="page-header pb-10 page-header-dark bg-gradient-primary-to-secondary">
                                <div class="container-fluid">
                                    <div class="page-header-content">
                                        <div class="page-header-title">
                                            <div class="page-header-icon">
                                                <i className="fa fa-activity" data-feather="activity"></i>
                                            </div>
                                            <span>User List</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="container-fluid mt-n10">
                                <div class="card mb-4">
                                    <div class="card-body">
                                        <div class="datatable table-responsive">
                                            <table class="table table-bordered table-hover" id="dataTable" width="100%" cellspacing="0">
                                                <thead>
                                                    <tr>
                                                        <th>Email</th>
                                                        <th>Full Name</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>example@email.com</td>
                                                        <td>Lorem Ipsum Dolor Sit Amet</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </main>
                        <Footer />
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;
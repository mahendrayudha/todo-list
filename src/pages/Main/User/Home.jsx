import React, { Fragment } from "react";
import Sidebar from "../../../components/Partials/Sidebar";
import Footer from "../../../components/Partials/Footer";
import Navbar from "../../../components/Partials/Navbar";
import EmptyList from "../../../components/Task/ListComponent/EmptyList";
import Button from "../../../components/Button/Button";

class Home extends React.Component {
  render() {
    return (
        <div>
            <Navbar />
            <div id="layoutSidenav">
                <Sidebar/>
                <div id="layoutSidenav_content">
                    <main>
                        <div class="page-header pb-10 page-header-dark bg-gradient-primary-to-secondary">
                            <div class="container-fluid">
                                <div class="page-header-content">
                                    <div class="page-header-title">
                                        <div class="page-header-icon">
                                            <i className="fa fa-activity" data-feather="activity"></i>
                                        </div>
                                        <span>Todo List</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="container-fluid mt-n10">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="card mb-4">
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="btn_a mb-3">
                                                        <Button to="/addTask" btn_name="Add Task" btn_class="btn btn-primary btn-sm" />
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <h3>On Progress</h3>
                                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                                        <div className="m-2">
                                                            <div class="font-weight-bolder">Task Name</div>
                                                            Task Date
                                                        </div>
                                                        <div>
                                                            <button className="btn btn-primary btn-sm m-1" >
                                                                Detail
                                                            </button>
                                                            <button className="btn btn-warning btn-sm m-1" >
                                                                Edit
                                                            </button>
                                                            <Fragment>
                                                                <button className="btn btn-danger btn-sm m-1">
                                                                    Delete
                                                                </button>
                                                                <button className="btn btn-success btn-sm m-1" >
                                                                    Done
                                                                </button>
                                                            </Fragment>
                                                        </div>
                                                    </li>
                                                </div>
                                                <div class="col-md-6">
                                                    <h3>Done</h3>
                                                    <EmptyList />
                                                </div>
                                            </div>
                                        </div>
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

export default Home;
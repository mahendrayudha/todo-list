import React, { Fragment } from "react";
import Sidebar from "../../../components/Partials/Sidebar";
import Footer from "../../../components/Partials/Footer";
import Navbar from "../../../components/Partials/Navbar";
import Form from "../../../components/Task/FormComponent/Form";

class AddTask extends React.Component {
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
                                            <i data-feather="activity"></i>
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
                                            <Form />
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

export default AddTask;
import React from "react";

class Home extends React.Component {
  render() {
    return (
      <main>
        <div class="page-header pb-10 page-header-dark bg-gradient-primary-to-secondary">
          <div class="container-fluid">
            <div class="page-header-content">
              <h1 class="page-header-title">
                <div class="page-header-icon">
                  <i data-feather="activity"></i>
                </div>
                <span>Todo List</span>
              </h1>
            </div>
          </div>
        </div>
        <div class="container-fluid mt-n10">
          <div class="row">
            <div class="col-md-12">
              <div class="card mb-4">
                <div class="card-body">
                  <div class="row">
                    <div class="col-md-6">
                      <h3>On Progress</h3>
                    </div>
                    <div class="col-md-6">
                      <h3>Done</h3>
                    </div>
                  </div>
                  <div class="chart-area">{/*  */}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="card mb-4">
            <div class="card-header">DataTable Example</div>
            <div class="card-body">
              <div class="datatable table-responsive">
                <table
                  class="table table-bordered table-hover"
                  id="dataTable"
                  width="100%"
                  cellspacing="0"
                >
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Position</th>
                      <th>Office</th>
                      <th>Age</th>
                      <th>Start date</th>
                      <th>Salary</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Tiger Nixon</td>
                      <td>System Architect</td>
                      <td>Edinburgh</td>
                      <td>61</td>
                      <td>2011/04/25</td>
                      <td>$320,800</td>
                      <td>
                        <div class="badge badge-primary badge-pill">
                          Full-time
                        </div>
                      </td>
                      <td>
                        <button class="btn btn-datatable btn-icon btn-transparent-dark mr-2">
                          <i data-feather="more-vertical"></i>
                        </button>
                        <button class="btn btn-datatable btn-icon btn-transparent-dark">
                          <i data-feather="trash-2"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>Garrett Winters</td>
                      <td>Accountant</td>
                      <td>Tokyo</td>
                      <td>63</td>
                      <td>2011/07/25</td>
                      <td>$170,750</td>
                      <td>
                        <div class="badge badge-warning badge-pill">
                          Pending
                        </div>
                      </td>
                      <td>
                        <button class="btn btn-datatable btn-icon btn-transparent-dark mr-2">
                          <i data-feather="more-vertical"></i>
                        </button>
                        <button class="btn btn-datatable btn-icon btn-transparent-dark">
                          <i data-feather="trash-2"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Home;

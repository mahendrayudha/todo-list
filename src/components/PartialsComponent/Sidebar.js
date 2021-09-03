import React from "react";

class Sidebar extends React.Component {
  render() {
    return (
      <div id="layoutSidenav_nav">
        <nav class="sidenav shadow-right sidenav-light">
          <div class="sidenav-menu">
            <div class="nav accordion" id="accordionSidenav">
              {/* <div class="sidenav-menu-heading">Home</div> */}
              <a class="nav-link" href="charts.html">
                <div class="nav-link-icon">
                  <i data-feather="bar-chart"></i>
                </div>
                Home
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
    );
  }
}

export default Sidebar;

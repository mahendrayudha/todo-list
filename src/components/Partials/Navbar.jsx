import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <nav
        class="topnav navbar navbar-expand shadow navbar-light bg-white"
        id="sidenavAccordion"
      >
        <Link to="/home" class="navbar-brand d-none d-sm-block">
          Todo List App
        </Link>
        <button
          class="btn btn-icon btn-transparent-dark order-1 order-lg-0 mr-lg-2"
          id="sidebarToggle"
          href="#"
        >
          <i data-feather="menu"></i>
        </button>
      </nav>
    );
  }
}

export default Navbar;
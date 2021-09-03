import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <nav
        class="topnav navbar navbar-expand shadow navbar-light bg-white"
        id="sidenavAccordion"
      >
        <Link to="/home" class="navbar-brand d-none d-sm-block">
          Todo List App
        </Link>
        {/* eslint-disable-next-line */}
        <button
          class="btn btn-icon btn-transparent-dark order-1 order-lg-0 mr-lg-2"
          id="sidebarToggle"
          href="#"
        >
          <i data-feather="menu"></i>
        </button>
        <ul class="navbar-nav align-items-center ml-auto">
          <li class="nav-item dropdown no-caret mr-3 dropdown-user">
            {/* eslint-disable-next-line */}
            <a
              class="btn btn-icon btn-transparent-dark dropdown-toggle"
              id="navbarDropdownUserImage"
              href="#"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {/* eslint-disable-next-line */}
              <img class="img-fluid" src="assets/images/user.png" />
            </a>
            <div
              class="dropdown-menu dropdown-menu-right border-0 shadow animated--fade-in-up"
              aria-labelledby="navbarDropdownUserImage"
            >
              <h6 class="dropdown-header d-flex align-items-center">
                {/* eslint-disable-next-line */}
                <img class="dropdown-user-img" src="assets/images/user.png" />
                <div class="dropdown-user-details">
                  <div class="dropdown-user-details-name">Fullname</div>
                  <div class="dropdown-user-details-email">
                    example@email.com
                  </div>
                </div>
              </h6>
              <a class="dropdown-item" href="#!">
                <div class="dropdown-item-icon">
                  <i data-feather="log-out"></i>
                </div>
                Logout
              </a>
            </div>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;

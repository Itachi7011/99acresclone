import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";
import { useContext } from "react";

import Logo from "./Images/logo.png";

const Navbar = () => {
  const { state, dispatch } = useContext(UserContext);
  const [user, setUser] = useState("");
  const [phoneNo1, setphoneNo] = useState([]);
  const [Email1, setEmail] = useState([]);
  // const [Data1, setData1] = useState({ post: [] });
  // const [Data2, setData2] = useState({ post: [] });
  // const [Data3, setData3] = useState({ post: [] });

  // const Navigate = useNavigate();

  const UserDetails = async () => {
    try {
      const res = await fetch("/userProfile", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();

      setUser(data);

      if (!res === 200) {
        throw new Error(`Error during retreive data - ${Error}`);
      }

      if (!res === 200) {
        throw new Error(`Error during retreive data - ${Error}`);
      }
    } catch (err) {
      console.log(`Error during catch of User's Data -  ${err}`);
    }
  };
  const PhoneNoDetails = async () => {
    try {
      const res = await fetch("/phoneNoAPI", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();

      setphoneNo(data);

      if (!res === 200) {
        throw new Error(`Error during retreive data - ${Error}`);
      }

      if (!res === 200) {
        throw new Error(`Error during retreive data - ${Error}`);
      }
    } catch (err) {
      console.log(`Error during catch of User's Data -  ${err}`);
    }
  };
  const EmailDetails = async () => {
    try {
      const res = await fetch("/emailAPI", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();

      setEmail(data);

      if (!res === 200) {
        throw new Error(`Error during retreive data - ${Error}`);
      }

      if (!res === 200) {
        throw new Error(`Error during retreive data - ${Error}`);
      }
    } catch (err) {
      console.log(`Error during catch of User's Data -  ${err}`);
    }
  };
  useEffect(() => {
    UserDetails();
    PhoneNoDetails();
    EmailDetails();
  }, []);


  const NoUserNavbar = () => {
    return (
      <>
        <header class="header_wrapper">
          <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
              <a class="navbar-brand" href="/">
                <img src={Logo} class="img-fluid" alt="logo" />
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                {/* <!--- <span class="navbar-toggler-icon"></span>---> */}
                <i class="fas fa-stream"></i>
              </button>
              <div
                class="collapse navbar-collapse justify-content-end"
                id="navbarNav"
              >
                <ul class="navbar-nav menu-navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="/">
                      Home
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/property-list">
                      Properties
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/project-list">
                      Projects
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/Signup">
                      Signup
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/Login">
                      Login
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </>
    );
  };

  const UserNavbar = () => {
    return (
      <>
        <header class="header_wrapper">
          <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
              <a class="navbar-brand" href="/">
                <img src={Logo} class="img-fluid" alt="logo" />
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                {/* <!--- <span class="navbar-toggler-icon"></span>---> */}
                <i class="fas fa-stream"></i>
              </button>
              <div
                class="collapse navbar-collapse justify-content-end"
                id="navbarNav"
              >
                <ul class="navbar-nav menu-navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="/">
                      Home
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="property-list/">
                       Properties
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/project-list">
                      Projects
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/add-new-project">
                     Add Projects
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/post-new-property">
                     Add Property
                    </a>
                  </li>
                  
                  <li class="nav-item">
                    <a class="nav-link" href="/Logout">
                      {user.name}
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/Logout">
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </>
    );
  };

  const AdminNavbar = () => {
    return (
      <>
        <div
          class="hold-transition sidebar-mini layout-fixed"
          style={{ marginTop: "0rem" }}
        >
          <div
            class="wrapper"
            style={{ position: "fixed", 
            // zIndex: "10",
             width: "100%" }}
          >
            <nav className="main-header navbar navbar-expand navbar-white navbar-light">
              {/* Left navbar links */}
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-widget="pushmenu"
                    href="/"
                    role="button"
                  >
                    <i className="fas fa-bars" />
                  </a>
                </li>
                <li className="nav-item d-none d-sm-inline-block">
                  <a href="index3.html" className="nav-link">
                    Home
                  </a>
                </li>
                <li className="nav-item d-none d-sm-inline-block">
                  <a href="/" className="nav-link">
                    Contact
                  </a>
                </li>
                <li className="nav-item d-none d-sm-inline-block">
                  <a href="/logout" className="nav-link">
                    Logout
                  </a>

                </li>
                <li className="nav-item d-none d-sm-inline-block">
                  <a href="" className="nav-link">
                    {phoneNo1.map(({phoneNo},index)=>{
                      return(<>
                      (<span key={index}>{phoneNo}</span>)
                      </>)
                    })}

                  </a>
                  
                </li>
                <li className="nav-item d-none d-sm-inline-block">
                  <a href="" className="nav-link">
                  {Email1.map(({email}, id)=>{
                      return(<>
                      (<span key={ id}>{email}</span>)
                      </>)
                    })}
                  </a>
                  
                </li>
              </ul>
              {/* Right navbar links */}
              <ul className="navbar-nav ml-auto">
                {/* Navbar Search */}
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-widget="navbar-search"
                    href="/"
                    role="button"
                  >
                    <i className="fas fa-search" />
                  </a>
                  <div className="navbar-search-block">
                    <form className="form-inline">
                      <div className="input-group input-group-sm">
                        <input
                          className="form-control form-control-navbar"
                          type="search"
                          placeholder="Search"
                          aria-label="Search"
                        />
                        <div className="input-group-append">
                          <button className="btn btn-navbar" type="submit">
                            <i className="fas fa-search" />
                          </button>
                          <button
                            className="btn btn-navbar"
                            type="button"
                            data-widget="navbar-search"
                          >
                            <i className="fas fa-times" />
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </li>
                {/* Messages Dropdown Menu */}
                <li className="nav-item dropdown">
                  <a className="nav-link" data-toggle="dropdown" href="/">
                    <i className="far fa-comments" />
                    <span className="badge badge-danger navbar-badge">3</span>
                  </a>
                  <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                    <a href="/" className="dropdown-item">
                      {/* Message Start */}
                      <div className="media">
                        <img
                          src="dist/img/user1-128x128.jpg"
                          alt="User Avatar"
                          className="img-size-50 mr-3 img-circle"
                        />
                        <div className="media-body">
                          <h3 className="dropdown-item-title">
                            Brad Diesel
                            <span className="float-right text-sm text-danger">
                              <i className="fas fa-star" />
                            </span>
                          </h3>
                          <p className="text-sm">Call me whenever you can...</p>
                          <p className="text-sm text-muted">
                            <i className="far fa-clock mr-1" /> 4 Hours Ago
                          </p>
                        </div>
                      </div>
                      {/* Message End */}
                    </a>
                    <div className="dropdown-divider" />
                    <a href="/" className="dropdown-item">
                      {/* Message Start */}
                      <div className="media">
                        <img
                          src="dist/img/user8-128x128.jpg"
                          alt="User Avatar"
                          className="img-size-50 img-circle mr-3"
                        />
                        <div className="media-body">
                          <h3 className="dropdown-item-title">
                            John Pierce
                            <span className="float-right text-sm text-muted">
                              <i className="fas fa-star" />
                            </span>
                          </h3>
                          <p className="text-sm">I got your message bro</p>
                          <p className="text-sm text-muted">
                            <i className="far fa-clock mr-1" /> 4 Hours Ago
                          </p>
                        </div>
                      </div>
                      {/* Message End */}
                    </a>
                    <div className="dropdown-divider" />
                    <a href="/" className="dropdown-item">
                      {/* Message Start */}
                      <div className="media">
                        <img
                          src="dist/img/user3-128x128.jpg"
                          alt="User Avatar"
                          className="img-size-50 img-circle mr-3"
                        />
                        <div className="media-body">
                          <h3 className="dropdown-item-title">
                            Nora Silvester
                            <span className="float-right text-sm text-warning">
                              <i className="fas fa-star" />
                            </span>
                          </h3>
                          <p className="text-sm">The subject goes here</p>
                          <p className="text-sm text-muted">
                            <i className="far fa-clock mr-1" /> 4 Hours Ago
                          </p>
                        </div>
                      </div>
                      {/* Message End */}
                    </a>
                    <div className="dropdown-divider" />
                    <a href="/" className="dropdown-item dropdown-footer">
                      See All Messages
                    </a>
                  </div>
                </li>
                {/* Notifications Dropdown Menu */}
                <li className="nav-item dropdown">
                  <a className="nav-link" data-toggle="dropdown" href="/">
                    <i className="far fa-bell" />
                    <span className="badge badge-warning navbar-badge">15</span>
                  </a>
                  <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                    <span className="dropdown-item dropdown-header">
                      15 Notifications
                    </span>
                    <div className="dropdown-divider" />
                    <a href="/" className="dropdown-item">
                      <i className="fas fa-envelope mr-2" /> 4 new messages
                      <span className="float-right text-muted text-sm">
                        3 mins
                      </span>
                    </a>
                    <div className="dropdown-divider" />
                    <a href="/" className="dropdown-item">
                      <i className="fas fa-users mr-2" /> 8 friend requests
                      <span className="float-right text-muted text-sm">
                        12 hours
                      </span>
                    </a>
                    <div className="dropdown-divider" />
                    <a href="/" className="dropdown-item">
                      <i className="fas fa-file mr-2" /> 3 new reports
                      <span className="float-right text-muted text-sm">
                        2 days
                      </span>
                    </a>
                    <div className="dropdown-divider" />
                    <a href="/" className="dropdown-item dropdown-footer">
                      See All Notifications
                    </a>
                  </div>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-widget="fullscreen"
                    href="/"
                    role="button"
                  >
                    <i className="fas fa-expand-arrows-alt" />
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-widget="control-sidebar"
                    data-controlsidebar-slide="true"
                    href="/"
                    role="button"
                  >
                    <i className="fas fa-th-large" />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </>
    );
  };

  const RenderMenu = () => {
    if (!state) {
      if (!user.userType) {
        return (
          <>
            <NoUserNavbar />
          </>
        )
      } else if (
        user.userType === "buyer" ||
        user.userType === "Agent" ||
        user.userType === "Developer" || 
        user.userType === "Indivisual Buyer/Seller" 

      ) {
        return (
          <>
            <UserNavbar />
          </>
        )
      } else if (user.userType === "admin") {
        return (
          <>
            <AdminNavbar />
          </>
        );
      }
    }
  };

  return (
    <>
      {/* navbar section */}

      <RenderMenu />

      {/* end navbar section */}
    </>
  );
};

export default Navbar;

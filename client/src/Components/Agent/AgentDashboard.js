import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

import AddIcon from "@mui/icons-material/Add";
import VisibilityIcon from "@mui/icons-material/Visibility";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import DateRangeIcon from "@mui/icons-material/DateRange";
import CodeIcon from "@mui/icons-material/Code";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import BlockIcon from "@mui/icons-material/Block";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import FeedbackIcon from "@mui/icons-material/Feedback";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import AdUnitsIcon from "@mui/icons-material/AdUnits";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/Facebook";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import GroupIcon from "@mui/icons-material/Group";
import RedditIcon from "@mui/icons-material/Reddit";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Reddit from "@mui/icons-material/Reddit";

const AdminDashboard = () => {
  const [Data1, setData1] = useState({ post: [] });
  const [Data2, setData2] = useState({ post: [] });
  const [Data3, setData3] = useState({ post: [] });

  useEffect(() => {
    axios
      .get("/commercailProperties")
      .then((response) => {
        const data = response.data;

        setData1({ post: data });

        console.log("data fetch successfully");
      })
      .catch((err) => {
        console.log("Error during Data:", err);
      });
    axios
      .get("/residentialProperties")
      .then((response) => {
        const data = response.data;

        setData2({ post: data });

        console.log("data fetch successfully");
      })
      .catch((err) => {
        console.log("Error during Data:", err);
      });
    axios
      .get("/totalUsers")
      .then((response) => {
        const data = response.data;

        setData3({ post: data });

        console.log("data fetch successfully");
      })
      .catch((err) => {
        console.log("Error during Data:", err);
      });
  }, []);
  console.log("Data 3 is :", Data3);
  const TotalProperties = Data1.post.length + Data2.post.length;
  const TotalUSers = Data3.post.length;

  // console.log("Data is : ", Data1.post.length + Data2.post.length);

  return (
    <>
      <div
        class="hold-transition sidebar-mini layout-fixed"
        style={{ marginTop: "0rem" }}
      >
        <div class="wrapper">
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

          <aside className="main-sidebar sidebar-dark-primary elevation-4">
            {/* Brand Logo */}
            <a href="index3.html" className="brand-link">
              <img
                src="dist/img/AdminLTELogo.png"
                alt="AdminLTE Logo"
                className="brand-image img-circle elevation-3"
                style={{ opacity: ".8" }}
              />
              <span className="brand-text font-weight-light">
                Agent Dashboard
              </span>
            </a>
            {/* Sidebar */}
            <div className="sidebar">
              {/* Sidebar user panel (optional) */}
              <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                <div className="image">
                  <img
                    src="dist/img/user2-160x160.jpg"
                    className="img-circle elevation-2"
                    alt="User Images"
                  />
                </div>
                <div className="info">
                  <a href="/" className="d-block">
                    User Name
                  </a>
                </div>
              </div>
              {/* SidebarSearch Form */}
              {/* <div className="form-inline">
                <div className="input-group" data-widget="sidebar-search">
                  <input
                    className="form-control form-control-sidebar"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <div className="input-group-append">
                    <button className="btn btn-sidebar">
                      <i className="fas fa-search fa-fw" />
                    </button>
                  </div>
                </div>
              </div> */}
              {/* Sidebar Menu */}
              <nav className="mt-2">
                <ul
                  className="nav nav-pills nav-sidebar flex-column"
                  data-widget="treeview"
                  role="menu"
                  data-accordion="false"
                >
                  {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
                  <li className="nav-item">
                    <a href="/" className="nav-link">
                      <i className="nav-icon far fa-envelope" />
                      <p>
                        Mailbox
                        <i className="fas fa-angle-left right" />
                      </p>
                    </a>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <a href="https://mail.google.com" className="nav-link">
                          <p>Inbox</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="https://mail.google.com" className="nav-link">
                          <p>Compose</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="https://mail.google.com" className="nav-link">
                          <p>Read</p>
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <a href="/" className="nav-link">
                      <i className="nav-icon fas fa-copy" />
                      <p>
                        Properties
                        <i className="fas fa-angle-left right" />
                        {/* <span className="badge badge-info right">6</span> */}
                      </p>
                    </a>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <a
                          href="/post-new-commercial-property"
                          className="nav-link"
                        >
                          <p>
                            {" "}
                            Add Property <AddIcon className="right" />
                          </p>
                        </a>
                      </li>

                      <li className="nav-item">
                        <a
                          href="/admin-commercial-property-list-by-carpetarea"
                          className="nav-link"
                        >
                          <p>
                            Show All Properties{" "}
                            <VisibilityIcon className="right" />
                          </p>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="nav-icon fas fa-copy" />
                      <p>
                      Projects
                        <i className="fas fa-angle-left right" />
                        {/* <span className="badge badge-info right">6</span> */}
                      </p>
                    </a>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <a
                          href="/post-new-commercial-property"
                          className="nav-link"
                        >
                          <p>
                            {" "}
                            Add Project <AddIcon className="right" />
                          </p>
                        </a>
                      </li>

                      <li className="nav-item">
                        <a
                          href="/admin-commercial-property-list-by-carpetarea"
                          className="nav-link"
                        >
                          <p>
                            Show All Projects{" "}
                            <VisibilityIcon className="right" />
                          </p>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="nav-icon fas fa-copy" />
                      <p>
                      Services
                        <i className="fas fa-angle-left right" />
                        {/* <span className="badge badge-info right">6</span> */}
                      </p>
                    </a>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <a
                          href="/post-new-commercial-property"
                          className="nav-link"
                        >
                          <p>
                            {" "}
                            Add Services <AddIcon className="right" />
                          </p>
                        </a>
                      </li>

                      <li className="nav-item">
                        <a
                          href="/admin-commercial-property-list-by-carpetarea"
                          className="nav-link"
                        >
                          <p>
                            Show My Services{" "}
                            <VisibilityIcon className="right" />
                          </p>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="nav-icon fas fa-copy" />
                      <p>
                      Blogs
                        <i className="fas fa-angle-left right" />
                        {/* <span className="badge badge-info right">6</span> */}
                      </p>
                    </a>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <a
                          href="/post-new-commercial-property"
                          className="nav-link"
                        >
                          <p>
                            {" "}
                            Add Blogs <AddIcon className="right" />
                          </p>
                        </a>
                      </li>

                      <li className="nav-item">
                        <a
                          href="/admin-commercial-property-list-by-carpetarea"
                          className="nav-link"
                        >
                          <p>
                            Show My Blogs{" "}
                            <VisibilityIcon className="right" />
                          </p>
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <a href="/" className="nav-link">
                      <LocationCityIcon className="" />
                      <p>
                        Cities
                        <i className="fas fa-angle-left right" />
                        {/* <span className="badge badge-info right">6</span> */}
                      </p>
                    </a>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <a
                          href="pages/layout/top-nav.html"
                          className="nav-link"
                        >
                          <p>
                            {" "}
                            New City <AddIcon className="right" />
                          </p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="pages/layout/top-nav-sidebar.html"
                          className="nav-link"
                        >
                          <p>
                            {" "}
                            Add Location <AddIcon className="right" />
                          </p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="pages/layout/boxed.html" className="nav-link">
                          <p> View All Cities</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="pages/layout/fixed-sidebar.html"
                          className="nav-link"
                        >
                          <p>
                            View All Locations{" "}
                            <VisibilityIcon className="right" />
                          </p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="pages/layout/fixed-sidebar-custom.html"
                          className="nav-link"
                        >
                          <p>
                            Add Sublocs <AddIcon className="right" />
                          </p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="pages/layout/fixed-topnav.html"
                          className="nav-link"
                        >
                          <p>
                            View Sublocs <VisibilityIcon className="right" />
                          </p>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="/" className="nav-link">
                      <i className="nav-icon fas fa-chart-pie" />
                      <p>
                        Charts
                        <i className="right fas fa-angle-left" />
                      </p>
                    </a>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <a
                          href="pages/charts/chartjs.html"
                          className="nav-link"
                        >
                          <i className="far fa-circle nav-icon" />
                          <p>ChartJS</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="pages/charts/flot.html" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Flot</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="pages/charts/inline.html" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Inline</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="pages/charts/uplot.html" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>uPlot</p>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="pages/widgets.html" className="nav-link">
                      <DateRangeIcon className="" /> <p>Calender</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/" className="nav-link">
                      <CodeIcon className="" />
                      <p>
                        Developers
                        <i className="fas fa-angle-left right" />
                      </p>
                    </a>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <a href="pages/UI/general.html" className="nav-link">
                          <p>
                            Add Developer <AddIcon className="right" />
                          </p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="pages/UI/icons.html" className="nav-link">
                          <p>
                            View Developers <VisibilityIcon className="right" />
                          </p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="pages/UI/icons.html" className="nav-link">
                          <p>
                            Remove Developer <BlockIcon className="right" />
                          </p>
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <a href="/" className="nav-link">
                      <LocalOfferIcon className="" />
                      <p>
                        Bank Offers
                        <i className="fas fa-angle-left right" />
                      </p>
                    </a>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <a href="/new-bank-offer" className="nav-link">
                          <p>
                            Add Offer <AddIcon className="right" />
                          </p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="/view-bank-offers" className="nav-link">
                          <p>
                            View All Offers <VisibilityIcon className="right" />
                          </p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="/view-bank-offers" className="nav-link">
                          <p>
                            Update Bank Offers{" "}
                            <VisibilityIcon className="right" />
                          </p>
                        </a>
                      </li>
                    </ul>
                  </li>
                  {/* <li className="nav-item">
                    <a href="/" className="nav-link">
                      <AdUnitsIcon className="" />
                      <p>
                        Banners
                        <i className="fas fa-angle-left right" />
                      </p>
                    </a>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <a href="pages/tables/simple.html" className="nav-link">
                          <p>
                            Add Banner <AddIcon className="right" />
                          </p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="pages/tables/data.html" className="nav-link">
                          <p>
                            View All Banners{" "}
                            <VisibilityIcon className="right" />
                          </p>
                        </a>
                      </li>
                    </ul>
                  </li> */}
                  <li className="nav-item">
                    <a href="/" className="nav-link">
                      <SettingsIcon className="" />
                      <p>
                        Settings
                        <i className="fas fa-angle-left right" />
                      </p>
                    </a>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <a href="pages/tables/simple.html" className="nav-link">
                          <p>
                            Integrate Social Media{" "}
                            <FacebookIcon className="right" />
                          </p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="pages/tables/simple.html" className="nav-link">
                          <p>
                            Remove Social Media{" "}
                            <FacebookIcon className="right" />
                          </p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="pages/tables/data.html" className="nav-link">
                          <p>
                            Main Settings <SettingsIcon className="right" />
                          </p>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="/" className="nav-link">
                      <ContactPageIcon className="" />{" "}
                      <p>
                        Website's Contact Info
                        <i className="fas fa-angle-left right" />
                      </p>
                    </a>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <a href="/add-offical-email" className="nav-link">
                          <p>
                            Add Email Address{" "}
                            <AttachEmailIcon className="right" />
                          </p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="/view-all-emails" className="nav-link">
                          <p>
                            View Email Addresses{" "}
                            <AttachEmailIcon className="right" />
                          </p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="/add-offical-phoneNo" className="nav-link">
                          <p>
                            Add Phone No. <PhoneIcon className="right" />
                          </p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="/view-all-phoneNo" className="nav-link">
                          <p>
                            View Phone No. <PhoneIcon className="right" />
                          </p>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="/" className="nav-link">
                      <BlockIcon className="" />{" "}
                      <p>
                        Blocked Users
                        <i className="fas fa-angle-left right" />
                      </p>
                    </a>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <a href="pages/tables/simple.html" className="nav-link">
                          <p>
                            Block A User <AddIcon className="right" />
                          </p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="pages/tables/data.html" className="nav-link">
                          <p>
                            Un-Block User{" "}
                            <RemoveCircleOutlineIcon className="right" />
                          </p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="pages/tables/data.html" className="nav-link">
                          <p>
                            View Blocked User{" "}
                            <VisibilityIcon className="right" />
                          </p>
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <a href="/" className="nav-link">
                      <FacebookIcon className="" />{" "}
                      <p>
                        Change Social Media
                        <i className="fas fa-angle-left right" />
                      </p>
                    </a>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <a href="pages/tables/simple.html" className="nav-link">
                          <p>
                            Change Facebook Id{" "}
                            <FacebookIcon className="right" />
                          </p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="pages/tables/data.html" className="nav-link">
                          <p>
                            Change Insta Id <InstagramIcon className="right" />
                          </p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="pages/tables/data.html" className="nav-link">
                          <p>
                            Change X (Twitter) Id <XIcon className="right" />
                          </p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="pages/tables/data.html" className="nav-link">
                          <p>
                            Change Reddit Id <RedditIcon className="right" />
                          </p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="pages/tables/data.html" className="nav-link">
                          <p>
                            Change LinkedIn Id{" "}
                            <LinkedInIcon className="right" />
                          </p>
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <a href="pages/widgets.html" className="nav-link">
                      <FeedbackIcon className="" /> <p>User Feedbacks</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/widgets.html" className="nav-link">
                      <WarningAmberIcon className="" />
                      <p>Error Reports</p>
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      href="https://adminlte.io/docs/3.1/"
                      className="nav-link"
                    >
                      <NoteAddIcon className="" /> <p>Documentation</p>
                    </a>
                  </li>
                </ul>
              </nav>
              {/* /.sidebar-menu */}
            </div>
            {/* /.sidebar */}
          </aside>

          <div className="content-wrapper">
            {/* Content Header (Page header) */}
            <div className="content-header">
              <div className="container-fluid">
                <div className="row mb-2">
                  <div className="col-sm-6">
                    <h1 className="m-0">Agent Dashboard</h1>
                  </div>
                  {/* /.col */}
                  <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                      <li className="breadcrumb-item">
                        <a href="/">Home</a>
                      </li>
                      <li className="breadcrumb-item active">Dashboard v1</li>
                    </ol>
                  </div>
                  {/* /.col */}
                </div>
                {/* /.row */}
              </div>
              {/* /.container-fluid */}
            </div>
            {/* /.content-header */}
            {/* Main content */}
            <section className="content">
              <div className="container-fluid">
                {/* Small boxes (Stat box) */}
                <div className="row">
                  <div className="col-lg-3 col-6">
                    {/* small box */}
                    <div className="small-box bg-info">
                      <div className="inner">
                        <h3>{TotalProperties}</h3>
                        <p>Total Properties Registered</p>
                      </div>
                      <div className="icon">
                        <i className="ion ion-bag" />
                      </div>
                      <a href="/" className="small-box-footer">
                        More info <i className="fas fa-arrow-circle-right" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-3 col-6">
                    {/* small box */}
                    <div className="small-box bg-warning">
                      <div className="inner">
                        <h3>{TotalUSers}</h3>
                        <p>Total Users Registered</p>
                      </div>
                      <div className="icon">
                        <i className="ion ion-person-add" />
                      </div>
                      <a href="/" className="small-box-footer">
                        More info <i className="fas fa-arrow-circle-right" />
                      </a>
                    </div>
                  </div>
                  {/* ./col */}
                  <div className="col-lg-3 col-6">
                    {/* small box */}
                    <div className="small-box bg-success">
                      <div className="inner">
                        <h3>5{/* <sup style={{ fontSize: 20 }}>%</sup> */}</h3>
                        <p>Total Sold Properties</p>
                      </div>
                      <div className="icon">
                        <i className="ion ion-stats-bars" />
                      </div>
                      <a href="/" className="small-box-footer">
                        More info <i className="fas fa-arrow-circle-right" />
                      </a>
                    </div>
                  </div>
                  {/* ./col */}

                  {/* ./col */}
                  <div className="col-lg-3 col-6">
                    {/* small box */}
                    <div className="small-box bg-danger">
                      <div className="inner">
                        <h3> 5</h3>
                        <p>Unique Visitors</p>
                      </div>
                      <div className="icon">
                        <i className="ion ion-pie-graph" />
                      </div>
                      <a href="/" className="small-box-footer">
                        More info <i className="fas fa-arrow-circle-right" />
                      </a>
                    </div>
                  </div>
                  {/* ./col */}
                </div>
                {/* /.row */}
                {/* Main row */}
                <div className="row">
                  {/* Left col */}
                  <section className="col-lg-7 connectedSortable">
                    {/* Custom tabs (Charts with tabs)*/}
                    <div className="card">
                      <div className="card-header">
                        <h3 className="card-title">
                          <i className="fas fa-chart-pie mr-1" />
                          Sales
                        </h3>
                        <div className="card-tools">
                          <ul className="nav nav-pills ml-auto">
                            <li className="nav-item">
                              <a
                                className="nav-link active"
                                href="#revenue-chart"
                                data-toggle="tab"
                              >
                                Area
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link"
                                href="#sales-chart"
                                data-toggle="tab"
                              >
                                Donut
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* /.card-header */}
                      <div className="card-body">
                        <div className="tab-content p-0">
                          {/* Morris chart - Sales */}
                          <div
                            className="chart tab-pane active"
                            id="revenue-chart"
                            style={{ position: "relative", height: 300 }}
                          >
                            <canvas
                              id="revenue-chart-canvas"
                              height={300}
                              style={{ height: 300 }}
                            />
                          </div>
                          <div
                            className="chart tab-pane"
                            id="sales-chart"
                            style={{ position: "relative", height: 300 }}
                          >
                            <canvas
                              id="sales-chart-canvas"
                              height={300}
                              style={{ height: 300 }}
                            />
                          </div>
                        </div>
                      </div>
                      {/* /.card-body */}
                    </div>
                    {/* /.card */}
                    {/* DIRECT CHAT */}
                    <div className="card direct-chat direct-chat-primary">
                      <div className="card-header">
                        <h3 className="card-title">Direct Chat</h3>
                        <div className="card-tools">
                          <span
                            title="3 New Messages"
                            className="badge badge-primary"
                          >
                            3
                          </span>
                          <button
                            type="button"
                            className="btn btn-tool"
                            data-card-widget="collapse"
                          >
                            <i className="fas fa-minus" />
                          </button>
                          <button
                            type="button"
                            className="btn btn-tool"
                            title="Contacts"
                            data-widget="chat-pane-toggle"
                          >
                            <i className="fas fa-comments" />
                          </button>
                          <button
                            type="button"
                            className="btn btn-tool"
                            data-card-widget="remove"
                          >
                            <i className="fas fa-times" />
                          </button>
                        </div>
                      </div>
                      {/* /.card-header */}
                      <div className="card-body">
                        {/* Conversations are loaded here */}
                        <div className="direct-chat-messages">
                          {/* Message. Default to the left */}
                          <div className="direct-chat-msg">
                            <div className="direct-chat-infos clearfix">
                              <span className="direct-chat-name float-left">
                                Alexander Pierce
                              </span>
                              <span className="direct-chat-timestamp float-right">
                                23 Jan 2:00 pm
                              </span>
                            </div>
                            {/* /.direct-chat-infos */}
                            <img
                              className="direct-chat-img"
                              src="dist/img/user1-128x128.jpg"
                              alt="message user images"
                            />
                            {/* /.direct-chat-img */}
                            <div className="direct-chat-text">
                              Is this template really for free? That's
                              unbelievable!
                            </div>
                            {/* /.direct-chat-text */}
                          </div>
                          {/* /.direct-chat-msg */}
                          {/* Message to the right */}
                          <div className="direct-chat-msg right">
                            <div className="direct-chat-infos clearfix">
                              <span className="direct-chat-name float-right">
                                Sarah Bullock
                              </span>
                              <span className="direct-chat-timestamp float-left">
                                23 Jan 2:05 pm
                              </span>
                            </div>
                            {/* /.direct-chat-infos */}
                            <img
                              className="direct-chat-img"
                              src="dist/img/user3-128x128.jpg"
                              alt="message user images"
                            />
                            {/* /.direct-chat-img */}
                            <div className="direct-chat-text">
                              You better believe it!
                            </div>
                            {/* /.direct-chat-text */}
                          </div>
                          {/* /.direct-chat-msg */}
                          {/* Message. Default to the left */}
                          <div className="direct-chat-msg">
                            <div className="direct-chat-infos clearfix">
                              <span className="direct-chat-name float-left">
                                Alexander Pierce
                              </span>
                              <span className="direct-chat-timestamp float-right">
                                23 Jan 5:37 pm
                              </span>
                            </div>
                            {/* /.direct-chat-infos */}
                            <img
                              className="direct-chat-img"
                              src="dist/img/user1-128x128.jpg"
                              alt="message user images"
                            />
                            {/* /.direct-chat-img */}
                            <div className="direct-chat-text">
                              Working with AdminLTE on a great new app! Wanna
                              join?
                            </div>
                            {/* /.direct-chat-text */}
                          </div>
                          {/* /.direct-chat-msg */}
                          {/* Message to the right */}
                          <div className="direct-chat-msg right">
                            <div className="direct-chat-infos clearfix">
                              <span className="direct-chat-name float-right">
                                Sarah Bullock
                              </span>
                              <span className="direct-chat-timestamp float-left">
                                23 Jan 6:10 pm
                              </span>
                            </div>
                            {/* /.direct-chat-infos */}
                            <img
                              className="direct-chat-img"
                              src="dist/img/user3-128x128.jpg"
                              alt="message user images"
                            />
                            {/* /.direct-chat-img */}
                            <div className="direct-chat-text">
                              I would love to.
                            </div>
                            {/* /.direct-chat-text */}
                          </div>
                          {/* /.direct-chat-msg */}
                        </div>
                        {/*/.direct-chat-messages*/}
                        {/* Contacts are loaded here */}
                        <div className="direct-chat-contacts">
                          <ul className="contacts-list">
                            <li>
                              <a href="/">
                                <img
                                  className="contacts-list-img"
                                  src="dist/img/user1-128x128.jpg"
                                  alt="User Avatar"
                                />
                                <div className="contacts-list-info">
                                  <span className="contacts-list-name">
                                    Count Dracula
                                    <small className="contacts-list-date float-right">
                                      2/28/2015
                                    </small>
                                  </span>
                                  <span className="contacts-list-msg">
                                    How have you been? I was...
                                  </span>
                                </div>
                                {/* /.contacts-list-info */}
                              </a>
                            </li>
                            {/* End Contact Item */}
                            <li>
                              <a href="/">
                                <img
                                  className="contacts-list-img"
                                  src="dist/img/user7-128x128.jpg"
                                  alt="User Avatar"
                                />
                                <div className="contacts-list-info">
                                  <span className="contacts-list-name">
                                    Sarah Doe
                                    <small className="contacts-list-date float-right">
                                      2/23/2015
                                    </small>
                                  </span>
                                  <span className="contacts-list-msg">
                                    I will be waiting for...
                                  </span>
                                </div>
                                {/* /.contacts-list-info */}
                              </a>
                            </li>
                            {/* End Contact Item */}
                            <li>
                              <a href="/">
                                <img
                                  className="contacts-list-img"
                                  src="dist/img/user3-128x128.jpg"
                                  alt="User Avatar"
                                />
                                <div className="contacts-list-info">
                                  <span className="contacts-list-name">
                                    Nadia Jolie
                                    <small className="contacts-list-date float-right">
                                      2/20/2015
                                    </small>
                                  </span>
                                  <span className="contacts-list-msg">
                                    I'll call you back at...
                                  </span>
                                </div>
                                {/* /.contacts-list-info */}
                              </a>
                            </li>
                            {/* End Contact Item */}
                            <li>
                              <a href="/">
                                <img
                                  className="contacts-list-img"
                                  src="dist/img/user5-128x128.jpg"
                                  alt="User Avatar"
                                />
                                <div className="contacts-list-info">
                                  <span className="contacts-list-name">
                                    Nora S. Vans
                                    <small className="contacts-list-date float-right">
                                      2/10/2015
                                    </small>
                                  </span>
                                  <span className="contacts-list-msg">
                                    Where is your new...
                                  </span>
                                </div>
                                {/* /.contacts-list-info */}
                              </a>
                            </li>
                            {/* End Contact Item */}
                            <li>
                              <a href="/">
                                <img
                                  className="contacts-list-img"
                                  src="dist/img/user6-128x128.jpg"
                                  alt="User Avatar"
                                />
                                <div className="contacts-list-info">
                                  <span className="contacts-list-name">
                                    John K.
                                    <small className="contacts-list-date float-right">
                                      1/27/2015
                                    </small>
                                  </span>
                                  <span className="contacts-list-msg">
                                    Can I take a look at...
                                  </span>
                                </div>
                                {/* /.contacts-list-info */}
                              </a>
                            </li>
                            {/* End Contact Item */}
                            <li>
                              <a href="/">
                                <img
                                  className="contacts-list-img"
                                  src="dist/img/user8-128x128.jpg"
                                  alt="User Avatar"
                                />
                                <div className="contacts-list-info">
                                  <span className="contacts-list-name">
                                    Kenneth M.
                                    <small className="contacts-list-date float-right">
                                      1/4/2015
                                    </small>
                                  </span>
                                  <span className="contacts-list-msg">
                                    Never mind I found...
                                  </span>
                                </div>
                                {/* /.contacts-list-info */}
                              </a>
                            </li>
                            {/* End Contact Item */}
                          </ul>
                          {/* /.contacts-list */}
                        </div>
                        {/* /.direct-chat-pane */}
                      </div>
                      {/* /.card-body */}
                      <div className="card-footer">
                        <form action="#" method="post">
                          <div className="input-group">
                            <input
                              type="text"
                              name="message"
                              placeholder="Type Message ..."
                              className="form-control"
                            />
                            <span className="input-group-append">
                              <button type="button" className="btn btn-primary">
                                Send
                              </button>
                            </span>
                          </div>
                        </form>
                      </div>
                      {/* /.card-footer*/}
                    </div>
                    {/*/.direct-chat */}
                    {/* TO DO List */}
                    <div className="card">
                      <div className="card-header">
                        <h3 className="card-title">
                          <i className="ion ion-clipboard mr-1" />
                          To Do List
                        </h3>
                        <div className="card-tools">
                          <ul className="pagination pagination-sm">
                            <li className="page-item">
                              <a href="/" className="page-link">
                                «
                              </a>
                            </li>
                            <li className="page-item">
                              <a href="/" className="page-link">
                                1
                              </a>
                            </li>
                            <li className="page-item">
                              <a href="/" className="page-link">
                                2
                              </a>
                            </li>
                            <li className="page-item">
                              <a href="/" className="page-link">
                                3
                              </a>
                            </li>
                            <li className="page-item">
                              <a href="/" className="page-link">
                                »
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* /.card-header */}
                      <div className="card-body">
                        <ul className="todo-list" data-widget="todo-list">
                          <li>
                            {/* drag handle */}
                            <span className="handle">
                              <i className="fas fa-ellipsis-v" />
                              <i className="fas fa-ellipsis-v" />
                            </span>
                            {/* checkbox */}
                            <div className="icheck-primary d-inline ml-2">
                              <input
                                type="checkbox"
                                defaultValue
                                name="todo1"
                                id="todoCheck1"
                              />
                              <label htmlFor="todoCheck1" />
                            </div>
                            {/* todo text */}
                            <span className="text">Design a nice theme</span>
                            {/* Emphasis label */}
                            <small className="badge badge-danger">
                              <i className="far fa-clock" /> 2 mins
                            </small>
                            {/* General tools such as edit or delete*/}
                            <div className="tools">
                              <i className="fas fa-edit" />
                              <i className="fas fa-trash-o" />
                            </div>
                          </li>
                          <li>
                            <span className="handle">
                              <i className="fas fa-ellipsis-v" />
                              <i className="fas fa-ellipsis-v" />
                            </span>
                            <div className="icheck-primary d-inline ml-2">
                              <input
                                type="checkbox"
                                defaultValue
                                name="todo2"
                                id="todoCheck2"
                                defaultChecked
                              />
                              <label htmlFor="todoCheck2" />
                            </div>
                            <span className="text">
                              Make the theme responsive
                            </span>
                            <small className="badge badge-info">
                              <i className="far fa-clock" /> 4 hours
                            </small>
                            <div className="tools">
                              <i className="fas fa-edit" />
                              <i className="fas fa-trash-o" />
                            </div>
                          </li>
                          <li>
                            <span className="handle">
                              <i className="fas fa-ellipsis-v" />
                              <i className="fas fa-ellipsis-v" />
                            </span>
                            <div className="icheck-primary d-inline ml-2">
                              <input
                                type="checkbox"
                                defaultValue
                                name="todo3"
                                id="todoCheck3"
                              />
                              <label htmlFor="todoCheck3" />
                            </div>
                            <span className="text">
                              Let theme shine like a star
                            </span>
                            <small className="badge badge-warning">
                              <i className="far fa-clock" /> 1 day
                            </small>
                            <div className="tools">
                              <i className="fas fa-edit" />
                              <i className="fas fa-trash-o" />
                            </div>
                          </li>
                          <li>
                            <span className="handle">
                              <i className="fas fa-ellipsis-v" />
                              <i className="fas fa-ellipsis-v" />
                            </span>
                            <div className="icheck-primary d-inline ml-2">
                              <input
                                type="checkbox"
                                defaultValue
                                name="todo4"
                                id="todoCheck4"
                              />
                              <label htmlFor="todoCheck4" />
                            </div>
                            <span className="text">
                              Let theme shine like a star
                            </span>
                            <small className="badge badge-success">
                              <i className="far fa-clock" /> 3 days
                            </small>
                            <div className="tools">
                              <i className="fas fa-edit" />
                              <i className="fas fa-trash-o" />
                            </div>
                          </li>
                          <li>
                            <span className="handle">
                              <i className="fas fa-ellipsis-v" />
                              <i className="fas fa-ellipsis-v" />
                            </span>
                            <div className="icheck-primary d-inline ml-2">
                              <input
                                type="checkbox"
                                defaultValue
                                name="todo5"
                                id="todoCheck5"
                              />
                              <label htmlFor="todoCheck5" />
                            </div>
                            <span className="text">
                              Check your messages and notifications
                            </span>
                            <small className="badge badge-primary">
                              <i className="far fa-clock" /> 1 week
                            </small>
                            <div className="tools">
                              <i className="fas fa-edit" />
                              <i className="fas fa-trash-o" />
                            </div>
                          </li>
                          <li>
                            <span className="handle">
                              <i className="fas fa-ellipsis-v" />
                              <i className="fas fa-ellipsis-v" />
                            </span>
                            <div className="icheck-primary d-inline ml-2">
                              <input
                                type="checkbox"
                                defaultValue
                                name="todo6"
                                id="todoCheck6"
                              />
                              <label htmlFor="todoCheck6" />
                            </div>
                            <span className="text">
                              Let theme shine like a star
                            </span>
                            <small className="badge badge-secondary">
                              <i className="far fa-clock" /> 1 month
                            </small>
                            <div className="tools">
                              <i className="fas fa-edit" />
                              <i className="fas fa-trash-o" />
                            </div>
                          </li>
                        </ul>
                      </div>
                      {/* /.card-body */}
                      <div className="card-footer clearfix">
                        <button
                          type="button"
                          className="btn btn-primary float-right"
                        >
                          <i className="fas fa-plus" /> Add item
                        </button>
                      </div>
                    </div>
                    {/* /.card */}
                  </section>
                  {/* /.Left col */}
                  {/* right col (We are only adding the ID to make the widgets sortable)*/}
                  <section className="col-lg-5 connectedSortable">
                    {/* Map card */}
                    <div className="card bg-gradient-primary">
                      <div className="card-header border-0">
                        <h3 className="card-title">
                          <i className="fas fa-map-marker-alt mr-1" />
                          Visitors
                        </h3>
                        {/* card tools */}
                        <div className="card-tools">
                          <button
                            type="button"
                            className="btn btn-primary btn-sm daterange"
                            title="Date range"
                          >
                            <i className="far fa-calendar-alt" />
                          </button>
                          <button
                            type="button"
                            className="btn btn-primary btn-sm"
                            data-card-widget="collapse"
                            title="Collapse"
                          >
                            <i className="fas fa-minus" />
                          </button>
                        </div>
                        {/* /.card-tools */}
                      </div>
                      <div className="card-body">
                        <div
                          id="world-map"
                          style={{ height: 250, width: "100%" }}
                        />
                      </div>
                      {/* /.card-body*/}
                      <div className="card-footer bg-transparent">
                        <div className="row">
                          <div className="col-4 text-center">
                            <div id="sparkline-1" />
                            <div className="text-white">Visitors</div>
                          </div>
                          {/* ./col */}
                          <div className="col-4 text-center">
                            <div id="sparkline-2" />
                            <div className="text-white">Online</div>
                          </div>
                          {/* ./col */}
                          <div className="col-4 text-center">
                            <div id="sparkline-3" />
                            <div className="text-white">Sales</div>
                          </div>
                          {/* ./col */}
                        </div>
                        {/* /.row */}
                      </div>
                    </div>
                    {/* /.card */}
                    {/* solid sales graph */}
                    <div className="card bg-gradient-info">
                      <div className="card-header border-0">
                        <h3 className="card-title">
                          <i className="fas fa-th mr-1" />
                          Sales Graph
                        </h3>
                        <div className="card-tools">
                          <button
                            type="button"
                            className="btn bg-info btn-sm"
                            data-card-widget="collapse"
                          >
                            <i className="fas fa-minus" />
                          </button>
                          <button
                            type="button"
                            className="btn bg-info btn-sm"
                            data-card-widget="remove"
                          >
                            <i className="fas fa-times" />
                          </button>
                        </div>
                      </div>
                      <div className="card-body">
                        <canvas
                          className="chart"
                          id="line-chart"
                          style={{
                            minHeight: 250,
                            height: 250,
                            maxHeight: 250,
                            maxWidth: "100%",
                          }}
                        />
                      </div>
                      {/* /.card-body */}
                      <div className="card-footer bg-transparent">
                        <div className="row">
                          <div className="col-4 text-center">
                            <input
                              type="text"
                              className="knob"
                              data-readonly="true"
                              defaultValue={20}
                              data-width={60}
                              data-height={60}
                              data-fgcolor="#39CCCC"
                            />
                            <div className="text-white">Mail-Orders</div>
                          </div>
                          {/* ./col */}
                          <div className="col-4 text-center">
                            <input
                              type="text"
                              className="knob"
                              data-readonly="true"
                              defaultValue={50}
                              data-width={60}
                              data-height={60}
                              data-fgcolor="#39CCCC"
                            />
                            <div className="text-white">Online</div>
                          </div>
                          {/* ./col */}
                          <div className="col-4 text-center">
                            <input
                              type="text"
                              className="knob"
                              data-readonly="true"
                              defaultValue={30}
                              data-width={60}
                              data-height={60}
                              data-fgcolor="#39CCCC"
                            />
                            <div className="text-white">In-Store</div>
                          </div>
                          {/* ./col */}
                        </div>
                        {/* /.row */}
                      </div>
                      {/* /.card-footer */}
                    </div>
                    {/* /.card */}
                    {/* Calendar */}
                    <div className="card bg-gradient-success">
                      <div className="card-header border-0">
                        <h3 className="card-title">
                          <i className="far fa-calendar-alt" />
                          Calendar
                        </h3>
                        {/* tools card */}
                        <div className="card-tools">
                          {/* button with a dropdown */}
                          <div className="btn-group">
                            <button
                              type="button"
                              className="btn btn-success btn-sm dropdown-toggle"
                              data-toggle="dropdown"
                              data-offset={-52}
                            >
                              <i className="fas fa-bars" />
                            </button>
                            <div className="dropdown-menu" role="menu">
                              <a href="/" className="dropdown-item">
                                Add new event
                              </a>
                              <a href="/" className="dropdown-item">
                                Clear events
                              </a>
                              <div className="dropdown-divider" />
                              <a href="/" className="dropdown-item">
                                View calendar
                              </a>
                            </div>
                          </div>
                          <button
                            type="button"
                            className="btn btn-success btn-sm"
                            data-card-widget="collapse"
                          >
                            <i className="fas fa-minus" />
                          </button>
                          <button
                            type="button"
                            className="btn btn-success btn-sm"
                            data-card-widget="remove"
                          >
                            <i className="fas fa-times" />
                          </button>
                        </div>
                        {/* /. tools */}
                      </div>
                      {/* /.card-header */}
                      <div className="card-body pt-0">
                        {/*The calendar */}
                        <div id="calendar" style={{ width: "100%" }} />
                      </div>
                      {/* /.card-body */}
                    </div>
                    {/* /.card */}
                  </section>
                  {/* right col */}
                </div>
                {/* /.row (main row) */}
              </div>
              {/* /.container-fluid */}
            </section>
            {/* /.content */}
          </div>

          <footer class="main-footer">
            <div class="float-right d-none d-sm-inline-block">
              <b>Version</b> 3.2.0
            </div>
            <aside class="control-sidebar control-sidebar-dark"></aside>
          </footer>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;

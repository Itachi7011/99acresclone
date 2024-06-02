import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import AddIcon from "@mui/icons-material/Add";
import VisibilityIcon from "@mui/icons-material/Visibility";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import DateRangeIcon from "@mui/icons-material/DateRange";
import ArticleIcon from '@mui/icons-material/Article';
import CodeIcon from "@mui/icons-material/Code";
import NewspaperIcon from '@mui/icons-material/Newspaper';
import FestivalIcon from '@mui/icons-material/Festival';
import AdUnitsIcon from "@mui/icons-material/AdUnits";
import SettingsIcon from "@mui/icons-material/Settings";
import BlockIcon from "@mui/icons-material/Block";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import FeedbackIcon from "@mui/icons-material/Feedback";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/Facebook";
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import ApartmentIcon from '@mui/icons-material/Apartment';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import GroupIcon from "@mui/icons-material/Group";
import RedditIcon from "@mui/icons-material/Reddit";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const AdminSidebar = () => {
  const [user, setUser] = useState("");
  const [isDropdownExpanded, setIsDropdownExpanded] = useState(false);

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

  useEffect(() => {
    UserDetails();
  }, []);
  const $ = window.$;
  function loadTree() {
    const trees = $('[data-widget="treeview"]');
      trees.Treeview({

    toggleNodeOnClick: true, // Enable collapsing nodes on click

  });
  trees.Treeview("init");

    // trees.on("nodeClick", function (event) {
    //   const node = event.node;

    //   // Collapse the node when clicked (if it's expanded)

    //   if (node.state.expanded) {
    //     node.collapseNode();
    //   } else {
    //     // Expand the node when clicked (if it's collapsed)

    //     node.expandNode();
    //   }
    // });





  }
  loadTree();

  if (user.userType !== "admin") {
    return <></>;
  }
  // else if(user.userType === "admin"){

  // }
  return (
    <>
      {/* <RenderMenu /> */}
      <div
        class="hold-transition sidebar-mini layout-fixed"
        style={{ marginTop: "0rem", 
        // zIndex: "20" 
      }}
      >
        <aside
          className="main-sidebar sidebar-dark-primary elevation-4"
          style={{ position: "fixed" }}
        >
          {/* Brand Logo */}
          <a href="index3.html" className="brand-link">
            <img
              src="dist/img/AdminLTELogo.png"
              alt="AdminLTE Logo"
              className="brand-image img-circle elevation-3"
              style={{ opacity: "1" }}
            />
            <span className="brand-text font-weight-light">
              Admin Dashboard
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
                  <a href="#" className="nav-link">
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
                  <a href="#" className="nav-link">
                    <GroupIcon />{" "}
                    <p>
                      Users
                      <i className="fas fa-angle-left right" />
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <a href="https://mail.google.com" className="nav-link">
                        <p>Sellers</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="https://mail.google.com" className="nav-link">
                        <p>Buyers</p>
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <a href="#" className="nav-link">
                  <OtherHousesIcon />
                    <p>
                      Properties
                      <i className="fas fa-angle-left right" />
                      {/* <span className="badge badge-info right">6</span> */}
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <a
                        href="/post-new-property"
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
                        href="/show-admin-properties"
                        className="nav-link"
                      >
                        <p>
                          Show All Properties{" "}
                          <VisibilityIcon className="right" />
                        </p>
                      </a>
                    </li>
                    {/* <li className="nav-item">
                        <a
                          href="/commercial-property-list-by-carpetarea"
                          className="nav-link"
                        >
                          <p>
                            All Residential Prop.{" "}
                            <VisibilityIcon className="right" />
                          </p>
                        </a>
                      </li> */}

                    {/* <li className="nav-item">
                        <a
                          href="pages/layout/fixed-sidebar-custom.html"
                          className="nav-link"
                        >
                          <p>Recently Sold Properties</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="pages/layout/fixed-topnav.html"
                          className="nav-link"
                        >
                          <p>Stagnant Properties</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="pages/layout/fixed-footer.html"
                          className="nav-link"
                        >
                          <p>Reported Properties</p>
                        </a>
                      </li> */}
                  </ul>
                </li>

                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <LocationCityIcon className="" />
                    <p>
                      Localities
                      <i className="fas fa-angle-left right" />
                      {/* <span className="badge badge-info right">6</span> */}
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <a href="/add-city" className="nav-link">
                        <p>
                          {" "}
                          Add City <AddIcon className="right" />
                        </p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/add-location" className="nav-link">
                        <p>
                          {" "}
                          Add Location <AddIcon className="right" />
                        </p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/add-sub-location" className="nav-link">
                        <p>
                          {" "}
                          Add Sub-Location <AddIcon className="right" />
                        </p>
                      </a>
                    </li>
                    {/* <li className="nav-item">
                      <a href="pages/layout/boxed.html" className="nav-link">
                        <p>
                          {" "}
                          View All Cities <VisibilityIcon className="right" />
                        </p>
                      </a>
                    </li> */}
                    <li className="nav-item">
                      <a
                        href="/show-sublocalities"
                        className="nav-link"
                      >
                        <p>
                          View All Locations{" "}
                          <VisibilityIcon className="right" />
                        </p>
                      </a>
                    </li>

                    {/* <li className="nav-item">
                      <a
                        href="/show-sublocalities"
                        className="nav-link"
                      >
                        <p>
                          View All Sublocs <VisibilityIcon className="right" />
                        </p>
                      </a>
                    </li> */}
                    
                  </ul>
                </li>
                {/* <li className="nav-item">
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
                  </li> */}
                
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <CodeIcon className="" />
                    <p>
                      Developers
                      <i className="fas fa-angle-left right" />
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <a href="/add-developer" className="nav-link">
                        <p>
                          Add Developer <AddIcon className="right" />
                        </p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/view-developer-list" className="nav-link">
                        <p>
                          View Developers <VisibilityIcon className="right" />
                        </p>
                      </a>
                    </li>
                    
                  </ul>
                </li>

                <li className="nav-item">
                  <a href="#" className="nav-link">
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
                    
                  </ul>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">
                      <AdUnitsIcon className="" />
                      <p>
                        Banners
                        <i className="fas fa-angle-left right" />
                      </p>
                    </a>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <a href="/new-banner" className="nav-link">
                          <p>
                            Add Banner <AddIcon className="right" />
                          </p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="/view-banner-list" className="nav-link">
                          <p>
                            View All Banners{" "}
                            <VisibilityIcon className="right" />
                          </p>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <ArticleIcon className="" />
                      <p>
                        Articles
                        <i className="fas fa-angle-left right" />
                      </p>
                    </a>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <a href="/new-article" className="nav-link">
                          <p>
                            Add Article <AddIcon className="right" />
                          </p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="/view-article-list" className="nav-link">
                          <p>
                            View All Articles{" "}
                            <VisibilityIcon className="right" />
                          </p>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <NewspaperIcon className="" />
                      <p>
                        News
                        <i className="fas fa-angle-left right" />
                      </p>
                    </a>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <a href="/new-news" className="nav-link">
                          <p>
                            Add News <AddIcon className="right" />
                          </p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="/view-news-list" className="nav-link">
                          <p>
                            View All News{" "}
                            <VisibilityIcon className="right" />
                          </p>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <FestivalIcon className="" />
                      <p>
                        Events
                        <i className="fas fa-angle-left right" />
                      </p>
                    </a>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <a href="/new-event" className="nav-link">
                          <p>
                            Add Events <AddIcon className="right" />
                          </p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="/view-event-list" className="nav-link">
                          <p>
                            View All Events{" "}
                            <VisibilityIcon className="right" />
                          </p>
                        </a>
                      </li>
                    </ul>
                  </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <SettingsIcon className="" />
                    <p>
                      Settings
                      <i className="fas fa-angle-left right" />
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                  
                    
                    <li className="nav-item">
                      <a href="/main-settings" className="nav-link">
                        <p>
                          Main Settings <SettingsIcon className="right" />
                        </p>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <ContactPageIcon className="" />{" "}
                    <p>
                      Website's Contact Info
                      <i className="fas fa-angle-left right" />
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <a href="/change-official-email" className="nav-link">
                        <p>
                          Change Email Address{" "}
                          <AttachEmailIcon className="right" />
                        </p>
                      </a>
                    </li>
                   
                    <li className="nav-item">
                      <a href="/change-official-phoneNo" className="nav-link">
                        <p>
                          Change Phone No. <PhoneIcon className="right" />
                        </p>
                      </a>
                    </li>
                    
                  </ul>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <FacebookIcon className="" />{" "}
                    <p>
                      Change Social Media
                      <i className="fas fa-angle-left right" />
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <a href="/change-facebookID" className="nav-link">
                        <p>
                          Change Facebook Id <FacebookIcon className="right" />
                        </p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/change-instaID" className="nav-link">
                        <p>
                          Change Insta Id <InstagramIcon className="right" />
                        </p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/change-twitterID" className="nav-link">
                        <p>
                          Change X (Twitter) Id <XIcon className="right" />
                        </p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/change-redditID" className="nav-link">
                        <p>
                          Change Reddit Id <RedditIcon className="right" />
                        </p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/change-likedInID" className="nav-link">
                        <p>
                          Change LinkedIn Id <LinkedInIcon className="right" />
                        </p>
                      </a>
                    </li>
                  </ul>
                </li>
                {/* <li className="nav-item">
                  <a href="#" className="nav-link">
                    <BlockIcon className="" />{" "}
                    <p>
                      Block Users
                      <i className="fas fa-angle-left right" />
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <a href="pages/tables/simple.html" className="nav-link">
                        <p>
                          Block User <AddIcon className="right" />
                        </p>
                      </a>
                    </li>
                    
                    <li className="nav-item">
                      <a href="pages/tables/data.html" className="nav-link">
                        <p>
                          View Blocked User <VisibilityIcon className="right" />
                        </p>
                      </a>
                    </li>
                  </ul>
                </li> */}

<li className="nav-item">
                  <a href="#" className="nav-link">
                    <FacebookIcon className="" />{" "}
                    <p>
                      Enquiries
                      <i className="fas fa-angle-left right" />
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <a href="/change-facebookID" className="nav-link">
                        <p>
                          Property Enquiry <OtherHousesIcon className="right" />
                        </p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/change-instaID" className="nav-link">
                        <p>
                        Project Enquiry <ApartmentIcon  className="right" />
                        </p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/change-twitterID" className="nav-link">
                        <p>
                       Home Loan Enquiry <AccountBalanceIcon className="right" />
                        </p>
                      </a>
                    </li>
                    
                  </ul>
                </li>

                <li className="nav-item">
                  <a href="pages/widgets.html" className="nav-link">
                    <FeedbackIcon className="" /> <p>Reviews</p>
                  </a>
                </li>



              </ul>
            </nav>
            {/* /.sidebar-menu */}
          </div>
          {/* /.sidebar */}
        </aside>
        <div class="wrapper"></div>
      </div>
    </>
  );
};

export default AdminSidebar;

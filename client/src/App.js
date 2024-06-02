import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
// import "./Navbar1.scss";
/* The following line can be included in a src/App.scss */
// import 'react-quill/dist/quill.snow.css';
import "react-tabs/style/react-tabs.css";
import 'react-toastify/dist/ReactToastify.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { createContext, useReducer } from "react";
import { reducer, initialState } from "./reducers/UseReducer";

import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Register from "./Components/NewUser/Register";
import EmailVerification from "./Components/NewUser/EmailVerification";
import PostNewProperty from "./Components/Property/PostNewProperty";
import AdminDashboard from "./Components/Admin/AdminDashboard";
import AdminLogin from "./Components/Admin/AdminLogin";

import PreviousPostCommercialProperty from "./Components/Property/PreviousPostCommercialProperty";

// Admin

import AdminCommercialPropertiesListByPrice from "./Components/Admin/AdminPropertiesList/AdminCommercialPropertiesListByPrice";
import AdminSidebar from "./Components/Admin/AdminSidebar";
import AdminResidentialPropertiesListByPrice from "./Components/Admin/AdminPropertiesList/AdminResidentialPropertiesListByPrice";
import AdminCommercialPropertyProfile from "./Components/Admin/AdminPropertiesList/Profile/CommercialPropertyProfile";
import EditCommercialPropertyProfile from "./Components/Admin/AdminPropertiesList/Profile/EditProfile/EditCommercialPropertyProfile";
import AddToLuxuryProperty from "./Components/Admin/LuxuryProperty/AddToLuxuryProperty";
import PropertyList from "./Components/PropertiesList/PropertyList";
import PropertyProfile from "./Components/PropertiesList/PropertyProfile/PropertyProfile";

// Show Data To Admin

import SublocalitiesList from "./Components/Admin/AdminShowData/AllLocalitiesList";
import AllPropertiesList from "./Components/Admin/AdminShowData/AllPropertiesList";
import EditSublocation from "./Components/Admin/AdminShowData/EditSublocation";

// Developers Pages

import AddDeveloper from "./Components/Admin/Developer/AddDeveloper";
import ViewAllDeveloper from "./Components/Admin/Developer/ViewAllDeveloper";

// Settings Pages

import MainSettings from "./Components/Admin/Settings/MainSettings";
import OfficialEmail from "./Components/Admin/Settings/SiteContactInfo/OfficialEmail";
import OfficialPhoneNo from "./Components/Admin/Settings/SiteContactInfo/OfficialPhoneNo";

// Banners

import Banner from "./Components/Admin/Banner/Banner";
import ViewAllBanners from "./Components/Admin/Banner/ViewAllBanners";

// Articles

import Article from "./Components/Admin/Article/Article";
import ViewAllArticles from "./Components/Admin/Article/ViewAllArticles";

// News

import News from "./Components/Admin/News/News";
import ViewAllNews from "./Components/Admin/News/ViewAllNews";

// Events

import Event from "./Components/Admin/Events/Event";
import ViewAllEvents from "./Components/Admin/Events/ViewAllEvents";

// Social Media

import ChangeFacebook from "./Components/Admin/SocialMediaInfo/ChangeFacebook";
import ChangeInsta from "./Components/Admin/SocialMediaInfo/ChangeInsta";
import ChangeLinkedIn from "./Components/Admin/SocialMediaInfo/ChangeLinkedIn";
import ChangeReddit from "./Components/Admin/SocialMediaInfo/ChangeReddit";
import ChangeTwitter from "./Components/Admin/SocialMediaInfo/ChangeTwitter";

// Projects

import AddNewproject from "./Components/Projects/AddNewproject";

// Localities

import AddCity from "./Components/Admin/Localities/AddCity";
import AddSubLocalities from "./Components/Admin/Localities/AddSubLocalities";
import AddLocation from "./Components/Admin/Localities/AddLocation";

// Agent
import AgentDashboard from "./Components/Agent/AgentDashboard";
import AddServices from "./Components/Agent/Services/AddServices";
import AddBlogs from "./Components/Agent/Blogs/AddBlogs";

// BankOffers
import AddBankOffer from "./Components/Admin/BankOffer/AddBankOffer";
import ViewAllBankOffers from "./Components/Admin/BankOffer/ViewAllBankOffers";
import UpdateBankOffer from "./Components/Admin/BankOffer/UpdateBankOffer";

// Offical Emails And Phone Numbers
import AddOfficialEmail from "./Components/Admin/ContactInfo/AddOfficialEmail";
import AddOfficialPhoneNo from "./Components/Admin/ContactInfo/AddOfficialPhoneNo";
import ViewAllEmails from "./Components/Admin/ContactInfo/ViewAllEmails";
import ViewAllPhoneNo from "./Components/Admin/ContactInfo/ViewAllPhoneNo";

// Miscelenious
import SuccessMessage from "./Components/SuccessMessage";
import FailureMessage from "./Components/FailureMessage";
import ReportError from "./Components/ReportError";
import Feedback from "./Components/Feedback";

//Temp
import Signup from "./Components/NewUser//Signup/Signup";
import Signup1 from "./Components/NewUser/SignUp1/Signup";
import Confirmation1 from "./Components/NewUser/SignUp1/Confirmation";
import PersonalDetails1 from "./Components/NewUser/SignUp1/PersonalDetails";
import Success1 from "./Components/NewUser/SignUp1/Success";
import UserDetails1 from "./Components/NewUser/SignUp1/UserDetails";

import Login from "./Components/Login";
import Logout from "./Components/Logout";
import Error from "./Components/Error";

export const UserContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
        <BrowserRouter>
          <Navbar />
          <AdminSidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
            <Route path="/new-user-Register" element={<Register />} />
            <Route path="/email-verification" element={<EmailVerification />} />
            <Route path="/post-new-property" element={<PostNewProperty />} />
            <Route
              path="/add-to-luxury-property"
              element={<AddToLuxuryProperty />}
            />

            {/* Show Data To Admin Routes */}
            <Route path="/show-sublocalities" element={<SublocalitiesList />} />
            <Route
              path="/show-admin-properties"
              element={<AllPropertiesList />}
            />
            <Route path="/edit-sublocation" element={<EditSublocation />} />

            {/* Developers Pages */}
            <Route path="/add-developer" element={<AddDeveloper />} />
            <Route path="/view-developer-list" element={<ViewAllDeveloper />} />

            <Route
              path="/temp-property-list-options"
              element={<PreviousPostCommercialProperty />}
            />
            <Route path="/property-list" element={<PropertyList />} />
            <Route path="/property-profile" element={<PropertyProfile />} />

            {/* Projects */}

            <Route path="/add-new-project" element={<AddNewproject />} />

            {/* Temp */}
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Signup1" element={<Signup1 />} />
            <Route path="/Confirmation1" element={<Confirmation1 />} />
            <Route path="/PersonalDetails1" element={<PersonalDetails1 />} />
            <Route path="/Success1" element={<Success1 />} />
            <Route path="/UserDetails1" element={<UserDetails1 />} />

            {/* Admin's Components */}
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route
              path="/admin-commercial-property-list-by-price"
              element={<AdminCommercialPropertiesListByPrice />}
            />
            <Route
              path="/admin-commercial-property-price"
              element={<AdminResidentialPropertiesListByPrice />}
            />
            <Route
              path="/admin-commercial-property-profile"
              element={<AdminCommercialPropertyProfile />}
            />
            <Route
              path="/edit-commercial-property-profile"
              element={<EditCommercialPropertyProfile />}
            />

            {/* Settins Pages */}

            <Route path="/main-settings" element={<MainSettings />} />
            <Route path="/change-official-email" element={<OfficialEmail />} />
            <Route
              path="/change-official-phoneNo"
              element={<OfficialPhoneNo />}
            />

            {/* Banners */}

            <Route path="/new-banner" element={<Banner />} />
            <Route path="/view-banner-list" element={<ViewAllBanners />} />

            {/* Articles */}

            <Route path="/new-article" element={<Article />} />
            <Route path="/view-article-list" element={<ViewAllArticles />} />

            {/* News */}

            <Route path="/new-news" element={<News />} />
            <Route path="/view-news-list" element={<ViewAllNews />} />

            {/* Events */}

            <Route path="/new-event" element={<Event />} />
            <Route path="/view-event-list" element={<ViewAllEvents />} />



            {/* Social Media */}

            <Route path="/change-facebookID" element={<ChangeFacebook />} />
            <Route path="/change-instaID" element={<ChangeInsta />} />
            <Route path="/change-likedInID" element={<ChangeLinkedIn />} />
            <Route path="/change-redditID" element={<ChangeReddit />} />
            <Route path="/change-twitterID" element={<ChangeTwitter />} />

            {/* Localities */}

            <Route path="/add-city" element={<AddCity />} />
            <Route path="/add-sub-location" element={<AddSubLocalities />} />
            <Route path="/add-location" element={<AddLocation />} />

            {/* Agent Components */}

            <Route path="/agent-dashboard" element={<AgentDashboard />} />
            <Route path="/add-services" element={<AddServices />} />
            <Route path="/add-blogs" element={<AddBlogs />} />

            {/* Miscelenious */}
            <Route path="/success-message" element={<SuccessMessage />} />
            <Route path="/failure-message" element={<FailureMessage />} />
            <Route path="/new-bank-offer" element={<AddBankOffer />} />
            <Route path="/view-bank-offers" element={<ViewAllBankOffers />} />
            <Route path="/update-bank-offer" element={<UpdateBankOffer />} />
            <Route path="/add-offical-email" element={<AddOfficialEmail />} />
            <Route
              path="/add-offical-phoneNo"
              element={<AddOfficialPhoneNo />}
            />
            <Route path="/view-all-emails" element={<ViewAllEmails />} />
            <Route path="/view-all-phoneNo" element={<ViewAllPhoneNo />} />
            <Route path="/report-error" element={<ReportError />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/Logout" element={<Logout />} />
            <Route path="/Login" element={<Login />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}

export default App;

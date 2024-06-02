// import { NavLink } from "react-router-dom";
// import { useEffect } from "react";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { UserContext } from "../App";
// import { useContext } from "react";

// import logo from "./Images/logo.png";
// import MenuIcon from "@mui/icons-material/Menu";
// import GpsFixedIcon from "@mui/icons-material/GpsFixed";
// import MicIcon from "@mui/icons-material/Mic";
// import SearchIcon from "@mui/icons-material/Search";
// import { IconButton } from "@mui/material";
// import LogoutIcon from "@mui/icons-material/Logout";
// import LoginIcon from "@mui/icons-material/Login";
// import ErrorIcon from "@mui/icons-material/Error";
// import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

// const Navbar1 = () => {
//   const { state, dispatch } = useContext(UserContext);
//   const [user, setUser] = useState("");
//   const Navigate = useNavigate();

//   const UserDetails = async () => {
//     try {
//       const res = await fetch("/userProfile", {
//         method: "GET",
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json",
//         },
//         credentials: "include",
//       });

//       const data = await res.json();

//       setUser(data);

//       if (!res === 200) {
//         throw new Error(`Error during retreive data - ${Error}`);
//       }

//       if (!res === 200) {
//         throw new Error(`Error during retreive data - ${Error}`);
//       }
//     } catch (err) {
//       console.log(`Error during catch of User's Data -  ${err}`);
//     }
//   };

//   useEffect(() => {
//     UserDetails();
//   }, []);

//   const SellerNavbar = () => {
//     return (
//       <>
//         <navLink className="menu">
//           <ol>
//             <li className="menu-item" id="mainLogo">
//               <NavLink to="/">
//                 {" "}
//                 <img src={logo} alt="logo" id="span_profile_icon1" />
//               </NavLink>
//             </li>

//             <li className="menu-item">
//               <NavLink>Search Property</NavLink>
//               <ol className="sub-menu">
//                 <li className="menu-item">
//                   <NavLink to="/commercial-property-list-by-price">
//                     Commercial
//                   </NavLink>
//                 </li>
//                 <li className="menu-item">
//                   <NavLink to="/residential-property-list-by-price">
//                     Residential
//                   </NavLink>
//                 </li>
//               </ol>
//             </li>

//             <li className="menu-item">
//               <NavLink to="/">Sell Property</NavLink>
//               <ol className="sub-menu">
//                 <li className="menu-item">
//                   <NavLink to="post-new-commercial-property">
//                     Commercial
//                   </NavLink>
//                 </li>
//                 <li className="menu-item">
//                   <NavLink to="/post-new-residential-property">
//                     Residential
//                   </NavLink>
//                 </li>
//               </ol>
//             </li>
//             <li className="menu-item">
//               <NavLink to="/">Rent Property</NavLink>
//               <ol className="sub-menu">
//                 <li className="menu-item">
//                   <NavLink to="/">Commercial</NavLink>
//                 </li>
//                 <li className="menu-item">
//                   <NavLink to="/">Residential</NavLink>
//                 </li>
//               </ol>
//             </li>

//             <li className="menu-item">
//               <NavLink to="/">Lease </NavLink>
//               <ol className="sub-menu">
//                 <li className="menu-item">
//                   <NavLink to="/">Residential</NavLink>
//                 </li>
//                 <li className="menu-item">
//                   <NavLink to="/">Commercial</NavLink>
//                 </li>
//                 <li className="menu-item">
//                   <NavLink to="/">Pre_Released</NavLink>
//                 </li>
//               </ol>
//             </li>
//             <li className="menu-item">
//               <NavLink to="/">Luxury Apartments</NavLink>
//               <ol className="sub-menu">
//                 <li className="menu-item">
//                   <NavLink to="/">Ready_To_Move</NavLink>
//                 </li>
//                 <li className="menu-item">
//                   <NavLink to="/">Pre_Bookings</NavLink>
//                 </li>
//               </ol>
//             </li>
//             <li className="menu-item">
//               <NavLink to="/feedback">Feedback</NavLink>
//             </li>
//             <li className="menu-item">
//               <NavLink to="/report-error">
//                 Report Error{" "}
//                 <IconButton>
//                   <ErrorIcon id="menu_icon1" style={{ color: "white" }} />
//                 </IconButton>
//               </NavLink>
//             </li>

//             <li className="menu-item">
//               <NavLink to="/logout">
//                 Logout{" "}
//                 <IconButton>
//                   <LogoutIcon id="menu_icon1" style={{ color: "white" }} />
//                 </IconButton>
//               </NavLink>
//             </li>

//             <li className="menu-item" style={{ marginRight: "0rem" }}>
//               <NavLink to="/">
//                 <span
//                   style={{
//                     color: "white",
//                   }}
//                 >
//                   {user.name} (S)
//                 </span>
//                 <IconButton>
//                   <MenuIcon id="menu_icon2" style={{ color: "white" }} />
//                 </IconButton>
//               </NavLink>
//             </li>
//           </ol>
//         </navLink>
//       </>
//     );
//   };

//   const BuyerNavar = () => {
//     return (
//       <>
// <section className="header_wrapper">
//   <div className="container">
//     <div className="row align-items-center">
//       <div className="col-lg-6 col-md-6 col-12">
//         <div className="contact-details-top">
//           <ul>
//             <li><a href="#" className="nav-link"> <i className="fas fa-envelope" /> info@homeverse.com</a></li>
//             <li><a href="#" className="nav-link"><i className="fas fa-map-marker-alt" /> /A, Nest Tower, NYC</a></li>
//           </ul>
//         </div>
//       </div>
//       <div className="col-lg-6 col-md-6 col-12">
//         <div className="social-icons align-items-center">
//           <ul>
//             <li><a href="#"><i className="fab fa-facebook" /></a></li>
//             <li><a href="#"><i className="fab fa-instagram" /></a></li>
//             <li><a href="#"><i className="fab fa-twitter" /></a></li>
//             <li><a href="#"><i className="fab fa-whatsapp" /></a></li>
//           </ul>
//           {/* add listing button */}
//           <div className="add-listing">
//             <a href="#" className="main-button">Add Listing</a>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>

//         <navLink className="menu">
//           <ol>
//             <li className="menu-item" id="mainLogo">
//               <NavLink to="/">
//                 {" "}
//                 <img src={logo} alt="logo" id="span_profile_icon1" />
//               </NavLink>
//             </li>

//             <li className="menu-item">
//               <NavLink>Search Property</NavLink>
//               <ol className="sub-menu">
//                 <li className="menu-item">
//                   <NavLink to="/commercial-property-list-by-price">
//                     Commercial
//                   </NavLink>
//                 </li>
//                 <li className="menu-item">
//                   <NavLink to="/residential-property-list-by-price">
//                     Residential
//                   </NavLink>
//                 </li>
//               </ol>
//             </li>

//             <li className="menu-item">
//               <NavLink to="/">Sell Property</NavLink>
//               <ol className="sub-menu">
//                 <li className="menu-item">
//                   <NavLink to="post-new-commercial-property">
//                     Commercial
//                   </NavLink>
//                 </li>
//                 <li className="menu-item">
//                   <NavLink to="/post-new-residential-property">
//                     Residential
//                   </NavLink>
//                 </li>
//               </ol>
//             </li>
//             <li className="menu-item">
//               <NavLink to="/">Rent Property</NavLink>
//               <ol className="sub-menu">
//                 <li className="menu-item">
//                   <NavLink to="/">Commercial</NavLink>
//                 </li>
//                 <li className="menu-item">
//                   <NavLink to="/">Residential</NavLink>
//                 </li>
//               </ol>
//             </li>

//             <li className="menu-item">
//               <NavLink to="/">Lease </NavLink>
//               <ol className="sub-menu">
//                 <li className="menu-item">
//                   <NavLink to="/">Residential</NavLink>
//                 </li>
//                 <li className="menu-item">
//                   <NavLink to="/">Commercial</NavLink>
//                 </li>
//                 <li className="menu-item">
//                   <NavLink to="/">Pre_Released</NavLink>
//                 </li>
//               </ol>
//             </li>
//             <li className="menu-item">
//               <NavLink to="/">Luxury Apartments</NavLink>
//               <ol className="sub-menu">
//                 <li className="menu-item">
//                   <NavLink to="/">Ready_To_Move</NavLink>
//                 </li>
//                 <li className="menu-item">
//                   <NavLink to="/">Pre_Bookings</NavLink>
//                 </li>
//               </ol>
//             </li>
//             <li className="menu-item">
//               <NavLink to="/feedback">Feedback</NavLink>
//             </li>
//             <li className="menu-item">
//               <NavLink to="/report-error">
//                 Report Error{" "}
//                 <IconButton>
//                   <ErrorIcon id="menu_icon1" style={{ color: "white" }} />
//                 </IconButton>
//               </NavLink>
//             </li>
//             <li className="menu-item">
//               <NavLink to="/logout">
//                 Logout{" "}
//                 <IconButton>
//                   <LogoutIcon id="menu_icon1" style={{ color: "white" }} />
//                 </IconButton>
//               </NavLink>
//             </li>

//             <li className="menu-item" style={{ marginRight: "0rem" }}>
//               <NavLink to="/">
//                 {" "}
//                 <span
//                   style={{
//                     color: "white",
//                   }}
//                 >
//                   {user.name} (B)
//                 </span>
//                 <IconButton>
//                   <MenuIcon id="menu_icon2" style={{ color: "white" }} />
//                 </IconButton>
//               </NavLink>
//             </li>
//           </ol>
//         </navLink>
//         ;
//       </>
//     );
//   };
//   const AdminNavBar = () => {
//     return (
//       <>
//         <navLink className="menu">
//           <ol>
//             <li className="menu-item" id="mainLogo">
//               <NavLink to="/">
//                 {" "}
//                 <img src={logo} alt="logo" id="span_profile_icon1" />
//               </NavLink>
//             </li>

            

//             <li className="menu-item">
//               <NavLink to="/admin-dashboard">
//                 Admin Dashboard{" "}
//                 <IconButton>
//                   <AdminPanelSettingsIcon id="menu_icon1" style={{ color: "white" }} />
//                 </IconButton>
//               </NavLink>
//             </li>
            
            
//             <li className="menu-item">
//               <NavLink to="/logout">
//                 Logout{" "}
//                 <IconButton>
//                   <LogoutIcon id="menu_icon1" style={{ color: "white" }} />
//                 </IconButton>
//               </NavLink>
//             </li>

           
            
//           </ol>
//         </navLink>
//         ;
//       </>
//     );
//   };

//   const NoUserNavbar = () => {
//     return (
//       <>
//         <navLink className="menu">
//           <ol>
//             <li
//               className="menu-item"
//               id="mainLogo"
//               style={{ marginRight: "50%" }}
//             >
//               <NavLink to="/">
//                 {" "}
//                 <img src={logo} alt="logo" id="span_profile_icon1" />
//               </NavLink>
//             </li>

//             <li className="menu-item">
//               <NavLink>Search Property</NavLink>
//               <ol className="sub-menu">
//                 <li className="menu-item">
//                   <NavLink to="/commercial-property-list-by-carpetarea">Commercial</NavLink>
//                 </li>
//                 <li className="menu-item">
//                   <NavLink to="/residential-property-list-by-carpetarea">Residential</NavLink>
//                 </li>
//               </ol>
//             </li>

//             <li className="menu-item">
//               <NavLink to="/Login">
//                User Login{" "}
//                 <IconButton>
//                   <LoginIcon id="menu_icon1" style={{ color: "white" }} />
//                 </IconButton>
//               </NavLink>
//             </li>
//             <li className="menu-item">
//               <NavLink to="/admin-login">
//                Admin Login{" "}
//                 <IconButton>
//                   <LoginIcon id="menu_icon1" style={{ color: "white" }} />
//                 </IconButton>
//               </NavLink>
//             </li>

//             <li className="menu-item">
//               <NavLink to="/">
//                 <IconButton>
//                   <MenuIcon id="menu_icon2" style={{ color: "white" }} />
//                 </IconButton>
//               </NavLink>
//             </li>
//           </ol>
//         </navLink>
//       </>
//     );
//   };
//   // if (user.userType === "buyer")
//   const RenderMenu = () => {
//     if (!state) {
//       if (!user.userType) {
//         return (
//           <>
//             <NoUserNavbar />
//           </>
//         );
//       } else if (user.userType === "buyer") {
//         return (
//           <>
//             <BuyerNavar />
//           </>
//         );
//       } else if (user.userType === "seller") {
//         return (
//           <>
//             <SellerNavbar />
//           </>
//         );
//       }
//       else if (user.userType === "admin") {
//         return (
//           <>
//             <AdminNavBar />
//           </>
//         );
//       }
//     }
    
//   };

//   return (
//     <>
//       <RenderMenu />
//     </>
//   );
// };

// export default Navbar1;

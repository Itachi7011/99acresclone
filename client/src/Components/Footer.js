import React from 'react'
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";
import { useContext } from "react";
const Footer = () => {
    const { state, dispatch } = useContext(UserContext);
    const [user, setUser] = useState("");

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
    const GeneralFoooter = ()=>{
return(<>
   <footer class="footer-v2">
    <div class="footer">
        <div class="container-fluid" style={{width:"80%", margin:"0 auto"}}>
            <div class="row">
                <div class="col-md-3">
                    <div class="footer-widget widget-about">
                        <div class="widget-top">
                            <h3 class="widget-title">Our Projects</h3>
                        </div>
                        <div class="widget-body">
                            <ul class="list-unstyled carettt">
                                <li><a href="/">Sapphire Eighty Three</a></li>
                                <li><a href="/">Ansals Townwalk</a></li>
                                <li><a href="/">SS Omnia</a></li>
                                <li><a href="/">Raheja Trinity</a></li>
                                <li><a href="/">Conscient One</a></li>
                                <li><a href="/">SS Almeria</a></li>
                                <li><a href="/">VSquare 83 Avenue</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="footer-widget widget-about">
                        <div class="widget-top">
                            <h3 class="widget-title">Top Developer</h3>
                        </div>
                        <div class="widget-body">
                            <ul class="list-unstyled carettt">
                                <li><a href="/">Sapphire Eighty Three</a></li>
                                <li><a href="/">Ansals Townwalk</a></li>
                                <li><a href="/">SS Omnia</a></li>
                                <li><a href="/">Raheja Trinity</a></li>
                                <li><a href="/">Conscient One</a></li>
                                <li><a href="/">SS Almeria</a></li>
                                <li><a href="/">VSquare 83 Avenue</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="footer-widget widget-about">
                        <div class="widget-top">
                            <h3 class="widget-title">Customer Service</h3>
                        </div>
                        <div class="widget-body">
                            <ul class="list-unstyled carettt">
                                <li><a href="/">Sapphire Eighty Three</a></li>
                                <li><a href="/">Ansals Townwalk</a></li>
                                <li><a href="/">SS Omnia</a></li>
                                <li><a href="/">Raheja Trinity</a></li>
                                <li><a href="/">Conscient One</a></li>
                                <li><a href="/">SS Almeria</a></li>
                                <li><a href="/">VSquare 83 Avenue</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="footer-widget widget-about">
                        <div class="widget-top">
                            <h3 class="widget-title">Information</h3>
                        </div>
                        <div class="widget-body">
                            <ul class="list-unstyled carettt">
                                <li><a href="/">Sapphire Eighty Three</a></li>
                                <li><a href="/">Ansals Townwalk</a></li>
                                <li><a href="/">SS Omnia</a></li>
                                <li><a href="/">Raheja Trinity</a></li>
                                <li><a href="/">Conscient One</a></li>
                                <li><a href="/">SS Almeria</a></li>
                                <li><a href="/">VSquare 83 Avenue</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row border-cover footer-widget">
                <div class="col-md-12">
                    <ul class="list-inline carettt">
                        <li><a href="/">Terms &amp; Conditions</a></li>
                        <li><a href="/">Privacy Policy</a></li>
                        <li><a href="/">Blog</a></li>
                        <li><a href="/">Article</a></li>
                        <li><a href="/">Feedback</a></li>
                        <li><a href="/">Help Center</a></li>
                        <li><a href="/">Sitemap</a></li>
                    </ul>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-3">
                    <div class="footer-widget widget-about">
                        <div class="widget-top">
                            <h3 class="widget-title">About Site</h3>
                        </div>
                        <div class="widget-body">
                            <p>Noida is a Prime Realty Destination for all Residential and Commercial Projects in Noida, </p>
                            <p class="read"><a href="about-us.html">Read more <i class="fa fa-caret-right"></i></a></p>
                            <ul class="d-flex">
                                <div class="social-icon">
                                <li>
                                    <a href="#" class="btn-facebook"><i class="fab fa-facebook"></i></a>
                                </li>
                            </div>
                            <div class="social-icon">
                                <li>
                                    <a href="#" class="btn-twitter"><i class="fab fa-twitter"></i></a>
                                </li>
                            </div>
                            <div class="social-icon">
                                <li>
                                    <a href="#" class="btn-google-plus"><i class="fab fa-google-plus"></i></a>
                                </li>
                               </div>
                                 <div class="social-icon">
                                <li>
                                    <a href="#" class="btn-linkedin"><i class="fab fa-linkedin"></i></a>
                                </li>
                                </div>
                                <div class="social-icon">
                                <li>
                                    <a href="#" class="btn-pintrest"><i class="fab fa-pinterest-p" aria-hidden="true"></i></a>
                                </li>
                                </div>
                          
                             
                            <div class="social-icon">
                                <li>
                                    <a href="#" class="btn-instagram"><i class="fab fa-instagram" aria-hidden="true"></i></a>
                                </li>

                            </div>
                            <div class="social-icon">
                                <li>
                                    <a href="#" class="btn-skype"><i class="fab fa-skype" aria-hidden="true"></i></a>
                                </li>
                            </div>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-sm-3">
                    <div class="footer-widget widget-contact" >
                        <div class="widget-top">
                            <h3 class="widget-title">Contact Us</h3>
                        </div>
                        <div class="widget-body">
                            <ul class="list-unstyled">
                                <li><i class="fas fa-location-arrow"></i> Premier Green Realty</li>
                                <li><i class="fas fa-phone"></i><a href="tel:9212306116"> +91 92123 06116 (Site Visit)</a></li>
                                <li><i class="far fa-envelope"></i> <a href="/">info@commercialprojectnoida.in</a></li>
                                <li><i class="fab fa-skype"></i> <a href="/">shalabh.mishra</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="footer-widget widget-newsletter">
                        <div class="widget-top">
                            <h3 class="widget-title">Newsletter Subscribe</h3>
                        </div>
                        <div class="widget-body">
                            <p>If you're too busy to visit Our Site regularly, this email newsletter will keep you up to date, The latest new projects, properties, villas, apertments.</p>
                            <form>
                                <div class="table-list">
                                    <div class="form-group table-cell">
                                        <div class="input-email input-icon">
                                            <input class="form-control" placeholder="Enter your email" />
                                        </div>
                                    </div>
                                    <div class="table-cell">
                                        <button class="btn btn-submit">Submit</button>
                                    </div>
                                </div>
                            </form>
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="footer-bottom">
        <div class="container-fluid" style={{width:"80%", margin:"0 auto"}}>
            <div class="row">
                <div class="col-md-12 text-justify">
                    <p><strong>Disclaimer:</strong> Noida Commercial Projects Realty Services Limited is only an intermediary offering its platform to advertise properties of Seller for a Customer/Buyer/User coming on its Website and is not and cannot be a party to or privy to or control in any manner any transactions between the Seller and the Customer/Buyer/User. All the offers and discounts on this Website have been extended by various Builder(s)/Developer(s) who have advertised their products. Noida Commercial Projects is only communicating the offers and not selling or rendering any of those products or services. It neither warrants nor is it making any representations with respect to offer(s) made on the site. Noida Commercial Projects Realty Services Limited shall neither be responsible nor liable to mediate or resolve any disputes or disagreements between the Customer/Buyer/User and the Seller and both Seller and Customer/Buyer/User shall settle all such disputes without involving Noida Commercial Projects Realty Services Limited in any manner.</p>
                </div>
            </div>
        </div>
    </div>
</footer>
</>)
    }
    const AdminFooter = ()=>{
        return(<>

            </>)
    }

    const RenderMenu = ()=>{
        if (!state) {
            if (!user.userType) {
                      return (
                        <>
                          <GeneralFoooter />
                        </>
                      );
            }
              else if (user.userType === "buyer" || user.userType === "Agent" || user.userType === "Developer") {
              return (
                <>
                  <GeneralFoooter />
                </>
              );
            } 
            else if (user.userType === "admin") {
              return (
                <>
                            <AdminFooter />
      
                  {/* <AdminNavbar /> */}
                </>
              );
            }
          } 
    }
  return (
   <>

<RenderMenu/>
   

   </>
  )
}

export default Footer
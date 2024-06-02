import { React, useEffect, useState } from "react";

import image1 from "./Images/homepageimages/real/logo.png";
import image2 from "./Images/homepageimages/real/5c7367da13 1.png";
// const img = require("./Uploads/Projects/01_385x258 1.png")

const Home = () => {
  const [banners, setBanners] = useState([]);
  const [usedBanner, setUsedBanners] = useState("");
  const BannersDetails = async () => {
    try {
      const res = await fetch("/bannersAPI", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();

      setBanners(data);

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
    BannersDetails();
  }, []);
  // console.log(banners);

  // const banner1 = banners.filter((field) => {
  //   return field.isUsed;
  // });
  // const banner2 = banner1.map(({ logo }) => {
  //   return logo;
  // });

  // const banner3 = setTimeout(banner2.at(0).data, 5000);
  // const banner3 = (banner2.map(({data})=>{
  //   return(data);
  // })).pop();

  // console.log(banner3);
  // console.log("./Uploads/Projects/" + banner3);
  return (
    <>
      <div className="homeDesktopBanner" style={{ marginTop: "5rem" }}>
        {banners
          .filter((field) => {
            return field.isUsed;
          })
          .map(({ logo }) => {
            return (
              <>
                <img
                  // src={require("../../Uploads/Projects/" +logo.data)}
                  // src={require("./Uploads/Projects/"+banner3)}
                  // src={require("./Uploads/Projects/" + banner3)}
                  src={require("./Uploads/Projects/" + logo.data)}
                  width="100%"
                  alt=""
                />
              </>
            );
          })}

        

        <div className="container contentBox">
          <h1>Discover Your Perfect Home</h1>
          <p>Top banner option with background video</p>

          <div id="tabSale" className="homeBlackBox noTrendingSearch nearMeTab">
            <div className="homeDesktopSearchBox">
              <div className="searchInputBox">
                <div id="homeSearchDesktop" className="inputBox1">
                  <div id="chipDiv">
                    <input
                      className="form-control searchInput"
                      type="text"
                      name=""
                      placeholder="Enter Keyword....."
                      id="SaleSearchTxt"
                    />
                  </div>

                  <input type="hidden" name="lat" id="SaleSearchTxt" value="" />
                  <input
                    type="hidden"
                    name="long"
                    id="SaleSearchTxt"
                    value=""
                  />
                  <input
                    type="hidden"
                    name="city"
                    id="SaleSearchTxt"
                    value=""
                  />
                  <div
                    id="topresultsearch"
                    className="desktopAutoComplete"
                  ></div>
                </div>

                <div className="inputBox2">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option>Location</option>
                    <option> Sector 63</option>
                    <option> Sector 62</option>
                    <option> Sector 132</option>
                    <option> Sector 75</option>
                    <option> Gr. Noida</option>
                    <option> Noida Expressway</option>
                    <option> Center Noida</option>
                  </select>

                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option>Budget</option>
                    <option> Upto 50 L</option>
                    <option> 75 L - 1 Cr</option>
                    <option> 1.5 - 2 Cr</option>
                    <option> 2 - 3 Cr</option>
                    <option> 3 - 4 Cr</option>
                    <option> 4 - 5 Cr</option>
                    <option> 5 Cr +</option>
                  </select>

                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option>Area</option>
                    <option> 100 Sq ft - 200 Sq ft</option>
                    <option> 200 Sq ft - 300 Sq ft</option>
                    <option> 300 Sq ft - 500 Sq ft</option>
                    <option> 500 Sq ft - 1000 Sq ft</option>
                  </select>
                </div>
              </div>
              <button className="searchBtn" id="SaleSearchBtn">
                <span>
                  {" "}
                  <i className="fas fa-search"></i> Search
                </span>
              </button>
            </div>

            <div className="searchingBox">
              <div className="homeMobileRecentSearchBox"></div>
              <div id="commuteHome"></div>
            </div>

            <div className="homeDesktopTabBox">
              <ul>
                <li
                  id="newProjectHomeTab"
                  data-tab="tabNewp"
                  data-name="New Projects"
                  className="Home_Search_L1"
                >
                  <button className="tab Home_Search_L1 onClickLink">
                    <i className="fas fa-building fs-2"></i>
                    <span className="Home_Search_L1">
                      New <br />
                      Projects
                    </span>
                  </button>
                </li>

                <li
                  id="resaleHomeTab"
                  data-tab="tabSale"
                  data-name="Resale"
                  className="Home_Search_L2"
                >
                  <button className="tab Home_Search_L2 onClickLink">
                    <i className="fas fa-home fs-2"></i>
                    <span className="Home_Search_L2">
                      Buy <br />
                      Properties
                    </span>
                  </button>
                </li>

                <li
                  id="rentalHomeTab"
                  data-tab="tabRent"
                  data-name="Rent"
                  className="Home_Search_L3"
                >
                  <button className="tab Home_Search_L3 onClickLink">
                    <i className="fas fa-warehouse fs-2"></i>
                    <span className="Home_Search_L3">
                      Rent <br />
                      Properties
                    </span>
                  </button>
                </li>

                <li
                  id="rentalHomeTab"
                  data-tab="tabRent"
                  data-name="Rent"
                  className="Home_Search_L3"
                >
                  <button className="tab Home_Search_L3 onClickLink">
                    <i className="fas fa-bed fs-2"></i>
                    <span className="Home_Search_L3">
                      PG / <br />
                      Hostels
                    </span>
                  </button>
                </li>

                <li
                  id="plotHomeTab"
                  data-tab="tabPlot"
                  data-name="Plot"
                  className=""
                >
                  <button className="tab onClickLink">
                    <i className="fa fa-area-chart fs-2" aria-hidden="true"></i>
                    <span className="">
                      Plot <br />
                      &amp; Land
                    </span>
                  </button>
                </li>

                <li
                  id="commercialHomeTab"
                  data-tab="tabCommercial"
                  data-name="Commercial"
                  className=""
                >
                  <button className="tab onClickLink">
                    <i className="fas fa-city fs-2"></i>
                    <span className="">
                      Commercial <br />
                      Properties
                    </span>
                  </button>
                </li>

                <li
                  id="agentHomeTab"
                  data-tab="tabAgent"
                  data-name="Agents"
                  className="Home_Search_L4"
                >
                  <button className="tab Home_Search_L4 onClickLink">
                    <i className="fas fa-user-alt fs-2"></i>
                    <span className="Home_Search_L4">
                      Find <br />
                      Agents
                    </span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="main">
        <section className="post-categry pw-sec">
          <div className="container">
            <div className="row">
              <div className="fw">
                <ul className="pw-list">
                  <li data-url="#">
                    <div className="pw-item" style={{ background: "#c2c1c1" }}>
                      <div className="pw-msg">
                        Post Your Property Ads for Free{" "}
                        <span>
                          Sell/Rent out your property &amp; Get unlimited
                          responses
                        </span>
                      </div>
                      <a href="/" className="pw-link">
                        List Your Property{" "}
                        <i className="fa fa-long-arrow-right"></i>
                      </a>
                      <img
                        loading="lazy"
                        className="pw-wm-img"
                        // src=" http://localhost/dwa/dwa/frontend/images/homePostCategroyImg/pw-img1.png"
                        alt=""
                        height="60"
                        width="59"
                      />
                    </div>
                  </li>
                  <li data-url="#">
                    <div className="pw-item" style={{ background: "#c2c1c1" }}>
                      <div className="pw-msg">
                        Find Your Dream Property{" "}
                        <span>
                          Get the list of properties matching to your
                          requirement
                        </span>
                      </div>
                      <a href="/" className="pw-link">
                        Post <span>Your</span> Requirement{" "}
                        <i className="fa fa-long-arrow-right"></i>
                      </a>
                      <img
                        loading="lazy"
                        className="pw-wm-img"
                        // src="http://localhost/dwa/dwa/frontend/images/homePostCategroyImg/pw-img2.png"
                        alt=""
                        height="60"
                        width="59"
                      />
                    </div>
                  </li>
                  <li data-url="#">
                    <div className="pw-item" style={{ background: "#c2c1c1" }}>
                      <div className="pw-msg" style={{ color: "#000" }}>
                        <strong>17064+</strong> Top Property Dealers{" "}
                        <span style={{ color: "#333" }}>
                          Connect with genuine property dealers in your city
                        </span>
                      </div>
                      <a
                        href="/"
                        className="pw-link"
                        // onClick="$('#spModal').show()"
                      >
                        Explore Now <i className="fa fa-long-arrow-right"></i>
                      </a>
                      <img
                        loading="lazy"
                        className="pw-wm-img"
                        // src="http://localhost/dwa/dwa/frontend/images/homePostCategroyImg/pw-img3.png"
                        alt=""
                        height="60"
                        width="59"
                      />
                    </div>
                  </li>
                  <li data-url="#">
                    <div className="pw-item" style={{ background: "#c2c1c1" }}>
                      <div className="pw-msg">
                        <strong>30613+</strong> Verified Property for Sale{" "}
                        <span style={{ color: "#000000" }}>
                          Search for the best commercial or residential deal
                        </span>
                      </div>
                      <a href="/" className="pw-link">
                        Explore Now <i className="fa fa-long-arrow-right"></i>
                      </a>
                      <img
                        loading="lazy"
                        className="pw-wm-img"
                        // src="http://localhost/dwa/dwa/frontend/images/homePostCategroyImg/pw-img4.png"
                        alt=""
                        height="60"
                        width="59"
                      />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="reis-sec real-estate-services">
          <div className="fw">
            <div className="sh-title">
              <h2>Real Estate Services</h2>
            </div>

            <div className="container">
              <ul className="reis-list">
                <li>
                  <div className="reis-item cp full_link" data-url="#">
                    <div className="reis-icon">
                      <img
                        loading="lazy"
                        src="http://localhost/dwa/dwa/frontend/images/real-state services/reis-img.png"
                        alt="Agents / Brokers"
                        height="55"
                        width="55"
                      />
                    </div>
                    <h3 className="reis-title">
                      <a href="/" title="Agents / Brokers in Delhi">
                        Agents / Brokers
                      </a>
                    </h3>
                    <div className="reis-msg">
                      Here Are Hassle-Free Solutions! Buy - Sell - Rent Your
                      Property
                    </div>
                    <div className="reis-rm sc">Read More</div>
                  </div>{" "}
                </li>
                <li>
                  <div className="reis-item cp full_link" data-url="#">
                    <div className="reis-icon">
                      <img
                        loading="lazy"
                        src="http://localhost/dwa/dwa/frontend/images/real-state services/reis-img2.png"
                        alt="Builders / Developers"
                        height="55"
                        width="55"
                      />
                    </div>
                    <h3 className="reis-title">
                      <a href="/" title="Builders / Developers in Delhi">
                        Builders / Developers
                      </a>
                    </h3>
                    <div className="reis-msg">
                      List of the most trusted and reliable builders to fulfill
                      your Dream HOME.
                    </div>
                    <div className="reis-rm sc">Read More</div>
                  </div>{" "}
                </li>
                <li>
                  <div className="reis-item cp full_link" data-url="#">
                    <div className="reis-icon">
                      <img
                        loading="lazy"
                        src="http://localhost/dwa/dwa/frontend/images/real-state services/reis-img3.png"
                        alt="Architects / Architecture"
                        height="55"
                        width="55"
                      />
                    </div>
                    <h3 className="reis-title">
                      <a href="/" title="Architects / Architecture in Delhi">
                        Architects / Architecture
                      </a>
                    </h3>
                    <div className="reis-msg">
                      Professional Architecture will meet your needs and
                      expectations.
                    </div>
                    <div className="reis-rm sc">Read More</div>
                  </div>{" "}
                </li>
                <li>
                  <div className="reis-item cp full_link" data-url="#">
                    <div className="reis-icon">
                      <img
                        loading="lazy"
                        src="http://localhost/dwa/dwa/frontend/images/real-state services/reis-img4.png"
                        alt="Interior Decorators"
                        height="55"
                        width="55"
                      />
                    </div>
                    <h3 className="reis-title">
                      <a href="/" title="Interior Decorators in Delhi">
                        Interior Decorators
                      </a>
                    </h3>
                    <div className="reis-msg">
                      A One-Stop Solution for all your decor Needs to Match Your
                      Lifestyle.
                    </div>
                    <div className="reis-rm sc">Read More</div>
                  </div>{" "}
                </li>
                <li>
                  <div className="reis-item cp full_link" data-url="#">
                    <div className="reis-icon">
                      <img
                        loading="lazy"
                        src="http://localhost/dwa/dwa/frontend/images/real-state services/reis-img5.png"
                        alt="Vaastu Consultant"
                        height="55"
                        width="55"
                      />
                    </div>
                    <h3 className="reis-title">
                      <a href="/" title="Vaastu Consultant in Delhi">
                        Vaastu Consultant
                      </a>
                    </h3>
                    <div className="reis-msg">
                      Connect to top most Vastu consultants for right direction.
                    </div>
                    <div className="reis-rm sc">Read More</div>
                  </div>{" "}
                </li>
                <li>
                  <div className="reis-item cp full_link" data-url="#">
                    <div className="reis-icon">
                      <img
                        loading="lazy"
                        src="http://localhost/dwa/dwa/frontend/images/real-state services/reis-img6.png"
                        alt="Building Contractors"
                        height="55"
                        width="55"
                      />
                    </div>
                    <h3 className="reis-title">
                      <a href="/" title="Building Contractors in Delhi">
                        Building Contractors
                      </a>
                    </h3>
                    <div className="reis-msg">
                      General contractor for a home repair, remodel, or
                      construction.
                    </div>
                    <div className="reis-rm sc">Read More</div>
                  </div>{" "}
                </li>
                <li>
                  <div className="reis-item cp full_link" data-url="#">
                    <div className="reis-icon">
                      <img
                        loading="lazy"
                        src="http://localhost/dwa/dwa/frontend/images/real-state services/reis-img7.png"
                        alt="Home Inspection"
                        height="55"
                        width="55"
                      />
                    </div>
                    <h3 className="reis-title">
                      <a href="/" title="Home Inspection in Delhi">
                        Home Inspection
                      </a>
                    </h3>
                    <div className="reis-msg">
                      A complete range of building and home inspection services.
                    </div>
                    <div className="reis-rm sc">Read More</div>
                  </div>{" "}
                </li>
                <li>
                  <div className="reis-item cp full_link" data-url="#">
                    <div className="reis-icon">
                      <img
                        loading="lazy"
                        // src="http://localhost/dwa/dwa/frontend/images/real-state services/reis-img8.png"
                        alt="Property Consultants"
                        height="55"
                        width="55"
                      />
                    </div>
                    <h3 className="reis-title">
                      <a href="/" title="Property Consultants in Delhi">
                        Property Consultants
                      </a>
                    </h3>
                    <div className="reis-msg">
                      List of Leading Real Estate Consultant for Professional
                      Assistance Services.
                    </div>
                    <div className="reis-rm sc">Read More</div>
                  </div>{" "}
                </li>
              </ul>
            </div>
          </div>
        </section>

        <div className="pfs-sec">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12 col-md-12 col-12">
                <div className="sh-title">
                  <h2 style={{ marginTop: "2rem" }}>
                    <a href="/">Properties for Sale</a>
                  </h2>
                </div>
                <ul className="pfs-tabs">
                  <li className="active" data-tab="mostPopularSale">
                    Most Popular
                  </li>
                  <li data-tab="byBudgetSale">By Budget</li>

                  <li data-tab="byBHKSale">By BHK</li>
                </ul>
                <div className="pfs-tab-content active" id="mostPopularSale">
                  <ul className="pfs-list">
                    <li className="goal_set_3bhk">
                      <a
                        href="/"
                        title="3 BHK Property for Sale in Delhi"
                        className="hpfs-iteam"
                      >
                        <img
                          // src="http://localhost/dwa/dwa/frontend/images/popular/1bhk.jpg"
                          alt=""
                          height="210"
                          width="218"
                        />
                        <div className="hpfs-title">3 BHK Apartments</div>
                      </a>
                    </li>
                    <li className="goal_set_builder-floor">
                      <a
                        href="/"
                        title="Builder Floors for Sale in Delhi"
                        className="hpfs-iteam"
                      >
                        <img
                          loading="lazy"
                          // src="http://localhost/dwa/dwa/frontend/images/popular/2bhk.jpg"
                          alt=""
                          width="130"
                          height="110"
                        />
                        <div className="hpfs-title">Builder Floors</div>
                      </a>
                    </li>
                    <li className="goal_set_flats-apartments">
                      <a
                        href="/"
                        title="Flats for Sale in Delhi"
                        className="hpfs-iteam"
                      >
                        <img
                          loading="lazy"
                          // src="http://localhost/dwa/dwa/frontend/images/popular/3bhk.jpg"
                          alt=""
                          width="130"
                          height="110"
                        />
                        <div className="hpfs-title">Flats</div>
                      </a>
                    </li>
                    <li>
                      <a href="/" className="hpfs-iteam">
                        <img
                          loading="lazy"
                          // src="http://localhost/dwa/dwa/frontend/images/popular/4bhk.jpg"
                          alt=""
                          height="210"
                          width="218"
                        />
                        <div className="hpfs-title">Budget within 2 crores</div>
                      </a>
                    </li>

                    <li>
                      <a href="/" className="hpfs-iteam">
                        <img
                          loading="lazy"
                          // src="http://localhost/dwa/dwa/frontend/images/popular/5bhk.jpg"
                          alt=""
                          height="210"
                          width="218"
                        />
                        <div className="hpfs-title">Budget above 5 crores</div>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="pfs-tab-content" id="byBudgetSale">
                  <ul className="pfs-list">
                    <li>
                      <a href="/" className="hpfs-iteam">
                        <img
                          loading="lazy"
                          // src="http://localhost/dwa/dwa/frontend/images/popular/pfs-img1.jpg"
                          alt=""
                          height="210"
                          width="218"
                        />
                        <div className="hpfs-title">Budget above 5 crores</div>
                      </a>
                    </li>

                    <li>
                      <a href="/" className="hpfs-iteam">
                        <img
                          loading="lazy"
                          // src="http://localhost/dwa/dwa/frontend/images/popular/pfs-img6.jpg"
                          alt=""
                          height="210"
                          width="218"
                        />
                        <div className="hpfs-title">Budget within 2 crores</div>
                      </a>
                    </li>

                    <li>
                      <a href="/" className="hpfs-iteam">
                        <img
                          loading="lazy"
                          // src="http://localhost/dwa/dwa/frontend/images/popular/pfs-img7.jpg"
                          alt=""
                          height="210"
                          width="218"
                        />
                        <div className="hpfs-title">Budget within 30 lakhs</div>
                      </a>
                    </li>

                    <li>
                      <a href="/" className="hpfs-iteam">
                        <img
                          loading="lazy"
                          // src="http://localhost/dwa/dwa/frontend/images/popular/pfs-img8.jpg"
                          alt=""
                          height="210"
                          width="218"
                        />
                        <div className="hpfs-title">Budget within 3 crores</div>
                      </a>
                    </li>

                    <li>
                      <a href="/" className="hpfs-iteam">
                        <img
                          loading="lazy"
                          // src="http://localhost/dwa/dwa/frontend/images/popular/pfs-img9.jpg"
                          alt=""
                          height="210"
                          width="218"
                        />
                        <div className="hpfs-title">Budget within 40 lakhs</div>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="pfs-tab-content" id="byPropertyTypeSale">
                  <ul className="pfs-list">
                    <li
                      className="goal_set_builder-floor"
                      style={{
                        float: "left",
                        listStyle: "none",
                        position: "relative",
                        width: "100px",
                      }}
                    >
                      <a
                        href="/"
                        title="Builder Floors for Sale in Delhi"
                        className="hpfs-iteam"
                      >
                        <img
                          loading="lazy"
                          // src="http://localhost/dwa/dwa/frontend/images/popular/1bhk.jpg"
                          alt=""
                          width="130"
                          height="110"
                        />
                        <div className="hpfs-title">Builder Floors</div>
                      </a>
                    </li>
                    <li
                      className="goal_set_flats-apartments"
                      style={{
                        float: "left",
                        listStyle: "none",
                        position: "relative",
                        width: "100px",
                      }}
                    >
                      <a
                        href="/"
                        title="Flats for Sale in Delhi"
                        className="hpfs-iteam"
                      >
                        <img
                          loading="lazy"
                          // src="http://localhost/dwa/dwa/frontend/images/popular/2bhk.jpg"
                          alt=""
                          width="130"
                          height="110"
                        />
                        <div className="hpfs-title">Flats</div>
                      </a>
                    </li>
                    <li
                      className="goal_set_individual-house"
                      style={{
                        float: "left",
                        listStyle: "none",
                        position: "relative",
                        width: "100px",
                      }}
                    >
                      <a
                        href="/"
                        title="House for Sale in Delhi"
                        className="hpfs-iteam"
                      >
                        <img
                          loading="lazy"
                          // src="http://localhost/dwa/dwa/frontend/images/popular/3bhk.jpg"
                          alt=""
                          width="130"
                          height="110"
                        />
                        <div className="hpfs-title">House</div>
                      </a>
                    </li>
                    <li
                      className="goal_set_residential-land"
                      style={{
                        float: "left",
                        listStyle: "none",
                        position: "relative",
                        width: "100px",
                      }}
                    >
                      <a
                        href="/"
                        title="Residential Plots for Sale in Delhi"
                        className="hpfs-iteam"
                      >
                        <img
                          loading="lazy"
                          // src="http://localhost/dwa/dwa/frontend/images/popular/4bhk.jpg"
                          alt=""
                          width="130"
                          height="110"
                        />
                        <div className="hpfs-title">Residential Plots</div>
                      </a>
                    </li>
                    <li
                      className="goal_set_farm-house"
                      style={{
                        float: "left",
                        listStyle: "none",
                        position: "relative",
                        width: "100px",
                      }}
                    >
                      <a
                        href="/"
                        title="Farm House for Sale in Delhi"
                        className="hpfs-iteam"
                      >
                        <img
                          loading="lazy"
                          // src="http://localhost/dwa/dwa/frontend/images/popular/4bhk.jpg"
                          alt=""
                          width="130"
                          height="110"
                        />
                        <div className="hpfs-title">Farm House</div>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="pfs-tab-content" id="byBHKSale">
                  <ul className="pfs-list">
                    <li className="goal_set_3bhk">
                      <a
                        href="/"
                        title="3 BHK Property for Sale in Delhi"
                        className="hpfs-iteam"
                      >
                        <img
                          // src="http://localhost/dwa/dwa/frontend/images/popular/1bhk.jpg"
                          alt=""
                          height="210"
                          width="218"
                        />
                        <div className="hpfs-title">3 BHK Apartments</div>
                      </a>
                    </li>

                    <li className="goal_set_2bhk">
                      <a
                        href="/"
                        title="2 BHK Property for Sale in Delhi"
                        className="hpfs-iteam"
                      >
                        <img
                          // src="http://localhost/dwa/dwa/frontend/images/popular/2bhk.jpg"
                          alt=""
                          height="210"
                          width="218"
                        />
                        <div className="hpfs-title">2 BHK Apartments</div>
                      </a>
                    </li>

                    <li className="goal_set_4bhk">
                      <a
                        href="/"
                        title="4 BHK Property for Sale in Delhi"
                        className="hpfs-iteam"
                      >
                        <img
                          // src="http://localhost/dwa/dwa/frontend/images/popular/1bhk3.jpg"
                          alt=""
                          height="210"
                          width="218"
                        />
                        <div className="hpfs-title">4 BHK Apartments</div>
                      </a>
                    </li>

                    <li className="goal_set_1bhk">
                      <a
                        href="/"
                        title="1 BHK Property for Sale in Delhi"
                        className="hpfs-iteam"
                      >
                        <img
                          // src="http://localhost/dwa/dwa/frontend/images/popular/1bhk4.jpg"
                          alt=""
                          height="210"
                          width="218"
                        />
                        <div className="hpfs-title">1 BHK Apartments</div>
                      </a>
                    </li>

                    <li className="goal_set_5bhk">
                      <a
                        href="/"
                        title="5 BHK Property for Sale in Delhi"
                        className="hpfs-iteam"
                      >
                        <img
                          // src="http://localhost/dwa/dwa/frontend/images/popular/1bhk5.jpg"
                          alt=""
                          height="210"
                          width="218"
                        />
                        <div className="hpfs-title">5 BHK Apartments</div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="houzez-module-main pdng-50">
          <div className="houzez-module carousel-module">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 text-center">
                  <h2 style={{ marginTop: "3rem" }}>All Latest Projects</h2>
                  <h3 className="sub-heading" style={{ marginBottom: "2rem" }}>
                    Best Affordable & Luxury Projects
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-lg-12 col-md-12">
                <div className="carousel properties-carousel-grid-1 slide-animated">
                  <div
                    className="item"
                    style={{ marginTop: "1rem", marginBottom: "2rem" }}
                  >
                    <div
                      className="item-wrap"
                      style={{
                        boxShadow:
                          "rgba(0, 0, 0, 0.35) 0px 5px 15px !important",
                      }}
                    >
                      <div className="property-item item-grid">
                        <div className="figure-block">
                          <figure className="item-thumb">
                            <div className="label-wrap hide-on-list">
                              <div className="label-status label label-default">
                                For Rent
                              </div>
                            </div>
                            <span className="label-featured label label-success">
                              Featured
                            </span>
                            <div className="price hide-on-list">
                              <h3>
                                <span className="rupee-symbol"></span> 779
                              </h3>
                            </div>

                            <div className="price hide-on-list">
                              <h3>
                                <span className="rupee-symbol"></span> 779
                              </h3>
                            </div>
                            <a href="/" className="hover-effect">
                              <img
                                // src="http://localhost/dwa/dwa/frontend/images/01_385x258.jpg"
                                alt="thumb"
                              />
                            </a>
                            <ul className="actions">
                              <li className="share-btn">
                                <div className="share_tooltip fade">
                                  <a href="/" target="_blank">
                                    <i className="fa fa-facebook"></i>
                                  </a>
                                  <a href="/" target="_blank">
                                    <i className="fa fa-twitter"></i>
                                  </a>
                                  <a href="/" target="_blank">
                                    <i className="fa fa-google-plus"></i>
                                  </a>
                                  <a href="/" target="_blank">
                                    <i className="fa fa-pinterest"></i>
                                  </a>
                                </div>
                                <span
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  title="share"
                                >
                                  <i className="fa fa-share-alt"></i>
                                </span>
                              </li>
                              <li>
                                <span
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  title="Favorite"
                                >
                                  <i className="fa fa-heart-o"></i>
                                </span>
                              </li>
                              <li></li>
                            </ul>
                          </figure>
                        </div>
                        <div className="item-body">
                          <div className="body-left">
                            <div className="info-row">
                              <div className="rating">
                                <span className="bottom-ratings">
                                  <span className="fa fa-star-o"></span>
                                  <span className="fa fa-star-o"></span>
                                  <span className="fa fa-star-o"></span>
                                  <span className="fa fa-star-o"></span>
                                  <span className="fa fa-star-o"></span>
                                  <span
                                    style={{ width: "70%" }}
                                    className="top-ratings"
                                  >
                                    <span className="fa fa-star"></span>
                                    <span className="fa fa-star"></span>
                                    <span className="fa fa-star"></span>
                                    <span className="fa fa-star"></span>
                                    <span className="fa fa-star"></span>
                                  </span>
                                </span>
                                <span className="star-text-right">
                                  15 Ratings
                                </span>
                              </div>
                              <h2 className="property-title">
                                <a href="http://localhost/dwa/dwa/property/sdfgssrts-sdfg">
                                  sdfgssrts sdfg
                                </a>
                              </h2>
                              <h4 className="property-location">
                                fdgsadfg sdfgsdfg
                              </h4>
                            </div>
                            <div className="table-list full-width info-row">
                              <div className="cell">
                                <div className="info-row amenities">
                                  <p>
                                    <span>Sqft: 65</span>
                                  </p>
                                </div>
                              </div>
                              <div className="cell">
                                <div className="phone">
                                  <a
                                    href="http://localhost/dwa/dwa/property/sdfgssrts-sdfg"
                                    className="btn btn-primary"
                                  >
                                    Details{" "}
                                    <i className="fa fa-angle-right fa-right"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="item-foot date hide-on-list">
                        <div className="item-foot-left">
                          <p>
                            <i className="fa fa-user"></i>{" "}
                            <a href="/">IREO DEVELOPER</a>
                          </p>
                        </div>
                        <div className="item-foot-right">
                          <p>
                            <i className="fa fa-calendar"></i> 12 Days ago{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="item"
                    style={{ marginTop: "1rem", marginBottom: "2rem" }}
                  >
                    <div
                      className="item-wrap"
                      style={{
                        boxShadow:
                          "rgba(0, 0, 0, 0.35) 0px 5px 15px;!important",
                      }}
                    >
                      <div className="property-item item-grid">
                        <div className="figure-block">
                          <figure className="item-thumb">
                            <div className="label-wrap hide-on-list">
                              <div className="label-status label label-default">
                                For Sale
                              </div>
                            </div>
                            <span className="label-featured label label-success">
                              Featured
                            </span>
                            <div className="price hide-on-list">
                              <h3>
                                <span className="rupee-symbol"></span> 12
                              </h3>
                            </div>

                            <div className="price hide-on-list">
                              <h3>
                                <span className="rupee-symbol"></span> 12
                              </h3>
                            </div>
                            <a href="/" className="hover-effect">
                              <img
                                // src="http://localhost/dwa/dwa/frontend/images/01_385x258.jpg"
                                alt="thumb"
                              />
                            </a>
                            <ul className="actions">
                              <li className="share-btn">
                                <div className="share_tooltip fade">
                                  <a href="/" target="_blank">
                                    <i className="fa fa-facebook"></i>
                                  </a>
                                  <a href="/" target="_blank">
                                    <i className="fa fa-twitter"></i>
                                  </a>
                                  <a href="/" target="_blank">
                                    <i className="fa fa-google-plus"></i>
                                  </a>
                                  <a href="/" target="_blank">
                                    <i className="fa fa-pinterest"></i>
                                  </a>
                                </div>
                                <span
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  title="share"
                                >
                                  <i className="fa fa-share-alt"></i>
                                </span>
                              </li>
                              <li>
                                <span
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  title="Favorite"
                                >
                                  <i className="fa fa-heart-o"></i>
                                </span>
                              </li>
                              <li></li>
                            </ul>
                          </figure>
                        </div>
                        <div className="item-body">
                          <div className="body-left">
                            <div className="info-row">
                              <div className="rating">
                                <span className="bottom-ratings">
                                  <span className="fa fa-star-o"></span>
                                  <span className="fa fa-star-o"></span>
                                  <span className="fa fa-star-o"></span>
                                  <span className="fa fa-star-o"></span>
                                  <span className="fa fa-star-o"></span>
                                  <span
                                    style={{ width: "70%" }}
                                    className="top-ratings"
                                  >
                                    <span className="fa fa-star"></span>
                                    <span className="fa fa-star"></span>
                                    <span className="fa fa-star"></span>
                                    <span className="fa fa-star"></span>
                                    <span className="fa fa-star"></span>
                                  </span>
                                </span>
                                <span className="star-text-right">
                                  15 Ratings
                                </span>
                              </div>
                              <h2 className="property-title">
                                <a href="http://localhost/dwa/dwa/property/commercial-atm-space">
                                  Commercial ATM Space
                                </a>
                              </h2>
                              <h4 className="property-location">
                                Corporate Office-Plot No. B-2, 7th Floor, MSX
                                Tower. II, Commercial Belt Alpha – 1, Greater
                                Noida, Uttar Pradesh – 201308
                              </h4>
                            </div>
                            <div className="table-list full-width info-row">
                              <div className="cell">
                                <div className="info-row amenities">
                                  <p>
                                    <span>Sqft: 322</span>
                                  </p>
                                </div>
                              </div>
                              <div className="cell">
                                <div className="phone">
                                  <a
                                    href="http://localhost/dwa/dwa/property/commercial-atm-space"
                                    className="btn btn-primary"
                                  >
                                    Details{" "}
                                    <i className="fa fa-angle-right fa-right"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="item-foot date hide-on-list">
                        <div className="item-foot-left">
                          <p>
                            <i className="fa fa-user"></i>{" "}
                            <a href="/">IREO DEVELOPER</a>
                          </p>
                        </div>
                        <div className="item-foot-right">
                          <p>
                            <i className="fa fa-calendar"></i> 12 Days ago{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="item"
                    style={{ marginTop: "1rem", marginBottom: "2rem" }}
                  >
                    <div
                      className="item-wrap"
                      style={{
                        boxShadow:
                          "rgba(0, 0, 0, 0.35) 0px 5px 15px;!important",
                      }}
                    >
                      <div className="property-item item-grid">
                        <div className="figure-block">
                          <figure className="item-thumb">
                            <div className="label-wrap hide-on-list">
                              <div className="label-status label label-default">
                                For Sale
                              </div>
                            </div>
                            <span className="label-featured label label-success">
                              Featured
                            </span>
                            <div className="price hide-on-list">
                              <h3>
                                <span className="rupee-symbol"></span> 12
                              </h3>
                            </div>

                            <div className="price hide-on-list">
                              <h3>
                                <span className="rupee-symbol"></span> 12
                              </h3>
                            </div>
                            <a href="/" className="hover-effect">
                              <img
                                // src="http://localhost/dwa/dwa/frontend/images/01_385x258.jpg"
                                alt="thumb"
                              />
                            </a>
                            <ul className="actions">
                              <li className="share-btn">
                                <div className="share_tooltip fade">
                                  <a href="/" target="_blank">
                                    <i className="fa fa-facebook"></i>
                                  </a>
                                  <a href="/" target="_blank">
                                    <i className="fa fa-twitter"></i>
                                  </a>
                                  <a href="/" target="_blank">
                                    <i className="fa fa-google-plus"></i>
                                  </a>
                                  <a href="/" target="_blank">
                                    <i className="fa fa-pinterest"></i>
                                  </a>
                                </div>
                                <span
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  title="share"
                                >
                                  <i className="fa fa-share-alt"></i>
                                </span>
                              </li>
                              <li>
                                <span
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  title="Favorite"
                                >
                                  <i className="fa fa-heart-o"></i>
                                </span>
                              </li>
                              <li></li>
                            </ul>
                          </figure>
                        </div>
                        <div className="item-body">
                          <div className="body-left">
                            <div className="info-row">
                              <div className="rating">
                                <span className="bottom-ratings">
                                  <span className="fa fa-star-o"></span>
                                  <span className="fa fa-star-o"></span>
                                  <span className="fa fa-star-o"></span>
                                  <span className="fa fa-star-o"></span>
                                  <span className="fa fa-star-o"></span>
                                  <span
                                    style={{ width: "70%" }}
                                    className="top-ratings"
                                  >
                                    <span className="fa fa-star"></span>
                                    <span className="fa fa-star"></span>
                                    <span className="fa fa-star"></span>
                                    <span className="fa fa-star"></span>
                                    <span className="fa fa-star"></span>
                                  </span>
                                </span>
                                <span className="star-text-right">
                                  15 Ratings
                                </span>
                              </div>
                              <h2 className="property-title">
                                <a href="http://localhost/dwa/dwa/property/commercial-shop">
                                  Commercial Shop
                                </a>
                              </h2>
                              <h4 className="property-location">
                                Corporate Office-Plot No. B-2, 7th Floor, MSX
                                Tower. II, Commercial Belt Alpha – 1, Greater
                                Noida, Uttar Pradesh – 201308
                              </h4>
                            </div>
                            <div className="table-list full-width info-row">
                              <div className="cell">
                                <div className="info-row amenities">
                                  <p>
                                    <span>Sqft: 312</span>
                                  </p>
                                </div>
                              </div>
                              <div className="cell">
                                <div className="phone">
                                  <a
                                    href="http://localhost/dwa/dwa/property/commercial-shop"
                                    className="btn btn-primary"
                                  >
                                    Details{" "}
                                    <i className="fa fa-angle-right fa-right"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="item-foot date hide-on-list">
                        <div className="item-foot-left">
                          <p>
                            <i className="fa fa-user"></i>{" "}
                            <a href="/">Residential Plots</a>
                          </p>
                        </div>
                        <div className="item-foot-right">
                          <p>
                            <i className="fa fa-calendar"></i> 12 Days ago{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="item"
                    style={{ marginTop: "1rem", marginBottom: "2rem" }}
                  >
                    <div
                      className="item-wrap"
                      style={{
                        boxShadow:
                          "rgba(0, 0, 0, 0.35) 0px 5px 15px;!important",
                      }}
                    >
                      <div className="property-item item-grid">
                        <div className="figure-block">
                          <figure className="item-thumb">
                            <div className="label-wrap hide-on-list">
                              <div className="label-status label label-default">
                                For Sale
                              </div>
                            </div>
                            <span className="label-featured label label-success">
                              Featured
                            </span>
                            <div className="price hide-on-list">
                              <h3>
                                <span className="rupee-symbol"></span> 12
                              </h3>
                            </div>

                            <div className="price hide-on-list">
                              <h3>
                                <span className="rupee-symbol"></span> 12
                              </h3>
                            </div>
                            <a href="/" className="hover-effect">
                              <img
                                // src="http://localhost/dwa/dwa/frontend/images/01_385x258.jpg"
                                alt="thumb"
                              />
                            </a>
                            <ul className="actions">
                              <li className="share-btn">
                                <div className="share_tooltip fade">
                                  <a href="/" target="_blank">
                                    <i className="fa fa-facebook"></i>
                                  </a>
                                  <a href="/" target="_blank">
                                    <i className="fa fa-twitter"></i>
                                  </a>
                                  <a href="/" target="_blank">
                                    <i className="fa fa-google-plus"></i>
                                  </a>
                                  <a href="/" target="_blank">
                                    <i className="fa fa-pinterest"></i>
                                  </a>
                                </div>
                                <span
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  title="share"
                                >
                                  <i className="fa fa-share-alt"></i>
                                </span>
                              </li>
                              <li>
                                <span
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  title="Favorite"
                                >
                                  <i className="fa fa-heart-o"></i>
                                </span>
                              </li>
                              <li></li>
                            </ul>
                          </figure>
                        </div>
                        <div className="item-body">
                          <div className="body-left">
                            <div className="info-row">
                              <div className="rating">
                                <span className="bottom-ratings">
                                  <span className="fa fa-star-o"></span>
                                  <span className="fa fa-star-o"></span>
                                  <span className="fa fa-star-o"></span>
                                  <span className="fa fa-star-o"></span>
                                  <span className="fa fa-star-o"></span>
                                  <span
                                    style={{ width: "70%" }}
                                    className="top-ratings"
                                  >
                                    <span className="fa fa-star"></span>
                                    <span className="fa fa-star"></span>
                                    <span className="fa fa-star"></span>
                                    <span className="fa fa-star"></span>
                                    <span className="fa fa-star"></span>
                                  </span>
                                </span>
                                <span className="star-text-right">
                                  15 Ratings
                                </span>
                              </div>
                              <h2 className="property-title">
                                <a href="http://localhost/dwa/dwa/property/office-space-in-noida">
                                  Office Space In Noida
                                </a>
                              </h2>
                              <h4 className="property-location">
                                Corporate Office-Plot No. B-2, 7th Floor, MSX
                                Tower. II, Commercial Belt Alpha – 1, Greater
                                Noida, Uttar Pradesh – 201308
                              </h4>
                            </div>
                            <div className="table-list full-width info-row">
                              <div className="cell">
                                <div className="info-row amenities">
                                  <p>
                                    <span>Sqft: 312</span>
                                  </p>
                                </div>
                              </div>
                              <div className="cell">
                                <div className="phone">
                                  <a
                                    href="http://localhost/dwa/dwa/property/office-space-in-noida"
                                    className="btn btn-primary"
                                  >
                                    Details{" "}
                                    <i className="fa fa-angle-right fa-right"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="item-foot date hide-on-list">
                        <div className="item-foot-left">
                          <p>
                            <i className="fa fa-user"></i>{" "}
                            <a href="/">IREO DEVELOPER</a>
                          </p>
                        </div>
                        <div className="item-foot-right">
                          <p>
                            <i className="fa fa-calendar"></i> 12 Days ago{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}

      {/* <!-- <span>Beds: 3</span>
                                             <span>Baths: 2</span> -->
                                             
                                          <!-- <p>Single Family Home</p> --> */}

      <div className="houzez-module-main module-white-bg">
        <div className="houzez-module carousel-module">
          <div className="container text-center">
            <div className="row">
              <div className="col-md-12">
                <h2 style={{ marginTop: "6rem" }}>
                  What Makes Us The Preferred Choice
                </h2>
              </div>
            </div>
            <div className="row pdng-25">
              <div className="col-sm-4">
                <div className="serviceBox red">
                  <div className="service-icon">
                    <i
                      className="fa fa-filter fa-3x mt-4"
                      aria-hidden="true"
                    ></i>
                  </div>
                  <div className="service-content">
                    <h3>Maximum Choices</h3>
                    <p>
                      15 Lac + & counting. New properties every hour to help
                      buyers find the right home
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="serviceBox green">
                  <div className="service-icon">
                    <i
                      className="fa fa-trophy fa-3x mt-4"
                      aria-hidden="true"
                    ></i>
                  </div>
                  <div className="service-content">
                    <h3>Buyers Trust Us</h3>
                    <p>
                      12 million users visit us every month for their buying and
                      renting needs
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="serviceBox yellow">
                  <div className="service-icon">
                    <i className="fa fa-user fa-3x mt-4" aria-hidden="true"></i>
                  </div>
                  <div className="service-content">
                    <h3>Expert Guidance</h3>
                    <p>
                      Advice from the largest panel of industry experts to help
                      you make smart property decisions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="houzez-module-main pdng-50"
          style={{
            marginTop: "-6rem",
            marginBottom: "3rem",
            paddingBottom: "4rem",
          }}
        >
          <div className="houzez-module carousel-module">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <div className="module-title-nav clearfix">
                    <div>
                      <h2
                        className="text-center fs-1"
                        style={{ marginTop: "4rem" }}
                      >
                        Commercial Investment Ideas
                      </h2>
                      <p className="text-center">
                        Residential investors also consider commercial projects
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="row grid-row">
                    <div className="carousel properties-carousel-grid-1 slide-animated">
                      <div
                        className="item"
                        style={{ marginTop: "1rem", marginBottom: "2rem" }}
                      >
                        <div
                          className="item-wrap"
                          style={{
                            boxShadow:
                              "rgba(0, 0, 0, 0.35) 0px 5px 15px;!important",
                          }}
                        >
                          <div className="property-item item-grid">
                            <div className="figure-block">
                              <figure className="item-thumb">
                                <div className="label-wrap hide-on-list">
                                  <span
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Favorite"
                                  >
                                    <i className="fa fa-heart-o fs-1 text-white shadow"></i>
                                  </span>
                                </div>
                                <span className="label-featured label label-success fs-5">
                                  Featured
                                </span>
                                <div className="price hide-on-list">
                                  <h3>₹ 1.2 - 8.33 Cr</h3>
                                </div>
                                <a href="/" className="hover-effect">
                                  <img
                                    // src="http://localhost/dwa/dwa/frontend/images/02_370x202.jpg"
                                    alt="thumb"
                                  />
                                </a>
                                <ul className="actions">
                                  <li className="share-btn">
                                    <div className="share_tooltip fade">
                                      <a href="/" target="_blank">
                                        <i className="fa fa-facebook"></i>
                                      </a>
                                      <a href="/" target="_blank">
                                        <i className="fa fa-twitter"></i>
                                      </a>
                                      <a href="/" target="_blank">
                                        <i className="fa fa-google-plus"></i>
                                      </a>
                                      <a href="/" target="_blank">
                                        <i className="fa fa-pinterest"></i>
                                      </a>
                                    </div>
                                    <span
                                      data-toggle="tooltip"
                                      data-placement="top"
                                      title="share"
                                    >
                                      <i className="fa fa-share-alt"></i>
                                    </span>
                                  </li>
                                  <li></li>
                                  <li></li>
                                </ul>
                              </figure>
                            </div>
                            <div className="item-body">
                              <div className="body-left">
                                <div className="info-row">
                                  <div className="rating">
                                    <span className="bottom-ratings">
                                      <span className="fa fa-star-o"></span>
                                      <span className="fa fa-star-o"></span>
                                      <span className="fa fa-star-o"></span>
                                      <span className="fa fa-star-o"></span>
                                      <span className="fa fa-star-o"></span>
                                      <span
                                        style={{ width: "70%" }}
                                        className="top-ratings"
                                      >
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                      </span>
                                    </span>
                                    <span className="star-text-right">
                                      15 Ratings
                                    </span>
                                  </div>

                                  <h2 className="property-title">
                                    <a href="/"> M3M Paragon 57</a>
                                  </h2>
                                  <h4 className="property-location">
                                    Shop in Sector 57 Gurgaon
                                  </h4>
                                </div>
                                <div className="table-list full-width info-row">
                                  <div className="cell">
                                    <div className="info-row amenities">
                                      <p>
                                        <span>Beds: 3</span>
                                        <span>Baths: 2</span>
                                        <span>Sqft: 1,965</span>
                                      </p>
                                    </div>
                                  </div>
                                  <div className="cell">
                                    <div className="phone">
                                      <a href="/" className="btn btn-primary">
                                        Details{" "}
                                        <i className="fa fa-angle-right fa-right"></i>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="item-foot date hide-on-list">
                            <div className="item-foot-left">
                              <p>
                                <i className="fa fa-user"></i>{" "}
                                <a href="/">Elite Ocean View Realty LLC</a>
                              </p>
                            </div>
                            <div className="item-foot-right">
                              <p>
                                <i className="fa fa-calendar"></i> 12 Days ago{" "}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="item"
                        style={{ marginTop: "1rem", marginBottom: "2rem" }}
                      >
                        <div
                          className="item-wrap"
                          style={{
                            boxShadow:
                              "rgba(0, 0, 0, 0.35) 0px 5px 15px;!important",
                          }}
                        >
                          <div className="property-item item-grid">
                            <div className="figure-block">
                              <figure className="item-thumb">
                                <div className="label-wrap hide-on-list">
                                  <span
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Favorite"
                                  >
                                    <i className="fa fa-heart-o fs-1 text-white shadow"></i>
                                  </span>
                                </div>
                                <span className="label-featured label label-success fs-5">
                                  Featured
                                </span>
                                <div className="price hide-on-list">
                                  <h3>₹ 1.2 - 8.33 Cr</h3>
                                </div>
                                <a href="/" className="hover-effect">
                                  <img
                                    // src="http://localhost/dwa/dwa/frontend/images/04_434x290.jpg"
                                    alt="thumb"
                                  />
                                </a>
                                <ul className="actions">
                                  <li className="share-btn">
                                    <div className="share_tooltip fade">
                                      <a href="/" target="_blank">
                                        <i className="fa fa-facebook"></i>
                                      </a>
                                      <a href="/" target="_blank">
                                        <i className="fa fa-twitter"></i>
                                      </a>
                                      <a href="/" target="_blank">
                                        <i className="fa fa-google-plus"></i>
                                      </a>
                                      <a href="/" target="_blank">
                                        <i className="fa fa-pinterest"></i>
                                      </a>
                                    </div>
                                    <span
                                      data-toggle="tooltip"
                                      data-placement="top"
                                      title="share"
                                    >
                                      <i className="fa fa-share-alt"></i>
                                    </span>
                                  </li>
                                  <li></li>
                                  <li></li>
                                </ul>
                              </figure>
                            </div>
                            <div className="item-body">
                              <div className="body-left">
                                <div className="info-row">
                                  <div className="rating">
                                    <span className="bottom-ratings">
                                      <span className="fa fa-star-o"></span>
                                      <span className="fa fa-star-o"></span>
                                      <span className="fa fa-star-o"></span>
                                      <span className="fa fa-star-o"></span>
                                      <span className="fa fa-star-o"></span>
                                      <span
                                        style={{ width: "70%" }}
                                        className="top-ratings"
                                      >
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                      </span>
                                    </span>
                                    <span className="star-text-right">
                                      15 Ratings
                                    </span>
                                  </div>

                                  <h2 className="property-title">
                                    <a href="/"> M3M Paragon 57</a>
                                  </h2>
                                  <h4 className="property-location">
                                    Shop in Sector 57 Gurgaon
                                  </h4>
                                </div>
                                <div className="table-list full-width info-row">
                                  <div className="cell">
                                    <div className="info-row amenities">
                                      <p>
                                        <span>Beds: 3</span>
                                        <span>Baths: 2</span>
                                        <span>Sqft: 1,965</span>
                                      </p>
                                    </div>
                                  </div>
                                  <div className="cell">
                                    <div className="phone">
                                      <a href="/" className="btn btn-primary">
                                        Details{" "}
                                        <i className="fa fa-angle-right fa-right"></i>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="item-foot date hide-on-list">
                            <div className="item-foot-left">
                              <p>
                                <i className="fa fa-user"></i>{" "}
                                <a href="/">Elite Ocean View Realty LLC</a>
                              </p>
                            </div>
                            <div className="item-foot-right">
                              <p>
                                <i className="fa fa-calendar"></i> 12 Days ago{" "}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="item"
                        style={{ marginTop: "1rem", marginBottom: "2rem" }}
                      >
                        <div
                          className="item-wrap"
                          style={{
                            boxShadow:
                              "rgba(0, 0, 0, 0.35) 0px 5px 15px;!important",
                          }}
                        >
                          <div className="property-item item-grid">
                            <div className="figure-block">
                              <figure className="item-thumb">
                                <div className="label-wrap hide-on-list">
                                  <span
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Favorite"
                                  >
                                    <i className="fa fa-heart-o fs-1 text-white shadow"></i>
                                  </span>
                                </div>
                                <span className="label-featured label label-success fs-5">
                                  Featured
                                </span>
                                <div className="price hide-on-list">
                                  <h3>₹ 1.2 - 8.33 Cr</h3>
                                </div>
                                <a href="/" className="hover-effect">
                                  <img
                                    // src="http://localhost/dwa/dwa/frontend/images/01_385x258.jpg"
                                    alt="thumb"
                                  />
                                </a>
                                <ul className="actions">
                                  <li className="share-btn">
                                    <div className="share_tooltip fade">
                                      <a href="/" target="_blank">
                                        <i className="fa fa-facebook"></i>
                                      </a>
                                      <a href="/" target="_blank">
                                        <i className="fa fa-twitter"></i>
                                      </a>
                                      <a href="/" target="_blank">
                                        <i className="fa fa-google-plus"></i>
                                      </a>
                                      <a href="/" target="_blank">
                                        <i className="fa fa-pinterest"></i>
                                      </a>
                                    </div>
                                    <span
                                      data-toggle="tooltip"
                                      data-placement="top"
                                      title="share"
                                    >
                                      <i className="fa fa-share-alt"></i>
                                    </span>
                                  </li>
                                  <li></li>
                                  <li></li>
                                </ul>
                              </figure>
                            </div>
                            <div className="item-body">
                              <div className="body-left">
                                <div className="info-row">
                                  <div className="rating">
                                    <span className="bottom-ratings">
                                      <span className="fa fa-star-o"></span>
                                      <span className="fa fa-star-o"></span>
                                      <span className="fa fa-star-o"></span>
                                      <span className="fa fa-star-o"></span>
                                      <span className="fa fa-star-o"></span>
                                      <span
                                        style={{ width: "70%" }}
                                        className="top-ratings"
                                      >
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                      </span>
                                    </span>
                                    <span className="star-text-right">
                                      15 Ratings
                                    </span>
                                  </div>

                                  <h2 className="property-title">
                                    <a href="/"> M3M Paragon 57</a>
                                  </h2>
                                  <h4 className="property-location">
                                    Shop in Sector 57 Gurgaon
                                  </h4>
                                </div>
                                <div className="table-list full-width info-row">
                                  <div className="cell">
                                    <div className="info-row amenities">
                                      <p>
                                        <span>Beds: 3</span>
                                        <span>Baths: 2</span>
                                        <span>Sqft: 1,965</span>
                                      </p>
                                    </div>
                                  </div>
                                  <div className="cell">
                                    <div className="phone">
                                      <a href="/" className="btn btn-primary">
                                        Details{" "}
                                        <i className="fa fa-angle-right fa-right"></i>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="item-foot date hide-on-list">
                            <div className="item-foot-left">
                              <p>
                                <i className="fa fa-user"></i>{" "}
                                <a href="/">Elite Ocean View Realty LLC</a>
                              </p>
                            </div>
                            <div className="item-foot-right">
                              <p>
                                <i className="fa fa-calendar"></i> 12 Days ago{" "}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="all-latest-pro pt-2">
        <div className="container">
          <div className="row text-center my-4">
            <div className="col-lg-12 col-12">
              <div className="main-h2-title">
                <h2> Top Developer </h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg col-md-12 col-12">
              <div className="marquee">
                <div className="inner">
                  <div className="pink-box">
                    <a href="/">
                      <img
                        // src="http://localhost/dwa/dwa/frontend/images/devloper logo/1.png"
                        alt="Developer Logo"
                      />
                    </a>
                  </div>

                  <div className="pink-box">
                    <a href="/">
                      <img
                        // src="http://localhost/dwa/dwa/frontend/images/devloper logo/2.png"
                        alt="Developer Logo"
                      />{" "}
                    </a>
                  </div>

                  <div className="pink-box">
                    <a href="/">
                      <img
                        // src="http://localhost/dwa/dwa/frontend/images/devloper logo/3.png"
                        alt="Developer Logo"
                      />{" "}
                    </a>
                  </div>

                  <div className="pink-box">
                    <a href="/">
                      <img
                        // src="http://localhost/dwa/dwa/frontend/images/devloper logo/4.png"
                        alt="Developer Logo"
                      />{" "}
                    </a>
                  </div>

                  <div className="pink-box">
                    <a href="/">
                      <img
                        // src="http://localhost/dwa/dwa/frontend/images/devloper logo/5.png"
                        alt="Developer Logo"
                      />{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="houzez-module-main module-white-bg">
        <div className="houzez-module module-title text-center">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-xs-12">
                <h2 style={{ marginTop: "3rem" }}>Location</h2>
                <h3 className="sub-heading">
                  Book space in amazing locations across the world
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div id="location-modul" className="houzez-module location-module grid">
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <div className="location-block">
                  <img
                    // src="http://localhost/dwa/dwa/frontend/images/resale.jpg"
                    width="100"
                    height="100"
                    alt=""
                  />
                  <a href="/" className="over-layer">
                    <h4 className="post">Office in IT Park</h4>
                    <span className="title">30 Properties</span>
                  </a>
                </div>
              </div>
              <div className="col-sm-8">
                <div className="location-block">
                  <img
                    // src="http://localhost/dwa/dwa/frontend/images/ultraluxary.jpg"
                    // width="770"
                    // height="370"
                    width="370"
                    height="370"
                    alt=""
                  />
                  <a href="/" className="over-layer">
                    <h4 className="post" style={{ marginLeft: "3rem" }}>
                      Office Space
                    </h4>
                    <span className="title">1 Property</span>
                  </a>
                </div>
              </div>
              <div className="col-sm-8">
                <div className="location-block">
                  <img
                    // src="http://localhost/dwa/dwa/frontend/images/02_770x370.jpg"
                    // width="770"
                    // height="370"
                    width="370"
                    height="370"
                    alt=""
                  />
                  <a href="/" className="over-layer">
                    <h4 className="post" style={{ marginLeft: "3rem" }}>
                      Commercial Shop
                    </h4>
                    <span className="title">11 Properties</span>
                  </a>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="location-block">
                  <img
                    // src="http://localhost/dwa/dwa/frontend/images/torrence.jpg"
                    // width="370"
                    // height="370"
                    width="370"
                    height="370"
                    alt=""
                  />
                  <a href="/" className="over-layer">
                    <h4 className="post">Commercial Shop</h4>
                    <span className="title">11 Properties</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="houzez-module-main pdng-50">
        <div className="houzez-module carousel-module popular-events">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="module-title-nav clearfix">
                  <div>
                    <h2 className="text-center">Popular Events</h2>
                  </div>
                </div>
              </div>

              <div className="col-sm-12 popular-events">
                <div className="row grid-row">
                  <div className="carousel properties-carousel-grid-1 slide-animated">
                    <div
                      className="item"
                      style={{ marginTop: "1rem", marginBottom: "2rem" }}
                    >
                      <div
                        className="item-wrap"
                        style={{
                          boxShadow:
                            "rgba(0, 0, 0, 0.35) 0px 5px 15px;!important",
                        }}
                      >
                        <div className="property-item item-grid">
                          <div className="figure-block">
                            <figure className="item-thumb">
                              <span
                                className="label-featured label label-success"
                                style={{ fontSize: "1.1rem!important" }}
                              >
                                {" "}
                                <i className="fa fa-calendar"> </i> 1st January,
                                2024{" "}
                              </span>

                              <div className="label-wrap hide-on-list">
                                <div
                                  className="label-status label label-default"
                                  style={{ fontSize: "1.1rem!important" }}
                                >
                                  <i className="far fa-clock"></i> 07:00 AM -
                                  11:00 AM{" "}
                                </div>
                              </div>

                              <a href="/" className="hover-effect">
                                <img
                                  // src="http://localhost/dwa/dwa/frontend/images/event/2 event.jpg"
                                  alt="thumb"
                                />
                              </a>
                              <ul className="actions">
                                <li className="share-btn">
                                  <div className="share_tooltip fade">
                                    <a href="/" target="_blank">
                                      <i className="fa fa-facebook"></i>
                                    </a>
                                    <a href="/" target="_blank">
                                      <i className="fa fa-twitter"></i>
                                    </a>
                                    <a href="/" target="_blank">
                                      <i className="fa fa-google-plus"></i>
                                    </a>
                                    <a href="/" target="_blank">
                                      <i className="fa fa-pinterest"></i>
                                    </a>
                                  </div>
                                  <span
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="share"
                                  >
                                    <i className="fa fa-share-alt"></i>
                                  </span>
                                </li>
                                <li>
                                  <span
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Favorite"
                                  >
                                    <i className="fa fa-heart-o"></i>
                                  </span>
                                </li>
                                <li></li>
                              </ul>
                            </figure>
                          </div>
                          <div className="item-body">
                            <div className="body-left">
                              <div className="info-row">
                                <h2
                                  className="property-title"
                                  style={{ whiteSpace: "wrap" }}
                                >
                                  <a href="/"> Dwarka Property Expo</a>
                                </h2>
                                <p className="card-text mb-2">
                                  <small className="text-muted">
                                    {" "}
                                    <i className="fas fa-map-marker-alt"></i>{" "}
                                    7601 East Treasure Dr. Miami Beach, FL 33141
                                  </small>
                                </p>
                              </div>
                              <div className="table-list full-width info-row">
                                <div className="cell">
                                  <div className="info-row amenities">
                                    <p>
                                      After the Success of 7 Editions of Dwarka
                                      Property
                                    </p>
                                  </div>
                                </div>
                                <div className="cell">
                                  <div className="phone">
                                    <a href="/" className="btn btn-primary">
                                      Details{" "}
                                      <i className="fa fa-angle-right fa-right"></i>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="item"
                      style={{ marginTop: "1rem", marginBottom: "2rem" }}
                    >
                      <div
                        className="item-wrap"
                        style={{
                          boxShadow:
                            "rgba(0, 0, 0, 0.35) 0px 5px 15px;!important",
                        }}
                      >
                        <div className="property-item item-grid">
                          <div className="figure-block">
                            <figure className="item-thumb">
                              <span
                                className="label-featured label label-success"
                                style={{ fontSize: "1.1rem!important" }}
                              >
                                {" "}
                                <i className="fa fa-calendar"> </i> 1st January,
                                2024{" "}
                              </span>

                              <div className="label-wrap hide-on-list">
                                <div
                                  className="label-status label label-default"
                                  style={{ fontSize: "1.1rem!importan" }}
                                >
                                  <i className="far fa-clock"></i> 07:00 AM -
                                  11:00 AM{" "}
                                </div>
                              </div>

                              <a href="/" className="hover-effect">
                                <img
                                  // src="http://localhost/dwa/dwa/frontend/images/event/1st event.jpg"
                                  alt="thumb"
                                />
                              </a>
                              <ul className="actions">
                                <li className="share-btn">
                                  <div className="share_tooltip fade">
                                    <a href="/" target="_blank">
                                      <i className="fa fa-facebook"></i>
                                    </a>
                                    <a href="/" target="_blank">
                                      <i className="fa fa-twitter"></i>
                                    </a>
                                    <a href="/" target="_blank">
                                      <i className="fa fa-google-plus"></i>
                                    </a>
                                    <a href="/" target="_blank">
                                      <i className="fa fa-pinterest"></i>
                                    </a>
                                  </div>
                                  <span
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="share"
                                  >
                                    <i className="fa fa-share-alt"></i>
                                  </span>
                                </li>
                                <li>
                                  <span
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Favorite"
                                  >
                                    <i className="fa fa-heart-o"></i>
                                  </span>
                                </li>
                                <li></li>
                              </ul>
                            </figure>
                          </div>
                          <div className="item-body">
                            <div className="body-left">
                              <div className="info-row">
                                <h2
                                  className="property-title"
                                  style={{ whiteSpace: "wrap" }}
                                >
                                  <a href="/">
                                    Sothebys Global Luxury Realty Conclave
                                  </a>
                                </h2>
                                <p
                                  className="card-text mb-2"
                                  style={{ whiteSpace: "wrap" }}
                                >
                                  <small className="text-muted">
                                    {" "}
                                    <i className="fas fa-map-marker-alt"></i> JW
                                    Marriott Hotel New Delhi Aerocity, India
                                  </small>
                                </p>
                              </div>
                              <div className="table-list full-width info-row">
                                <div className="cell">
                                  <div
                                    className="info-row amenities"
                                    style={{ whiteSpace: "wrap" }}
                                  >
                                    <p>
                                      The Sothebys Global Luxury Realty
                                      Conclave,
                                    </p>
                                  </div>
                                </div>
                                <div className="cell">
                                  <div className="phone">
                                    <a href="/" className="btn btn-primary">
                                      Details{" "}
                                      <i className="fa fa-angle-right fa-right"></i>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="item"
                      style={{ marginTop: "1rem", marginBottom: "2rem" }}
                    >
                      <div
                        className="item-wrap"
                        style={{
                          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                        }}
                      >
                        <div className="property-item item-grid">
                          <div className="figure-block">
                            <figure className="item-thumb">
                              <span
                                className="label-featured label label-success"
                                style={{ fontSize: "1.1rem!important" }}
                              >
                                {" "}
                                <i className="fa fa-calendar"> </i> 1st January,
                                2024{" "}
                              </span>

                              <div className="label-wrap hide-on-list">
                                <div
                                  className="label-status label label-default"
                                  style={{ fontSize: "1.1rem!important" }}
                                >
                                  <i className="far fa-clock"></i> 07:00 AM -
                                  11:00 AM{" "}
                                </div>
                              </div>
                              <a href="/" className="hover-effect">
                                <img
                                  // src="http://localhost/dwa/dwa/frontend/images/event/event.jpg"
                                  alt="thumb"
                                />
                              </a>
                              <ul className="actions">
                                <li className="share-btn">
                                  <div className="share_tooltip fade">
                                    <a href="/" target="_blank">
                                      <i className="fa fa-facebook"></i>
                                    </a>
                                    <a href="/" target="_blank">
                                      <i className="fa fa-twitter"></i>
                                    </a>
                                    <a href="/" target="_blank">
                                      <i className="fa fa-google-plus"></i>
                                    </a>
                                    <a href="/" target="_blank">
                                      <i className="fa fa-pinterest"></i>
                                    </a>
                                  </div>
                                  <span
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="share"
                                  >
                                    <i className="fa fa-share-alt"></i>
                                  </span>
                                </li>
                                <li>
                                  <span
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Favorite"
                                  >
                                    <i className="fa fa-heart-o"></i>
                                  </span>
                                </li>
                                <li></li>
                              </ul>
                            </figure>
                          </div>
                          <div className="item-body">
                            <div className="body-left">
                              <div className="info-row">
                                <h2
                                  className="property-title"
                                  style={{ whiteSpace: "wrap" }}
                                >
                                  <a href="/">Dwarka Property Expo</a>
                                </h2>

                                <p
                                  className="card-text mb-2"
                                  style={{ whiteSpace: "wrap" }}
                                >
                                  <small className="text-muted">
                                    {" "}
                                    <i className="fas fa-map-marker-alt"></i>{" "}
                                    7601 East Treasure Dr. Miami Beach, FL 33141
                                  </small>
                                </p>
                              </div>
                              <div className="table-list full-width info-row">
                                <div className="cell">
                                  <div className="info-row amenities">
                                    <p>
                                      After the Success of 7 Editions of Dwarka
                                      Property
                                    </p>
                                  </div>
                                </div>
                                <div className="cell">
                                  <div className="phone">
                                    <a href="/" className="btn btn-primary">
                                      Details{" "}
                                      <i className="fa fa-angle-right fa-right"></i>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="houzez-module-main module-white-bg">
        <div className="houzez-module module-title text-center">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-xs-12 mt-5">
                <h2>Noida Property Snapshot</h2>
                <h3 className="sub-heading">
                  Noida is the leading Noida property portal providing up to
                  date Real Estate For Sale in Noida. If you are looking for
                  property in Noida then Noida New Project is the ideal resource
                  for your Noida property needs
                </h3>
              </div>
            </div>

            <div className="row">
              <div className="col-md-3 col-sm-6">
                <div className="counter">
                  <div className="service-icon">
                    <span>
                      <i className="fa fa-industry"></i>
                    </span>
                  </div>
                  <div className="service-content">
                    <h3
                      className="title timer count-title count-number"
                      data-to="100"
                      data-speed="1500"
                    >
                      Web Design
                    </h3>
                    <p className="description">Factory</p>
                    <a href="/" className="read-more fa fa-plus"></a>
                  </div>
                </div>
              </div>

              <div className="col-md-3 col-sm-6">
                <div className="counter green">
                  <div className="service-icon">
                    <span>
                      <i className="fa fa-building"></i>
                    </span>
                  </div>
                  <div className="service-content">
                    <h3
                      className="title timer count-title count-number"
                      data-to="1700"
                      data-speed="1500"
                    >
                      Web Development
                    </h3>
                    <p className="description">Warehouse</p>
                    <a href="/" className="read-more fa fa-plus"></a>
                  </div>
                </div>
              </div>

              <div className="col-md-3 col-sm-6">
                <div className="counter blue">
                  <div className="service-icon">
                    <span>
                      <i className="fa fa-building"></i>
                    </span>
                  </div>
                  <div className="service-content">
                    <h3
                      className="title timer count-title count-number"
                      data-to="11900"
                      data-speed="1500"
                    >
                      Brand Building
                    </h3>
                    <p className="description">Commercial Showrooms</p>
                    <a href="/" className="read-more fa fa-plus"></a>
                  </div>
                </div>
              </div>

              <div className="col-md-3 col-sm-6">
                <div className="counter blue">
                  <div className="service-icon">
                    <span>
                      <i className="fa fa-building"></i>
                    </span>
                  </div>
                  <div className="service-content">
                    <h3
                      className="title timer count-title count-number"
                      data-to="157"
                      data-speed="1500"
                    >
                      Brand Building
                    </h3>
                    <p className="description">Office Spaces</p>
                    <a href="/" className="read-more fa fa-plus"></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="houzez-module-main pdng-50">
        <div className="houzez-module carousel-module">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="module-title-nav clearfix">
                  <div>
                    <h2 className="text-center" style={{ marginTop: "5rem" }}>
                      Latest Property
                    </h2>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-lg-12 col-12">
                <div className="row">
                  <div className="carousel properties-carousel-grid-1 slide-animated">
                    <div
                      className="item"
                      style={{ marginTop: "1rem", marginBottom: "2rem" }}
                    >
                      <div
                        className="item-wrap"
                        style={{
                          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                        }}
                      >
                        <div className="property-item item-grid">
                          <div className="figure-block">
                            <figure className="item-thumb">
                              <div className="label-wrap hide-on-list">
                                <div className="label-status label label-default">
                                  For Rent
                                </div>
                              </div>
                              <span className="label-featured label label-success">
                                Featured
                              </span>
                              <div className="price hide-on-list">
                                <h3>$350,000</h3>
                                <p className="rant">$21,000/mo</p>
                              </div>
                              <a href="/" className="hover-effect">
                                <img
                                  // src="http://localhost/dwa/dwa/frontend/images/07_434x434.jpg"
                                  alt="thumb"
                                />
                              </a>
                              <ul className="actions">
                                <li className="share-btn">
                                  <div className="share_tooltip fade">
                                    <a href="/" target="_blank">
                                      <i className="fa fa-facebook"></i>
                                    </a>
                                    <a href="/" target="_blank">
                                      <i className="fa fa-twitter"></i>
                                    </a>
                                    <a href="/" target="_blank">
                                      <i className="fa fa-google-plus"></i>
                                    </a>
                                    <a href="/" target="_blank">
                                      <i className="fa fa-pinterest"></i>
                                    </a>
                                  </div>
                                  <span
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="share"
                                  >
                                    <i className="fa fa-share-alt"></i>
                                  </span>
                                </li>
                                <li>
                                  <span
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Favorite"
                                  >
                                    <i className="fa fa-heart-o"></i>
                                  </span>
                                </li>
                                <li>
                                  <span
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Photos (12)"
                                  >
                                    <i className="fa fa-camera"></i>
                                  </span>
                                </li>
                              </ul>
                            </figure>
                          </div>
                          <div className="item-body">
                            <div className="body-left">
                              <div className="info-row">
                                <div className="rating">
                                  <span className="bottom-ratings">
                                    <span className="fa fa-star-o"></span>
                                    <span className="fa fa-star-o"></span>
                                    <span className="fa fa-star-o"></span>
                                    <span className="fa fa-star-o"></span>
                                    <span className="fa fa-star-o"></span>
                                    <span
                                      style={{ width: "70%" }}
                                      className="top-ratings"
                                    >
                                      <span className="fa fa-star"></span>
                                      <span className="fa fa-star"></span>
                                      <span className="fa fa-star"></span>
                                      <span className="fa fa-star"></span>
                                      <span className="fa fa-star"></span>
                                    </span>
                                  </span>
                                  <span className="star-text-right">
                                    15 Ratings
                                  </span>
                                </div>
                                <h2 className="property-title">
                                  <a href="/">Apartment Oceanview</a>
                                </h2>
                                <h4 className="property-location">
                                  7601 East Treasure Dr. Miami Beach, FL 33141
                                </h4>
                              </div>
                              <div className="table-list full-width info-row">
                                <div className="cell">
                                  <div className="info-row amenities">
                                    <p>
                                      <span>Beds: 3</span>
                                      <span>Baths: 2</span>
                                      <span>Sqft: 1,965</span>
                                    </p>
                                    <p>Single Family Home</p>
                                  </div>
                                </div>
                                <div className="cell">
                                  <div className="phone">
                                    <a href="/" className="btn btn-primary">
                                      Details{" "}
                                      <i className="fa fa-angle-right fa-right"></i>
                                    </a>
                                    <p>
                                      <a href="/">+1 (786) 225-0199</a>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="item-foot date hide-on-list">
                          <div className="item-foot-left">
                            <p>
                              <i className="fa fa-user"></i>{" "}
                              <a href="/">Elite Ocean View Realty LLC</a>
                            </p>
                          </div>
                          <div className="item-foot-right">
                            <p>
                              <i className="fa fa-calendar"></i> 12 Days ago{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="item"
                      style={{ marginTop: "1rem", marginBottom: "2rem" }}
                    >
                      <div
                        className="item-wrap"
                        style={{
                          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                        }}
                      >
                        <div className="property-item item-grid">
                          <div className="figure-block">
                            <figure className="item-thumb">
                              <div className="label-wrap hide-on-list">
                                <div className="label-status label label-default">
                                  For Rent
                                </div>
                              </div>
                              <span className="label-featured label label-success">
                                Featured
                              </span>
                              <div className="price hide-on-list">
                                <h3>$350,000</h3>
                                <p className="rant">$21,000/mo</p>
                              </div>
                              <a href="/" className="hover-effect">
                                <img
                                  // src="http://localhost/dwa/dwa/frontend/images/06_434x290.jpg"
                                  alt="thumb"
                                />
                              </a>
                              <ul className="actions">
                                <li className="share-btn">
                                  <div className="share_tooltip fade">
                                    <a href="/" target="_blank">
                                      <i className="fa fa-facebook"></i>
                                    </a>
                                    <a href="/" target="_blank">
                                      <i className="fa fa-twitter"></i>
                                    </a>
                                    <a href="/" target="_blank">
                                      <i className="fa fa-google-plus"></i>
                                    </a>
                                    <a href="/" target="_blank">
                                      <i className="fa fa-pinterest"></i>
                                    </a>
                                  </div>
                                  <span
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="share"
                                  >
                                    <i className="fa fa-share-alt"></i>
                                  </span>
                                </li>
                                <li>
                                  <span
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Favorite"
                                  >
                                    <i className="fa fa-heart-o"></i>
                                  </span>
                                </li>
                                <li></li>
                              </ul>
                            </figure>
                          </div>
                          <div className="item-body">
                            <div className="body-left">
                              <div className="info-row">
                                <div className="rating">
                                  <span className="bottom-ratings">
                                    <span className="fa fa-star-o"></span>
                                    <span className="fa fa-star-o"></span>
                                    <span className="fa fa-star-o"></span>
                                    <span className="fa fa-star-o"></span>
                                    <span className="fa fa-star-o"></span>
                                    <span
                                      style={{ width: "70%" }}
                                      className="top-ratings"
                                    >
                                      <span className="fa fa-star"></span>
                                      <span className="fa fa-star"></span>
                                      <span className="fa fa-star"></span>
                                      <span className="fa fa-star"></span>
                                      <span className="fa fa-star"></span>
                                    </span>
                                  </span>
                                  <span className="star-text-right">
                                    15 Ratings
                                  </span>
                                </div>
                                <h2 className="property-title">
                                  <a href="/">Apartment Oceanview</a>
                                </h2>
                                <h4 className="property-location">
                                  7601 East Treasure Dr. Miami Beach, FL 33141
                                </h4>
                              </div>
                              <div className="table-list full-width info-row">
                                <div className="cell">
                                  <div className="info-row amenities">
                                    <p>
                                      <span>Beds: 3</span>
                                      <span>Baths: 2</span>
                                      <span>Sqft: 1,965</span>
                                    </p>
                                    <p>Single Family Home</p>
                                  </div>
                                </div>
                                <div className="cell">
                                  <div className="phone">
                                    <a href="/" className="btn btn-primary">
                                      Details{" "}
                                      <i className="fa fa-angle-right fa-right"></i>
                                    </a>
                                    <p>
                                      <a href="/">+1 (786) 225-0199</a>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="item-foot date hide-on-list">
                          <div className="item-foot-left">
                            <p>
                              <i className="fa fa-user"></i>{" "}
                              <a href="/">Elite Ocean View Realty LLC</a>
                            </p>
                          </div>
                          <div className="item-foot-right">
                            <p>
                              <i className="fa fa-calendar"></i> 12 Days ago{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="item"
                      style={{ marginTop: "1rem", marginBottom: "2rem" }}
                    >
                      <div
                        className="item-wrap"
                        style={{
                          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                        }}
                      >
                        <div className="property-item item-grid">
                          <div className="figure-block">
                            <figure className="item-thumb">
                              <div className="label-wrap hide-on-list">
                                <div className="label-status label label-default">
                                  For Rent
                                </div>
                              </div>
                              <span className="label-featured label label-success">
                                Featured
                              </span>
                              <div className="price hide-on-list">
                                <h3>$350,000</h3>
                                <p className="rant">$21,000/mo</p>
                              </div>
                              <a href="/" className="hover-effect">
                                <img
                                  // src="http://localhost/dwa/dwa/frontend/images/01_385x258.jpg"
                                  alt="thumb"
                                />
                              </a>
                              <ul className="actions">
                                <li className="share-btn">
                                  <div className="share_tooltip fade">
                                    <a href="/" target="_blank">
                                      <i className="fa fa-facebook"></i>
                                    </a>
                                    <a href="/" target="_blank">
                                      <i className="fa fa-twitter"></i>
                                    </a>
                                    <a href="/" target="_blank">
                                      <i className="fa fa-google-plus"></i>
                                    </a>
                                    <a href="/" target="_blank">
                                      <i className="fa fa-pinterest"></i>
                                    </a>
                                  </div>
                                  <span
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="share"
                                  >
                                    <i className="fa fa-share-alt"></i>
                                  </span>
                                </li>
                                <li>
                                  <span
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Favorite"
                                  >
                                    <i className="fa fa-heart-o"></i>
                                  </span>
                                </li>
                                <li></li>
                              </ul>
                            </figure>
                          </div>
                          <div className="item-body">
                            <div className="body-left">
                              <div className="info-row">
                                <div className="rating">
                                  <span className="bottom-ratings">
                                    <span className="fa fa-star-o"></span>
                                    <span className="fa fa-star-o"></span>
                                    <span className="fa fa-star-o"></span>
                                    <span className="fa fa-star-o"></span>
                                    <span className="fa fa-star-o"></span>
                                    <span
                                      style={{ width: "70%" }}
                                      className="top-ratings"
                                    >
                                      <span className="fa fa-star"></span>
                                      <span className="fa fa-star"></span>
                                      <span className="fa fa-star"></span>
                                      <span className="fa fa-star"></span>
                                      <span className="fa fa-star"></span>
                                    </span>
                                  </span>
                                  <span className="star-text-right">
                                    15 Ratings
                                  </span>
                                </div>
                                <h2 className="property-title">
                                  <a href="/">Apartment Oceanview</a>
                                </h2>
                                <h4 className="property-location">
                                  7601 East Treasure Dr. Miami Beach, FL 33141
                                </h4>
                              </div>
                              <div className="table-list full-width info-row">
                                <div className="cell">
                                  <div className="info-row amenities">
                                    <p>
                                      <span>Beds: 3</span>
                                      <span>Baths: 2</span>
                                      <span>Sqft: 1,965</span>
                                    </p>
                                    <p>Single Family Home</p>
                                  </div>
                                </div>
                                <div className="cell">
                                  <div className="phone">
                                    <a href="/" className="btn btn-primary">
                                      Details{" "}
                                      <i className="fa fa-angle-right fa-right"></i>
                                    </a>
                                    <p>
                                      <a href="/">+1 (786) 225-0199</a>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="item-foot date hide-on-list">
                          <div className="item-foot-left">
                            <p>
                              <i className="fa fa-user"></i>{" "}
                              <a href="/">Elite Ocean View Realty LLC</a>
                            </p>
                          </div>
                          <div className="item-foot-right">
                            <p>
                              <i className="fa fa-calendar"></i> 12 Days ago{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="houzez-module-main module-white-bg pdng-50">
        <div className="houzez-module carousel-module">
          <div className="container">
            <div className="col-md-12 col-lg-12 col-12">
              <div className="module-title-nav clearfix">
                <div className="text-center">
                  <h2 style={{ marginTop: "3rem" }}>Articles</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <div className="row grid-row">
                    <div className="carousel properties-carousel-grid-1 slide-animated">
                      <div
                        className="item"
                        style={{ marginTop: "1rem", marginBottom: "2rem" }}
                      >
                        <div
                          className="item-wrap"
                          style={{
                            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                          }}
                        >
                          <div className="post-card-item">
                            <div className="figure-block">
                              <figure className="item-thumb">
                                <a href="/" className="hover-effect">
                                  <img
                                    // src="http://localhost/dwa/dwa/frontend/images/popular/4bhk.jpg"
                                    alt="thumb"
                                    width="434"
                                    height="434"
                                  />
                                </a>
                                <figcaption className="thumb-caption caption-table">
                                  <div className="caption-left">
                                    <ul className="list-inline post-card-meta">
                                      <li>
                                        <time dateTime="March 9, 2016"></time>
                                        <i className="fa fa-calendar"></i> March
                                        9, 2016
                                      </li>
                                      <li>
                                        <i className="fa fa-bookmark-o"></i>{" "}
                                        <a href="/">Real Estate</a>
                                      </li>
                                    </ul>
                                    <h3 className="post-card-title">
                                      What Will Real Estate Be Like In 100
                                      Years?
                                    </h3>
                                  </div>
                                  <div className="file-type">
                                    <i className="fa fa-file-o"></i>
                                  </div>
                                </figcaption>
                              </figure>
                            </div>
                            <div className="post-card-body">
                              <div className="post-card-author">
                                <div className="author-image">
                                  <img
                                    // src="http://localhost/dwa/dwa/frontend/images/128-2.jpg"
                                    alt="thumb"
                                    className="img-circle"
                                    width="40"
                                    height="40"
                                  />
                                </div>
                                <div className="author-name">
                                  <span style={{ fontWeight: "bold" }}>
                                    by John Doe
                                  </span>
                                  <span>
                                    <i className="fa fa-user"></i> Author
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        className="item"
                        style={{ marginTop: "1rem", marginBottom: "2rem" }}
                      >
                        <div
                          className="item-wrap"
                          style={{
                            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                          }}
                        >
                          <div className="post-card-item">
                            <div className="figure-block">
                              <figure className="item-thumb">
                                <a href="/" className="hover-effect">
                                  <img
                                    // src="http://localhost/dwa/dwa/frontend/images/popular/1bhk.jpg"
                                    alt="thumb"
                                    width="434"
                                    height="434"
                                  />
                                </a>
                                <figcaption className="thumb-caption caption-table">
                                  <div className="caption-left">
                                    <ul className="list-inline post-card-meta">
                                      <li>
                                        <time dateTime="March 9, 2016"></time>
                                        <i className="fa fa-calendar"></i> March
                                        9, 2016
                                      </li>
                                      <li>
                                        <i className="fa fa-bookmark-o"></i>{" "}
                                        <a href="/">Real Estate</a>
                                      </li>
                                    </ul>
                                    <h3 className="post-card-title">
                                      What Will Real Estate Be Like In 100
                                      Years?
                                    </h3>
                                  </div>
                                  <div className="file-type">
                                    <i className="fa fa-file-o"></i>
                                  </div>
                                </figcaption>
                              </figure>
                            </div>
                            <div className="post-card-body">
                              <div className="post-card-author">
                                <div className="author-image">
                                  <img
                                    // src="http://localhost/dwa/dwa/frontend/images/128-2.jpg"
                                    alt="thumb"
                                    className="img-circle"
                                    width="40"
                                    height="40"
                                  />
                                </div>
                                <div className="author-name">
                                  <span style={{ fontWeight: "bold" }}>
                                    by John Doe
                                  </span>
                                  <span>
                                    <i className="fa fa-user"></i> Author
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="item"
                        style={{ marginTop: "1rem", marginBottom: "2rem" }}
                      >
                        <div
                          className="item-wrap"
                          style={{
                            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                          }}
                        >
                          <div className="post-card-item">
                            <div className="figure-block">
                              <figure className="item-thumb">
                                <a href="/" className="hover-effect">
                                  <img
                                    // src="http://localhost/dwa/dwa/frontend/images/popular/2bhk.jpg"
                                    alt="thumb"
                                    width="434"
                                    height="434"
                                  />
                                </a>
                                <figcaption className="thumb-caption caption-table">
                                  <div className="caption-left">
                                    <ul className="list-inline post-card-meta">
                                      <li>
                                        <time dateTime="March 9, 2016"></time>
                                        <i className="fa fa-calendar"></i> March
                                        9, 2016
                                      </li>
                                      <li>
                                        <i className="fa fa-bookmark-o"></i>{" "}
                                        <a href="/">Real Estate</a>
                                      </li>
                                    </ul>
                                    <h3 className="post-card-title">
                                      What Will Real Estate Be Like In 100
                                      Years?
                                    </h3>
                                  </div>
                                  <div className="file-type">
                                    <i className="fa fa-file-o"></i>
                                  </div>
                                </figcaption>
                              </figure>
                            </div>
                            <div className="post-card-body">
                              <div className="post-card-author">
                                <div className="author-image">
                                  <img
                                    // src="http://localhost/dwa/dwa/frontend/images/128-2.jpg"
                                    alt="thumb"
                                    className="img-circle"
                                    width="40"
                                    height="40"
                                  />
                                </div>
                                <div className="author-name">
                                  <span
                                    style={{
                                      fontWeight: "bold",
                                      fontSize: "8px",
                                    }}
                                  >
                                    by John Doe
                                  </span>
                                  <span>
                                    <i className="fa fa-user"></i> Author
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="houzez-module-main module-white-bg pdng-50">
              <div className="houzez-module carousel-module">
                <div className="container">
                  <div className="row">
                    <div
                      className="col-md-12"
                      style={{ marginTop: "9rem", marginBottom: "6rem" }}
                    >
                      <div className="main-timeline">
                        <div
                          className="timeline text-center"
                          style={{ textAlign: "justify" }}
                        >
                          <a href="/" className="timeline-content">
                            <div className="timeline-icon"></div>
                            <h3 className="title">
                              Dwarka Expressway Projects | New, Prelaunch and
                              Upcoming Luxury Residential, Commercial Properties
                              in Gurugram
                            </h3>
                            <p>
                              Dwarkaexpresswaynewproject.in is available to you,
                              for taking active participation in your search of
                              best property in Gurugram for you.
                              <br />
                              <br />
                              Dwarkaexpresswaynewproject.in is available to you,
                              for taking active participation in your search of
                              best property in Gurugram for you.
                              <br />
                              <br />
                              This website is not an ordinary real estate
                              website; it's an active and updated Real estate
                              projects listing platform regarding best property
                              dealing for all stakeholders, in property
                              transactions. Whether it's builder, investor or
                              buyer, everyone have all the property information
                              according to his choice over this website.
                              <br />
                              Dwarkaexpresswaynewproject.in is available to you,
                              for taking active participation in your search of
                              best property in Gurugram for you. <br />
                              <br />
                              Dwarkaexpresswaynewproject.in is available to you,
                              for taking active participation in your search of
                              best property in Gurugram for you. <br />
                              <br />
                              This website is not an ordinary real estate
                              website; it's an active and updated Real estate
                              projects listing platform regarding best property
                              dealing for all stakeholders, in property
                              transactions. Whether it's builder, investor or
                              buyer, everyone have all the property information
                              according to his choice over this website.
                              Dwarkaexpresswaynewproject.in is available to you,
                              for taking active participation in your search of
                              best property in Gurugram for you. <br />
                              <br />
                              This website is not an ordinary real estate
                              website; it's an active and updated Real estate
                              projects listing platform regarding best property
                              dealing for all stakeholders, in property
                              transactions. Whether it's builder, investor or
                              buyer, everyone have all the property information
                              according to his choice over this website.
                            </p>{" "}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="light-blue container-fluid">
            <div className="col-md-4 col-xs-12">
              <img
                alt="Dwarka Expressway"
                className="contact-person"
                // src="https://www.dwarkaexpresswaynewproject.in/template/dwarka/images/person_mann.png"
              />
            </div>
            <div className="col-md-8 col-xs-12 mobile-set">
              <h3 className="co-white">
                Have any questions? We’re always happy to help!
              </h3>
              <p className="fo-18 co-white">
                If you have any questions about our products, implementation,
                integration, or anything else, our highly trained and friendly
                customer service representatives are here to help.
              </p>
              <a
                hrefLang="en-US"
                href="https://www.dwarkaexpresswaynewproject.in/contactus"
                className="btn btn-primary btn-lg"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

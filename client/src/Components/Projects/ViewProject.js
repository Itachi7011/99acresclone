import React, { useRef } from "react";
import OwlCarousel from "react-owl-carousel";
import amentity1 from "../Images/ProjectLandingPageImages/amenities/am-ico-247wate-active.svg";

const ViewProject = () => {
  const twobhkcarousel = useRef(null);
  const threebhkcarousel = useRef(null);

  return (
    <>
      <div style={{ marginTop: "10rem" }}>
        <section class="left-side-section">
          <div class="container">
            <div class="row">
              <div class="col-lg-8 col-md-8 col-12">
                <div
                  id="carouselExampleIndicators"
                  class="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div class="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="0"
                      class="active"
                      aria-current="true"
                      aria-label="Slide 1"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="1"
                      aria-label="Slide 2"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="2"
                      aria-label="Slide 3"
                    ></button>
                  </div>
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img
                        src={require("../Images/ProjectLandingPageImages/banner-home/1.png")}
                        class="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src={require("../Images/ProjectLandingPageImages/banner-home/2.png")}
                        class="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src={require("../Images/ProjectLandingPageImages/banner-home/3.png")}
                        class="d-block w-100"
                        alt="..."
                      />
                    </div>
                  </div>
                  <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </div>

              <div class="col-lg-4 col-md-4 col-12">
                <div class="side-bar-contant">
                  <div class="card">
                    <h1 class="heading-side">Puri Diplomatic Residences</h1>
                    <h6>Sector 111, Gurgaon</h6>
                    <hr />
                    <h1 class="price-text">₹ 3.95 Cr to 5.50 Cr</h1>
                    <span>
                      Status: <strong>New Launch</strong>
                    </span>

                    <div class="project-size d-flex mt-4">
                      <div class="box-1">
                        <div class="box-carcel">
                          <img
                            src={require("../Images/ProjectLandingPageImages/icons/building.png")}
                            class="img-fluid"
                            alt=""
                          />
                        </div>
                      </div>
                      <div class="box-2">
                        <span class="ms-2">Project Size</span>
                        <ul class="d-flex">
                          <li>692 units</li>
                          <li>5.41 Acres</li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <hr />

                      <div class="project-size d-flex">
                        <div class="box-1">
                          <div class="box-carcel">
                            <img
                              src={require("../Images/ProjectLandingPageImages/icons/cultivate.png")}
                              class="img-fluid"
                              alt=""
                            />
                          </div>

                          <div class="box-3">
                            <span>
                              <strong>Configurations:</strong> 3,4 BHK Flat from
                              2282 Sq. Ft.
                            </span>
                            <ul class="d-flex">
                              <li>to 3380 Sq. Ft. (Saleable)</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <a href="#" class="btn btn-call">
                      <i class="fas fa-phone-alt"></i> Get a Call Back
                    </a>

                    <div class="location-map">
                      <div class="map">
                        <img
                          src={require("../Images/ProjectLandingPageImages/map/map.jpg")}
                          alt="map"
                          height="70"
                        />
                        <button class="btn viewMap">
                          View on Map <i class="fas fa-arrow-right"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="contant-navigation contant-nav">
          <div class="container">
            <div class="row">
              <div class="col-lg-12 col-md-12 col-12">
                <nav class="navbar navbar-expand-lg">
                  <div
                    class="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                      <li class="nav-item">
                        <a class="nav-link active" href="#aboutProject">
                          About Project
                        </a>
                      </li>

                      <li class="nav-item">
                        <a class="nav-link" href="#floorPlans">
                          Floor Plan
                        </a>
                      </li>

                      <li class="nav-item">
                        <a class="nav-link" href="#price-list">
                          Price List
                        </a>
                      </li>

                      <li class="nav-item">
                        <a
                          class="nav-link"
                          href="#brochure
                "
                        >
                          Brochure
                        </a>
                      </li>

                      <li class="nav-item">
                        <a class="nav-link" href="#amenities">
                          Amenities
                        </a>
                      </li>

                      <li class="nav-item">
                        <a class="nav-link" href="#specifications">
                          Specifications
                        </a>
                      </li>

                      <li class="nav-item">
                        <a class="nav-link" href="#payment">
                          Payment
                        </a>
                      </li>

                      <li class="nav-item">
                        <a class="nav-link" href="#location">
                          Location
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </section>

        <section class="about-project-section Project-Info" id="aboutProject">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-8 col-md-8 col-12">
                <h2>Project Info</h2>
                <hr />
                <p>
                  Renowned builder Pyramid Infratech brings in a new super
                  luxurious residential launch named Pyramid Urban in
                  Sector-67A, Gurgaon. The project brings in meticulously
                  designed and architecturally brilliant 2 BHK apartments
                  available in varying sizes of 578 Sq. Ft. to 591 Sq. Ft. This
                  gated residential development sits close to the business
                  districts of Dwarka and Gurgaon. Pyramid Urban has 12 towers
                  and has 1330 units to offer. The project sprawls across around
                  10 acres and has over 50% of open spaces.
                  <br />
                  Total Project Area: 9.83 Acres (50%) Project Details: 12
                  Towers1330 Units 15 Floors Configurations: Apartment | 2 BHK{" "}
                  <br />
                  <h6>Key Highlights</h6>
                  Third Affordable Housing Project by Pyramid Infratech. Rates
                  of carpet area basis Assured unmatched price 10 Acres of lush
                  green project with 50% open area Home loan up to 90% <br />
                  <br />
                  <h6>Key features</h6>
                  High quality finishes and fittin Excellent workmanship that
                  lasts for years High quality doors and windows Kitchen that
                  will make you proud Provision of power and water back-up State
                  of the art contemporary construction and architecture Well
                  ventilated apartments with abundant natural lights Exclusive
                  Children and crèche area
                </p>
              </div>

              <div class="col-lg-4 col-md-4 col-12">
                <div class="project-info-side">
                  <div class="card shadow" data-aos="fade-left">
                    <h3>Contact our Real Expert Experts</h3>
                    <form action="" method="post">
                      <div class="form-group mb-4">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Please Enter Name"
                        />
                      </div>

                      <div class="form-group mb-4">
                        <input
                          type="email"
                          class="form-control"
                          placeholder="Please Enter Email"
                        />
                      </div>

                      <div class="form-group mb-4">
                        <input
                          type="email"
                          class="form-control"
                          placeholder="Please Enter Email"
                        />
                      </div>

                      <div class="input-group">
                        <div class="selectBox">
                          <select
                            id="ddlCountryCode"
                            name="countryCode"
                            data-value=""
                            class="form-select"
                          >
                            <option value="91">+91</option>
                            <option value="61">+61</option>
                            <option value="852">+852</option>
                            <option value="968">+968</option>
                            <option value="974">+974</option>
                            <option value="65">+65</option>
                            <option value="971">+971</option>
                            <option value="44">+44</option>
                            <option value="1">+1</option>
                            <option value="27">+27</option>
                            <option value="60">+60</option>
                            <option value="64">+64</option>
                            <option value="66">+66</option>
                            <option value="966">+966</option>
                            <option value="31">+31</option>
                            <option value="973">+973</option>
                            <option value="54">+54</option>
                            <option value="43">+43</option>
                            <option value="880">+880</option>
                            <option value="32">+32</option>
                            <option value="55">+55</option>
                            <option value="86">+86</option>
                            <option value="385">+385</option>
                            <option value="42">+42</option>
                            <option value="45">+45</option>
                            <option value="1809">+1809</option>
                            <option value="20">+20</option>
                            <option value="358">+358</option>
                            <option value="679">+679</option>
                            <option value="33">+33</option>
                            <option value="49">+49</option>
                            <option value="30">+30</option>
                            <option value="592">+592</option>
                            <option value="36">+36</option>
                            <option value="62">+62</option>
                            <option value="353">+353</option>
                            <option value="972">+972</option>
                            <option value="39">+39</option>
                            <option value="81">+81</option>
                            <option value="962">+962</option>
                            <option value="82">+82</option>
                            <option value="965">+965</option>
                            <option value="853">+853</option>
                            <option value="52">+52</option>
                            <option value="212">+212</option>
                            <option value="47">+47</option>
                            <option value="48">+48</option>
                            <option value="351">+351</option>
                            <option value="40">+40</option>
                            <option value="7">+7</option>
                            <option value="34">+34</option>
                            <option value="46">+46</option>
                            <option value="41">+41</option>
                            <option value="1868">+1868</option>
                            <option value="216">+216</option>
                            <option value="90">+90</option>
                            <option value="84">+84</option>
                            <option value="91">+91</option>
                            <option value="61">+61</option>
                            <option value="852">+852</option>
                            <option value="968">+968</option>
                            <option value="974">+974</option>
                            <option value="65">+65</option>
                            <option value="971">+971</option>
                            <option value="44">+44</option>
                            <option value="1">+1</option>
                            <option value="27">+27</option>
                            <option value="60">+60</option>
                            <option value="64">+64</option>
                            <option value="66">+66</option>
                            <option value="966">+966</option>
                            <option value="31">+31</option>
                            <option value="973">+973</option>
                            <option value="54">+54</option>
                            <option value="43">+43</option>
                            <option value="880">+880</option>
                            <option value="32">+32</option>
                            <option value="55">+55</option>
                            <option value="86">+86</option>
                            <option value="385">+385</option>
                            <option value="42">+42</option>
                            <option value="45">+45</option>
                            <option value="1809">+1809</option>
                            <option value="20">+20</option>
                            <option value="358">+358</option>
                            <option value="679">+679</option>
                            <option value="33">+33</option>
                            <option value="49">+49</option>
                            <option value="30">+30</option>
                            <option value="592">+592</option>
                            <option value="36">+36</option>
                            <option value="62">+62</option>
                            <option value="353">+353</option>
                            <option value="972">+972</option>
                            <option value="39">+39</option>
                            <option value="81">+81</option>
                            <option value="962">+962</option>
                            <option value="82">+82</option>
                            <option value="965">+965</option>
                            <option value="853">+853</option>
                            <option value="52">+52</option>
                            <option value="212">+212</option>
                            <option value="47">+47</option>
                            <option value="48">+48</option>
                            <option value="351">+351</option>
                            <option value="40">+40</option>
                            <option value="7">+7</option>
                            <option value="34">+34</option>
                            <option value="46">+46</option>
                            <option value="41">+41</option>
                            <option value="1868">+1868</option>
                            <option value="216">+216</option>
                            <option value="90">+90</option>
                            <option value="84">+84</option>
                            <option value="91">+91</option>
                            <option value="61">+61</option>
                            <option value="852">+852</option>
                            <option value="968">+968</option>
                            <option value="974">+974</option>
                            <option value="65">+65</option>
                            <option value="971">+971</option>
                            <option value="44">+44</option>
                            <option value="1">+1</option>
                            <option value="27">+27</option>
                            <option value="60">+60</option>
                            <option value="64">+64</option>
                            <option value="66">+66</option>
                            <option value="966">+966</option>
                            <option value="31">+31</option>
                            <option value="973">+973</option>
                            <option value="54">+54</option>
                            <option value="43">+43</option>
                            <option value="880">+880</option>
                            <option value="32">+32</option>
                            <option value="55">+55</option>
                            <option value="86">+86</option>
                            <option value="385">+385</option>
                            <option value="42">+42</option>
                            <option value="45">+45</option>
                            <option value="1809">+1809</option>
                            <option value="20">+20</option>
                            <option value="358">+358</option>
                            <option value="679">+679</option>
                            <option value="33">+33</option>
                            <option value="49">+49</option>
                            <option value="30">+30</option>
                            <option value="592">+592</option>
                            <option value="36">+36</option>
                            <option value="62">+62</option>
                            <option value="353">+353</option>
                            <option value="972">+972</option>
                            <option value="39">+39</option>
                            <option value="81">+81</option>
                            <option value="962">+962</option>
                            <option value="82">+82</option>
                            <option value="965">+965</option>
                            <option value="853">+853</option>
                            <option value="52">+52</option>
                            <option value="212">+212</option>
                            <option value="47">+47</option>
                            <option value="48">+48</option>
                            <option value="351">+351</option>
                            <option value="40">+40</option>
                            <option value="7">+7</option>
                            <option value="34">+34</option>
                            <option value="46">+46</option>
                            <option value="41">+41</option>
                            <option value="1868">+1868</option>
                            <option value="216">+216</option>
                            <option value="90">+90</option>
                            <option value="84">+84</option>
                          </select>
                        </div>
                        <input
                          autocomplete="new-password"
                          type="tel"
                          id="mobile"
                          name="mobile"
                          max="15"
                          placeholder="Phone Number"
                          class="form-control"
                          maxlength="15"
                          value=""
                          required=""
                        />
                      </div>

                      <button type="submit" class="btn btn-button">
                        Submit <i class="fas fa-arrow-circle-right"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="floor-plans" id="floorPlans">
          <div class="container">
            <div class="row">
              <div class="col-lg-12 col-md-12 col-12">
                <div class="card">
                  <h2>Floor Plans & Layout</h2>

                  <ul
                    class="nav nav-pills mb-4"
                    id="pills-tab"
                    role="tablist"
                    // style={{display:"inline-block"}}
                  >
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link active"
                        id="pills-2bhk-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-2bhk"
                        type="button"
                        role="tab"
                        aria-controls="pills-2bhk"
                        aria-selected="true"
                        onClick={() => {
                          if (twobhkcarousel.current) {
                            twobhkcarousel.current.style.display = "block";
                          }
                          if (threebhkcarousel.current) {
                            threebhkcarousel.current.style.display = "none";
                          }
                        }}
                      >
                        2 BHK
                      </button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link"
                        id="pills-3bhk-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-3bhk"
                        type="button"
                        role="tab"
                        aria-controls="pills-3bhk"
                        aria-selected="false"
                        onClick={() => {
                          if (threebhkcarousel.current)
                            threebhkcarousel.current.style.display = "block";
                          if (twobhkcarousel.current)
                            twobhkcarousel.current.style.display = "none";
                        }}
                      >
                        3 BHK
                      </button>
                    </li>
                  </ul>
                  <div ref={twobhkcarousel} style={{ display: "block" }}>
                    <OwlCarousel
                     
                      items={5}
                      className="owl-theme"
                      nav
                      margin={8}
                    >
                      {" "}
                      <div class="col item">
                        <div class="card card-inner">
                          <img
                            src={require("../Images/ProjectLandingPageImages/floor-plane/1.png")}
                            class="card-img-top"
                            alt="..."
                          />
                          <div class="card-body">
                            <h5 class="card-title">
                              2 BHK 2282 Sq. Ft. Apartment
                            </h5>
                            <div class="specification-div">
                              <span class="specification">2 Bedrooms</span>
                            </div>

                            <div class="price-div">
                              <span class="price-text">Price</span>
                              <br />
                              <span class="price">₹ 1.95 Cr</span>
                            </div>
                            <div class="get-call-btn">
                              <a href="#" class="get-call-back">
                                <i class="fas fa-phone-alt"></i> Get a Call Back
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col item">
                        <div class="card card-inner">
                          <img
                            src={require("../Images/ProjectLandingPageImages/floor-plane/1.png")}
                            class="card-img-top"
                            alt="..."
                          />
                          <div class="card-body">
                            <h5 class="card-title">
                              2 BHK 2282 Sq. Ft. Apartment
                            </h5>
                            <div class="specification-div">
                              <span class="specification">2 Bedrooms</span>
                            </div>

                            <div class="price-div">
                              <span class="price-text">Price</span>
                              <br />
                              <span class="price">₹ 1.95 Cr</span>
                            </div>
                            <div class="get-call-btn">
                              <a href="#" class="get-call-back">
                                <i class="fas fa-phone-alt"></i> Get a Call Back
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>{" "}
                      <div class="col item">
                        <div class="card card-inner">
                          <img
                            src={require("../Images/ProjectLandingPageImages/floor-plane/1.png")}
                            class="card-img-top"
                            alt="..."
                          />
                          <div class="card-body">
                            <h5 class="card-title">
                              2 BHK 2282 Sq. Ft. Apartment
                            </h5>
                            <div class="specification-div">
                              <span class="specification">2 Bedrooms</span>
                            </div>

                            <div class="price-div">
                              <span class="price-text">Price</span>
                              <br />
                              <span class="price">₹ 1.95 Cr</span>
                            </div>
                            <div class="get-call-btn">
                              <a href="#" class="get-call-back">
                                <i class="fas fa-phone-alt"></i> Get a Call Back
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col item">
                        <div class="card card-inner">
                          <img
                            src={require("../Images/ProjectLandingPageImages/floor-plane/1.png")}
                            class="card-img-top"
                            alt="..."
                          />
                          <div class="card-body">
                            <h5 class="card-title">
                              2 BHK 2282 Sq. Ft. Apartment
                            </h5>
                            <div class="specification-div">
                              <span class="specification">2 Bedrooms</span>
                            </div>

                            <div class="price-div">
                              <span class="price-text">Price</span>
                              <br />
                              <span class="price">₹ 1.95 Cr</span>
                            </div>
                            <div class="get-call-btn">
                              <a href="#" class="get-call-back">
                                <i class="fas fa-phone-alt"></i> Get a Call Back
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col item">
                        <div class="card card-inner">
                          <img
                            src={require("../Images/ProjectLandingPageImages/floor-plane/1.png")}
                            class="card-img-top"
                            alt="..."
                          />
                          <div class="card-body">
                            <h5 class="card-title">
                              2 BHK 2282 Sq. Ft. Apartment
                            </h5>
                            <div class="specification-div">
                              <span class="specification">2 Bedrooms</span>
                            </div>

                            <div class="price-div">
                              <span class="price-text">Price</span>
                              <br />
                              <span class="price">₹ 1.95 Cr</span>
                            </div>
                            <div class="get-call-btn">
                              <a href="#" class="get-call-back">
                                <i class="fas fa-phone-alt"></i> Get a Call Back
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col item">
                        <div class="card card-inner">
                          <img
                            src={require("../Images/ProjectLandingPageImages/floor-plane/1.png")}
                            class="card-img-top"
                            alt="..."
                          />
                          <div class="card-body">
                            <h5 class="card-title">
                              2 BHK 2282 Sq. Ft. Apartment
                            </h5>
                            <div class="specification-div">
                              <span class="specification">2 Bedrooms</span>
                            </div>

                            <div class="price-div">
                              <span class="price-text">Price</span>
                              <br />
                              <span class="price">₹ 1.95 Cr</span>
                            </div>
                            <div class="get-call-btn">
                              <a href="#" class="get-call-back">
                                <i class="fas fa-phone-alt"></i> Get a Call Back
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </OwlCarousel>
                  </div>

                  <div ref={threebhkcarousel} style={{ display: "none" }}>
                    <OwlCarousel
                      
                      items={5}
                      className="owl-theme"
                      nav
                      margin={8}
                    >
                      <div class="col item">
                        <div class="card card-inner">
                          <img
                            src={require("../Images/ProjectLandingPageImages/floor-plane/1.png")}
                            class="card-img-top"
                            alt="..."
                          />
                          <div class="card-body">
                            <h5 class="card-title">
                              3 BHK 2282 Sq. Ft. Apartment
                            </h5>
                            <div class="specification-div">
                              <span class="specification">3 Bedrooms</span>
                            </div>

                            <div class="price-div">
                              <span class="price-text">Price</span>
                              <br />
                              <span class="price">₹ 3.95 Cr</span>
                            </div>
                            <div class="get-call-btn">
                              <a href="#" class="get-call-back">
                                <i class="fas fa-phone-alt"></i> Get a Call Back
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="col item">
                        <div class="card card-inner">
                          <img
                            src={require("../Images/ProjectLandingPageImages/floor-plane/1.png")}
                            class="card-img-top"
                            alt="..."
                          />
                          <div class="card-body">
                            <h5 class="card-title">
                              3 BHK 2282 Sq. Ft. Apartment
                            </h5>
                            <div class="specification-div">
                              <span class="specification">3 Bedrooms</span>
                            </div>

                            <div class="price-div">
                              <span class="price-text">Price</span>
                              <br />
                              <span class="price">₹ 3.95 Cr</span>
                            </div>
                            <div class="get-call-btn">
                              <a href="#" class="get-call-back">
                                <i class="fas fa-phone-alt"></i> Get a Call Back
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="col item">
                        <div class="card card-inner">
                          <img
                            src={require("../Images/ProjectLandingPageImages/floor-plane/1.png")}
                            class="card-img-top"
                            alt="..."
                          />
                          <div class="card-body">
                            <h5 class="card-title">
                              3 BHK 2282 Sq. Ft. Apartment
                            </h5>
                            <div class="specification-div">
                              <span class="specification">3 Bedrooms</span>
                            </div>

                            <div class="price-div">
                              <span class="price-text">Price</span>
                              <br />
                              <span class="price">₹ 3.95 Cr</span>
                            </div>
                            <div class="get-call-btn">
                              <a href="#" class="get-call-back">
                                <i class="fas fa-phone-alt"></i> Get a Call Back
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="col item">
                        <div class="card card-inner">
                          <img
                            src={require("../Images/ProjectLandingPageImages/floor-plane/1.png")}
                            class="card-img-top"
                            alt="..."
                          />
                          <div class="card-body">
                            <h5 class="card-title">
                              3 BHK 2282 Sq. Ft. Apartment
                            </h5>
                            <div class="specification-div">
                              <span class="specification">3 Bedrooms</span>
                            </div>

                            <div class="price-div">
                              <span class="price-text">Price</span>
                              <br />
                              <span class="price">₹ 3.95 Cr</span>
                            </div>
                            <div class="get-call-btn">
                              <a href="#" class="get-call-back">
                                <i class="fas fa-phone-alt"></i> Get a Call Back
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="col item">
                        <div class="card card-inner">
                          <img
                            src={require("../Images/ProjectLandingPageImages/floor-plane/1.png")}
                            class="card-img-top"
                            alt="..."
                          />
                          <div class="card-body">
                            <h5 class="card-title">
                              3 BHK 2282 Sq. Ft. Apartment
                            </h5>
                            <div class="specification-div">
                              <span class="specification">3 Bedrooms</span>
                            </div>

                            <div class="price-div">
                              <span class="price-text">Price</span>
                              <br />
                              <span class="price">₹ 3.95 Cr</span>
                            </div>
                            <div class="get-call-btn">
                              <a href="#" class="get-call-back">
                                <i class="fas fa-phone-alt"></i> Get a Call Back
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="col item">
                        <div class="card card-inner">
                          <img
                            src={require("../Images/ProjectLandingPageImages/floor-plane/1.png")}
                            class="card-img-top"
                            alt="..."
                          />
                          <div class="card-body">
                            <h5 class="card-title">
                              3 BHK 2282 Sq. Ft. Apartment
                            </h5>
                            <div class="specification-div">
                              <span class="specification">3 Bedrooms</span>
                            </div>

                            <div class="price-div">
                              <span class="price-text">Price</span>
                              <br />
                              <span class="price">₹ 3.95 Cr</span>
                            </div>
                            <div class="get-call-btn">
                              <a href="#" class="get-call-back">
                                <i class="fas fa-phone-alt"></i> Get a Call Back
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="col item">
                        <div class="card card-inner">
                          <img
                            src={require("../Images/ProjectLandingPageImages/floor-plane/1.png")}
                            class="card-img-top"
                            alt="..."
                          />
                          <div class="card-body">
                            <h5 class="card-title">
                              3 BHK 2282 Sq. Ft. Apartment
                            </h5>
                            <div class="specification-div">
                              <span class="specification">3 Bedrooms</span>
                            </div>

                            <div class="price-div">
                              <span class="price-text">Price</span>
                              <br />
                              <span class="price">₹ 3.95 Cr</span>
                            </div>
                            <div class="get-call-btn">
                              <a href="#" class="get-call-back">
                                <i class="fas fa-phone-alt"></i> Get a Call Back
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </OwlCarousel>
                  </div>

                  {/* <div class="2bhk-section">
                    <div class="container">
                      <div class="row row-cols-1 row-cols-md-3 g-4">
                        <div class="owl-carousel owl-theme"></div>
                      </div>
                    </div>
                  </div> */}

                  <div class="tab-content" id="pills-tabContent">
                    <div
                      class="tab-pane fade show active"
                      id="pills-2bhk"
                      role="tabpanel"
                      aria-labelledby="pills-2bhk-tab"
                    ></div>

                    <div
                      class="tab-pane fade"
                      id="pills-3bhk"
                      role="tabpanel"
                      aria-labelledby="pills-3bhk-tab"
                    >
                      <div class="3bhk-section">
                        <div class="container">
                          <div class="row row-cols-1 row-cols-md-3 g-4 justify-content-center">
                            <div class="owl-carousel owl-theme"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="price-list-section" id="price-list">
          <div class="container">
            <h2>Price List</h2>

            <hr />
            <div class="row">
              <div class="col-lg-4 col-md-4 col-12">
                <div class="list-group">
                  <div class="top-heading">
                    <h5>Unit Type</h5>
                  </div>
                  <a href="#" class="list-group-item list-group-item-action">
                    3 BHK 2282 Sq. Ft. (Apartment)
                  </a>
                  <a href="#" class="list-group-item list-group-item-action">
                    3 BHK 2440 Sq. Ft. (Apartment)
                  </a>
                  <a
                    href="#"
                    class="list-group-item list-group-item-action list-group-item-light"
                  >
                    4 BHK 3380 Sq. Ft. (Apartment)
                  </a>
                </div>
              </div>
              <div class="col-lg-4 col-md-4 col-12">
                <div class="list-group">
                  <div class="top-heading">
                    <h5>Area</h5>
                  </div>
                  <a href="#" class="list-group-item list-group-item-action">
                    2282 Sq. Ft. (Saleable)
                  </a>
                  <a href="#" class="list-group-item list-group-item-action">
                    2440 Sq. Ft. (Saleable)
                  </a>
                  <a href="#" class="list-group-item list-group-item-action">
                    3380 Sq. Ft. (Saleable)
                  </a>
                </div>
              </div>
              <div class="col-lg-4 col-md-4 col-12">
                <div class="list-group">
                  <div class="top-heading">
                    <h5>New Home Price*</h5>
                  </div>
                  <a href="#" class="list-group-item list-group-item-action">
                    ₹ 3.95 Cr
                  </a>
                  <a href="#" class="list-group-item list-group-item-action">
                    ₹ 3.95 Cr
                  </a>
                  <a href="#" class="list-group-item list-group-item-action">
                    ₹ 3.95 Cr
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="broucher-section" id="brochure">
          <div class="container">
            <h2>Brochure</h2>

            <hr />
            <div class="row">
              <div class="col-lg-12 col-md-12 col-12">
                <img
                  src={require("../Images/ProjectLandingPageImages/banner-home/2.png")}
                  class="img-fluid"
                  alt=""
                />

                <div class="brochure-image">
                  <object style={{marginTop:"-10rem"}}
                    data="https://doc.squareyards.com/ProjectKnowledge/Brochure_425e7b98e6704564aa64e41fbf56f521.pdf"
                    type="application/pdf"
                    width="500"
                    height="687"
                  >
                    <iframe
                      src="https://doc.squareyards.com/ProjectKnowledge/Brochure_425e7b98e6704564aa64e41fbf56f521.pdf"
                      width="500"
                      height="687"
                    >
                      <p>This browser does not support PDF!</p>
                    </iframe>
                  </object>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="amenities" id="amenities">
          <div class="container">
            <h2>Amenities</h2>
            <hr />

            <OwlCarousel
                     
                     items={5}
                     className="owl-theme"
                     nav
                     margin={8}
                   >
   <div class="item">
                  <div class="serviceBox green">
                    <div class="service-icon">
                      <a href="#">
                        <img src={amentity1} alt="amenity" />
                      </a>
                    </div>
                    <div class="service-content">
                      <h3>Treated Water Supply</h3>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="serviceBox brown">
                    <div class="service-icon">
                      <a href="">
                        <img
                          src={require("../Images/ProjectLandingPageImages/amenities/am-ico-24x7secu-active.svg")}
                          src="./assets/image/amenities/"
                        />
                      </a>
                    </div>
                    <div class="service-content">
                      <h3>24 x 7 Security</h3>
                    </div>
                  </div>
                </div>

                <div class="item">
                  <div class="serviceBox green">
                    <div class="service-icon">
                      <a href="">
                        <img src="./assets/image/amenities/am-ico-badminto-active.svg" />
                      </a>
                    </div>
                    <div class="service-content">
                      <h3>Badminton Court(s)</h3>
                    </div>
                  </div>
                </div>

                <div class="item">
                  <div class="serviceBox red">
                    <div class="service-icon">
                      <a href="">
                        <img src="./assets/image/amenities/am-ico-cardsroo-active.svg" />
                      </a>
                    </div>
                    <div class="service-content">
                      <h3>Cards Room</h3>
                    </div>
                  </div>
                </div>

                <div class="item">
                  <div class="serviceBox yellow">
                    <div class="service-icon">
                      <a href="">
                        <img src="./assets/image/amenities/am-ico-cctvvide-active.svg" />
                      </a>
                    </div>
                    <div class="service-content">
                      <h3>CCTV / Video Surveillance</h3>
                    </div>
                  </div>
                </div>

                <div class="item">
                  <div class="serviceBox red">
                    <div class="service-icon">
                      <a href="">
                        <img src="./assets/image/amenities/am-ico-clubhous-active.svg" />
                      </a>
                    </div>
                    <div class="service-content">
                      <h3>Clubhouse </h3>
                    </div>
                  </div>
                </div>

                <div class="item">
                  <div class="serviceBox green">
                    <div class="service-icon">
                      <a href="">
                        <img src="./assets/image/amenities/am-ico-ecofrien-active.svg" />
                      </a>
                    </div>
                    <div class="service-content">
                      <h3>Eco Friendly</h3>
                    </div>
                  </div>
                </div>

                <div class="item">
                  <div class="serviceBox yellow">
                    <div class="service-icon">
                      <a href="">
                        <img src="./assets/image/amenities/am-ico-firefigh-active.svg" />
                      </a>
                    </div>
                    <div class="service-content">
                      <h3>Fire Fighting Systems</h3>
                    </div>
                  </div>
                </div>

                <div class="item">
                  <div class="serviceBox red">
                    <div class="service-icon">
                      <a href="">
                        <img src="./assets/image/amenities/am-ico-gymnasiu-active.svg" />
                      </a>
                    </div>
                    <div class="service-content">
                      <h3>Gymnasium</h3>
                    </div>
                  </div>
                </div>

                <div class="item">
                  <div class="serviceBox yellow">
                    <div class="service-icon">
                      <a href="">
                        <img src="./assets/image/amenities/am-ico-indoorga-active.svg" />
                      </a>
                    </div>
                    <div class="service-content">
                      <h3>Indoor Games</h3>
                    </div>
                  </div>
                </div>

                <div class="item">
                  <div class="serviceBox yellow">
                    <div class="service-icon">
                      <a href="">
                        <img src="./assets/image/amenities/am-ico-intercom-active.svg" />
                      </a>
                    </div>
                    <div class="service-content">
                      <h3>Intercom Facility</h3>
                    </div>
                  </div>
                </div>

                <div class="item">
                  <div class="serviceBox yellow">
                    <div class="service-icon">
                      <a href="">
                        <img src="./assets/image/amenities/am-ico-joggingc-active.svg" />
                      </a>
                    </div>
                    <div class="service-content">
                      <h3>Jogging / Cycle Track</h3>
                    </div>
                  </div>
                </div>
                    
                    </OwlCarousel>


             








          </div>
        </section>

        <section class="specification-section">
          <div class="container">
            <h2>Specification</h2>
            <hr />
            <div class="row justify-content-center">
              <div class="col-lg-3 col-md-3 col-3">
                <h6>Drawing/Lobby</h6>
                <h6>Bedrooms</h6>
                <h6>Toilets / Kitchen / Balcony</h6>
                <h6>Kitchen</h6>
                <h6>Fixtures & Fittings</h6>
                <h6 class="windows">Windows</h6>
                <h6>Doors & Door Frames</h6>
                <h6 class="common-area">Common Area / Lift Lobby</h6>
                <h6>Cinaware</h6>
                <h6>Electrical</h6>
              </div>

              <div class="col-lg-5 col-md-5 col-9" id="specifications">
                <div class="specification-content">
                  <h6 class="ps-1">
                    Flooring: Tiles / IPS Wall Ceiling Finish: OBD / color wash
                  </h6>

                  <h6> IPS Wall Ceiling Finish: OBD / color wash</h6>

                  <h6 class="toilet-section">Tiles / IPS</h6>

                  <h6 class="pt-4 pt-lg-2">
                    Single Bowl Stainless sink and CP Fittings
                  </h6>

                  <h6>
                    Stone / Tiles / Plaster Finish Wall & Tiles up to 2 feet
                    high above Marble / Tile counter and OBD / Color Wash in
                    balance area
                  </h6>

                  <h6 class="pt-3 pt-lg-0">
                    Hardwood / MS Z-Section / Fiber / Composite / Aluminum frame
                    windows etc.
                  </h6>

                  <h6 class="pt-3 pt-lg-0">
                    Hardwood / M.S / Fiber Door frames with Flush Door Shutter /
                    Composite Door Shutter / Fiber Door Shutter etc
                  </h6>

                  <h6 class="pt-3 pt-lg-2">Stone / Tiles / IPS</h6>

                  <h6 class="pt-5 pt-lg-3">Standard Fitting</h6>

                  <h6 class="pt-2 pt-lg-4">
                    ISI marked products for wiring, switches, and Circuits
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="payment-option" id="payment">
          <div class="container">
            <h2>Home Loan Offers</h2>
            <div class="row justify-content-center">
              <div class="col-lg-2 col-12">
                <div class="bank-details-check d-flex">
                  <input type="checkbox" class="form-check" />
                  <img
                    src={require("../Images/ProjectLandingPageImages/bank logo/sbi.png")}
                    class="img-fluid ms-2"
                  />
                </div>
                <h6>State Bank of India</h6>
              </div>

              <div class="col-lg-2 col-12">
                <h6>Loan Amount</h6>
                <h6 class="loan-amount">₹ 3,19,95,000</h6>
              </div>

              <div class="col-lg-2 col-12">
                <h6>Interest Rate</h6>
                <h6 class="interest-rate">Starts 8.45%</h6>
              </div>

              <div class="col-lg-2 col-12">
                <h6>EMI</h6>
                <h6 class="emi">₹ 2,76,648</h6>
              </div>

              <div class="col-lg-2 col-12">
                <h6>Total Tenure</h6>
                <h6 class=" ">20 Years</h6>
              </div>
            </div>

            <div class="row justify-content-center">
              <div class="col-lg-2 col-12">
                <div class="bank-details-check d-flex">
                  <input type="checkbox" class="form-check" />
                  <img
                    src={require("../Images/ProjectLandingPageImages/bank logo/hdfc.png")}
                    class="img-fluid ms-2"
                    width="200"
                  />
                </div>
                <h6>HDFC Bank</h6>
              </div>

              <div class="col-lg-2 col-12">
                <h6>Loan Amount</h6>
                <h6 class="loan-amount">₹ 3,19,95,000</h6>
              </div>

              <div class="col-lg-2 col-12">
                <h6>Interest Rate</h6>
                <h6 class="interest-rate">Starts 8.45%</h6>
              </div>

              <div class="col-lg-2 col-12">
                <h6>EMI</h6>
                <h6 class="emi">₹ 2,76,648</h6>
              </div>

              <div class="col-lg-2 col-12">
                <h6>Total Tenure</h6>
                <h6 class="total">20 Years</h6>
              </div>
            </div>

            <div class="row justify-content-center">
              <div class="col-lg-2 col-12">
                <div class="bank-details-check d-flex">
                  <input type="checkbox" class="form-check" />
                  <img
                    src={require("../Images/ProjectLandingPageImages/bank logo/icici.png")}
                    class="img-fluid ms-2"
                    width="200"
                  />
                </div>
                <h6>ICICI Bank</h6>
              </div>

              <div class="col-lg-2 col-12">
                <h6>Loan Amount</h6>
                <h6 class="loan-amount">₹ 3,19,95,000</h6>
              </div>

              <div class="col-lg-2 col-12">
                <h6>Interest Rate</h6>
                <h6 class="interest-rate">Starts 8.45%</h6>
              </div>

              <div class="col-lg-2 col-12">
                <h6>EMI</h6>
                <h6 class="emi">₹ 2,76,648</h6>
              </div>

              <div class="col-lg-2 col-12">
                <h6>Total Tenure</h6>
                <h6 class="total">20 Years</h6>
              </div>
            </div>
          </div>
        </section>

        <section class="location-section" id="location">
          <div class="container">
            <h2> Location Map</h2>
            <div class="row justify-content-center">
              <div class="col-lg-12 col-12">
                <div class="location-map">
                  <img
                    src={require("../Images/ProjectLandingPageImages/map/map.jpg")}
                    class="img-fluid mx-auto"
                    alt="map"
                  />
                  <button class="btn viewMap-2">
                    View on Map <i class="fas fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="faq">
          <div class="container">
            <h2>FAQ</h2>
            <hr />
            <div class="row">
              <div class="col-lg-12 col-12">
                <h5 class="question">
                  Q: What is the current price of Puri Diplomatic Residences?
                </h5>
                <h5 class="Answer">
                  <strong>A:</strong> What is the current price of Puri
                  Diplomatic Residences?
                </h5>
              </div>
              <hr />
              <div class="col-lg-12 col-12">
                <h5 class="question">
                  Q: What is the current price of Puri Diplomatic Residences?
                </h5>
                <h5 class="Answer">
                  <strong>A:</strong> What is the current price of Puri
                  Diplomatic Residences?
                </h5>
              </div>
              <hr />

              <div class="col-lg-12 col-12">
                <h5 class="question">
                  Q: What is the price of units (3,4 BHK) in Puri Diplomatic
                  Residences?
                </h5>
                <h5 class="Answer">
                  <strong>A:</strong> In Puri Diplomatic Residences, units (3,4
                  BHK) price starts around 3.95 Cr and can go up to 5.50 Cr
                  depending on the features you choose.
                </h5>
              </div>

              <hr />

              <div class="col-lg-12 col-12">
                <h5 class="question">
                  Q: Is Puri Diplomatic Residences Rera approved?
                </h5>
                <h5 class="Answer">
                  <strong>A:</strong> Yes, Puri Diplomatic Residences is RERA
                  approved and RERA for Puri Diplomatic Residences is
                  GGM/787/519/ 2024/14.
                </h5>
              </div>
            </div>
          </div>
        </section>

        <section class="rating-section mb-5">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 col-md-6 col-12">
                <div class="card">
                  <h6>Rating</h6>
                  <div class="rating-divide d-flex justify-content-between">
                    <div class="rating-1">
                      <div class="mb-3">
                        <span style={{ fontSize: "1rem" }}>
                          Sports & Outdoor
                          <i class="fas fa-star text-warning"></i>
                          <i class="fas fa-star text-warning"></i>
                          <i class="fas fa-star text-warning"></i>
                          <i
                            class="fas fa-star"
                            style={{ color: "rgb(214, 214, 214)" }}
                          ></i>
                          <i
                            class="fas fa-star"
                            style={{ color: "rgb(214, 214, 214)" }}
                          ></i>
                          <span style={{ fontSize: "14px" }}>Ample</span>
                        </span>
                      </div>
                      <div>
                        <div class="mb-3">
                          <span style={{ fontSize: "1rem" }}>
                            Club House
                            <i class="fas fa-star text-warning"></i>
                            <i class="fas fa-star text-warning"></i>
                            <i class="fas fa-star text-warning"></i>
                            <i
                              class="fas fa-star"
                              style={{ color: "rgb(214, 214, 214)" }}
                            ></i>
                            <i
                              class="fas fa-star"
                              style={{ color: "rgb(214, 214, 214)" }}
                            ></i>
                            <span style={{ fontSize: "14px" }}>Premium</span>
                          </span>
                        </div>
                      </div>

                      <div class="mb-3">
                        <span style={{ fontSize: "1rem" }}>
                          Specifications
                          <i class="fas fa-star text-warning"></i>
                          <i class="fas fa-star text-warning"></i>
                          <i class="fas fa-star text-warning"></i>
                          <i
                            class="fas fa-star"
                            style={{ color: "rgb(214, 214, 214)" }}
                          ></i>
                          <i
                            class="fas fa-star"
                            style={{ color: "rgb(214, 214, 214)" }}
                          ></i>
                          <span style={{ fontSize: "14px" }}>Superior</span>
                        </span>
                      </div>
                    </div>

                    <div class="rating-2">
                      <div class="mb-3">
                        <span style={{ fontSize: "1rem" }}>
                          Green Area
                          <i class="fas fa-star text-warning"></i>
                          <i class="fas fa-star text-warning"></i>
                          <i class="fas fa-star text-warning"></i>
                          <i
                            class="fas fa-star"
                            style={{ color: "rgb(214, 214, 214)" }}
                          ></i>
                          <i
                            class="fas fa-star"
                            style={{ color: "rgb(214, 214, 214)" }}
                          ></i>
                          <span style={{ fontSize: "14px" }}> Large</span>
                        </span>
                      </div>

                      <div class="mb-3">
                        <span style={{ fontSize: "1rem" }}>
                          Fittings & Furnishing
                          <i class="fas fa-star text-warning"></i>
                          <i class="fas fa-star text-warning"></i>
                          <i class="fas fa-star text-warning"></i>
                          <i
                            class="fas fa-star"
                            style={{ color: "rgb(214, 214, 214)" }}
                          ></i>
                          <i
                            class="fas fa-star"
                            style={{ color: "rgb(214, 214, 214)" }}
                          ></i>
                          <span style={{ fontSize: "14px" }}> Superior</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-6 col-md-6 col-12 mt-3 mt-lg-0">
                <div class="card">
                  <h6>Decision Drivers</h6>

                  <div class="decision-drivers d-block d-lg-flex pb-5 justify-content-between">
                    <div class="decision-1">
                      <div class="mb-3">
                        <span style={{ fontSize: "1rem" }}>Connectivity</span>
                        <span
                          style={{ marginLeft: "10.5rem", fontSize: "0.9rem" }}
                        >
                          6.2
                        </span>
                        <div
                          class="progress"
                          style={{ width: "300px", height: "8px" }}
                        >
                          <div
                            class="progress-bar"
                            role="progressbar"
                            style={{ width: "50%", backgroundColor: "orange" }}
                            aria-valuenow="50"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>

                      <div>
                        <span style={{ fontSize: "1rem" }}>Lifestyle</span>
                        <span
                          style={{ marginLeft: "12.4rem", fontSize: "0.9rem" }}
                        >
                          6.4
                        </span>
                        <div
                          class="progress"
                          style={{ width: "300px", height: "8px" }}
                        >
                          <div
                            class="progress-bar"
                            role="progressbar"
                            style={{ width: "50%", backgroundColor: "orange" }}
                            aria-valuenow="50"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    </div>

                    <div class="decision-1">
                      <div class="mb-3">
                        <span style={{ fontSize: "1rem" }}>Livability</span>
                        <span
                          style={{ marginLeft: "12.6rem", fontSize: "0.9rem" }}
                        >
                          7.1
                        </span>
                        <div
                          class="progress"
                          style={{ width: "300px", height: "8px" }}
                        >
                          <div
                            class="progress-bar"
                            role="progressbar"
                            style={{ width: "50%", backgroundColor: "green" }}
                            aria-valuenow="50"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>

                      <div class="mb-3">
                        <span style={{ fontSize: "1rem" }}>
                          Value for Money
                        </span>
                        <span
                          style={{ marginLeft: "9.3rem", fontSize: "0.9rem" }}
                        >
                          7.2
                        </span>
                        <div
                          class="progress"
                          style={{ width: "300px", height: "8px" }}
                        >
                          <div
                            class="progress-bar"
                            role="progressbar"
                            style={{ width: "50%", backgroundColor: "green" }}
                            aria-valuenow="50"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div />
          </div>
        </section>
      </div>
    </>
  );
};

export default ViewProject;

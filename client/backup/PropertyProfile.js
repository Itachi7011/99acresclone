import { useLocation } from "react-router-dom";
import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const PropertyProfile = () => {
  const [Data, setData] = useState({ post: [] });

  const location = useLocation();

  const previousData = location.state.id;

  useEffect(() => {
    axios
      .get("/PropertiesList")
      .then((response) => {
        const data = response.data;

        setData({ post: data });

        console.log("data fetch successfully");
      })
      .catch((err) => {
        console.log("Error during Data:", err);
      });
  }, []);

  const [selectedImage, setSelectedImage] = useState(0);

  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  return (
    <>
      {Data.post
        .filter((field) => {
          if (field._id.includes(previousData)) {
            return field;
          }
        })
        .map(
          ({
            _id,
            property_name,
            propertySubType1,
            propertySubType2,
            commercialPropertyType,
            propertySubLocality,
            propertyLocality,
            propertyCity,
            property_specicification,
            direction_facing,
            amenities,
            price,
            super_built_up_area,
            propertyImages,
            bhkNumber,
            ownerName,
            propertyListedBy,
            dateOfFormSubmission,
            phoneNo,
            carpet_total_area,
            Property_on_floor,
            total_floors,
            posession_date,
            age_of_property,
            servent_accomodation,
            isFurnished,
            reserved_parking,
            property_lane_address,
          }) => {
            return (
              <>
                <section
                  className="more-details-first"
                  style={{ marginTop: "6.5rem" }}
                >
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12 col-md-12 col-12">
                        <div className="card">
                          <div className="more-details-topText d-flex">
                            <h2 className="me-2">
                              {" "}
                              {property_name} - ₹{price.toLocaleString("en-IN")}{" "}
                            </h2>
                            {/* <li className="me-2">
                              <a href="#">
                                <span>EMI - ₹ 1.61L</span>
                              </a>
                            </li>{" "}
                            |
                            <li className="ms-2">
                              <a href="#">
                                <span> Need Home Loan? Check Eligibility </span>
                              </a>
                            </li> */}
                          </div>

                          <div className="area d-flex mb-3">
                            <li>
                              <span>
                                {super_built_up_area} Sq-ft {bhkNumber} For Sale
                                in
                              </span>
                            </li>

                            <li className="ms-2">
                              <a href="#">
                                <span
                                  style={{ color: "rgb(6, 43, 122)" }}
                                  className="fw-bold"
                                >
                                  {" "}
                                  {propertySubLocality}, {propertyLocality},{" "}
                                  {propertyCity}{" "}
                                </span>
                              </a>
                            </li>
                          </div>

                          <div className="details-img">
                            <div className="row justify-content-center">
                              <div className="col-lg-6 col-md-6 col-12">
                                <img
                                  src={require("../../Uploads/Properties/" +
                                    propertyImages[selectedImage].data)}
                                  alt="main-img"
                                  style={{ height: "60vh", width: "100%" }}
                                />
                              </div>

                              <div className="col-lg-6 col-md-6 col-6">
                                <div className="inner-img1 mt-4 ms-4">
                                  {propertyImages
                                    .slice(1, 5)
                                    .map((image, index) => (
                                      <img
                                        key={index}
                                        src={require("../../Uploads/Properties/" +
                                          image.data)}
                                        alt="main-img"
                                        className="img-fluid me-2 mb-2"
                                        style={{
                                          height: "14rem",
                                          width: "14rem",
                                        }}
                                        onClick={() =>
                                          handleImageClick(index + 1)
                                        }
                                      />
                                    ))}
                                </div>

                                <div className="inner-img2 ms-4">
                                  {propertyImages
                                    .slice(5)
                                    .map((image, index) => (
                                      <img
                                        key={index}
                                        src={require("../../Uploads/Properties/" +
                                          image.data)}
                                        alt="main-img"
                                        className="img-fluid me-2 mb-2"
                                        style={{
                                          height: "14rem",
                                          width: "14rem",
                                        }}
                                        onClick={() =>
                                          handleImageClick(index + 5)
                                        }
                                      />
                                    ))}
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="details-text-area mt-4 mb-2">
                            <div className="container">
                              <div className="row">
                                <div className="col-lg-3 col-md-3 col-12">
                                  <h5>Carpet Area</h5>
                                  <div class="dropdown">
                                    <a
                                      class=""
                                      href="/"
                                      role="button"
                                      id="dropdownMenuLink"
                                      data-bs-toggle="dropdown"
                                      aria-expanded="false"
                                    >
                                      <span>{carpet_total_area} sqft </span>
                                    </a>

                                    {/* <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                          </ul> */}
                                  </div>
                                </div>

                                <div className="col-lg-3 col-md-3 col-12">
                                  <h5>Property Floor</h5>
                                  <span>
                                    {Property_on_floor} (Out of {total_floors}{" "}
                                    Floors)
                                  </span>
                                </div>

                                <div className="col-lg-3 col-md-3 col-12">
                                  <h5>Posession Date</h5>
                                  <span>{posession_date} (Y-M-D)</span>
                                </div>

                                <div className="col-lg-3 col-md-3 col-12">
                                  <h5>Property Age</h5>
                                  <span> {age_of_property} years</span>
                                </div>
                              </div>

                              <div className="row mt-4">
                                <div className="col-lg-3 col-md-3 col-12">
                                  <h5>Servant Room</h5>
                                  <span>
                                    {servent_accomodation
                                      .charAt(0)
                                      .toUpperCase() +
                                      servent_accomodation.slice(1)}{" "}
                                  </span>
                                </div>

                                <div className="col-lg-3 col-md-3 col-12">
                                  <h5>Facing</h5>
                                  <span>
                                    {" "}
                                    {direction_facing.charAt(0).toUpperCase() +
                                      direction_facing.slice(1)}{" "}
                                  </span>
                                </div>

                                <div className="col-lg-3 col-md-3 col-12">
                                  <h5>Reserved Parking</h5>
                                  <span>
                                    {reserved_parking.charAt(0).toUpperCase() +
                                      reserved_parking.slice(1)}{" "}
                                  </span>
                                </div>

                                <div className="col-lg-3 col-md-3 col-12">
                                  <h5>Furnished Status</h5>
                                  <span>
                                    {isFurnished.charAt(0).toUpperCase() +
                                      isFurnished.slice(1)}{" "}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>

                          <hr />

                          <div className="row mt-4">
                            <div className="col-lg-6 col-md-6 col-12">
                              <div className="contact-button">
                                <a href="#" className="contact-btn-fill me-2">
                                  {
                                    //  phoneNo
                                    //  .toString().slice(0,4).replace(/./g,"*")

                                    phoneNo
                                      .toString()
                                      .slice(0, -5)
                                      .concat("*****")
                                  }
                                </a>
                                <a href="#" className="contact-btn-blank">
                                  Get Phone No.
                                </a>
                              </div>
                            </div>

                            <div className="col-lg-6 col-md-6 col-12 text-end">
                              <p class="card-text">
                                <small class="text-muted">
                                  <i
                                    class="far fa-user fs-5"
                                    style={{ color: "blue" }}
                                  ></i>{" "}
                                  Listed By - {ownerName} ( {propertyListedBy} )
                                </small>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* more-details-seconds section */}

                <section className="more-details-second">
                  <div className="container">
                    <div className="card">
                      <div className="row">
                        <h1>More Details</h1>
                        <div className="col-lg-4 col-md-4 col-12">
                          <h5>Price</h5>
                          <h5>Address</h5>
                          <h5>Landmarks</h5>
                          <h5>Furnishing</h5>
                          <h5>Flooring</h5>
                          <h5>Type of Ownership</h5>
                          <h5>Overlooking</h5>
                          <h5>Age of Construction</h5>
                          <h5>Additional Rooms</h5>
                          <h5>Water Availability</h5>
                          <h5>Status of Electricity</h5>
                          <h5>Lift</h5>
                        </div>

                        <div className="col-lg-8 col-md-8 col-12">
                          <div className="more-details-second-text">
                            <h5>₹ {price}</h5>
                            <h5>
                              {property_lane_address} , {propertySubLocality},{" "}
                              {propertyLocality}, {propertyCity}
                            </h5>
                            <h5>Manrego Hospital</h5>
                            <h5>Semi-Furnished</h5>
                            <h5>
                              Wooden, Ceramic Tiles, Marble, Normal Tiles/Kotah
                              Stone
                            </h5>
                            <h5>Freehold</h5>
                            <h5>Garden/Park, Main Road</h5>
                            <h5> {} years</h5>
                            <h5>Servant Room</h5>
                            <h5>24 Hours Available</h5>
                            <h5>No/Rare Powercut</h5>
                            <h5>2</h5>
                          </div>
                        </div>
                      </div>

                      <div className="container">
                        <div className="row">
                          <div className="col-lg-12 col-md-12 col-12">
                            <br />
                            <strong>Description: </strong> Embark on your
                            journey to find the perfect home with this enticing
                            opportunity! A ready-to-move-in 3 BHK flat awaits
                            you in the sought-after locality of Ghata, Gurgaon.
                            With a construction age of 5 to 10 years and
                            freehold ownership rights, this property presents an
                            incredible investment opportunity.
                            <br />
                            <br />
                            Note: Asking Price: INR 15,000 per sqft. For more
                            details contact 9966619368 and 9966619358 or email
                            at vspraoo@gmail.com / sudeepta@gmail.com
                            <br />
                            <br />
                            Property Specifications
                            <br />
                            <br />
                            Luxury living awaits you in this exquisite apartment
                            by Tata Housing, offering unparalleled comfort and
                            sophistication. Nestled within a meticulously
                            designed complex boasting 85% green open area, a
                            sewage treatment plant, and rainwater harvesting
                            system, you'll experience the epitome of modern
                            living while embracing eco-friendly practices.
                            <br />
                            <br />
                            <div className="button-div my-5">
                              <a href="#" className="contact-btn-fill">
                                Contact Owner
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </>
            );
          }
        )}
    </>
  );
};

export default PropertyProfile;

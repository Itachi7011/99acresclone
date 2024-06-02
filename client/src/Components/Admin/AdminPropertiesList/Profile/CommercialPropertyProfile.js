import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";

import { useLocation } from "react-router-dom";
import axios from "axios";

import image1 from "../../../Images/TouristPlaces/pexels-vinod-pattar-845659-14552414.jpg";

const CommercialPropertyProfile = () => {
  const [Data, setData] = useState({ post: [] });
  const Location = useLocation();
  const PreviousPageId = Location.state.id;

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("/commercailProperties")
      .then((response) => {
        const data = response.data;

        setData({ post: data });

        console.log("data fetch successfully");
      })
      .catch((err) => {
        console.log("Error during Data:", err);
      });
  }, []);
  return (
    <>
      {Data.post
        .filter((field) => {
          if (!PreviousPageId) {
            return 0;
          } else if (field._id === PreviousPageId) {
            return field;
          }
        })
        .map(
          ({
            _id,
            ownerName,
            email,
            phoneNo,
            actionType,
            total_floors,
            Property_on_floor,
            property_name,
            title_text,
            meta_keyword,
            meta_description,
            super_built_up_area,
            built_up_area,
            isFurnished,
            reserved_parking,
            servent_accomodation,
            rera_approval,
            reg,
            posession_date,
            usp,
            direction_facing,
            age_of_property,
            available_from,
            sellingStatus,
            price,
            property_specicification,
            name_nearest_metro_station,
            distance_nearest_metro_station,
            name_nearest_railway_station,
            distance_nearest_railway_station,
            name_nearest_bus_stop,
            distance_nearest_bus_stop,
            propertyCity,
            propertySubLocality,
            property_lane_address,
            carpet_total_area,
            propertySociety_Apartment_HouseNo,
            propertyLocality ,
            amenities,
            dateOfFormSubmission,
          }) => {
            return (
              <>
                <div style={{ maxWidth: "80%", margin: "2% auto" }} key={_id}>
                  <link
                    href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
                    rel="stylesheet"
                  />
                  <div className="container bootstrap snippets bootdey">
                    <div className="row">
                      {/* <div className="profile-nav col-md-3">
                        <ul class="nav nav-pills nav-stacked">
                          <li
                            class="active"
                            style={{ textAlign: "center", marginLeft: "2%" }}
                          >
                            <h2
                              style={{
                                color: "white",
                                backgroundColor: "green",
                                borderRadius: "0.1rem",
                                cursor: "pointer",
                              }}
                            >
                              <button
                                style={{
                                  color: "white",
                                  backgroundColor: "green",
                                  padding: "0 0.3rem",
                                  borderRadius: "0.1rem",
                                  textDecoration: "none",
                                }}
                                onClick={function () {
                                  navigate("/edit-commercial-property-profile", {
                                    state: { id: _id}
                                  });
                                }}
                                href="/edit-commercial-property-profile"
                              >
                                Edit Specfications
                              </button>
                            </h2>{" "}
                          </li>
                          <li class="active" style={{ textAlign: "center" }}>
                            <h2
                              style={{
                                color: "white",
                                backgroundColor: "green",
                                padding: "0 0.3rem",
                                borderRadius: "0.1rem",
                              }}
                            >
                              For {actionType}
                            </h2>{" "}
                          </li>
                        </ul>
                        <div className="panel" style={{ marginBottom: "2%" }}>
                          <div className="user-heading round">
                            <a href="/">
                              <img
                                src="https://bootdey.com/img/Content/avatar/avatar3.png"
                                alt="images"
                              />
                            </a>
                            <h1> {property_name} </h1>
                            <p>
                              {" "}
                              {propertySociety_Apartment_HouseNo},{" "}
                              {property_lane_address},{propertySubLocality} ,{" "}
                              {propertyCity}{" "}
                            </p>
                          </div>
                        </div>
                        <div className="panel" style={{ marginBottom: "2%" }}>
                          <a href="/">
                            <img
                              src={image1}
                              alt="images"
                              style={{
                                height: "100%",
                                width: "100%",
                                objectFit: "contain",
                              }}
                            />
                          </a>
                        </div>
                        <div className="panel" style={{ marginBottom: "2%" }}>
                          <div className="user-heading round">
                            <a href="/">
                              <img
                                src="https://bootdey.com/img/Content/avatar/avatar3.png"
                                alt="images"
                              />
                            </a>
                            <h1> {property_name} </h1>
                            <p>
                              {" "}
                              {propertySociety_Apartment_HouseNo},{" "}
                              {property_lane_address},{propertySubLocality} ,{" "}
                              {propertyCity}{" "}
                            </p>
                          </div>
                        </div>
                      </div> */}
                      <div className="profile-info col-md-9">
                        <div className="panel"></div>
                        <div className="panel">
                          <div className="bio-graph-heading">
                            <h4>Specification : {property_specicification}</h4>
                          </div>
                          <div className="panel-body bio-graph-info">
                            <h1>Property Data</h1>
                            <div className="row">
                            <div className="bio-row">
                                <p>
                                  <span>Location </span>:{property_lane_address}, {propertySubLocality}, {propertyLocality}, {propertyCity} {" "}
                                </p>
                              </div>
                              <div className="bio-row">
                                <p>
                                  <span>Selling Status </span>: {sellingStatus}{" "}
                                </p>
                              </div>
                              <div className="bio-row">
                                <p>
                                  <span>Property Name </span>: {property_name}{" "}
                                </p>
                              </div>

                              <div className="bio-row">
                                <p>
                                  <span>Title Text </span>:{title_text}{" "}
                                </p>
                              </div>
                              <div className="bio-row">
                                <p>
                                  <span>Meta Keyword </span>: {meta_keyword}{" "}
                                </p>
                              </div>
                              <div className="bio-row">
                                <p>
                                  <span>Meta Description </span>: {meta_description}{" "}
                                </p>
                              </div>
                              <div className="bio-row">
                                <p>
                                  <span>Owner Name </span>: {ownerName}{" "}
                                </p>
                              </div>

                              <div className="bio-row">
                                <p>
                                  <span>Owner Email </span>: {email}{" "}
                                </p>
                              </div>
                              <div className="bio-row">
                                <p>
                                  <span>Owner Contact No. </span>: {phoneNo}{" "}
                                </p>
                              </div>

                              <div className="bio-row">
                                <p>
                                  <span>Total Carpet Area </span>:{" "}
                                  {carpet_total_area} sq. ft{" "}
                                </p>
                              </div>
                              <div className="bio-row">
                                <p>
                                  <span>Furnish Status </span>: {isFurnished}
                                </p>
                              </div>
                              <div className="bio-row">
                                <p>
                                  <span> Age Of Property </span>:{" "}
                                  {age_of_property} years{" "}
                                </p>
                              </div>
                              <div className="bio-row">
                                <p>
                                  <span>Total Floors </span>: {total_floors}{" "}
                                  floors
                                </p>
                              </div>
                              <div className="bio-row">
                                <p>
                                  <span> Property On Which Floor </span>:{" "}
                                  {Property_on_floor}th floor{" "}
                                </p>
                              </div>
                              <div className="bio-row">
                                <p>
                                  <span>Expected Selling Price</span>: &#x20B9;{" "}
                                  {price}{" "}
                                </p>
                              </div>
                              <div className="bio-row">
                                <p>
                                  <span>Direction Facing </span>:{" "}
                                  {direction_facing}
                                </p>
                              </div>
                              
                              <div className="bio-row">
                                <p>
                                  <span>RERA Approval</span>: {rera_approval}{" "}
                                </p>
                              </div>
                              <div className="bio-row">
                                <p>
                                  <span>Posession Date</span>: {posession_date}{" "}
                                  (YYYY-MM-DD){" "}
                                </p>
                              </div>
                              <div className="bio-row">
                                <p>
                                  <span>Posession Date</span>: {posession_date}{" "}
                                  
                                </p>
                              </div>
                              <div className="bio-row">
                                <p>
                                  {/* <span>Amenities </span>: {amenities}{" "} */}
                                  
                                </p>
                              </div>
                              
                            </div>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          }
        )}
    </>
  );
};

export default CommercialPropertyProfile;

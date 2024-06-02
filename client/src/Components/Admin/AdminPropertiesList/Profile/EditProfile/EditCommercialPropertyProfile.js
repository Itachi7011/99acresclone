import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";

import { useLocation } from "react-router-dom";
import axios from "axios";

import image1 from "../../../../Images/homepageimages/pexels-pixabay-164522.jpg";
import image2 from "../../../../Images/homepageimages/pexels-pixabay-210617.jpg";

const CommercialPropertyProfile = () => {
  const [Data, setData] = useState({ post: [] });
  const Location = useLocation();
  const PreviousPageId = Location.state.id;

  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    ownerName: "",
    phoneNo: "",
    userType: "",
    actionType: "",
    commercialPropertyType: "",
    rent_price: "",
    duration_of_rent_aggrement: "",
    rent_security_deposit: "",
    rent_months_of_notice: "",
    lease_price: "",
    duration_of_lease_aggrement: "",
    lease_security_deposit: "",
    lease_months_of_notice: "",
    constructionStatus: "",
    property_name: "",
    title_text: "",
    meta_keyword: "",
    meta_description: "",
    total_floors: "",
    Property_on_floor: "",
    carpet_total_area: "",
    isFurnished: "",
    reserved_parking: "",
    super_built_up_area: "",
    built_up_area: "",
    servent_accomodation: "",
    rera_approval: "",
    reg: "",
    posession_date: "",
    usp: "",
    direction_facing: "",
    age_of_property: "",
    available_from: "",
    sellingStatus: "",
    maxOfferedPrice: "",
    expected_selling_price: "",
    name_nearest_metro_station: "",
    distance_nearest_metro_station: "",
    name_nearest_railway_station: "",
    distance_nearest_railway_station: "",
    name_nearest_bus_stop: "",
    distance_nearest_bus_stop: "",
    propertyCity: "",
    propertyLocality: "",
    propertySubLocality: "",
    property_lane_address: "",
    propertySociety_Apartment_HouseNo: "",
    property_specicification: "",
    dateOfFormSubmission: "",
  });

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

  const handleInput = (e) => {
    e.preventDefault();
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <>
      {Data.post
        .filter((field) => {
 if (field._id === PreviousPageId) {
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
            expected_selling_price,
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
                      <div className="profile-nav col-md-3">
                        <ul class="nav nav-pills nav-stacked">

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
                          
                            <img
                              src={image1}
                              alt="images"
                              style={{
                                height: "100%",
                                width: "100%",
                                objectFit: "contain",
                              }}
                            />
                        </div>
                        <div className="panel" style={{ marginBottom: "2%" }}>
                            <img
                              src={image2}
                              alt="images"
                              style={{
                                height: "100%",
                                width: "100%",
                                objectFit: "contain",
                              }}
                            />
                        </div>
                        
                      </div>
                      <div className="profile-info col-md-9">
                        <div className="panel"></div>
                        <div className="panel">
                          <div className="bio-graph-heading">
                            <h4>{property_specicification}</h4>
                          </div>
                          <div className="panel-body bio-graph-info">
                            <h1>Property Data</h1>
                            <div className="row">
                              <div className="bio-row">
                                <p>
                                  <span>Selling Status </span>: {sellingStatus} 
                                  <span style={{marginLeft:"2%"}}><form className="editProfileForms" action="/editCommercialPropertySellingStatus" method="post" >
                                    <input type="hidden" name="id" value={_id}   />
                                    <input  type="text" name="sellingStatus" onChange={handleInput} /> <button type="submit">Change</button>
                                    </form></span>
                                </p>
                              </div>
                              <div className="bio-row">
                                <p>
                                  <span>Owner Name </span>: {ownerName}{" "}
                                  <span style={{marginLeft:"2%"}}><form className="editProfileForms" action="/editCommercialPropertyOwnerName" method="post" >
                                    <input type="hidden" name="id" value={_id}   />
                                    <input  type="text" name="ownerName" onChange={handleInput} /> <button type="submit">Change</button>
                                    </form></span>
                                </p>
                              </div>

                              <div className="bio-row">
                                <p>
                                  <span>Owner Email </span>: {email}{" "}
                                  <span style={{marginLeft:"2%"}}><form className="editProfileForms" action="/editCommercialPropertyOwnerEmail" method="post" >
                                    <input type="hidden" name="id" value={_id}   />
                                    <input  type="text" name="email" onChange={handleInput} /> <button type="submit">Change</button>
                                    </form></span>
                                </p>
                              </div>
                              <div className="bio-row">
                                <p>
                                  <span>Owner Contact No. </span>: {phoneNo}{" "}
                                  <span style={{marginLeft:"2%"}}><form className="editProfileForms" action="/editCommercialPropertyOwnerContactNo" method="post" >
                                    <input type="hidden" name="id" value={_id}   />
                                    <input  type="text" name="phoneNo" onChange={handleInput} /> <button type="submit">Change</button>
                                    </form></span>
                                </p>
                              </div>

                              <div className="bio-row">
                                <p>
                                  <span>Total Carpet Area </span>:{" "}
                                  {carpet_total_area} sq. ft{" "}
                                  <span style={{marginLeft:"2%"}}><form className="editProfileForms" action="/editCommercialPropertyTotalCarpetArea" method="post" >
                                    <input type="hidden" name="id" value={_id}   />
                                    <input  type="text" name="carpet_total_area" onChange={handleInput} /> <button type="submit">Change</button>
                                    </form></span>
                                </p>
                              </div>
                              <div className="bio-row">
                                <p>
                                  <span>Furnish Status </span>: {isFurnished}
                                  <span style={{marginLeft:"2%"}}><form className="editProfileForms" action="/editCommercialPropertyFurnishStatus" method="post" >
                                    <input type="hidden" name="id" value={_id}   />
                                    <input  type="text" name="isFurnished" onChange={handleInput} /> <button type="submit">Change</button>
                                    </form></span>
                                </p>
                              </div>
                              <div className="bio-row">
                                <p>
                                  <span> Age Of Property </span>:{" "}
                                  {age_of_property} years{" "}
                                  <span style={{marginLeft:"2%"}}><form className="editProfileForms" action="/editCommercialPropertyAgeOfProperty" method="post" >
                                    <input type="hidden" name="id" value={_id}   />
                                    <input  type="text" name="age_of_property" onChange={handleInput} /> <button type="submit">Change</button>
                                    </form></span>
                                </p>
                              </div>
                              <div className="bio-row">
                                <p>
                                  <span>Total Floors </span>: {total_floors}{" "}
                                  floors
                                  <span style={{marginLeft:"2%"}}><form className="editProfileForms" action="/editCommercialPropertyTotalFloors" method="post" >
                                    <input type="hidden" name="id" value={_id}   />
                                    <input  type="text" name="total_floors" onChange={handleInput} /> <button type="submit">Change</button>
                                    </form></span>
                                </p>
                              </div>
                              <div className="bio-row">
                                <p>
                                  <span> Property On Which Floor </span>:{" "}
                                  {Property_on_floor}th floor{" "}
                                  <span style={{marginLeft:"2%"}}><form className="editProfileForms" action="/editCommercialPropertyPrpopertyOnWhichFloor" method="post" >
                                    <input type="hidden" name="id" value={_id}   />
                                    <input  type="text" name="Property_on_floor" onChange={handleInput} /> <button type="submit">Change</button>
                                    </form></span>
                                </p>
                              </div>
                              <div className="bio-row">
                                <p>
                                  <span>Expected Selling Price</span>: &#x20B9;{" "}
                                  {expected_selling_price}{" "}
                                  <span style={{marginLeft:"2%"}}><form className="editProfileForms" action="/editCommercialPropertyExpectedSellingPrice" method="post" >
                                    <input type="hidden" name="id" value={_id}   />
                                    <input  type="text" name="expected_selling_price" onChange={handleInput} /> <button type="submit">Change</button>
                                    </form></span>
                                </p>
                              </div>
                              <div className="bio-row">
                                <p>
                                  <span>Direction Facing </span>:{" "}
                                  {direction_facing}
                                  <span style={{marginLeft:"2%"}}><form className="editProfileForms" action="/editCommercialPropertyDirectionFacing" method="post" >
                                    <input type="hidden" name="id" value={_id}   />
                                    <input  type="text" name="direction_facing" onChange={handleInput} /> <button type="submit">Change</button>
                                    </form></span>
                                </p>
                              </div>
                              <div className="bio-row">
                                <p>
                                  <span> Nearest Metro Station </span>:{" "}
                                  {name_nearest_metro_station} {" "}

                                    <span style={{marginLeft:"2%"}}><form className="editProfileForms" action="/editCommercialPropertyNearestMetroStation" method="post" >
                                    <input type="hidden" name="id" value={_id}   />
                                    <input  type="text" name="name_nearest_metro_station" onChange={handleInput} /> <button type="submit">Change</button>
                                    </form></span>
                                </p>
                              </div>
                              <div className="bio-row">
                                <p>
                                  <span>  Metro Distance </span>:{" "}
                                  {distance_nearest_metro_station} Km{" "}

                                    <span style={{marginLeft:"2%"}}><form className="editProfileForms" action="/editCommercialPropertyMetroDistance" method="post" >
                                    <input type="hidden" name="id" value={_id}   />
                                    <input  type="text" name="distance_nearest_metro_station" onChange={handleInput} /> <button type="submit">Change</button>
                                    </form></span>
                                </p>
                              </div>
                              <div className="bio-row">
                                <p>
                                  <span> Nearest Railway Station  </span>:{" "}
                                  {name_nearest_metro_station} {" "}
                                  
                                    <span style={{marginLeft:"2%"}}><form className="editProfileForms" action="/editCommercialPropertyNearestRailwayStation" method="post" >
                                    <input type="hidden" name="id" value={_id}   />
                                    <input  type="text" name="name_nearest_metro_station" onChange={handleInput} /> <button type="submit">Change</button>
                                    </form></span>
                                </p>
                              </div>


                              <div className="bio-row">
                                <p>
                                  <span>Railway Distance</span>:{" "}
                                  {distance_nearest_railway_station} Km{" "}
                                 
                                    <span style={{marginLeft:"2%"}}><form className="editProfileForms" action="/editCommercialPropertyRailwayDistance" method="post" >
                                    <input type="hidden" name="id" value={_id}   />
                                     <input  type="text" name="distance_nearest_railway_station" onChange={handleInput} /> <button type="submit">Change</button>
                                    </form></span>
                                </p>
                              </div>
                              <div className="bio-row">
                                <p>
                                  <span>Nearest Bus Stop</span>:{" "}
                                  {name_nearest_bus_stop} {" "}
                                    <span style={{marginLeft:"2%"}}><form className="editProfileForms" action="/editCommercialPropertyNearestBusStop" method="post" >
                                    <input type="hidden" name="id" value={_id}   />
                                   :  <input  type="text" name="name_nearest_bus_stop" onChange={handleInput} /> <button type="submit">Change</button>
                                    </form></span>
                                </p>
                              </div>
                              <div className="bio-row">
                                <p>
                                  <span> Bus Distance</span>:{" "}
                                  {distance_nearest_bus_stop} Km{" "}
                                    <span style={{marginLeft:"2%"}}><form className="editProfileForms" action="/editCommercialPropertyBusDistance" method="post" >
                                    <input type="hidden" name="id" value={_id}   />
                                   :  <input  type="text" name="distance_nearest_bus_stop" onChange={handleInput} /> <button type="submit">Change</button>
                                    </form></span>
                                </p>
                              </div>                              
                              <h1>Extra Data (Only For Admin)</h1>

                              <div className="bio-row">
                                <p>
                                  <span>RERA Approval</span>: {rera_approval}{" "}
                                  <span style={{marginLeft:"2%"}}><form className="editProfileForms" action="/editCommercialPropertyReraApproval" method="post" >
                                    <input type="hidden" name="id" value={_id}   />
                                    <input  type="text" name="rera_approval" onChange={handleInput} /> <button type="submit">Change</button>
                                    </form></span>
                                </p>
                              </div>                              <h1>Extra Data (Only For Admin)</h1>

                              <div className="bio-row">
                                <p>
                                  <span>Posession Date</span>: {posession_date}{" "}
                                  (YYYY-MM-DD){" "}
                                  <span style={{marginLeft:"2%"}}><form className="editProfileForms" action="/editCommercialPropertyPossessionDate" method="post" >
                                    <input type="hidden" name="id" value={_id}   />
                                    <input  type="text" name="sellingStatus" onChange={handleInput} /> <button type="submit">Change</button>
                                    </form></span>
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

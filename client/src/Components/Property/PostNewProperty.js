import React, { useState } from "react";
import { useEffect, useRef } from "react";
import { Country, State, City } from "country-state-city";
import Select from "react-select";

const PostNewCommercialProperty = () => {
  const [Data, setData] = useState("");
  const [image, setImage] = useState([]);
  const [image1, setImage1] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedValues, setSelectedValues] = useState([]);
  // const [image, setImage] = useState("");

  const commercialRef = useRef(null);
  const ResidentialRef = useRef(null);

  let name, value;
  const [user, setUser] = useState({
    email: "",
    ownerName: "",
    phoneNo: "",
    userType: "",
    propertyListedBy: "",
    commercialPropertyType: "",
    propertySubType1: "",
    propertySubType2: "",
    rent_price: "",
    duration_of_rent_aggrement: "",
    rent_security_deposit: "",
    rent_months_of_notice: "",
    lease_price: "",
    duration_of_lease_aggrement: "",
    lease_security_deposit: "",
    lease_months_of_notice: "",
    status: "",
    constructionStatus: "",
    bhkNumber: "",
    property_name: "",
    title_text: "",
    propertyImages: Image,
    floorPlanImages: Image,
    // photograph:image,
    area: "",
    price: "",
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
    nearby_Keypoints: "",
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

      setData(data);

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
  useEffect(() => {
    console.log(selectedCountry);
    console.log(selectedCountry?.isoCode);
    console.log(State?.getStatesOfCountry(selectedCountry?.isoCode));
  }, [selectedCountry]);
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };
  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setSelectedValues([...selectedValues, value]);
    } else {
      setSelectedValues(selectedValues.filter((val) => val !== value));
    }
  };

  return (
    <>
      <div className="main-body1">
        <div className="registrationForm">
          <div className="postNewPropertyHeading">
            <h3> Post New Commerical Property </h3>
          </div>
          <form
            action="/postNewProperty"
            method="POST"
            encType="multipart/form-data"
          >
            {/* Hidden Date Of Form Submission : */}
            <input
              type="hidden"
              name="dateOfFormSubmission"
              value={new Date()}
            ></input>
            <input type="hidden" name="email" value={Data.email}></input>
            <input type="hidden" name="ownerName" value={Data.name}></input>
            <input type="hidden" name="phoneNo" value={Data.phoneNo}></input>
            <input type="hidden" name="userType" value={Data.userType}></input>
            <br />
            <h2 style={{ textAlign: "center" }}>Property Type : </h2>
            <div className="formDivRegistraion">
              <label for="exampleFormControlInput1" className="form-label">
                Property Listed By :
              </label>
              <br /> Individual
              <span
                style={{
                  marginRight: "3rem",
                  marginLeft: "0.3rem",
                  display: "inline",
                }}
              >
                <input
                  type="radio"
                  name="propertyListedBy"
                  value="Individual"
                  onChange={handleInput}
                />
              </span>
              Developer
              <span
                style={{
                  marginRight: "3rem",
                  marginLeft: "0.3rem",
                  display: "inline",
                }}
              >
                <input
                  type="radio"
                  name="propertyListedBy"
                  value="Developer"
                  onChange={handleInput}
                />
              </span>
              Builder
              <span
                style={{
                  marginRight: "3rem",
                  marginLeft: "0.3rem",
                  display: "inline",
                }}
              >
                <input
                  type="radio"
                  name="propertyListedBy"
                  value="Builder"
                  onChange={handleInput}
                />
              </span>
              Agent
              <span
                style={{
                  marginRight: "3rem",
                  marginLeft: "0.3rem",
                  display: "inline",
                }}
              >
                <input
                  type="radio"
                  name="propertyListedBy"
                  value="Agent"
                  onChange={handleInput}
                />
              </span>
            </div>{" "}
            <br />
            <h2 style={{ textAlign: "center" }}>Construction Status: </h2>
            <div className="formDivRegistraion">
              <label for="exampleFormControlInput1" className="form-label">
                Property Listed By :
              </label>
              <br /> New Launch
              <span
                style={{
                  marginRight: "3rem",
                  marginLeft: "0.3rem",
                  display: "inline",
                }}
              >
                <input
                  type="radio"
                  name="constructionStatus"
                  value="New Launch"
                  onChange={handleInput}
                />
              </span>
              Under Construction
              <span
                style={{
                  marginRight: "3rem",
                  marginLeft: "0.3rem",
                  display: "inline",
                }}
              >
                <input
                  type="radio"
                  name="constructionStatus"
                  value="Under Construction"
                  onChange={handleInput}
                />
              </span>
              Ready To Move
              <span
                style={{
                  marginRight: "3rem",
                  marginLeft: "0.3rem",
                  display: "inline",
                }}
              >
                <input
                  type="radio"
                  name="constructionStatus"
                  value="Ready To Move"
                  onChange={handleInput}
                />
              </span>
              
            </div>{" "}

            <br />
            <div className="formDivRegistraion">
              <label for="exampleFormControlInput1" className="form-label">
                Property Type :
              </label>
              <br /> Commercial
              <span
                style={{
                  marginRight: "3rem",
                  marginLeft: "0.3rem",
                  display: "inline",
                }}
              >
                <input
                  type="radio"
                  name="commercialPropertyType"
                  value="Commercial"
                  onChange={
                    (handleInput,
                    () => {
                      ResidentialRef.current.style.display = "none";
                      commercialRef.current.style.display = "block";
                    })
                  }
                />
              </span>
              Residential
              <span
                style={{
                  marginRight: "3rem",
                  marginLeft: "0.3rem",
                  display: "inline",
                }}
              >
                <input
                  type="radio"
                  name="commercialPropertyType"
                  value="Residential"
                  onChange={
                    (handleInput,
                    () => {
                      ResidentialRef.current.style.display = "block";
                      commercialRef.current.style.display = "none";
                    })
                  }
                />
              </span>
            </div>
            <br />
            <div
              className="formDivRegistraion"
              ref={ResidentialRef}
              style={{ display: "block" }}
            >
              <label for="exampleFormControlInput1" className="form-label">
                Property Sub-type :
              </label>
              <br />

              <select
                name="propertySubType1"
                value={user.propertySubType1}
                onChange={handleInput}
              >
                <option></option>
                <option value="Residential Apartment">
                  Residential Apartment
                </option>
                <option value="Mutlistorey Apartment">
                  Mutlistorey Apartment
                </option>
                <option value="Builder Floor Apartment">
                  Builder Floor Apartment
                </option>
                <option value="Service Apartment">Service Apartment</option>
                <option value="Villa">Villa</option>
                <option value="Farm House">Farm House</option>
                <option value="Plot">Plot</option>
              </select>
            </div>
            <div
              className="formDivRegistraion"
              ref={commercialRef}
              style={{ display: "none" }}
            >
              <label for="exampleFormControlInput1" className="form-label">
                Property Sub-type :
              </label>
              <br />
              <select
                onChange={handleInput}
                value={user.propertySubType2}
                name="propertySubType2"
              >
                <option></option>
                <option value="Office in IT Park">Office in IT Park</option>
                <option value="Office Space">Office Space</option>
                <option value="Commercial Shop">Commercial Shop</option>
                <option value="Commercial Showroom">Commercial Showroom</option>
                <option value="Warehouse">Warehouse</option>
                <option value="Commercial Office/Space">
                  Commercial Office/Space
                </option>
                <option value="Commercial Land/Inst. Land">
                  Commercial Land/Inst. Land
                </option>
                <option value="Agricultual / Farm Land">
                  Agricultual / Farm Land
                </option>
                <option value="Industrial Plots/Lands">
                  Industrial Plots/Lands
                </option>
                <option value="Business Center">Business Center</option>
                <option value="Manufacturing">Manufacturing</option>
                <option value="Hotel/Resorts">Hotel/Resorts</option>
                <option value="Guest-House/Banquet-Halls">
                  Guest-House/Banquet-Halls
                </option>
                <option value="Space in Retail Mall">
                  Space in Retail Mall
                </option>
              </select>
            </div>
            <br />
            <h2 style={{ textAlign: "center" }}>
              Property Basic Information :{" "}
            </h2>
            <div className="formDivRegistraion">
              {" "}
              <label for="exampleFormControlInput1" className="form-label">
                Property Name :{" "}
              </label>
              <input
                autoComplete="off"
                onChange={handleInput}
                type="text"
                className="form formInputRegistraion"
                id="exampleFormControlInput1"
                name="property_name"
                placeholder=""
              />
            </div>
            <div className="formDivRegistraion">
              {" "}
              <label for="exampleFormControlInput1" className="form-label">
                Title Text :{" "}
              </label>
              <input
                autoComplete="off"
                onChange={handleInput}
                type="text"
                className="form formInputRegistraion"
                id="exampleFormControlInput1"
                name="title_text"
                placeholder=""
              />
            </div>
            <div className="formDivRegistraion">
              {" "}
              <label for="exampleFormControlInput1" className="form-label">
                Meta Keyword :{" "}
              </label>
              <input
                autoComplete="off"
                onChange={handleInput}
                type="text"
                className="form formInputRegistraion"
                id="exampleFormControlInput1"
                name="meta_keyword"
                placeholder=""
              />
            </div>
            <div className="formDivRegistraion">
              {" "}
              <label for="exampleFormControlInput1" className="form-label">
                Meta Description :{" "}
              </label>
              <input
                autoComplete="off"
                onChange={handleInput}
                type="text"
                className="form formInputRegistraion"
                id="exampleFormControlInput1"
                name="meta_description"
                placeholder=""
              />
            </div>
            <br />
            <h2 style={{ textAlign: "center" }}>Price Details : </h2>
            <div className="formDivRegistraion">
              {" "}
              <label for="exampleFormControlInput1" className="form-label">
                Price :{" "}
              </label>
              <input
                autoComplete="off"
                onChange={handleInput}
                type="number"
                className="form formInputRegistraion"
                id="exampleFormControlInput1"
                name="price"
                placeholder=""
              />
            </div>{" "}
            <br />
            <h2 style={{ textAlign: "center" }}>Other Details : </h2>
            <div className="formDivRegistraion">
              {" "}
              <label for="exampleFormControlInput1" className="form-label">
                Total Floors :{" "}
              </label>
              <input
                autoComplete="off"
                onChange={handleInput}
                type="number"
                className="form formInputRegistraion"
                id="exampleFormControlInput1"
                name="total_floors"
                placeholder=""
              />
            </div>
            <div className="formDivRegistraion">
              {" "}
              <label for="exampleFormControlInput1" className="form-label">
                Property On Floor No. :{" "}
              </label>
              <input
                autoComplete="off"
                onChange={handleInput}
                type="number"
                className="form formInputRegistraion"
                id="exampleFormControlInput1"
                name="Property_on_floor"
                placeholder=""
              />
            </div>
            <div className="formDivRegistraion">
              {" "}
              <label for="exampleFormControlInput1" className="form-label">
                Super Built Up Area :{" "}
              </label>
              <input
                autoComplete="off"
                onChange={handleInput}
                type="text"
                className="form formInputRegistraion"
                id="exampleFormControlInput1"
                name="super_built_up_area"
                placeholder=""
              />
            </div>
            <div className="formDivRegistraion">
              {" "}
              <label for="exampleFormControlInput1" className="form-label">
                Built Up Area :{" "}
              </label>
              <input
                autoComplete="off"
                onChange={handleInput}
                type="text"
                className="form formInputRegistraion"
                id="exampleFormControlInput1"
                name="built_up_area"
                placeholder=""
              />
            </div>
            <div className="formDivRegistraion">
              {" "}
              <label for="exampleFormControlInput1" className="form-label">
                Total Carpet Area (in Sq. Feets Only) :{" "}
              </label>
              <input
                autoComplete="off"
                onChange={handleInput}
                type="number"
                className="form formInputRegistraion"
                id="exampleFormControlInput1"
                name="carpet_total_area"
                placeholder=""
              />
            </div>
            <br />
            <h2 style={{ textAlign: "center" }}>Features Of Property</h2>
            <div className="formDivRegistraion">
              <label for="exampleFormControlInput1" className="form-label">
                Furnishing Status :
              </label>
              <br /> Furnished
              <span
                style={{
                  marginRight: "3rem",
                  marginLeft: "0.3rem",
                  display: "inline",
                }}
              >
                <input
                  type="radio"
                  name="isFurnished"
                  value="furnished"
                  onChange={handleInput}
                />
              </span>
              Semi-Furnished
              <span
                style={{
                  marginRight: "3rem",
                  marginLeft: "0.3rem",
                  display: "inline",
                }}
              >
                <input
                  type="radio"
                  name="isFurnished"
                  value="semi_furnished"
                  onChange={handleInput}
                />
              </span>
              Un-Furnished
              <span
                style={{
                  marginRight: "3rem",
                  marginLeft: "0.3rem",
                  display: "inline",
                }}
              >
                <input
                  type="radio"
                  name="isFurnished"
                  value="un_furnished"
                  onChange={handleInput}
                />
              </span>
            </div>
            <br />
            <div className="formDivRegistraion">
              <label for="exampleFormControlInput1" className="form-label">
                Reserved Parking Availability :
              </label>
              <br /> Available
              <span
                style={{
                  marginRight: "3rem",
                  marginLeft: "0.3rem",
                  display: "inline",
                }}
              >
                <input
                  type="radio"
                  name="reserved_parking"
                  value="available"
                  onChange={handleInput}
                />
              </span>
              Not Available
              <span
                style={{
                  marginRight: "3rem",
                  marginLeft: "0.3rem",
                  display: "inline",
                }}
              >
                <input
                  type="radio"
                  name="reserved_parking"
                  value="not_available"
                  onChange={handleInput}
                />
              </span>
            </div>
            <br />
            <div className="formDivRegistraion">
              <label for="exampleFormControlInput1" className="form-label">
                Servent Accomodation :
              </label>
              <br /> Available
              <span
                style={{
                  marginRight: "3rem",
                  marginLeft: "0.3rem",
                  display: "inline",
                }}
              >
                <input
                  type="radio"
                  name="servent_accomodation"
                  value="available"
                  onChange={handleInput}
                />
              </span>
              Not Available
              <span
                style={{
                  marginRight: "3rem",
                  marginLeft: "0.3rem",
                  display: "inline",
                }}
              >
                <input
                  type="radio"
                  name="servent_accomodation"
                  value="not_available"
                  onChange={handleInput}
                />
              </span>
            </div>
            <br />
            <div className="formDivRegistraion">
              <label for="exampleFormControlInput1" className="form-label">
                RERA Approval :
              </label>
              <br /> Available
              <span
                style={{
                  marginRight: "3rem",
                  marginLeft: "0.3rem",
                  display: "inline",
                }}
              >
                <input
                  type="radio"
                  name="rera_approval"
                  value="available"
                  onChange={handleInput}
                />
              </span>
              Not Available
              <span
                style={{
                  marginRight: "3rem",
                  marginLeft: "0.3rem",
                  display: "inline",
                }}
              >
                <input
                  type="radio"
                  name="rera_approval"
                  value="not_available"
                  onChange={handleInput}
                />
              </span>
            </div>
            <div className="formDivRegistraion">
              {" "}
              <label for="exampleFormControlInput1" className="form-label">
                Reg{" "}
              </label>
              <input
                autoComplete="off"
                onChange={handleInput}
                type="text"
                className="form formInputRegistraion"
                id="exampleFormControlInput1"
                name="reg"
                placeholder=""
              />
            </div>
            <div className="formDivRegistraion">
              {" "}
              <label for="exampleFormControlInput1" className="form-label">
                Posession Date:{" "}
              </label>
              <input
                autoComplete="off"
                onChange={handleInput}
                type="date"
                className="form formInputRegistraion"
                id="exampleFormControlInput1"
                name="posession_date"
                placeholder=""
              />
            </div>
            <div className="formDivRegistraion">
              {" "}
              <label for="exampleFormControlInput1" className="form-label">
                USP (Unique Selling Proposition):{" "}
              </label>
              <input
                autoComplete="off"
                onChange={handleInput}
                type="text"
                className="form formInputRegistraion"
                id="exampleFormControlInput1"
                name="usp"
                placeholder=""
              />
            </div>
            <div className="formDivRegistraion">
              {" "}
              <label for="exampleFormControlInput1" className="form-label">
                Age Of Property (In Years Only):{" "}
              </label>
              <input
                autoComplete="off"
                onChange={handleInput}
                type="number"
                className="form formInputRegistraion"
                id="exampleFormControlInput1"
                name="age_of_property"
                placeholder=""
              />
            </div>
            <div className="formDivRegistraion">
              <label for="exampleFormControlInput1" className="form-label">
                Direction Facing :
              </label>
              <br /> East
              <span
                style={{
                  marginRight: "3rem",
                  marginLeft: "0.3rem",
                  display: "inline",
                }}
              >
                <input
                  type="radio"
                  name="direction_facing"
                  value="east"
                  onChange={handleInput}
                />
              </span>
              West
              <span
                style={{
                  marginRight: "3rem",
                  marginLeft: "0.3rem",
                  display: "inline",
                }}
              >
                <input
                  type="radio"
                  name="direction_facing"
                  value="west"
                  onChange={handleInput}
                />
              </span>
              North
              <span
                style={{
                  marginRight: "3rem",
                  marginLeft: "0.3rem",
                  display: "inline",
                }}
              >
                <input
                  type="radio"
                  name="direction_facing"
                  value="north"
                  onChange={handleInput}
                />
              </span>
              South
              <span
                style={{
                  marginRight: "3rem",
                  marginLeft: "0.3rem",
                  display: "inline",
                }}
              >
                <input
                  type="radio"
                  name="direction_facing"
                  value="south"
                  onChange={handleInput}
                />
              </span>
            </div>
            <br />
            <h2 style={{ textAlign: "center" }}>Amenities :</h2>
            <br />
            <div>
              <label>Ac</label>
              <input
                type="checkbox"
                name="amenities"
                value="Ac"
                onChange={handleCheckboxChange}
                style={{
                  margin: "1rem",
                  marginRight: "2rem",
                  marginLeft: "0.3rem",
                }}
              />{" "}
              <label>Wifi</label>
              <input
                name="amenities"
                type="checkbox"
                value="Wifi"
                onChange={handleCheckboxChange}
                style={{
                  margin: "1rem",
                  marginRight: "2rem",
                  marginLeft: "0.3rem",
                }}
              />
              <label>Laundry</label>
              <input
                type="checkbox"
                name="amenities"
                value="Laundry"
                onChange={handleCheckboxChange}
                style={{
                  margin: "1rem",
                  marginRight: "2rem",
                  marginLeft: "0.3rem",
                }}
              />{" "}
              <label>Spa</label>
              <input
                name="amenities"
                type="checkbox"
                value="Spa"
                onChange={handleCheckboxChange}
                style={{
                  margin: "1rem",
                  marginRight: "2rem",
                  marginLeft: "0.3rem",
                }}
              />
              <label>Swimming Pool</label>
              <input
                type="checkbox"
                name="amenities"
                value="Swimming Pool"
                onChange={handleCheckboxChange}
                style={{
                  margin: "1rem",
                  marginRight: "2rem",
                  marginLeft: "0.3rem",
                }}
              />{" "}
              <label>Gym</label>
              <input
                name="amenities"
                type="checkbox"
                value="Gym"
                onChange={handleCheckboxChange}
                style={{
                  margin: "1rem",
                  marginRight: "2rem",
                  marginLeft: "0.3rem",
                }}
              />
              <label>Community Hall</label>
              <input
                type="checkbox"
                name="amenities"
                value="Community Hall"
                onChange={handleCheckboxChange}
                style={{
                  margin: "1rem",
                  marginRight: "2rem",
                  marginLeft: "0.3rem",
                }}
              />{" "}
              <label>Bar</label>
              <input
                name="amenities"
                type="checkbox"
                value="Bar"
                onChange={handleCheckboxChange}
                style={{
                  margin: "1rem",
                  marginRight: "2rem",
                  marginLeft: "0.3rem",
                }}
              />{" "}
              <br />
              <label>ATM</label>
              <input
                type="checkbox"
                name="amenities"
                value="ATM"
                onChange={handleCheckboxChange}
                style={{
                  margin: "1rem",
                  marginRight: "2rem",
                  marginLeft: "0.3rem",
                }}
              />{" "}
              <label>Near Metro Station</label>
              <input
                name="amenities"
                type="checkbox"
                value="Near Metro Station"
                onChange={handleCheckboxChange}
                style={{
                  margin: "1rem",
                  marginRight: "2rem",
                  marginLeft: "0.3rem",
                }}
              />
              <label>Parking</label>
              <input
                type="checkbox"
                name="amenities"
                value="Parking"
                onChange={handleCheckboxChange}
                style={{
                  margin: "1rem",
                  marginRight: "2rem",
                  marginLeft: "0.3rem",
                }}
              />{" "}
              <label>Tennis Court</label>
              <input
                name="amenities"
                type="checkbox"
                value="Tennis Court"
                onChange={handleCheckboxChange}
                style={{
                  margin: "1rem",
                  marginRight: "2rem",
                  marginLeft: "0.3rem",
                }}
              />
              <label>Near Bus Stand</label>
              <input
                type="checkbox"
                name="amenities"
                value="Near Bus Stand"
                onChange={handleCheckboxChange}
                style={{
                  margin: "1rem",
                  marginRight: "2rem",
                  marginLeft: "0.3rem",
                }}
              />{" "}
              <label>Power Backup</label>
              <input
                name="amenities"
                type="checkbox"
                value="Power Backup"
                onChange={handleCheckboxChange}
                style={{
                  margin: "1rem",
                  marginRight: "2rem",
                  marginLeft: "0.3rem",
                }}
              />{" "}
              <br />
              <label>Gas</label>
              <input
                type="checkbox"
                name="amenities"
                value="Gas"
                onChange={handleCheckboxChange}
                style={{
                  margin: "1rem",
                  marginRight: "2rem",
                  marginLeft: "0.3rem",
                }}
              />{" "}
              <label>Community Gate</label>
              <input
                name="amenities"
                type="checkbox"
                value="Community Gate"
                onChange={handleCheckboxChange}
                style={{
                  margin: "1rem",
                  marginRight: "2rem",
                  marginLeft: "0.3rem",
                }}
              />
              <label>Servent Room</label>
              <input
                type="checkbox"
                name="amenities"
                value="Servent Room"
                onChange={handleCheckboxChange}
                style={{
                  margin: "1rem",
                  marginRight: "2rem",
                  marginLeft: "0.3rem",
                }}
              />{" "}
              <label>Modular Kitchen</label>
              <input
                name="amenities"
                type="checkbox"
                value="Modular Kitchen"
                onChange={handleCheckboxChange}
                style={{
                  margin: "1rem",
                  marginRight: "2rem",
                  marginLeft: "0.3rem",
                }}
              />
              <label>Badminton</label>
              <input
                type="checkbox"
                name="amenities"
                value="Badminton"
                onChange={handleCheckboxChange}
                style={{
                  margin: "1rem",
                  marginRight: "2rem",
                  marginLeft: "0.3rem",
                }}
              />{" "}
              <label>Flooring</label>
              <input
                name="amenities"
                type="checkbox"
                value="Flooring"
                onChange={handleCheckboxChange}
                style={{
                  margin: "1rem",
                  marginRight: "2rem",
                  marginLeft: "0.3rem",
                }}
              />
              <label>Fire Alarm</label>
              <input
                type="checkbox"
                name="amenities"
                value="Fire Alarm"
                onChange={handleCheckboxChange}
                style={{
                  margin: "1rem",
                  marginRight: "2rem",
                  marginLeft: "0.3rem",
                }}
              />{" "}
              <label>Lift</label>
              <input
                name="amenities"
                type="checkbox"
                value="Lift"
                onChange={handleCheckboxChange}
                style={{
                  margin: "1rem",
                  marginRight: "2rem",
                  marginLeft: "0.3rem",
                }}
              />
              <label>CCTV</label>
              <input
                type="checkbox"
                name="amenities"
                value="CCTV"
                onChange={handleCheckboxChange}
                style={{
                  margin: "1rem",
                  marginRight: "2rem",
                  marginLeft: "0.3rem",
                }}
              />{" "}
              <label>Wooden Flooring</label>
              <input
                name="amenities"
                type="checkbox"
                value="Wooden Flooring"
                onChange={handleCheckboxChange}
                style={{
                  margin: "1rem",
                  marginRight: "2rem",
                  marginLeft: "0.3rem",
                }}
              />
              <label>Video Games</label>
              <input
                type="checkbox"
                name="amenities"
                value="Video Games"
                onChange={handleCheckboxChange}
                style={{
                  margin: "1rem",
                  marginRight: "2rem",
                  marginLeft: "0.3rem",
                }}
              />{" "}
              <label>Intercom</label>
              <input
                name="amenities"
                type="checkbox"
                value="Intercom"
                onChange={handleCheckboxChange}
                style={{
                  margin: "1rem",
                  marginRight: "2rem",
                  marginLeft: "0.3rem",
                }}
              />
              <br />
              <label>Sauna stream</label>
              <input
                type="checkbox"
                name="amenities"
                value="Sauna stream"
                onChange={handleCheckboxChange}
                style={{
                  margin: "1rem",
                  marginRight: "2rem",
                  marginLeft: "0.3rem",
                }}
              />{" "}
              <label>Water Harvesting</label>
              <input
                name="amenities"
                type="checkbox"
                value="er Harv"
                onChange={handleCheckboxChange}
                style={{
                  margin: "1rem",
                  marginRight: "2rem",
                  marginLeft: "0.3rem",
                }}
              />
              <label>Vaastu Compliant</label>
              <input
                type="checkbox"
                name="amenities"
                value="Vaastu Compliant"
                onChange={handleCheckboxChange}
                style={{
                  margin: "1rem",
                  marginRight: "2rem",
                  marginLeft: "0.3rem",
                }}
              />{" "}
              <label>Security Parsonel</label>
              <input
                name="amenities"
                type="checkbox"
                value="Security Parsonel"
                onChange={handleCheckboxChange}
                style={{
                  margin: "1rem",
                  marginRight: "2rem",
                  marginLeft: "0.3rem",
                }}
              />
              <br />
              <label>Maintenance Staff</label>
              <input
                type="checkbox"
                name="amenities"
                value="Maintenance Staff"
                onChange={handleCheckboxChange}
                style={{
                  margin: "1rem",
                  marginRight: "2rem",
                  marginLeft: "0.3rem",
                }}
              />{" "}
              <label>Park</label>
              <input
                name="amenities"
                type="checkbox"
                value="Park"
                onChange={handleCheckboxChange}
                style={{
                  margin: "1rem",
                  marginRight: "2rem",
                  marginLeft: "0.3rem",
                }}
              />
              <label>Shopping Center</label>
              <input
                type="checkbox"
                name="amenities"
                value="Shopping Center"
                onChange={handleCheckboxChange}
                style={{
                  margin: "1rem",
                  marginRight: "2rem",
                  marginLeft: "0.3rem",
                }}
              />{" "}
              <label>Water Storage</label>
              <input
                name="amenities"
                type="checkbox"
                value="Water Storage"
                onChange={handleCheckboxChange}
                style={{
                  margin: "1rem",
                  marginRight: "2rem",
                  marginLeft: "0.3rem",
                }}
              />
              <label>Club House</label>
              <input
                name="amenities"
                type="checkbox"
                value="Club House"
                onChange={handleCheckboxChange}
                style={{
                  margin: "1rem",
                  marginRight: "2rem",
                  marginLeft: "0.3rem",
                }}
              />
              <label>Community Center</label>
              <input
                name="amenities"
                type="checkbox"
                value="Community Center"
                onChange={handleCheckboxChange}
                style={{
                  margin: "1rem",
                  marginRight: "2rem",
                  marginLeft: "0.3rem",
                }}
              />
            </div>
            <br />
            <div>
              <h2 style={{ textAlign: "center" }}>Upload Property Images:</h2>
              <br />
              <input
                multiple="multiple"
                type="file"
                name="propertyImages"
                onChange={(e) => {
                  setImage((prevImages) => [...prevImages, e.target.files]);

                  console.log(image1);
                }}
              />
            </div>
            <br />
            <h2 style={{ textAlign: "center" }}>Location / Address :</h2>
            <div className="App" style={{ width: "30%", float: "left" }}>
              Country
              <Select
                style={{ width: "30%", float: "right", marginRight: "45%" }}
                options={Country.getAllCountries()}
                getOptionLabel={(options) => {
                  return options["name"];
                }}
                getOptionValue={(options) => {
                  return options["name"];
                }}
                value={selectedCountry}
                onChange={(item) => {
                  setSelectedCountry(item);
                }}
                name="propertyCountry"
              />
              State{" "}
              <Select
                style={{ width: "30%", float: "right", marginRight: "45%" }}
                options={State?.getStatesOfCountry(selectedCountry?.isoCode)}
                getOptionLabel={(options) => {
                  return options["name"];
                }}
                getOptionValue={(options) => {
                  return options["name"];
                }}
                value={selectedState}
                onChange={(item) => {
                  setSelectedState(item);
                }}
                name="propertyCity"
              />
              Location{" "}
              <Select
                style={{ width: "50%", float: "right", marginRight: "45%" }}
                options={City.getCitiesOfState(
                  selectedState?.countryCode,
                  selectedState?.isoCode
                )}
                getOptionLabel={(options) => {
                  return options["name"];
                }}
                getOptionValue={(options) => {
                  return options["name"];
                }}
                value={selectedCity}
                onChange={(item) => {
                  setSelectedCity(item);
                }}
                name="propertyLocality"
              />{" "}
              <br />
              <div className="formDivRegistraion">
                {" "}
                <label for="exampleFormControlInput1" className="form-label">
                  Sub Location :{" "}
                </label>
                <input
                  autoComplete="off"
                  onChange={handleInput}
                  type="text"
                  className="form formInputRegistraion"
                  id="exampleFormControlInput1"
                  name="propertySubLocality"
                  placeholder=""
                  style={{ width: "100%", float: "right", marginRight: "5%" }}
                />
              </div>
              <div className="formDivRegistraion">
                {" "}
                <label for="exampleFormControlInput1" className="form-label">
                  Lane Address :{" "}
                </label>
                <input
                  autoComplete="off"
                  onChange={handleInput}
                  type="text"
                  className="form formInputRegistraion"
                  id="exampleFormControlInput1"
                  name="property_lane_address"
                  placeholder=""
                  style={{ width: "100%", float: "right", marginRight: "5%" }}
                />
              </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br /> <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <h2 style={{ textAlign: "center" }}>Specifications :</h2>
            <div className="formDivRegistraion">
              {" "}
              <label for="exampleFormControlInput1" className="form-label">
                Property Specifications :{" "}
              </label>
              <textarea
                rows="4"
                autoComplete="off"
                onChange={handleInput}
                type="date"
                className="form formInputRegistraion"
                id="exampleFormControlInput1"
                name="property_specicification"
                placeholder=""
              />
            </div>
            <div className="formDivRegistraion">
              {" "}
              <label for="exampleFormControlInput1" className="form-label">
                Nearby Keypoints :{" "}
              </label>
              <textarea
                rows="4"
                autoComplete="off"
                onChange={handleInput}
                type="date"
                className="form formInputRegistraion"
                id="exampleFormControlInput1"
                name="nearby_Keypoints"
                nearby_Keypoints
                placeholder=""
              />
            </div>
            <h2 style={{ textAlign: "center" }}>Floor Plan :</h2>
            <div className="formDivRegistraion">
              <label for="exampleFormControlInput1" className="form-label">
                Select BHK :
              </label>
              <br />
              <select style={{ width: "5rem" }}
              name="bhkNumber"
              value={user.bhkNumber}
              onChange={handleInput}>
                <option value="1 BHK">
                  1 BHK
                </option>
                <option value="2 BHK">
                  2 BHK
                </option>
                <option value="3 BHK">
                  3 BHK
                </option>
                <option value="4 BHK">
                  4 BHK
                </option>
                <option value="5 BHK">
                  5 BHK
                </option>
                <option value="5+ BHK">
                  5 BHK
                </option>
              </select>
            </div>
            <br />
            <div style={{ marginLeft: "4rem" }} className="formDivRegistraion">
              {" "}
              <label
                style={{ marginLeft: "-3rem" }}
                for="exampleFormControlInput1"
                className="form-label"
              >
                Area (Sq. Ft) :{" "}
              </label>
              <input
                autoComplete="off"
                onChange={handleInput}
                type="number"
                className="form formInputRegistraion"
                id="exampleFormControlInput1"
                name="area"
                placeholder=""
                style={{ width: "100%", float: "right", marginRight: "5%" }}
              />
            </div>
            <br />
            <label
              style={{ marginLeft: "-3rem" }}
              for="exampleFormControlInput1"
              className="form-label"
            >
              Floor Plan Image :{" "}
            </label>
            <input
              multiple="multiple"
              type="file"
              name="floorPlanImages"
              onChange={(e) => {
                setImage1((prevImages) => [...prevImages, ...e.target.files]);
                console.log(image1);
              }}
            />
            <button
              type="submit"
              value="signUp"
              className="registerBtn"
              style={{ float: "right", fontSize: "large" }}
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default PostNewCommercialProperty;

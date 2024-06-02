import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import debounce from "lodash/debounce";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import {
  Container,
  Grid,
  TextField,
  Button,
  FormControl,
  InputLabel,
  RadioGroup,
  FormControlLabel,
  Checkbox,
  FormLabel,
  Radio,
  styled,
} from "@mui/material";
import { Country, State, City } from "country-state-city";
import Select from "react-select";

import CloudUploadIcon from "@mui/icons-material/CloudUpload";
const AddNewproject = () => {
  const inputArr = [
    {
      type: "text",
      id: 1,
      value: "",
    },
  ];
  const [arr, setArr] = useState(inputArr);
  const [selectedValues, setSelectedValues] = useState([]);
  // const [editorSpecificationData, EditorSpecificationSetData] = useState("");
  // const [editorLocationMapData, EditorLocationMapSetData] = useState("");
  const [editorMasterPlanData, EditorMasterPlanSetData] = useState("");
  const [editorPricePlanData, EditorPricePlanSetData] = useState("");
  const [editorPaymentPlanData, EditorPaymentPlanSetData] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [locations, setLocations] = useState([]);

  const [subLocations, setSubLocations] = useState([]);
  // const [editorContactUsData, EditorContactUsSetData] = useState("");
  // const [editorData, EditorSetData] = useState("");
  const [Localities, setLocalities] = useState({ post: [] });
  const [tabIndex, setTabIndex] = useState(0);
  const [image, setImage] = useState("");
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
  const [image4, setImage4] = useState("");
  const [image5, setImage5] = useState("");
  const [image6, setImage6] = useState("");
  const [image7, setImage7] = useState("");
  const [data, setData] = useState({
    ownerName: "",
    email: "",
    phoneNo: "",
    projectListedBy: "",
    userType: "",
    projectType: "",
    constructionUpdate: [
      {
        title: "",
        data: "",
        paymentPlan: Image,
      },
    ],
    totalAmount: "",
    floorPlan: Image,
    paymentPlan: Image,
    amenities: [],
    bank_offers: [],
    total_floors: "",
    max_area: "",
    min_area: "",
    project_name: "",
    title_text: "",
    meta_keyword: "",
    meta_description: "",
    total_area: "",
    open_area: "",
    locationMap: "",
    area: "",
    logoImage: Image,
    max_price: "",
    pricePlanDetails: "",
    paymentPlanDetails: "",
    youtube_URL: "",
    developerName: "",
    min_price: "",
    price: "",
    rera_approval: "",
    reg: "",
    posession_date: "",
    usp: [],
    no_of_units: "",
    no_of_floor: "",
    no_of_tower: "",
    bhkNumber: "",
    masterPlan: "",
    constructionTitle: "",
    constructionData: "",
    projectCountry: "",
    projectCity: "",
    projectLocality: "",
    projectSubLocality: "",
    project_lane_address: "",
    project_specification: "",
    contactUsDetails: "",
    dateOfFormSubmission: "",
  });
  const getLocationsByCity = (city) => {
    return Array.from(
      Localities.post.filter((locality) => locality.city === city)
    );
  };

  const getSubLocationsByLocation = (location) => {
    return Array.from(
      Localities.post.filter((locality) => locality.location === location)
    );
  };

  // const VisuallyHiddenInput = styled("input")({
  //   clip: "rect(0 0 0 0)",
  //   clipPath: "inset(50%)",
  //   height: 1,
  //   overflow: "hidden",
  //   position: "absolute",
  //   bottom: 0,
  //   left: 0,
  //   whiteSpace: "nowrap",
  //   width: 1,
  // });

  useEffect(() => {
    axios
      .get("/localitiesList")
      .then((response) => {
        const data = response.data;

        setLocalities({ post: data });
      })
      .catch((err) => {
        console.log("Error during Data:", err);
      });
  }, []);
  useEffect(() => {
    if (selectedCity) {
      const filteredLocations = getLocationsByCity(selectedCity);

      setLocations([...filteredLocations]); // Use the spread operator to ensure it's an array
    } else {
      setLocations([]);
    }
  }, [selectedCity]);

  useEffect(() => {
    if (selectedLocation) {
      const filteredSubLocations = getSubLocationsByLocation(selectedLocation);

      setSubLocations(filteredSubLocations);
    } else {
      setSubLocations([]);
    }
  }, [selectedLocation]);

  console.log(Localities);

  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  // const [selectedCountry, setSelectedCountry] = useState(null);
  // const [selectedState, setSelectedState] = useState(null);
  // const [selectedCity, setSelectedCity] = useState(null);

  const regRef = useRef(null);
  // const projectRef = useRef(null);
  const specificationRef = useRef(null);
  // const LocationMapRef = useRef(null);
  // const MasterPlanRef = useRef(null);
  // const FloorPlanRef = useRef(null);
  // const PricePlanRef = useRef(null);
  // const PaymentRef = useRef(null);
  // const BrochureRef = useRef(null);
  // const ConstructionUpdateRef = useRef(null);
  // const ContactUsRef = useRef(null);

  // const debouncedHandleInput = (e) => {
  //   let name = e.target.name;
  //   let value = e.target.value;
  //   setData({ ...name, [name]: value });
  // };

  // const debouncedHandleInput = (e) => {

  //   const { name, value } = e.target;

  //   setData({ ...data, [name]: value });

  // };

  const debouncedHandleInput = debounce((e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }, 300);

  const debouncedCKEHandleInput = debounce((e) => {
    const { name, value } = e.target;

    setData((prevData) => ({ ...prevData, [name]: value }));
  }, 300);
  // useEffect(()=>{
  //   console.log("Data is changing")
  // },[debouncedHandleInput])

  const addInput = () => {
    setArr((s) => {
      return [
        ...s,
        {
          type: "text",
          value: "",
        },
      ];
    });
  };

  // const handleAddBtn = (e) => {
  //   e.preventDefault();

  //   const index = e.target.id;
  //   setArr((s) => {
  //     const newArr = s.slice();
  //     newArr[index].value = e.target.value;

  //     return newArr;
  //   });
  // };
  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setSelectedValues([...selectedValues, value]);
    } else {
      setSelectedValues(selectedValues.filter((val) => val !== value));
    }
  };

  return (
    <div
      className="newProjectMainDiv"
      style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
    >
      <div>
        <div>
          <h2>Add New Project</h2>
        </div>
        <form
          method="POST"
          action="/add-new-project"
          encType="multipart/form-data"
        >
          <div className="tablist">
            <Tabs
              forceRenderTabPanel={true}
              selectedIndex={tabIndex}
              onSelect={(index) => setTabIndex(index)}
            >
              <TabList>
                <Tab id="Project">Project</Tab>
                <Tab>Specification</Tab>
                <Tab id="LocationMap">Location Map</Tab>
                <Tab id="MasterPlan">Master Plan</Tab>
                <Tab id="FloorPlan">Floor Plan</Tab>
                <Tab id="PricePlan">Price Plan</Tab>
                <Tab id="PaymentPlan">Payment Plan</Tab>
                <Tab id="Brochure">E-Brochure</Tab>
                <Tab id="ConstructionUpdate">Construction Update</Tab>
                <Tab id="ContactUs">Contact Us</Tab>
              </TabList>

              <TabPanel>
                <Container
                  component="main"
                  maxWidth="xl"
                  rowSpacing={2}
                  style={{
                    marginTop: "2%",
                    marginBottom: "2%",
                    display: "block",
                  }}
                >
                  <div>
                    <Grid container spacing={2} rowSpacing={1.2}>
                      {/* email address */}
                      <Grid item xs={4}>
                        Project Name
                        <TextField
                          placeholder="Project Name"
                          // label="Project Name"
                          size="small"
                          fullWidth
                          name="project_name"
                          onChange={debouncedHandleInput}
                        />
                      </Grid>
                      <Grid item xs={4}>
                        Title Text{" "}
                        <TextField
                          placeholder="Title Text"
                          fullWidth
                          size="small"
                          name="title_text"
                          onChange={debouncedHandleInput}
                        />
                      </Grid>
                      <Grid item xs={4}>
                        Meta Keyword{" "}
                        <TextField
                          placeholder="Meta Keyword"
                          fullWidth
                          size="small"
                          name="meta_keyword"
                          onChange={debouncedHandleInput}
                        />
                      </Grid>
                      <br />
                      <Grid item xs={12}>
                        Meta Description{" "}
                        <TextField
                          placeholder="Meta Description"
                          fullWidth
                          size="small"
                          name="meta_description"
                          onChange={debouncedHandleInput}
                        />
                      </Grid>
                      <Grid item xs={4}>
                        Minimum Price{" "}
                        <TextField
                          placeholder="Minimum Price"
                          // label="Minimum Price"
                          name="min_price"
                          fullWidth
                          size="small"
                          onChange={debouncedHandleInput}
                        />
                      </Grid>
                      {/* last name */}
                      <Grid item xs={4}>
                        Maximum Price{" "}
                        <TextField
                          placeholder="Maximum Price"
                          name="max_price"
                          fullWidth
                          size="small"
                          onChange={debouncedHandleInput}
                        />
                      </Grid>
                      <br />
                      <br />
                      <Grid
                        container
                        xs={12}
                        spacing={2}
                        rowSpacing={2}
                        style={{ marginLeft: "0.1%" }}
                      >
                        <Grid item xs={4}>
                          Minimum Area{" "}
                          <TextField
                            placeholder="Minimum Area"
                            // label="Minimum Area"
                            name="min_area"
                            fullWidth
                            size="small"
                            onChange={debouncedHandleInput}
                          />
                        </Grid>
                        {/* last name */}
                        <Grid item xs={4}>
                          Maximum Area{" "}
                          <TextField
                            placeholder="Maximum Area"
                            // label="Maximum Area"
                            name="max_area"
                            fullWidth
                            size="small"
                            onChange={debouncedHandleInput}
                          />
                        </Grid>
                      </Grid>
                      <Grid item xs={4}>
                        <InputLabel id="demo-simple-select-label">
                          Project Type
                        </InputLabel>

                        <select
                          style={{
                            height: "6vh",
                            backgroundColor: "white",
                            borderRadius: "5px",
                            width: "100%",
                          }}
                          name="projectType"
                        >
                          <option value="Residential">Residential</option>
                          <option value="Commercial">Commercial</option>
                          <option value="Commercial Plot">
                            Commercial Plot
                          </option>
                        </select>
                      </Grid>
                      <Grid item xs={4}>
                        <InputLabel id="demo-simple-select-label">
                          Select BHK
                        </InputLabel>

                        <select
                          style={{
                            height: "6vh",
                            backgroundColor: "white",
                            borderRadius: "5px",
                            width: "100%",
                          }}
                          name="projectType"
                        >
                          <option value="1 BHK">1 BHK</option>
                          <option value="2 BHK">2 BHK</option>
                          <option value="3 BHK">3 BHK</option>
                          <option value="4 BHK">4 BHK</option>
                          <option value="5 BHK">5 BHK</option>
                          <option value="5+ BHK">5+ BHK</option>
                        </select>
                      </Grid>
                      <br />
                      <Grid
                        container
                        xs={12}
                        spacing={2}
                        style={{ marginLeft: "0.1%" }}
                      >
                        <Grid item xs={4}>
                          <FormControl>
                            <FormLabel id="demo-radio-buttons-group-label">
                              Feature Project
                            </FormLabel>
                            <RadioGroup
                              row
                              aria-labelledby="demo-radio-buttons-group-label"
                              name="radio-buttons-group"
                            >
                              <FormControlLabel
                                value="Yes"
                                control={<Radio />}
                                label="Yes"
                                name="featureProject"
                                className="radioBtn"
                              />
                              <FormControlLabel
                                value="No"
                                control={<Radio />}
                                label="No"
                                name="featureProject"
                                className="radioBtn"
                              />
                            </RadioGroup>
                          </FormControl>
                        </Grid>
                        <Grid item xs={4}>
                          <FormControl>
                            <FormLabel id="demo-radio-buttons-group-label">
                              RERA Approval
                            </FormLabel>
                            <RadioGroup
                              row
                              aria-labelledby="demo-radio-buttons-group-label"
                              name="radio-buttons-group"
                            >
                              <FormControlLabel
                                value="Yes"
                                control={<Radio />}
                                label="Yes"
                                name="rera_approval"
                                className="radioBtn"
                                onClick={() => {
                                  regRef.current.style.display = "block";
                                }}
                              />
                              <FormControlLabel
                                value="No"
                                control={<Radio />}
                                label="No"
                                name="rera_approval"
                                className="radioBtn"
                                onClick={() => {
                                  regRef.current.style.display = "none";
                                }}
                              />
                            </RadioGroup>
                          </FormControl>
                        </Grid>

                        <br />
                        <Grid
                          item
                          xs={4}
                          ref={regRef}
                          style={{ display: "none" }}
                        >
                          <TextField
                            placeholder="Reg"
                            label="Reg"
                            fullWidth
                            name="reg"
                          />
                        </Grid>
                      </Grid>
                      <Grid
                        container
                        xs={12}
                        spacing={2}
                        rowSpacing={1}
                        style={{ marginLeft: "0.1%" }}
                      >
                        <Grid item xs={4}>
                          <TextField
                            placeholder=" USP"
                            label="USP"
                            fullWidth
                            name="usp"
                          />
                        </Grid>
                        {arr.map((item, i) => {
                          return (
                            <Grid item xs={4}>
                              <TextField
                                placeholder=" USP"
                                label="USP"
                                fullWidth
                                onChange={debouncedHandleInput}
                                // size="40"
                                name="usp"
                              />
                            </Grid>
                          );
                        })}{" "}
                        <br />
                        <div>
                          <button
                            className="btn btn-primary"
                            type="button"
                            onClick={addInput}
                            style={{
                              marginLeft: "1rem",
                              marginBottom: "-5rem",
                              padding: "0rem !important",
                              height: "5px !important",
                              fontSize: "large",
                            }}
                          >
                            +
                          </button>
                        </div>
                      </Grid>
                      <Grid
                        container
                        xs={12}
                        spacing={2}
                        rowSpacing={1}
                        style={{ marginLeft: "0.1%", marginTop: "3rem" }}
                      >
                        <Grid item xs={4}>
                          <TextField
                            placeholder="Possession Date"
                            label="Possession Date"
                            fullWidth
                            name="posession_date"
                            onChange={debouncedHandleInput}
                          />
                        </Grid>
                        <Grid item xs={4}>
                          <TextField
                            placeholder=" No. Of Units"
                            label="No. Of Units"
                            fullWidth
                            name="no_of_units"
                            onChange={debouncedHandleInput}
                          />
                        </Grid>
                        <Grid item xs={4}>
                          <TextField
                            placeholder=" No. Of Tower"
                            label="No. Of Tower"
                            fullWidth
                            name="no_of_tower"
                            onChange={debouncedHandleInput}
                          />
                        </Grid>
                        <Grid item xs={4}>
                          <TextField
                            placeholder=" No. Of Floor"
                            label="No. Of Floor"
                            fullWidth
                            name="no_of_floor"
                            onChange={debouncedHandleInput}
                          />
                        </Grid>
                        <Grid item xs={4}>
                          <TextField
                            placeholder=" Total Area"
                            label="Total Area"
                            fullWidth
                            name="total_area"
                            onChange={debouncedHandleInput}
                          />
                        </Grid>
                        <Grid item xs={4}>
                          <TextField
                            placeholder=" Open Area"
                            label="Open Area"
                            fullWidth
                            name="open_area"
                            onChange={debouncedHandleInput}
                          />
                        </Grid>
                      </Grid>
                      <Grid item xs={12}>
                        <FormLabel id="demo-radio-buttons-group-label">
                          Bank Offer
                        </FormLabel>
                        <br />
                        <Checkbox
                          {...label}
                          className="checkboxAddProject"
                          name="bank_offers"
                          value="ICICI"
                          onChange={handleCheckboxChange}
                        />
                        ICICI
                        <Checkbox
                          {...label}
                          className="checkboxAddProject"
                          name="bank_offers"
                          value="Allahbad Bank"
                          onChange={handleCheckboxChange}
                        />
                        Allahbad Bank
                        <Checkbox
                          {...label}
                          className="checkboxAddProject"
                          name="bank_offers"
                          value=" UY"
                          onChange={handleCheckboxChange}
                        />
                        UY
                        <Checkbox
                          {...label}
                          className="checkboxAddProject"
                          name="bank_offers"
                          value="SBI"
                          onChange={handleCheckboxChange}
                        />
                        SBI
                        <Checkbox
                          {...label}
                          className="checkboxAddProject"
                          name="bank_offers"
                          value="HDFC"
                          onChange={handleCheckboxChange}
                        />
                        HDFC
                        <Checkbox
                          {...label}
                          className="checkboxAddProject"
                          name="bank_offers"
                          value="Axis Bank"
                          onChange={handleCheckboxChange}
                        />
                        Axis Bank
                        <Checkbox
                          {...label}
                          className="checkboxAddProject"
                          name="bank_offers"
                          value="Canara Bank"
                          onChange={handleCheckboxChange}
                        />
                        Canara Bank
                        <Checkbox
                          {...label}
                          className="checkboxAddProject"
                          name="bank_offers"
                          value="IIFL Home Loan"
                          onChange={handleCheckboxChange}
                        />
                        IIFL Home Loan
                        <Checkbox
                          {...label}
                          className="checkboxAddProject"
                          name="bank_offers"
                          value="Indabulis Home Loans"
                          onChange={handleCheckboxChange}
                        />
                        Indabulis Home Loans
                        <Checkbox
                          {...label}
                          className="checkboxAddProject"
                          name="bank_offers"
                          onChange={debouncedHandleInput}
                          value="L & T Finance"
                        />
                        L & T Finance
                        <Checkbox
                          {...label}
                          className="checkboxAddProject"
                          name="bank_offers"
                          value=" LIC HFL"
                          onChange={handleCheckboxChange}
                        />
                        LIC HFL
                        <Checkbox
                          {...label}
                          className="checkboxAddProject"
                          name="bank_offers"
                          value="YES Bank"
                          onChange={handleCheckboxChange}
                        />{" "}
                        YES Bank
                        <Checkbox
                          {...label}
                          className="checkboxAddProject"
                          value="DHFL Bank"
                          onChange={handleCheckboxChange}
                        />{" "}
                        DHFL Bank
                        <Checkbox
                          {...label}
                          className="checkboxAddProject"
                          value="Bank OF Baroda"
                          onChange={handleCheckboxChange}
                        />{" "}
                        Bank OF Baroda
                        <Checkbox
                          {...label}
                          className="checkboxAddProject"
                          value="HSBC"
                          onChange={handleCheckboxChange}
                        />
                        HSBC
                        <Checkbox
                          {...label}
                          className="checkboxAddProject"
                          value="Kotak Mahindra Bank"
                          onChange={handleCheckboxChange}
                        />{" "}
                        Kotak Mahindra Bank
                        <Checkbox
                          {...label}
                          className="checkboxAddProject"
                          value="Punjab National Bank"
                          onChange={handleCheckboxChange}
                        />
                        Punjab National Bank
                        <Checkbox
                          {...label}
                          className="checkboxAddProject"
                          value="Bajaj Housing Finance"
                          onChange={handleCheckboxChange}
                        />
                        Bajaj Housing Finance
                      </Grid>
                      <Grid item xs={8}>
                        <FormLabel id="demo-radio-buttons-group-label">
                          Amenities
                        </FormLabel>
                        <br />
                        <Checkbox
                          {...label}
                          className="checkboxAddProject"
                          name="amenities"
                          onChange={debouncedHandleInput}
                          value=" AC"
                        />
                        AC
                        <Checkbox
                          {...label}
                          className="checkboxAddProject"
                          name="amenities"
                          onChange={debouncedHandleInput}
                          value="Aerobics"
                        />
                        Aerobics
                        <Checkbox
                          {...label}
                          className="checkboxAddProject"
                          name="amenities"
                          onChange={debouncedHandleInput}
                          value=" Wi-Fi"
                        />
                        Wi-Fi
                        <Checkbox
                          {...label}
                          className="checkboxAddProject"
                          name="amenities"
                          onChange={debouncedHandleInput}
                          value="Laundary"
                        />
                        Laundary
                        <Checkbox
                          {...label}
                          className="checkboxAddProject"
                          name="amenities"
                          onChange={debouncedHandleInput}
                          value=" SPA"
                        />
                        SPA
                        <Checkbox
                          {...label}
                          className="checkboxAddProject"
                          name="amenities"
                          onChange={debouncedHandleInput}
                          value="Swimming Pool"
                        />
                        Swimming Pool
                        <Checkbox
                          {...label}
                          className="checkboxAddProject"
                          name="amenities"
                          onChange={debouncedHandleInput}
                          value="GYM"
                        />
                        GYM <br />
                        <Checkbox
                          {...label}
                          className="checkboxAddProject"
                          name="amenities"
                          onChange={debouncedHandleInput}
                          value="Community Hall"
                        />
                        Community Hall
                        <Checkbox
                          {...label}
                          className="checkboxAddProject"
                          name="amenities"
                          onChange={debouncedHandleInput}
                          value="Bar"
                        />
                        Bar
                        <Checkbox
                          {...label}
                          className="checkboxAddProject"
                          name="amenities"
                          onChange={debouncedHandleInput}
                          value="ATM"
                        />
                        ATM
                        <Checkbox
                          {...label}
                          className="checkboxAddProject"
                          name="amenities"
                          onChange={debouncedHandleInput}
                          value="Near Metro Station"
                        />
                        Near Metro Station
                        <Checkbox
                          {...label}
                          className="checkboxAddProject"
                          name="amenities"
                          onChange={debouncedHandleInput}
                          value="Parking"
                        />
                        Parking
                        <Checkbox
                          {...label}
                          className="checkboxAddProject"
                          name="amenities"
                          onChange={debouncedHandleInput}
                          value="Tennis Courts"
                        />
                        Tennis Courts
                        <Checkbox
                          {...label}
                          className="checkboxAddProject"
                          name="amenities"
                          onChange={debouncedHandleInput}
                          value="Near Bus Stand"
                        />
                        Near Bus Stand
                        <Checkbox
                          {...label}
                          className="checkboxAddProject"
                          name="amenities"
                          onChange={debouncedHandleInput}
                          value="Power Backup"
                        />
                        Power Backup
                        <Checkbox
                          {...label}
                          className="checkboxAddProject"
                          name="amenities"
                          onChange={debouncedHandleInput}
                          value="GAS"
                        />
                        GAS
                        <Checkbox
                          {...label}
                          className="checkboxAddProject"
                          name="amenities"
                          onChange={debouncedHandleInput}
                          value="Community Gate"
                        />
                        Community Gate
                        <Checkbox
                          {...label}
                          className="checkboxAddProject"
                          name="amenities"
                          onChange={debouncedHandleInput}
                          value="Servent Room"
                        />
                        Servent Room
                        <br />
                        <Checkbox
                          {...label}
                          className="checkboxAddProject"
                          name="amenities"
                          onChange={debouncedHandleInput}
                          value="Modular Kitchen"
                        />
                        Modular Kitchen
                        <Checkbox
                          {...label}
                          className="checkboxAddProject"
                          name="amenities"
                          onChange={debouncedHandleInput}
                          value="Badminton"
                        />
                        Badminton
                        <Checkbox
                          {...label}
                          className="checkboxAddProject"
                          name="amenities"
                          onChange={debouncedHandleInput}
                          value="Flooring"
                        />
                        Flooring
                        <Checkbox
                          {...label}
                          className="checkboxAddProject"
                          name="amenities"
                          onChange={debouncedHandleInput}
                          value="Fire Alarm"
                        />
                        Fire Alarm
                        <Checkbox
                          {...label}
                          className="checkboxAddProject"
                          name="amenities"
                          onChange={debouncedHandleInput}
                          value="Lift"
                        />
                        Lift
                        <Checkbox
                          {...label}
                          className="checkboxAddProject"
                          name="amenities"
                          onChange={debouncedHandleInput}
                          value="CCTV"
                        />
                        CCTV <br />
                        <Checkbox
                          {...label}
                          className="checkboxAddProject"
                          name="amenities"
                          onChange={debouncedHandleInput}
                          value="Wooden Flooring"
                        />
                        Wooden Flooring
                        <Checkbox
                          {...label}
                          className="checkboxAddProject"
                          name="amenities"
                          onChange={debouncedHandleInput}
                          value="Video Games"
                        />
                        Video Games
                        <Checkbox
                          {...label}
                          className="checkboxAddProject"
                          name="amenities"
                          onChange={debouncedHandleInput}
                          value="Intercom"
                        />
                        Intercom
                        <Checkbox
                          {...label}
                          className="checkboxAddProject"
                          name="amenities"
                          onChange={debouncedHandleInput}
                          value="Sauna Stream"
                        />
                        Sauna Stream
                        <br />
                        <Checkbox
                          {...label}
                          className="checkboxAddProject"
                          name="amenities"
                          onChange={debouncedHandleInput}
                          value="Water Harvesting"
                        />
                        Water Harvesting
                        <Checkbox
                          {...label}
                          className="checkboxAddProject"
                          name="amenities"
                          onChange={debouncedHandleInput}
                          value="Vaastu Complaint"
                        />
                        Vaastu Complaint
                        <Checkbox
                          {...label}
                          className="checkboxAddProject"
                          name="amenities"
                          onChange={debouncedHandleInput}
                          value="Security personel"
                        />
                        Security personel
                        <Checkbox
                          {...label}
                          className="checkboxAddProject"
                          name="amenities"
                          onChange={debouncedHandleInput}
                          value="Maintenance Staff"
                        />
                        Maintenance Staff
                        <br />
                        <Checkbox
                          {...label}
                          className="checkboxAddProject"
                          name="amenities"
                          onChange={debouncedHandleInput}
                          value="Park"
                        />
                        Park
                        <Checkbox
                          {...label}
                          className="checkboxAddProject"
                          name="amenities"
                          onChange={debouncedHandleInput}
                          value="Shopping Center"
                        />
                        Shopping Center
                        <Checkbox
                          {...label}
                          className="checkboxAddProject"
                          name="amenities"
                          onChange={debouncedHandleInput}
                          value="Water Storage"
                        />
                        Water Storage
                        <Checkbox
                          {...label}
                          className="checkboxAddProject"
                          name="amenities"
                          onChange={debouncedHandleInput}
                          value="Club House"
                        />
                        Club House
                        <Checkbox
                          {...label}
                          className="checkboxAddProject"
                          name="amenities"
                          onChange={debouncedHandleInput}
                          value="Community Center"
                        />
                        Community Center
                      </Grid>
                      <Grid item xs={8}>
                          <FormLabel id="demo-radio-buttons-group-label">
                            Project Images
                          </FormLabel>
                        </Grid>
                      <Grid item xs={8}>
                        <Button
                          component="label"
                          role={undefined}
                          variant="contained"
                          tabIndex={-1}
                          startIcon={<CloudUploadIcon />}
                        >
                          Upload Project Logo
                          <input
                            type="file"
                            name="logoImage"
                            onChange={(e) => {
                              setImage(e.target.files[0]);
                              console.log(image);
                            }}
                          />
                        </Button>
                        
                      </Grid>
                      <Grid item xs={8}>
                        <Button
                          component="label"
                          role={undefined}
                          variant="contained"
                          tabIndex={-1}
                          startIcon={<CloudUploadIcon />}
                        >
                          Upload Project Image
                          <input
                            type="file"
                            name="projectImage"
                            onChange={(e) => {
                              setImage1(e.target.files[0]);
                              console.log(image1);
                            }}
                          />
                        </Button>
                      </Grid>
                      <Grid item xs={8}>
                          <FormLabel id="demo-radio-buttons-group-label">
                            Youtube URL Link
                          </FormLabel>
                        </Grid>
                      <Grid item xs={8}>
                        <TextField
                          placeholder=" Set Project Youtube URL"
                          label="Project Youtube URL"
                          fullWidth
                          type="text"
                          name="youtube_URL"
                          onChange={debouncedHandleInput}
                        />
                      </Grid>
                      <Grid item xs={5}>
                        <InputLabel id="demo-simple-select-label">
                          Choose Developer
                        </InputLabel>

                        <select
                          style={{
                            height: "6vh",
                            backgroundColor: "white",
                            borderRadius: "5px",
                            width: "100%",
                          }}
                          name="developerName"
                          value={data.developerName}
                        >
                          <option value="IREO Developer">IREO Developer</option>
                          <option value="M3M Developer">M3M Developer</option>
                          <option value="Ansal Developer">
                            Ansal Developer
                          </option>
                          <option value="Godrej Developer">
                            Godrej Developer
                          </option>
                          <option value="Mapsko Group">Mapsko Group</option>

                          <option value="Corona Developer">
                            Corona Developer
                          </option>
                          <option value="Era Group">Era Group</option>

                          <option value="Cosmos Infra">Cosmos Infra</option>
                          <option value="Soldier Housing">
                            Soldier Housing
                          </option>

                          <option value="Assotech">Assotech</option>
                          <option value="Universal Group">
                            Universal Group
                          </option>

                          <option value="ABW Infrastructure Limited">
                            ABW Infrastructure Limited
                          </option>
                          <option value="Orchid Infrastructure Developers">
                            Orchid Infrastructure Developers
                          </option>

                          <option value="Ramprashta Group">
                            Ramprashta Group
                          </option>
                          <option value="Unitech Group">Unitech Group</option>
                          <option value="Pareena Associated">
                            Pareena Associated
                          </option>
                          <option value="Smart City Developers Pvt. Ltd">
                            Smart City Developers Pvt. Ltd.
                          </option>
                          <option value="Vatika Developers">
                            Vatika Developers
                          </option>
                          <option value="Jagrit Infrastructure Pvt. Ltd">
                            Jagrit Infrastructure Pvt. Ltd.
                          </option>
                          <option value="MVL Limited">MVL Limited</option>
                          <option value="Chishlm Furnished Apartments">
                            Chishlm Furnished Apartments
                          </option>
                          <option value="Paras Buildtech Pvt. Ltd.">
                            Paras Buildtech Pvt. Ltd.
                          </option>
                          <option value="Orris Infrastructure Pvt. Ltd">
                            Orris Infrastructure Pvt. Ltd.
                          </option>
                          <option value="ABW Infrastructure Limited">
                            ABW Infrastructure Limited
                          </option>
                          <option value="Bharti Realty Limited">
                            Bharti Realty Limited
                          </option>
                        </select>
                      </Grid>{" "}
                      {/* <InputLabel id="demo-simple-select-label">
                        Project Address
                      </InputLabel> */}
                      <Grid item xs={8}>
                          <FormLabel id="demo-radio-buttons-group-label">
                            Property Address
                          </FormLabel>
                        </Grid>
                      <Grid container spacing={2} rowSpacing={2} item xs={12}>
                        <Grid item xs={4}>
                          City
                          <select
                            style={{
                              height: "6vh",
                              backgroundColor: "white",
                              borderRadius: "5px",
                              width: "100%",
                            }}
                            onChange={(e) => {
                              setSelectedCity(e.target.value);
                              setLocations(getLocationsByCity(e.target.value));
                            }}
                            name="city"
                            // value={data.city}
                          >
                            {Array.from(
                              new Set(Localities.post.map(({ city }) => city))
                            ).map((city) => (
                              <option value={city}>{city}</option>
                            ))}
                          </select>
                        </Grid>

                        <Grid item xs={4}>
                          Location{" "}
                          <select
                            style={{
                              height: "6vh",
                              backgroundColor: "white",
                              borderRadius: "5px",
                              width: "100%",
                            }}
                            onChange={(e) =>
                              setSelectedLocation(e.target.value)
                            }
                            name="location"
                            // value={data.location}
                          >
                            {Array.from(
                              new Set(locations.map(({ location }) => location))
                            ).map((location) => (
                              <option value={location}>{location}</option>
                            ))}
                          </select>
                        </Grid>

                        <Grid item xs={4}>
                          Sub - Location{" "}
                          <select
                            style={{
                              height: "6vh",
                              backgroundColor: "white",
                              borderRadius: "5px",
                              width: "100%",
                            }}
                            name="sub_location"
                            // value={data.sub_location}
                          >
                            {Array.isArray(subLocations) &&
                              subLocations.map((subLocation) => (
                                <option value={subLocation.sub_location}>
                                  {subLocation.sub_location}
                                </option>
                              ))}
                          </select>{" "}
                        </Grid>
                      </Grid>
                      <Grid item xs={8}>
                        <TextField
                          placeholder="Lane Address"
                          label="Lane Address"
                          fullWidth
                          name="project_lane_address"
                          onChange={debouncedHandleInput}
                        />
                      </Grid>
                    </Grid>
                    <br /> <br />
                    <Grid item xs={8} style={{ textAlign: "center" }}>
                      <Button
                        type="button"
                        variant="contained"
                        color="primary"
                        style={{ padding: "0.6rem 1.5rem" }}
                        onClick={() => setTabIndex(tabIndex + 1)}
                      >
                        Next
                      </Button>
                    </Grid>
                  </div>
                </Container>
              </TabPanel>
              <TabPanel>
                <div>
                  <Container
                    component="main"
                    maxWidth="lg"
                    style={{
                      marginTop: "2%",
                      marginBottom: "2%",
                      display: "block",
                    }}
                  >
                    <InputLabel
                      id="demo-simple-select-label"
                      style={{ marginTop: "2%", marginBottom: "1%" }}
                    >
                      <h3>Tab Content</h3>
                    </InputLabel>
                    <CKEditor
                      config={{
                        height: 600,
                        toolbar: [
                          "heading",
                          "|",
                          "bold",
                          "italic",
                          "blockQuote",
                          "link",
                          "numberedList",
                          "bulletedList",
                          "imageUpload",
                          "insertTable",
                          "tableColumn",
                          "tableRow",
                          "mergeTableCells",
                          "mediaEmbed",
                          "|",
                          "undo",
                          "redo",
                        ],
                      }}
                      style={{ maxWidth: "100%", height: "800px" }}
                      editor={ClassicEditor}
                      onReady={(editor) => {
                        editor.editing.view.document.on("change:data", () => {
                          // debouncedHandleInput({
                          //   target: {
                          //     name: "project_specification",
                          //     value: editor.getData(),
                          //   },
                          // });
                        });
                      }}
                      onBlur={(event, editor) => {}}
                      onFocus={(event, editor) => {}}
                      onChange={(event, editor) => {
                        debouncedHandleInput({
                          target: {
                            name: "project_specicification",

                            value: editor.getData(),
                          },
                        });
                      }}
                      name="project_specification"
                    />
                    <br />
                    <br />
                    <Grid item xs={5}>
                      <InputLabel id="demo-simple-select-label">
                        Tab Status
                      </InputLabel>

                      <select
                        style={{
                          height: "5vh",
                          backgroundColor: "white",
                          borderRadius: "5px",
                          width: "10%",
                        }}
                        name="businessCategory"
                      >
                        <option value="Home Loan">Active</option>
                        <option value="Property Legal Service">Inactive</option>
                      </select>
                    </Grid>
                    <br /> <br />
                    <Grid item xs={8} style={{ textAlign: "center" }}>
                      <Button
                        type="button"
                        variant="contained"
                        color="primary"
                        style={{ padding: "0.6rem 1.5rem" }}
                        onClick={() => setTabIndex(tabIndex + 1)}
                      >
                        Next
                      </Button>
                    </Grid>
                  </Container>
                </div>
              </TabPanel>
              <TabPanel>
                <div>
                  <Container
                    component="main"
                    maxWidth="lg"
                    style={{
                      marginTop: "2%",
                      marginBottom: "2%",
                      display: "block",
                    }}
                  >
                    {" "}
                    <InputLabel
                      id="demo-simple-select-label"
                      style={{ marginTop: "2%", marginBottom: "1%" }}
                    >
                      <h3>Tab Content</h3>
                    </InputLabel>
                    <CKEditor
                      config={{
                        height: 600,
                        toolbar: [
                          "heading",
                          "|",
                          "bold",
                          "italic",
                          "blockQuote",
                          "link",
                          "numberedList",
                          "bulletedList",
                          "imageUpload",
                          "insertTable",
                          "tableColumn",
                          "tableRow",
                          "mergeTableCells",
                          "mediaEmbed",
                          "|",
                          "undo",
                          "redo",
                        ],
                      }}
                      style={{ maxWidth: "100%", height: "800px" }}
                      editor={ClassicEditor}
                      onReady={(editor) => {
                        editor.editing.view.document.on("change:data", () => {
                          debouncedHandleInput({
                            target: {
                              name: "locationMap",
                              value: editor.getData(),
                            },
                          });
                        });
                      }}
                      onBlur={(event, editor) => {}}
                      onFocus={(event, editor) => {}}
                      name="locationMap"
                    />
                    <br />
                    <br />
                    <Grid item xs={5}>
                      <InputLabel id="demo-simple-select-label">
                        Tab Status
                      </InputLabel>

                      <select
                        style={{
                          height: "5vh",
                          backgroundColor: "white",
                          borderRadius: "5px",
                          width: "10%",
                        }}
                        name="businessCategory"
                      >
                        <option value="Home Loan">Active</option>
                        <option value="Property Legal Service">Inactive</option>
                      </select>
                    </Grid>
                    <br /> <br />
                    <Grid item xs={8} style={{ textAlign: "center" }}>
                      <Button
                        type="button"
                        variant="contained"
                        color="primary"
                        style={{ padding: "0.6rem 1.5rem" }}
                        onClick={() => setTabIndex(tabIndex + 1)}
                      >
                        Next
                      </Button>
                    </Grid>
                  </Container>
                </div>
              </TabPanel>
              <TabPanel>
                <div>
                  <Container
                    component="main"
                    maxWidth="lg"
                    style={{
                      marginTop: "2%",
                      marginBottom: "2%",
                      display: "block",
                    }}
                  >
                    <InputLabel
                      id="demo-simple-select-label"
                      style={{ marginTop: "2%", marginBottom: "1%" }}
                    >
                      <h3>Tab Content</h3>
                    </InputLabel>
                    <CKEditor
                      config={{
                        height: 600,
                        toolbar: [
                          "heading",
                          "|",
                          "bold",
                          "italic",
                          "blockQuote",
                          "link",
                          "numberedList",
                          "bulletedList",
                          "imageUpload",
                          "insertTable",
                          "tableColumn",
                          "tableRow",
                          "mergeTableCells",
                          "mediaEmbed",
                          "|",
                          "undo",
                          "redo",
                        ],
                      }}
                      style={{ maxWidth: "100%", height: "800px" }}
                      editor={ClassicEditor}
                      onReady={(editor) => {
                        editor.editing.view.document.on(
                          "change:data",
                          () => {}
                        );
                        const data = editor.getData();
                      }}
                      onBlur={(event, editor) => {}}
                      onFocus={(event, editor) => {}}
                      onChange={(event, editor) => {
                        const data = editor.getData();
                        EditorMasterPlanSetData(data);
                        console.log(editorMasterPlanData);
                        // console.log( data );
                      }}
                      name="masterPlan"
                    />
                    <br />
                    <br />
                    <Grid item xs={5}>
                      <InputLabel id="demo-simple-select-label">
                        Tab Status
                      </InputLabel>

                      <select
                        style={{
                          height: "5vh",
                          backgroundColor: "white",
                          borderRadius: "5px",
                          width: "10%",
                        }}
                        name="masterPlanTabStatus"
                      >
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                      </select>
                    </Grid>
                    <br /> <br />
                    <Grid item xs={8} style={{ textAlign: "center" }}>
                      <Button
                        type="button"
                        variant="contained"
                        color="primary"
                        style={{ padding: "0.6rem 1.5rem" }}
                        onClick={() => setTabIndex(tabIndex + 1)}
                      >
                        Next
                      </Button>
                    </Grid>
                  </Container>
                </div>
              </TabPanel>
              <TabPanel>
                <div>
                  <Container
                    component="main"
                    maxWidth="lg"
                    style={{
                      marginTop: "2%",
                      marginBottom: "2%",
                      display: "block",
                    }}
                  >
                    <br />
                    <Grid item xs={8}>
                      <TextField
                        placeholder="Total Amount"
                        label="Total Amount"
                        fullWidth
                        name="totalAmount"
                        onChange={debouncedHandleInput}
                      />
                    </Grid>
                    <br />
                    <Grid item xs={8}>
                      <TextField
                        placeholder="Area (Sq.Ft.)"
                        label="Area (Sq.Ft.)"
                        fullWidth
                        name="area"
                        onChange={debouncedHandleInput}
                      />
                    </Grid>
                    <br />
                    <Grid item xs={8}>
                      <TextField
                        placeholder="Price"
                        label="Price"
                        fullWidth
                        name="price"
                        onChange={debouncedHandleInput}
                      />
                    </Grid>
                    <br />
                    <Grid item xs={8}>
                      <Button
                        component="label"
                        role={undefined}
                        variant="contained"
                        tabIndex={-1}
                        startIcon={<CloudUploadIcon />}
                      >
                        Upload Floor Plan Image
                        <input
                          type="file"
                          name="floorPlanImage"
                          onChange={(e) => {
                            setImage2(e.target.files[0]);
                            console.log(image2);
                          }}
                        />
                      </Button>
                    </Grid>
                    <br />
                    <Grid item xs={5}>
                      <InputLabel id="demo-simple-select-label">
                        Tab Status
                      </InputLabel>

                      <select
                        style={{
                          height: "5vh",
                          backgroundColor: "white",
                          borderRadius: "5px",
                          width: "10%",
                        }}
                        name="businessCategory"
                      >
                        <option value="Home Loan">Active</option>
                        <option value="Property Legal Service">Inactive</option>
                      </select>
                    </Grid>
                    <br />
                    <br /> <br />
                    <Grid item xs={8} style={{ textAlign: "center" }}>
                      <Button
                        type="button"
                        variant="contained"
                        color="primary"
                        style={{ padding: "0.6rem 1.5rem" }}
                        onClick={() => setTabIndex(tabIndex + 1)}
                      >
                        Next
                      </Button>
                    </Grid>
                  </Container>
                </div>
              </TabPanel>
              <TabPanel>
                <div>
                  <Container
                    component="main"
                    maxWidth="lg"
                    style={{
                      marginTop: "2%",
                      marginBottom: "2%",
                      display: "block",
                    }}
                  >
                    <InputLabel
                      id="demo-simple-select-label"
                      style={{ marginTop: "2%", marginBottom: "1%" }}
                    >
                      <h3>Tab Content</h3>
                    </InputLabel>
                    <CKEditor
                      config={{
                        height: 600,
                        toolbar: [
                          "heading",
                          "|",
                          "bold",
                          "italic",
                          "blockQuote",
                          "link",
                          "numberedList",
                          "bulletedList",
                          "imageUpload",
                          "insertTable",
                          "tableColumn",
                          "tableRow",
                          "mergeTableCells",
                          "mediaEmbed",
                          "|",
                          "undo",
                          "redo",
                        ],
                      }}
                      style={{ maxWidth: "100%", height: "800px" }}
                      editor={ClassicEditor}
                      onReady={(editor) => {
                        editor.editing.view.document.on("change:data", () => {
                          debouncedHandleInput({
                            target: {
                              name: "pricePlanDetails",
                              value: editor.getData(),
                            },
                          });
                          const data = editor.getData();
                          EditorPricePlanSetData(data);
                        });
                      }}
                      onBlur={(event, editor) => {}}
                      onFocus={(event, editor) => {}}
                      name="pricePlanDetails"
                    />
                    <br />
                    <br />
                    <Grid item xs={8}>
                      <Button
                        component="label"
                        role={undefined}
                        variant="contained"
                        tabIndex={-1}
                        startIcon={<CloudUploadIcon />}
                      >
                        Upload Price Plan Image
                        <input
                          type="file"
                          name="pricePlanImage"
                          onChange={(e) => {
                            setImage3(e.target.files[0]);
                            console.log(image3);
                          }}
                        />
                      </Button>
                    </Grid>
                    <br />
                    <Grid item xs={5}>
                      <InputLabel id="demo-simple-select-label">
                        Tab Status
                      </InputLabel>

                      <select
                        style={{
                          height: "5vh",
                          backgroundColor: "white",
                          borderRadius: "5px",
                          width: "10%",
                        }}
                        name="businessCategory"
                      >
                        <option value="Home Loan">Active</option>
                        <option value="Property Legal Service">Inactive</option>
                      </select>
                    </Grid>
                    <br /> <br />
                    <Grid item xs={8} style={{ textAlign: "center" }}>
                      <Button
                        type="button"
                        variant="contained"
                        color="primary"
                        style={{ padding: "0.6rem 1.5rem" }}
                        onClick={() => setTabIndex(tabIndex + 1)}
                      >
                        Next
                      </Button>
                    </Grid>
                  </Container>
                </div>
              </TabPanel>
              <TabPanel>
                <div>
                  <Container
                    component="main"
                    maxWidth="lg"
                    style={{
                      marginTop: "2%",
                      marginBottom: "2%",
                      display: "block",
                    }}
                  >
                    <InputLabel
                      id="demo-simple-select-label"
                      style={{ marginTop: "2%", marginBottom: "1%" }}
                    >
                      <h3>Tab Content</h3>
                    </InputLabel>
                    <CKEditor
                      config={{
                        height: 600,
                        toolbar: [
                          "heading",
                          "|",
                          "bold",
                          "italic",
                          "blockQuote",
                          "link",
                          "numberedList",
                          "bulletedList",
                          "imageUpload",
                          "insertTable",
                          "tableColumn",
                          "tableRow",
                          "mergeTableCells",
                          "mediaEmbed",
                          "|",
                          "undo",
                          "redo",
                        ],
                      }}
                      style={{ maxWidth: "100%", height: "800px" }}
                      editor={ClassicEditor}
                      onReady={(editor) => {
                        editor.editing.view.document.on("change:data", () => {
                          debouncedHandleInput({
                            target: {
                              name: "paymentPlanDetails",
                              value: editor.getData(),
                            },
                          });
                          const data = editor.getData();
                          EditorPaymentPlanSetData(data);
                        });
                      }}
                      onBlur={(event, editor) => {}}
                      onFocus={(event, editor) => {}}
                      name="paymentPlanDetails"
                    />
                    <br />
                    <br />
                    <Grid item xs={8}>
                      <Button
                        component="label"
                        role={undefined}
                        variant="contained"
                        tabIndex={-1}
                        startIcon={<CloudUploadIcon />}
                      >
                        Upload Payment Plan Image
                        <input
                          type="file"
                          name="paymentPlanImage"
                          onChange={(e) => {
                            setImage4(e.target.files[0]);
                            console.log(image4);
                          }}
                        />
                      </Button>
                    </Grid>
                    <br />
                    <Grid item xs={5}>
                      <InputLabel id="demo-simple-select-label">
                        Tab Status
                      </InputLabel>

                      <select
                        style={{
                          height: "5vh",
                          backgroundColor: "white",
                          borderRadius: "5px",
                          width: "10%",
                        }}
                        name="businessCategory"
                      >
                        <option value="Home Loan">Active</option>
                        <option value="Property Legal Service">Inactive</option>
                      </select>
                    </Grid>
                    <br /> <br />
                    <Grid item xs={8} style={{ textAlign: "center" }}>
                      <Button
                        type="button"
                        variant="contained"
                        color="primary"
                        style={{ padding: "0.6rem 1.5rem" }}
                        onClick={() => setTabIndex(tabIndex + 1)}
                      >
                        Next
                      </Button>
                    </Grid>
                  </Container>
                </div>
              </TabPanel>
              <TabPanel>
                {" "}
                <div>
                  <br />
                  <Container
                    component="main"
                    maxWidth="lg"
                    style={{
                      marginTop: "2%",
                      marginBottom: "2%",
                      display: "block",
                    }}
                  >
                    <Grid item xs={8}>
                      <Button
                        component="label"
                        role={undefined}
                        variant="contained"
                        tabIndex={-1}
                        startIcon={<CloudUploadIcon />}
                      >
                        Upload E-Brochure Image
                        <input
                          type="file"
                          name="e_brochureImage"
                          onChange={(e) => {
                            setImage5(e.target.files[0]);
                            console.log(image5);
                          }}
                        />
                      </Button>
                    </Grid>
                    <br />
                    <Grid item xs={5}>
                      <InputLabel id="demo-simple-select-label">
                        Tab Status
                      </InputLabel>

                      <select
                        style={{
                          height: "5vh",
                          backgroundColor: "white",
                          borderRadius: "5px",
                          width: "10%",
                        }}
                        name="businessCategory"
                      >
                        <option value="Home Loan">Active</option>
                        <option value="Property Legal Service">Inactive</option>
                      </select>
                    </Grid>
                    <br /> <br />
                    <Grid item xs={8} style={{ textAlign: "center" }}>
                      <Button
                        type="button"
                        variant="contained"
                        color="primary"
                        style={{ padding: "0.6rem 1.5rem" }}
                        onClick={() => setTabIndex(tabIndex + 1)}
                      >
                        Next
                      </Button>
                    </Grid>
                  </Container>
                </div>
              </TabPanel>
              <TabPanel>
                <div>
                  <br />

                  <Container
                    component="main"
                    maxWidth="lg"
                    style={{
                      marginTop: "2%",
                      marginBottom: "2%",
                      display: "block",
                    }}
                  >
                    <Grid item xs={8}>
                      <TextField
                        placeholder="Title of Construction Update"
                        label="Title"
                        fullWidth
                        type="text"
                        name="constructionTitle"
                      />
                    </Grid>
                    <br />
                    <Grid item xs={8}>
                      <TextField
                        placeholder="Data of Construction Update"
                        label="Data"
                        fullWidth
                        type="text"
                        name="constructionData"
                      />
                    </Grid>
                    <br />
                    <Grid item xs={8}>
                      <Button
                        component="label"
                        role={undefined}
                        variant="contained"
                        tabIndex={-1}
                        startIcon={<CloudUploadIcon />}
                      >
                        Upload Construction Update Image
                        <input
                          type="file"
                          name="constructionUpdateImage"
                          onChange={(e) => {
                            setImage6(e.target.files[0]);
                            console.log(image6);
                          }}
                        />
                      </Button>
                    </Grid>
                    <br />
                    <Grid item xs={5}>
                      <InputLabel id="demo-simple-select-label">
                        Tab Status
                      </InputLabel>

                      <select
                        style={{
                          height: "5vh",
                          backgroundColor: "white",
                          borderRadius: "5px",
                          width: "10%",
                        }}
                        name="businessCategory"
                      >
                        <option value="Home Loan">Active</option>
                        <option value="Property Legal Service">Inactive</option>
                      </select>
                    </Grid>
                    <br /> <br />
                    <Grid item xs={8} style={{ textAlign: "center" }}>
                      <Button
                        type="button"
                        variant="contained"
                        color="primary"
                        style={{ padding: "0.6rem 1.5rem" }}
                        onClick={() => setTabIndex(tabIndex + 1)}
                      >
                        Next
                      </Button>
                    </Grid>
                  </Container>
                </div>
              </TabPanel>
              <TabPanel>
                <div>
                  <Container
                    component="main"
                    maxWidth="lg"
                    style={{
                      marginTop: "2%",
                      marginBottom: "2%",
                      display: "block",
                    }}
                  >
                    <InputLabel
                      id="demo-simple-select-label"
                      style={{ marginTop: "2%", marginBottom: "1%" }}
                    >
                      <h3>Tab Content</h3>
                    </InputLabel>
                    <CKEditor
                      config={{
                        height: 600,
                        toolbar: [
                          "heading",
                          "|",
                          "bold",
                          "italic",
                          "blockQuote",
                          "link",
                          "numberedList",
                          "bulletedList",
                          "imageUpload",
                          "insertTable",
                          "tableColumn",
                          "tableRow",
                          "mergeTableCells",
                          "mediaEmbed",
                          "|",
                          "undo",
                          "redo",
                        ],
                      }}
                      style={{ maxWidth: "100%", height: "800px" }}
                      editor={ClassicEditor}
                      onReady={(editor) => {
                        editor.editing.view.document.on("change:data", () => {
                          debouncedHandleInput({
                            target: {
                              name: "contactUsDetails",
                              value: editor.getData(),
                            },
                          });
                        });
                      }}
                      onChange={(event) => {
                        console.log(event);
                      }}
                      onBlur={(event, editor) => {}}
                      onFocus={(event, editor) => {}}
                      name="contactUsDetails"
                    />
                    <br />

                    <br />

                    <Grid item xs={8}>
                      <Button
                        component="label"
                        role={undefined}
                        variant="contained"
                        tabIndex={-1}
                        startIcon={<CloudUploadIcon />}
                      >
                        Upload Contact Us Image
                        <input
                          type="file"
                          name="contactUsImage"
                          onChange={(e) => {
                            setImage7(e.target.files[0]);
                            console.log(image7);
                          }}
                        />
                      </Button>
                    </Grid>
                    <br />
                    <Grid item xs={5}>
                      <InputLabel id="demo-simple-select-label">
                        Tab Status
                      </InputLabel>

                      <select
                        style={{
                          height: "5vh",
                          backgroundColor: "white",
                          borderRadius: "5px",
                          width: "10%",
                        }}
                        name="businessCategory"
                      >
                        <option value="Home Loan">Active</option>
                        <option value="Property Legal Service">Inactive</option>
                      </select>
                    </Grid>
                    <Grid item xs={5} style={{ textAlign: "center" }}>
                      <Button
                        type="submit"
                        variant="contained"
                        style={{ padding: "0.6rem 1.5rem" }}
                      >
                        {" "}
                        Save{" "}
                      </Button>
                    </Grid>
                  </Container>
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewproject;

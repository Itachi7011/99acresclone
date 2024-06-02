import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useRef } from "react";
import Slider from "@mui/material/Slider";

import FeaturedIcon from "../Images/Icons/icons/Featured.png";
import GreenVerifiedIcon from "../Images/Icons/icons/GreenVerified.png";
import MapIcon from "../Images/Icons/icons/map.png";
// import ShortListIcon from "../Images/Icons/icons/Shortlist.png";
import StarNewIcon from "../Images/Icons/icons/StarNew.png";

import TopImage1 from "../Images/property-section/5c7367da131.png";
import TopImage2 from "../Images/property-section/property-2.png";
import TopImage3 from "../Images/property-section/property-3.png";

const PropertyList = () => {
  let data = [];
  const selectRef = useRef();

  const [sortCriterion, setSortCriterion] = React.useState("price_asc");
  const [Data, setData] = useState({ post: [] });
  const [User, setUser] = useState({ post: [] });
  const [Data1, setData1] = useState({ post: [] });
  const [categories, setCategories] = useState([]);

  const [filteredData, setFilteredData] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [clickedIcons, setClickedIcons] = useState({});

  const [sortAscending, setSortAscending] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);

  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [displayData, setDisplayData] = useState([]);

  const [value, setValue] = useState([0, 10000000000]); // initialize with minimum and maximum values in lakhs
  const [areaValue, setAreaValue] = useState([0, 4000]); // initialize with minimum and maximum values in lakhs
  const navigate = useNavigate();

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

  const valuetextBudget = (value) => {
    if (value < 500000) {
      return `${(value / 1000).toLocaleString("en-IN")}`;
    }
    if (value < 100000) {
      return `${(value / 1000).toLocaleString("en-IN")} Th.`;
    } else if (value < 10000000) {
      return `${(value / 100000).toLocaleString("en-IN")} Lakh`;
    } else if (value < 1000000000) {
      return `${(value / 10000000).toLocaleString("en-IN")} crore`;
    } else if (value === 1000000000) {
      return "100 crore";
    } else {
      return "100 crore+";
    }
  };

  const valuetextArea = (value) => {
    if (value < 100) {
      return `${value.toLocaleString("en-IN")}`;
    }
    if (value < 4000) {
      return `${value.toLocaleString("en-IN")} Sq.ft.`;
    } else if (value === 4000) {
      return "4000 Sq.ft.";
    } else {
      return "4000 Sq.ft.+";
    }
  };
  const handleBudgetChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleAreaChange = (event, newValue) => {
    setAreaValue(newValue);
  };

  // console.log(value);

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
    axios
      .get("/localitiesList")
      .then((response) => {
        const data = response.data;

        setData1({ post: data });

        console.log("data fetch successfully");
      })
      .catch((err) => {
        console.log("Error during Data:", err);
      });
  }, []);

  const checkboxChange = (e, item) => {
    const { name, checked } = e.target;

    const newClickedIcons = { ...clickedIcons };

    if (checked) {
      setCategories((prevCategories) => [...prevCategories, item]);

      newClickedIcons[name] = true;
    } else {
      setCategories((prevCategories) =>
        prevCategories.filter((category) => category !== item)
      );

      delete newClickedIcons[name];
    }

    setClickedIcons(newClickedIcons);
  };

  const filterData = (data, currentPage, itemsPerPage) => {
    if (categories.length === 0) {
      return data;
    }

    const startIndex = (currentPage - 1) * itemsPerPage;

    const endIndex = startIndex + itemsPerPage;

    return data.filter((field, index) => {
      if (index < startIndex || index >= endIndex) {
        return false;
      }

      for (let category of categories) {
        if (
          (
            field.propertyLocality.toLowerCase() +
            " " +
            field.propertySubLocality.toLowerCase()
          ).includes(String(category).toLowerCase()) ||
          field.propertySubType1

            .toLowerCase()

            .includes(String(category).toLowerCase()) ||
          field.propertyListedBy

            .toLowerCase()

            .includes(String(category).toLowerCase()) ||
          field.isVerified === true ||
          // (Math.floor(field.price) >= Math.floor(value[0]) &&
          //   Math.floor(field.price) <= Math.floor(value[1])) ||
          field.isVrera_approvalerified === "available" ||
          // field.bhkNumber

          //   .toLowerCase()

          //   .includes(String(category).toLowerCase()) ||
          field.constructionStatus

            .toLowerCase()

            .includes(String(category).toLowerCase()) ||
          field.isFurnished

            .toLowerCase()

            .includes(String(category).toLowerCase()) ||
          field.propertySubType2

            .toLowerCase()

            .includes(String(category).toLowerCase())
        ) {
          return true;
        }
      }

      return false;
    });
  };

  const sortData = (criterion) => {
    const [field, direction] = criterion.split("_");

    const sortAscending = direction === "asc";

    const sortedArray = Data.post.slice().sort((a, b) => {
      if (field === "price") {
        return sortAscending
          ? Number(a.price) - Number(b.price)
          : Number(b.price) - Number(a.price);
      } else if (field === "area") {
        return sortAscending
          ? a.super_built_up_area - b.super_built_up_area
          : b.super_built_up_area - a.super_built_up_area;
      } else if (field === "dateOfFormSubmission") {
        return sortAscending
          ? new Date(a.dateOfFormSubmission) - new Date(b.dateOfFormSubmission)
          : new Date(b.dateOfFormSubmission) - new Date(a.dateOfFormSubmission);
      }

      return 0;
    });

    setData({ post: sortedArray });
    selectRef.current.value = criterion;

    setSortCriterion(criterion);
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * itemsPerPage;

  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems = filterData(Data.post).slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const handleIconClick = (e, id, propertyName) => {
    e.preventDefault();
    var bodyFormData = new FormData();
    bodyFormData.append("userName", User.name);
    bodyFormData.append("id", id);
    bodyFormData.append("propertyName", propertyName);
    console.log(id, User.name);
    setClickedIcons((prevClickedIcons) => ({
      ...prevClickedIcons,

      [id]: !prevClickedIcons[id],
    }));
    axios
      .post(
        "/likeProperties",
        bodyFormData,

        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(function (response) {
        //handle success
        console.log(response);
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
  };
  // const handlePageChange = (pageNumber) => {
  //   const startIndex = (pageNumber - 1) * itemsPerPage;

  //   const endIndex = startIndex + itemsPerPage;

  //   setCurrentPage(pageNumber);
  //   const filteredData = filterData(Data.post, pageNumber, itemsPerPage);
  //   setDisplayData(filteredData.slice(startIndex, endIndex));
  // };

  useEffect(() => {
    let filtered = Data.post;

    if (categories.length > 0) {
      filtered = filtered.filter((item) => categories.includes(item.category));
    }

    setFilteredData(filtered);

    if (categories.length === 0) {
      setTotalItems(data.length);
    } else {
      setTotalItems(filtered.length);
    }
  }, [categories, value, Data.post, data.length]);
  // console.log(categories);
  console.log(value[0]);
  console.log(value[1]);
  return (
    <>
      <section id="section-body">
        <div className="container-fluid">
          <div className="row mt-5">
            <div className="col-lg-3 col-md-3 col-12 page-top-left-banner">
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
                    <img src={TopImage1} class="d-block w-100" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img src={TopImage2} class="d-block w-100" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img src={TopImage3} class="d-block w-100" alt="..." />
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

            <div className="col-lg-9 col-md-9 col-12 page-top-right-banner">
              <div
                id="carouselExampleIndicators2"
                class="carousel slide"
                data-bs-ride="carousel"
              >
                <div class="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators2"
                    data-bs-slide-to="0"
                    class="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators2"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators2"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src={TopImage1} class="d-block w-100" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img src={TopImage2} class="d-block w-100" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img src={TopImage3} class="d-block w-100" alt="..." />
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicators2"
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
                  data-bs-target="#carouselExampleIndicators2"
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
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 col-md-offset-0 order-lg-1 order-2 mt-5">
              <aside id="sidebar" className="sidebar-white">
                <div className="widget widget-range">
                  <div className="widget-body">
                    {/* <form> */}
                    <div className="form-check d-flex">
                      <h3 style={{ fontSize: "1.3rem", marginLeft: "-1.3rem" }}>
                        Verified Properties
                      </h3>
                      <div
                        class="form-check form-switch ms-5"
                        // style={{ marginLeft: "5rem" }}
                      >
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="flexSwitchCheckChecked"
                          style={{
                            height: "1.4rem",
                            width: "2.5rem",
                            // marginLeft: "6%",
                            float: "right",
                          }}
                          onChange={(e) => {
                            checkboxChange(e, true);
                          }}
                        />
                      </div>
                    </div>
                    <div className="form-check d-flex">
                      <h3 style={{ fontSize: "1.3rem", marginLeft: "-1.3rem" }}>
                        Rera Approval
                      </h3>
                      <div
                        class="form-check form-switch ms-5"
                        // style={{ marginLeft: "5rem" }}
                      >
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="flexSwitchCheckChecked"
                          style={{
                            height: "1.4rem",
                            width: "2.5rem",
                            // marginLeft: "6%",
                            float: "right",
                          }}
                          onChange={(e) => {
                            checkboxChange(e, "available");
                          }}
                        />
                      </div>
                    </div>

                    <h3 style={{ fontSize: "1.3rem" }}>Budget</h3>
                    <div className="row">
                      <div className="col-sm-12">
                        {/* <div id="slider-range" /> */}
                        <Slider
                          style={{ width: "90%", margin: "0 1rem" }}
                          getAriaLabel={() => "Budget range (0 to 100 crore)"} // updated aria label
                          value={value}
                          onChange={handleBudgetChange}
                          valueLabelDisplay="auto"
                          getAriaValueTextBudget={valuetextBudget}
                          valueLabelFormat={valuetextBudget}
                          min={0}
                          max={1000600000} // set the maximum value of the slider to 100 crore
                          step={500000} // set the step size to 1 crore
                        />
                      </div>
                    </div>
                    <h3 style={{ fontSize: "1.3rem" }}>Area</h3>
                    <div className="row">
                      <div className="col-sm-12">
                        {/* <div id="slider-range" /> */}
                        <Slider
                          style={{ width: "90%", margin: "0 1rem" }}
                          getAriaLabel={() =>
                            "Area range (0 to 4000 Sq. ft. crore)"
                          } // updated aria label
                          value={areaValue}
                          onChange={handleAreaChange}
                          valueLabelDisplay="auto"
                          getAriaValueTextBudget={valuetextArea}
                          valueLabelFormat={valuetextArea}
                          min={0}
                          max={4100} // set the maximum value of the slider to 100 crore
                          step={100} // set the step size to 1 crore
                        />
                      </div>
                    </div>
                    {/* <div className="row slider-labels">
                        <div className="col-xs-6 caption">
                          <strong /> <span id="slider-range-value1" />
                        </div>
                        <div className="col-xs-6 text-right caption">
                          <strong /> <span id="slider-range-value2" />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-12">
                          <input type="hidden" name="min-value" defaultValue />
                          <input type="hidden" name="max-value" defaultValue />
                        </div>
                      </div> */}
                    {/* </form> */}
                    <hr />
                    <h3 style={{ fontSize: "1.3rem" }}>Posted By</h3>
                    <div className="form-check">
                      <label>
                        <input
                          type="checkbox"
                          name="rera"
                          className="item_filter rera"
                          onChange={(e) => {
                            checkboxChange(e, "Individual");
                          }}
                        />{" "}
                        <span className="label-text">Individual</span>
                      </label>
                      <label>
                        <input
                          type="checkbox"
                          name="rera"
                          className="item_filter rera"
                          onChange={(e) => {
                            checkboxChange(e, "Builder");
                          }}
                        />{" "}
                        <span className="label-text"> Builder</span>
                      </label>
                      <label>
                        <input
                          type="checkbox"
                          name="rera"
                          className="item_filter rera"
                          onChange={(e) => {
                            checkboxChange(e, "Developer");
                          }}
                        />{" "}
                        <span className="label-text">Developer</span>
                      </label>

                      <label>
                        <input
                          type="checkbox"
                          name="rera"
                          className="item_filter rera"
                          onChange={(e) => {
                            checkboxChange(e, "Agent");
                          }}
                        />{" "}
                        <span className="label-text">Agent</span>
                      </label>
                    </div>
                    <hr />
                    <h3 style={{ fontSize: "1.3rem" }}>Sale Type</h3>
                    <div className="form-check">
                      <label>
                        <input
                          type="checkbox"
                          name="sale"
                          className="item_filter rera"
                          onChange={(e) => {
                            checkboxChange(e, "sale");
                          }}
                        />{" "}
                        <span className="label-text">Sale</span>
                      </label>
                      <label>
                        <input
                          type="checkbox"
                          name="rent"
                          className="item_filter rera"
                          onChange={(e) => {
                            checkboxChange(e, "rent");
                          }}
                        />{" "}
                        <span className="label-text">Rent</span>
                      </label>
                    </div>
                    <hr />

                    <h3 style={{ fontSize: "1.3rem" }}>No. Of Bedrooms</h3>
                    <div className="form-check">
                      <label>
                        <input
                          type="checkbox"
                          name="sale"
                          className="item_filter rera"
                          onChange={(e) => {
                            checkboxChange(e, "1 BHK");
                          }}
                        />{" "}
                        <span className="label-text">1 BHK</span>
                      </label>
                      <label>
                        <input
                          type="checkbox"
                          name="rent"
                          className="item_filter rera"
                          onChange={(e) => {
                            checkboxChange(e, "2 BHK");
                          }}
                        />{" "}
                        <span className="label-text">2 BHK</span>
                      </label>
                      <label>
                        <input
                          type="checkbox"
                          name="sale"
                          className="item_filter rera"
                          onChange={(e) => {
                            checkboxChange(e, "3 BHK");
                          }}
                        />{" "}
                        <span className="label-text">3 BHK</span>
                      </label>
                      <label>
                        <input
                          type="checkbox"
                          name="rent"
                          className="item_filter rera"
                          onChange={(e) => {
                            checkboxChange(e, "4 BHK");
                          }}
                        />{" "}
                        <span className="label-text">4 BHK</span>
                      </label>
                      <label>
                        <input
                          type="checkbox"
                          name="sale"
                          className="item_filter rera"
                          onChange={(e) => {
                            checkboxChange(e, "5 BHK");
                          }}
                        />{" "}
                        <span className="label-text">5 BHK</span>
                      </label>
                      <label>
                        <input
                          type="checkbox"
                          name="rent"
                          className="item_filter rera"
                          onChange={(e) => {
                            checkboxChange(e, "5+ BHK");
                          }}
                        />{" "}
                        <span className="label-text">5+ BHK</span>
                      </label>
                    </div>
                    <hr />

                    <h3 style={{ fontSize: "1.3rem" }}>Construction Status</h3>
                    <div className="form-check">
                      <label>
                        <input
                          type="checkbox"
                          name="sale"
                          className="item_filter rera"
                          onChange={(e) => {
                            checkboxChange(e, "New Launch");
                          }}
                        />{" "}
                        <span className="label-text">New Launch</span>
                      </label>
                      <label>
                        <input
                          type="checkbox"
                          name="rent"
                          className="item_filter rera"
                          onChange={(e) => {
                            checkboxChange(e, "Under Construction");
                          }}
                        />{" "}
                        <span className="label-text">Under Construction</span>
                      </label>
                      <label>
                        <input
                          type="checkbox"
                          name="rent"
                          className="item_filter rera"
                          onChange={(e) => {
                            checkboxChange(e, "Ready To Move");
                          }}
                        />{" "}
                        <span className="label-text">Ready To Move</span>
                      </label>
                    </div>
                    <hr />
                    <h3 style={{ fontSize: "1.3rem" }}>Property Type</h3>
                    <div className="form-group">
                      <div className="form-check">
                        <label>
                          <input
                            type="checkbox"
                            name="Residential_Apartment"
                            className="item_filter ptype"
                            defaultValue="Residential Apartment"
                            onChange={(e) => {
                              checkboxChange(e, "Residential Apartment");
                            }}
                          />{" "}
                          <span className="label-text">
                            Residential Apartment
                          </span>
                          <br />
                        </label>
                      </div>
                      <div className="form-check">
                        <label>
                          <input
                            type="checkbox"
                            name="Office_Space"
                            className="item_filter ptype"
                            defaultValue="Office Space"
                            onChange={(e) => {
                              checkboxChange(e, "Office Space");
                            }}
                          />{" "}
                          <span className="label-text">Office Space</span>
                          <br />
                        </label>
                      </div>
                      <div className="form-check">
                        <label>
                          <input
                            type="checkbox"
                            name="Villa"
                            className="item_filter ptype"
                            defaultValue="Villa"
                            onChange={(e) => {
                              checkboxChange(e, "Villa");
                            }}
                          />
                          <span className="label-text">Villa</span>
                          <br />
                        </label>
                      </div>
                      <div className="form-check">
                        <label>
                          <input
                            type="checkbox"
                            name="Plot"
                            className="item_filter ptype"
                            defaultValue="Plot"
                            onChange={(e) => {
                              checkboxChange(e, "Plot");
                            }}
                          />
                          <span className="label-text">Plot</span>
                          <br />
                        </label>
                      </div>
                      <div className="form-check">
                        <label>
                          <input
                            type="checkbox"
                            name="Mutlistorey_Apartment"
                            className="item_filter ptype"
                            defaultValue="Multistorey Apartment"
                            onChange={(e) => {
                              checkboxChange(e, "Multistorey Apartment");
                            }}
                          />{" "}
                          <span className="label-text">
                            Multistorey Apartment
                          </span>
                          <br />
                        </label>
                      </div>
                      <div className="form-check">
                        <label>
                          <input
                            type="checkbox"
                            name="Commercial_Shop"
                            className="item_filter ptype"
                            defaultValue="Commercial Shop"
                            onChange={(e) => {
                              checkboxChange(e, "Commercial Shop");
                            }}
                          />{" "}
                          <span className="label-text">Commercial Shop</span>
                          <br />
                        </label>
                      </div>
                      <div className="form-check">
                        <label>
                          <input
                            type="checkbox"
                            name="Commercial_Showroom"
                            className="item_filter ptype"
                            defaultValue="Commercial Showroom"
                            onChange={(e) => {
                              checkboxChange(e, "Commercial Showroom");
                            }}
                          />{" "}
                          <span className="label-text">
                            Commercial Showroom
                          </span>
                          <br />
                        </label>
                      </div>
                      <div className="form-check">
                        <label>
                          <input
                            type="checkbox"
                            name="Builder_Floor_Apartment"
                            className="item_filter ptype"
                            defaultValue="Builder Floor Apartment"
                            onChange={(e) => {
                              checkboxChange(e, "Builder Floor Apartment");
                            }}
                          />{" "}
                          <span className="label-text">
                            Builder Floor Apartment
                          </span>
                          <br />
                        </label>
                      </div>
                      <div className="form-check">
                        <label>
                          <input
                            type="checkbox"
                            name="Service_Apartment"
                            className="item_filter ptype"
                            defaultValue="Service Apartment"
                            onChange={(e) => {
                              checkboxChange(e, "Service Apartment");
                            }}
                          />{" "}
                          <span className="label-text">Service Apartment</span>
                          <br />
                        </label>
                      </div>
                      <div className="form-check">
                        <label>
                          <input
                            type="checkbox"
                            name="ptype"
                            className="item_filter ptype"
                            defaultValue="Commercial Office/Space"
                            onChange={(e) => {
                              checkboxChange(e, "Commercial Office/Space");
                            }}
                          />{" "}
                          <span className="label-text">
                            Commercial Office/ Space
                          </span>
                          <br />
                        </label>
                      </div>
                    </div>
                    <h3 style={{ fontSize: "1.3rem" }}>Localities</h3>
                    <div className="form-group">
                      <div className="form-check">
                        <label>
                          {" "}
                          <input
                            type="checkbox"
                            name="locality"
                            className="item_filter ptype"
                            onChange={(e) => {
                              checkboxChange(e, "Gurgaon");
                            }}
                          />{" "}
                          <span className="label-text">
                            {/* {sub_locality} */}
                            Gurgaon
                          </span>
                          <br />
                        </label>
                        {Data1.post.map(({ _id, sub_locality, locality }) => {
                          return (
                            <>
                              {/* <label>
                                <input
                                  type="checkbox"
                                  name="locality"
                                  className="item_filter ptype"
                                  // onChange={(e) => {
                                  //   checkboxChange(e, sub_locality);
                                  // }}
                                />{" "}
                                <span className="label-text">
                                  {sub_locality}
                                  </span>
                                <br />
                              </label> */}
                              {/* <label>
                                <input
                                  type="checkbox"
                                  name="locality"
                                  className="item_filter ptype"
                                  onChange={(e) => {
                                    checkboxChange(e, sub_locality);
                                  }}
                                />{" "}
                                <span className="label-text">{sub_locality}</span>
                                <br />
                              </label> */}
                            </>
                          );
                        })}
                      </div>
                    </div>
                    <h3 style={{ fontSize: "1.3rem" }}>Furnishing Status</h3>
                    <div className="form-check">
                      <label>
                        <input
                          type="checkbox"
                          name="sale"
                          className="item_filter rera"
                          onChange={(e) => {
                            checkboxChange(e, "furnished");
                          }}
                        />{" "}
                        <span className="label-text">Furnished</span>
                      </label>
                      <label>
                        <input
                          type="checkbox"
                          name="rent"
                          className="item_filter rera"
                          onChange={(e) => {
                            checkboxChange(e, "semi_furnished");
                          }}
                        />{" "}
                        <span className="label-text">Semi-Furnished</span>
                      </label>
                      <label>
                        <input
                          type="checkbox"
                          name="rent"
                          className="item_filter rera"
                          onChange={(e) => {
                            checkboxChange(e, "un_furnished");
                          }}
                        />{" "}
                        <span className="label-text">Un-Furnished</span>
                      </label>
                    </div>

                    {/* <h3 style={{ fontSize: "1.3rem" }}>Amentites</h3>
                    <div className="form-check">
                      <label>
                        <input
                          type="checkbox"
                          name="sale"
                          className="item_filter rera"
                          onChange={(e) => {
                            checkboxChange(e, "furnished");
                          }}
                        />{" "}
                        <span className="label-text">Furnished</span>
                      </label>
                      <label>
                        <input
                          type="checkbox"
                          name="rent"
                          className="item_filter rera"
                          onChange={(e) => {
                            checkboxChange(e, "semi_furnished");
                          }}
                        />{" "}
                        <span className="label-text">Semi-Furnished</span>
                      </label>
                      <label>
                        <input
                          type="checkbox"
                          name="rent"
                          className="item_filter rera"
                          onChange={(e) => {
                            checkboxChange(e, "un_furnished");
                          }}
                        />{" "}
                        <span className="label-text">Un-Furnished</span>
                      </label>
                    </div> */}
                  </div>
                </div>
              </aside>
            </div>
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12 list-grid-area order-lg-2 order-1 mt-3">
              <div className="location-area">
                <ul>
                  <img src={MapIcon} width="30px" height="15px" />
                  <li>
                    <a href="/">Sector 63</a>
                  </li>
                  <li>
                    <a href="/"> Sector 62</a>
                  </li>
                  <li>
                    <a href="/"> Sector 132</a>
                  </li>
                  <li>
                    <a href="/"> Sector 75</a>
                  </li>
                  <li>
                    <a href="/"> Gr. Noida</a>
                  </li>
                  <li>
                    <a href="/"> Noida Expressway</a>
                  </li>
                  <li>
                    <a href="/"> Center Noida</a>
                  </li>
                </ul>
              </div>
              <div className="page-title breadcrumb-top">
                <div className="row">
                  <div className="col-sm-12">
                    <ol className="breadcrumb">
                      <li>
                        <a href="/">
                          <i className="fa fa-home fs-3" />
                        </a>
                      </li>
                      <li className="active">Simple Listing – List View</li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 col-md-12 col-12">
                  <div id="content-area">
                    {/*start list tabs*/}
                    <div className="list-tabs table-list full-width mb-3">
                      <div className="tabs table-cell">
                        <ul>
                          <li>
                            <a href="/" className="active">
                              ALL
                            </a>
                          </li>
                          <li>
                            <a href="/">FOR SALE</a>
                          </li>
                          <li>
                            <a href="/">FOR RENT</a>
                          </li>
                        </ul>
                      </div>
                      {/* <li style={{ marginTop: "1rem" }}>Sort by:</li> */}
                      {/* <input type="text" style={{height:"3.5vh",marginRight:"-4rem"}} /> */}
                      <div className="sort-tab table-cell text-right">
                        <select
                          style={{ marginRight: "-2rem" }}
                          className="form-select"
                          title="Please select"
                          data-live-search="true"
                          ref={selectRef}
                          value={sortCriterion}
                          onChange={(e) => sortData(e.target.value)}
                        >
                          <option value="price_asc">Price ↑</option>

                          <option value="price_desc">Price ↓</option>

                          <option value="area_asc">Area ↑</option>

                          <option value="area_desc">Area ↓</option>

                          <option value="dateOfFormSubmission_asc">
                            Date of Post ↑
                          </option>

                          <option value="dateOfFormSubmission_desc">
                            Date of Post ↓
                          </option>
                        </select>
                      </div>
                      <div className="page-title-right" style={{ padding: 0 }}>
                        <div className="view hidden-xs">
                          {/* <div className="table-cell">
                            <span className="view-btn btn-list active">
                              <i className="fa fa-th-list" />
                            </span>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*end list tabs*/}
                {/*start property items*/}
                <div className="property-listing list-view">
                  <div className="row">
                    <div className="row">
                      <div className="col-lg-8 col-md-8 col-12"></div>
                    </div>
                    <div className="row">
                      <div className="col-lg-8 col-md-8 col-12"></div>
                    </div>
                    <div className="row">
                      <div className="col-lg-8 col-md-8 col-12"></div>
                    </div>
                    <div className="row">
                      <div className="col-lg-8 col-md-8 col-12"></div>

                      {currentItems
                        .filter((field) => {
                          if (categories.length === 0) {
                            return field;
                          }

                          //  else {

                          for (let category of categories) {
                            if (
                              (
                                field.propertyLocality.toLowerCase() +
                                " " +
                                field.propertySubLocality.toLowerCase()
                              ).includes(String(category).toLowerCase()) ||
                              field.propertySubType1
                                .toLowerCase()
                                .includes(String(category).toLowerCase()) ||
                              field.propertyListedBy
                                .toLowerCase()
                                .includes(String(category).toLowerCase()) ||
                              field.bhkNumber
                                .toLowerCase()
                                .includes(String(category).toLowerCase()) ||
                              field.isVerified === true ||
                              // (Math.floor(field.price) >=
                              //   Math.floor(value[0]) &&
                              //   Math.floor(field.price) <=
                              //     Math.floor(value[1])) ||
                              field.rera_approval === "available" ||
                              field.constructionStatus
                                .toLowerCase()
                                .includes(String(category).toLowerCase()) ||
                              field.isFurnished
                                .toLowerCase()
                                .includes(String(category).toLowerCase()) ||
                              field.propertySubType2
                                .toLowerCase()
                                .includes(String(category).toLowerCase())
                            ) {
                              return true;
                            }
                          }
                          return false;
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
                            rera_approval,
                          }) => (
                            <div
                              className="tupleNew__tupleWrap tupleNew__PremH"
                              key={_id}
                            >
                              <div className="tupleNew__innerCont">
                                <div className="tupleNew__imgWrap tupleNew__premium">
                                  <div className="tupleNew__topLeftItems">
                                    <div style={{ display: "flex" }}>
                                      <div id>
                                        <img
                                          alt=""
                                          className="ImgItem__tag"
                                          src={GreenVerifiedIcon}
                                          style={{ width: 72, height: 20 }}
                                        />
                                      </div>
                                      <div>
                                        <img
                                          alt="Featured-Tag"
                                          height={20}
                                          width={63}
                                          className="ImgItem__tag"
                                          src={FeaturedIcon}
                                          style={{ width: 63, height: 20 }}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="tupleNew__topRightItems">
                                    <form>
                                      <div
                                        data-label="SHORTLIST"
                                        className="ImgItem__shortlistBtnWrap"
                                        onClick={(e) =>
                                          handleIconClick(e, _id, property_name)
                                        }
                                      >
                                        <i
                                          class="fas fa-heart fs-3"
                                          style={{
                                            color: clickedIcons[_id]
                                              ? "red"
                                              : "white",
                                          }}
                                        ></i>
                                      </div>
                                    </form>
                                  </div>
                                  <div className="tupleNew__bottomRightOffer" />
                                  <div className="tupleNew__bottom tupleNew__noFomoBottom">
                                    <div className="tupleNew__fomoOuter" />
                                  </div>
                                  <div
                                    className="CR__slideshow CR__premium"
                                    data-label="IMAGE_GALLERY"
                                  >
                                    <img
                                      src={require("../Uploads/Properties/" +
                                        propertyImages[0].data)}
                                      className="CR__slide"
                                      alt="Property Images"
                                    />
                                    <div className="CR__slideshowDots CR__bt10">
                                      <div
                                        style={{
                                          transform: "translateX(0px)",
                                          transition: "all 300ms ease-out 0s",
                                        }}
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                                <div className="tupleNew__contentWrap">
                                  <div className="tupleNew__subWrapper">
                                    <div className="tupleNew__locAndTags">
                                      <div className="tupleNew__headingCont">
                                        <div className="tupleNew__headingNrera">
                                          <div className="tupleNew__locationName ellipsis">
                                            {property_name}
                                          </div>
                                          <span className="tupleNew__locRatings">
                                            <img
                                              alt="Green-Star"
                                              src={StarNewIcon}
                                              style={{ width: 14, height: 14 }}
                                            />
                                            <span>3.7</span>
                                          </span>
                                        </div>
                                        <div className="tupleNew__contentTags">
                                          <div className="tupleNew__ribbon">
                                            <div>SALE</div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="tupleNew__tupleHeading">
                                        <a
                                          className="tupleNew__propertyHeading ellipsis"
                                          href="/"
                                          title="3 BHK Flat in Sector 104 Gurgaon"
                                        >
                                          <h2 className="tupleNew__propType">
                                            <span className="tupleNew__bOld">
                                              {propertySubType1}
                                              {propertySubType2} (
                                              {commercialPropertyType}) -{" "}
                                              {propertySubLocality} ,{" "}
                                              {propertyLocality} ,{" "}
                                              {propertyCity}
                                            </span>{" "}
                                          </h2>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="tupleNew__priceAreaWrap">
                                    <div id style={{ width: "100%" }}>
                                      <div className="cc__CarouselContainer">
                                        <div className="cc__CarouselBox">
                                          <div
                                            compattr="tuplePriceArea_74674491"
                                            className="cc__slidingBox cc__inlineFlexStyle"
                                          >
                                            <div className="tupleNew__priceWrap">
                                              <div className="tupleNew__priceAndPerSqftWrap">
                                                <div className="tupleNew__priceValWrap">
                                                  <span>
                                                    ₹
                                                    {price.toLocaleString(
                                                      "en-IN"
                                                    )}
                                                  </span>
                                                  <span className="tupleNew__perSqftWrap" />
                                                </div>
                                                <div className="tupleNew__perSqftWrap ellipsis">
                                                  ₹
                                                  {(
                                                    price / super_built_up_area
                                                  ).toFixed(3)}{" "}
                                                  /sqft
                                                </div>
                                              </div>
                                            </div>
                                            <div className="tupleNew__areaWrap">
                                              <div className="tupleNew__totolAreaWrap">
                                                <span className="tupleNew__area1Type">
                                                  {super_built_up_area} sqft
                                                </span>
                                              </div>
                                              <div className="tupleNew__areaType">
                                                Super Built-up Area
                                              </div>
                                            </div>
                                            <div className="tupleNew__areaWrap">
                                              <div className="tupleNew__totolAreaWrap">
                                                <span className="tupleNew__area1Type">
                                                  {bhkNumber}
                                                </span>
                                                <span className="tupleNew__area2Type ellipsis"></span>
                                              </div>
                                              <div className="tupleNew__possessionBy">
                                                Ready To Move
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="tupleNew__noRight">
                                    <div className="tupleNew__scrollableHighlights">
                                      <div className="tupleNew__highlightsWrap">
                                        <div className="tupleNew__onlyHighlight">
                                          <div className="tupleNew__highligtsHeading">
                                            Highlights :
                                          </div>
                                          <div className="tupleNew__unitHighlight1">
                                            <span className="tupleNew__unitHighlightTxt">
                                              {direction_facing} Facing
                                            </span>
                                          </div>
                                          <div className="tupleNew__unitHighlight2">
                                            <span className="tupleNew__unitHighlightTxt">
                                              {amenities[0]}
                                            </span>
                                          </div>
                                          <div className="tupleNew__unitHighlight2">
                                            <span className="tupleNew__unitHighlightTxt">
                                              {amenities[1]}
                                            </span>
                                          </div>

                                          <div className="tupleNew__unitHighlight2">
                                            <span className="tupleNew__unitHighlightTxt">
                                              + {amenities.length - 2} more
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="tupleNew__moreLessWrapper tupleNew__mt16"
                                    id="srp_tuple_description"
                                  >
                                    <p
                                      className="descPtag_undefined tupleNew__descText"
                                      style={{
                                        overflow: "hidden",
                                        display: "-webkit-box",
                                        WebkitBoxOrient: "vertical",
                                        WebkitLineClamp: 1,
                                        textOverflow: "ellipsis",
                                        whiteSpace: "normal",
                                      }}
                                    >
                                      {property_specicification}
                                    </p>
                                    <div data-label="SEE_MORE">
                                      <i className="iconS_srpMob_20 icon_dropdown" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="tupleNew__contactWrap">
                                <div className="tupleNew__postedByWrap tupleNew__ownerDealerPostedWrap">
                                  <div className="tupleNew__pbL1">
                                    <span>Listed On </span>
                                    <span className="tupleNew__dot">·</span>
                                    <span>
                                      {dateOfFormSubmission.substr(0, 16)}
                                    </span>
                                  </div>
                                  <div className="tupleNew__pbL2 ellipsis">
                                    Listed By - {ownerName} ({propertyListedBy})
                                  </div>
                                </div>
                                <div className="tupleNew__eoiItemsWrap">
                                  <button
                                    className="undefined tupleNew__viewNumber"
                                    data-label="VIEW_NUMBER"
                                  >
                                    {
                                      //  phoneNo
                                      //  .toString().slice(0,4).replace(/./g,"*")

                                      phoneNo
                                        .toString()
                                        .slice(0, -5)
                                        .concat("*****")
                                    }
                                  </button>
                                  <button
                                    className="undefined tupleNew__contactCta"
                                    data-label="CONTACT"
                                    id="Contact"
                                    onClick={function () {
                                      navigate("/property-profile", {
                                        state: { id: _id },
                                      });
                                    }}
                                  >
                                    <i
                                      className="iconS_Common_20 icon_call tupleNew__iconClass"
                                      data-sstheme="_BUTTON_RIGHT_ICON"
                                    />
                                    View Property
                                  </button>
                                </div>
                              </div>
                            </div>
                          )
                        )}
                    </div>
                  </div>
                </div>
                {/*end property items*/}
                {/*start Pagination*/}
                <nav aria-label="...">
                  <ul class="pagination" style={{ cursor: "pointer" }}>
                    {Array(Math.ceil(Data.post.length / itemsPerPage))
                      .fill(0)

                      .map((_, index) => {
                        const startIndex = index * itemsPerPage;

                        const endIndex = startIndex + itemsPerPage;

                        const currentPageItems = Data.post.slice(
                          startIndex,
                          endIndex
                        );

                        if (currentPageItems.length > 0) {
                          return (
                            <li class="page-item" key={index}>
                              <button
                                class="page-link"
                                onClick={() => paginate(index + 1)}
                              >
                                {index + 1}
                              </button>
                            </li>
                          );
                        } else {
                          return null;
                        }
                      })}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PropertyList;

import { React, useState, useEffect } from "react";
import axios from "axios";
import ReactJsAlert from "reactjs-alert";
import { useNavigate } from "react-router-dom";
const DevelopersList = () => {
  let name, value;
  const navigate = useNavigate();
  const [UserType, setUserType] = useState("");
  const [Localities, setLocalities] = useState({ post: [] });
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  // These 3 are React alert setStates
  const [status, setStatus] = useState(false);
  const [type, setType] = useState("success");
  const [title, setTitle] = useState("This is a alert");

  const [user, setUser] = useState({
    bankOfferName: "",
    bankOfferDetails: "",
    applyOnBank: "",
    rateOfInterest: "",
    startingFrom: "",
    endedOn: "",
    logo: "",
  });

  const [selectedItems, setSelectedItems] = useState([]);
  const [allItemsSelected, setAllItemsSelected] = useState(false);
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

      setUserType(data);

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
  const inputHandler = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };
  useEffect(() => {
    axios
      .get("/DevelopersAPI")
      .then((response) => {
        const data = response.data;

        setLocalities({ post: data });
      })
      .catch((err) => {
        console.log("Error during Data:", err);
      });
  }, []);
  useEffect(() => {
    UserDetails();
  }, []);

  if (UserType.userType !== "admin") {
    return (
      <div style={{ margin: "10% 10%", textAlign: "center" }}>
        sorry, only admin can visit this page.
      </div>
    );
  }

  const indexOfLastItem = currentPage * itemsPerPage;

  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems = Localities.post.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // const handleSelectChange = (event, id) => {
  //   const { checked } = event.target;

  //   if (checked) {
  //     setSelectedItems((prevSelectedItems) => [...prevSelectedItems, id]);
  //   } else {
  //     setSelectedItems(
  //       (prevSelectedItems) =>
  //         prevSelectedItems.filter((itemId) => itemId !== id)
  //     );
  //   }
  // };

  const handleSelectChange = (event, id) => {
    const { checked } = event.target;

    if (id === "all") {
      setAllItemsSelected(checked);

      if (checked) {
        setSelectedItems(
          Localities.post
            .slice(indexOfFirstItem, indexOfLastItem)
            .map((item) => item._id)
        );
      } else {
        setSelectedItems([]);
      }
    } else {
      if (checked) {
        setSelectedItems((prevSelectedItems) => [...prevSelectedItems, id]);
      } else {
        setSelectedItems((prevSelectedItems) =>
          prevSelectedItems.filter((itemId) => itemId !== id)
        );
      }
    }
  };

  const handleDeleteSelected = () => {
    axios

      .post("/deleteSelectedDeveloper", { ids: selectedItems })

      .then((response) => {
        console.log("Selected bank offers deleted:", response.data);

        <ReactJsAlert
          status={true} // true or false
          type="success" // success, warning, error, info
          title="Successfully Deleted" // title you want to display
          Close={() => this.setState({ status: false })} // callback method for hide
        />;

        // You can add any necessary logic here to update the state or reload the data
      })

      .catch((err) => {
        console.log("Error during delete selected:", err);
      });
  };

  return (
    <>
      <div
        className="sublocationList"
        style={{ marginTop: "6rem", marginRight: "2rem" }}
      >
        <div className="container-fluid">
          <div className="row justify-content-end">
            <div className="col-md-10">
              <h1
                style={{
                  padding: "1rem",
                  textAlign: "center",
                  color: "white",
                  backgroundColor: "#708090",
                }}
              >
                List Of Developers
              </h1>
              <table className="table table-striped table-hover table-bordered">
                <thead style={{ backgroundColor: "#708090", color: "white" }}>
                  <th>
                    <input
                      type="checkbox"
                      className="form-check-input"
                      onChange={handleDeleteSelected}
                    />
                  </th>
                  <th>S No.</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone No.</th>
                  <th>About Developer</th>
                  <th>Image</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </thead>
                {currentItems.map(
                  (
                    {
                      name,
                      email,
                      phoneNo,
                      aboutDeveloper,

                      logo,
                      _id,
                    },
                    index
                  ) => {
                    return (
                      <>
                        <tbody>
                          <tr className="bg-light">
                            <td style={{ paddingLeft: "1rem" }}>
                              <input
                                style={{ paddingLeft: "1rem" }}
                                type="checkbox"
                                className="form-check-input"
                                value={_id}
                                onChange={(event) =>
                                  handleSelectChange(event, _id)
                                }
                              />
                              {/* <input
                                type="checkbox"
                                className="form-check-input"
                                value="all"
                                onChange={(event) =>
                                  handleSelectChange(event, "all")
                                }
                                checked={allItemsSelected}
                              /> */}
                            </td>
                            <td>{indexOfFirstItem + index + 1}</td>
                            <td>{name}</td>
                            <td>{email}</td>
                            <td>{phoneNo}</td>

                            <td dangerouslySetInnerHTML={{__html: aboutDeveloper}}></td>
                            <td>
                              <img
                                src={require("../../Uploads/Projects/" +
                                  logo.data)}
                                alt="main-img"
                                style={{ height: "10vh", width: "8vw" }}
                              />
                            </td>
                            <td>
                              <form method="POST" action="/deleteSubLocality">
                                <input
                                  type="hidden"
                                  name="name"
                                  value={name}
                                  onChange={inputHandler}
                                ></input>
                                <input
                                  type="hidden"
                                  name="email"
                                  value={email}
                                  onChange={inputHandler}
                                ></input>
                                <input
                                  type="hidden"
                                  name="phoneNo"
                                  value={phoneNo}
                                  onChange={inputHandler}
                                ></input>
                                <input
                                  type="hidden"
                                  name="aboutDeveloper"
                                  value={aboutDeveloper}
                                  onChange={inputHandler}
                                ></input>

                                <input
                                  type="hidden"
                                  name="logo"
                                  value={logo}
                                  onChange={inputHandler}
                                ></input>
                                <input
                                  type="hidden"
                                  name="_id"
                                  value={_id}
                                  onChange={inputHandler}
                                ></input>
                                <button
                                  type="submit"
                                  className=" btn btn-danger px-3"
                                  onClick={function () {
                                    navigate("/update-bank-offer", {
                                      state: {
                                        id: _id,
                                        name: name,
                                        email: email,
                                        phoneNo: phoneNo,
                                        aboutDeveloper: aboutDeveloper,

                                        logo: logo,
                                      },
                                    });
                                  }}
                                >
                                  <i class="fas fa-edit text-white"></i>
                                </button>
                              </form>
                            </td>
                            <td>
                              <form method="POST" action="/deleteDeveloper">
                                <input
                                  type="hidden"
                                  name="id"
                                  value={_id}
                                  onChange={inputHandler}
                                ></input>

                                <button
                                  type="submit"
                                  className=" btn btn-danger px-3"
                                >
                                  <i className="fas fa-trash-alt text-white mx-auto"></i>
                                </button>
                              </form>
                            </td>
                          </tr>
                        </tbody>
                      </>
                    );
                  }
                )}
              </table>
              <button className="btn btn-danger" onClick={handleDeleteSelected}>
                Delete Selected
              </button>
            </div>
          </div>
        </div>

        <nav aria-label="..." style={{ width: "50%", margin: "1rem auto" }}>
          <ul class="pagination" style={{ cursor: "pointer" }}>
            {Array(Math.ceil(Localities.post.length / itemsPerPage))
              .fill(0)

              .map((_, index) => {
                const startIndex = index * itemsPerPage;

                const endIndex = startIndex + itemsPerPage;

                const currentPageItems = Localities.post.slice(
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
    </>
  );
};

export default DevelopersList;

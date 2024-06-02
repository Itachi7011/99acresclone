import { React, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SublocalitiesList = () => {
  let name, value;
  const navigate = useNavigate();
  const [UserType, setUserType] = useState("");
  const [Localities, setLocalities] = useState({ post: [] });
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [user, setUser] = useState({
    city: "",
    location: "",
    sub_location: "",
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

  return (
    <>
      
      <div className="sublocationList"  style={{marginTop: "6rem", marginRight:"2rem"}}>
        <div className="container-fluid">
          <div className="row justify-content-end">
            <div className="col-md-10">
            <h1 style={{  padding: "1rem",textAlign: "center",color: "white" ,backgroundColor: "#708090"}}>List Of All Sub-Locations</h1>

              <table className="table table-striped table-hover table-bordered">
                <thead style={{ backgroundColor: "#708090", color: "white" }}>
                  <th>No.</th> <th>City</th>
                  <th>Location</th>
                  <th>Sub-Location</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </thead>
                {currentItems.map(({ city, location, sub_location,_id }, index) => {
                  return (
                    <>
                      <tbody>
                        <tr className="bg-light">
                          <td>{indexOfFirstItem+index + 1}</td>
                          <td>{city}</td>
                          <td>{location}</td>
                          <td>{sub_location}</td>
                          <td>
                            <form method="POST" action="/deleteSubLocality">
                              <input type="hidden" name="city" value={city} onChange={inputHandler}></input>
                              <input type="hidden" name="location" value={location} onChange={inputHandler}></input>
                              <input type="hidden" name="sub_location" value={sub_location} onChange={inputHandler}></input>
                              <button
                                type="submit"
                                className=" btn btn-danger px-3"
                                onClick={function () {
                                  navigate("/edit-sublocation", {
                                    state: { id: _id,
                                      city : city,
                                      location : location,
                                      sub_location : sub_location,
                                    },
                                    
                                  });
                                }}
                              ><i class="fas fa-edit text-white"></i>
                               
                              </button>
                            </form>
                          </td>
                          <td>
                            <form method="POST" action="/deleteSubLocality">
                              <input type="hidden" name="city" value={city} onChange={inputHandler}></input>
                              <input type="hidden" name="location" value={location} onChange={inputHandler}></input>
                              <input type="hidden" name="sub_location" value={sub_location} onChange={inputHandler}></input>
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
                })}
              </table>
            </div>
          </div>
        </div>
       
                        <nav aria-label="..." style={{width:"50%",margin:"1rem auto"}}>
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

export default SublocalitiesList;

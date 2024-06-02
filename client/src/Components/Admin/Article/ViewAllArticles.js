import { React, useState, useEffect } from "react";
import axios from "axios";
import ReactJsAlert from "reactjs-alert";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
const ArticlesList = () => {
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
    title: "",
    articleCategory: "",
    articleCategory1: "",
    articleContent: "",
    youtubeUrl: "",
    developerName: "",
    projectName: "",
    status: "",
    articleImage: "",
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
  const handleDeleteSelected = () => {
    axios

      .post("/deleteSelectedArticles", { ids: selectedItems })

      .then(() => {
        // console.log("Selected bank offers deleted:", response.data);

      alert("Selected Articles Deleted Successfully."); // display success message
        // alert("Selected Articles Deleted Successfully.")

        // You can add any necessary logic here to update the state or reload the data
      })

      .catch((err) => {
        console.log("Error during delete selected:", err);
      });
  };
  // useEffect(()=> {

  // },[])
  useEffect(() => {
    axios
      .get("/ArticlesAPI")
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
                List Of Articles
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
                  <th>Title</th>
                  <th>Category</th>
                  <th>SubCategory</th>
                  <th>Developer(Project)</th>
                  <th>Content</th>
                  <th>Image</th>
                  <th>Youtube URL</th>
                  <th>Delete</th>
                </thead>
                {currentItems.map(
                  (
                    {
                      title,
                      articleCategory,
                      articleCategory1,
                      articleContent,
                      youtubeUrl,
                      developerName,
                      projectName,
                      status,
                      articleImage,
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
                            <td>{title}</td>
                            <td>{articleCategory}</td>
                            <td>
                              {articleCategory1 === "" ? "-" : articleCategory1}
                            </td>
                            <td>
                              {developerName === "" ? "-" : developerName +"-"+projectName}
                              {/* {developerName} ({projectName}) */}
                            </td>
                            <td>{articleContent} </td>
                            <td>{youtubeUrl} </td>

                            <td>
                              <img
                                src={require("../../Uploads/Projects/" +
                                  articleImage.data)}
                                alt="main-img"
                                style={{ height: "10vh", width: "8vw" }}
                              />
                            </td>

                            <td>
                              <form method="POST" action="/updateArticle">
                                <input
                                  type="hidden"
                                  name="title"
                                  value={title}
                                  onChange={inputHandler}
                                ></input>
                                <input
                                  type="hidden"
                                  name="articleCategory"
                                  value={articleCategory}
                                  onChange={inputHandler}
                                ></input>
                                <input
                                  type="hidden"
                                  name="articleCategory1"
                                  value={articleCategory1}
                                  onChange={inputHandler}
                                ></input>
                                <input
                                  type="hidden"
                                  name="developerName"
                                  value={developerName}
                                  onChange={inputHandler}
                                ></input>
                                <input
                                  type="hidden"
                                  name="projectName"
                                  value={projectName}
                                  onChange={inputHandler}
                                ></input>

                                <input
                                  type="hidden"
                                  name="articleImage"
                                  value={articleImage}
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
                                        title: title,
                                        articleCategory: articleCategory,
                                        developerName: developerName,
                                        projectName: projectName,
                                        articleCategory1: articleCategory1,
                                        articleImage: articleImage,
                                      },
                                    });
                                  }}
                                >
                                  <i class="fas fa-edit text-white"></i>
                                </button>
                              </form>
                            </td>
                            <td>
                              <form method="POST" action="/deleteArticles">
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

export default ArticlesList;

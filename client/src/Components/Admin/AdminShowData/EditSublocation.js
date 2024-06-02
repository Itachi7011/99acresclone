import { React, useState } from "react";
import { useLocation } from "react-router-dom";

const EditSublocation = () => {
  let name, value;
  const location = useLocation();

  const previousId = location.state.id;
  const previousCity = location.state.city;
  const previousLocation = location.state.location;
  const previousSubLocation = location.state.sub_location;

  const [user, setUser] = useState({
    id:previousId,
    city: previousCity,
    location: previousLocation,
    sub_location: previousSubLocation,
  });
  const inputHandler = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <>
      <div
        className="addLocation"
        style={{
          zIndex: "20",
          width: "100%",
          margin: "7% auto",
          marginLeft: "7%",
          position: "absolute",
          textAlign: "left",
        }}
      >
        <div className="container" style={{ backgroundColor: "#F1F1EC" }}>
          <div className="row justify-content-center">
            <div
              className="col-lg-12"
              style={{
                paddingTop: "1rem",
                paddingLeft: "1rem",
                paddingRight: "1rem",
                paddingBottom: "3rem",
                borderRadius: "5px",
              }}
            >
              <h3 className="text-center" style={{ marginBottom: "4rem" }}>
                Add New Location / Locality
              </h3>
              <div
                className="innerDiv container"
                style={{
                  backgroundColor: "white",
                  padding: "4rem 5rem 2rem 1rem",
                  borderRadius: "5px",
                }}
              >
                <div className="row">
                  <div className="col-12 col-lg-2 mt-2">
                    <h6 style={{ marginBottom: "3.2rem" }}>City Name:</h6>
                    <h6 style={{ marginBottom: "3.2rem" }}>Location Name:</h6>
                    <h6 style={{ marginBottom: "3.2rem" }}>
                      Sub-Location Name:
                    </h6>
                  </div>
                  <div className="col-lg-8">
                    <form action="/editLocality" method="post">
                      <input type="hidden" name="id" value={previousId} />
                      <input
                        type="text"
                        name="city"
                        style={{ fontWeight: "400" }}
                        onChange={inputHandler}
                        value={user.city}
                        placeholder={previousCity}
                        className="form-control mb-4"
                      />
                      <input
                        type="text"
                        name="location"
                        style={{ fontWeight: "400" }}
                        onChange={inputHandler}
                        placeholder={previousLocation}
                        value={user.location}
                        className="form-control mb-4"
                      />
                      <input
                        type="text"
                        name="sub_location"
                        style={{ fontWeight: "400" }}
                        onChange={inputHandler}
                        placeholder={previousSubLocation}
                        value={user.sub_location}
                        className="form-control mb-4"
                      />
                      <br />
                      <br />
                      <button className="btn btn-primary me-4" type="submit">
                        {" "}
                        Submit
                      </button>
                      <button className="btn btn-primary" type="reset">
                        {" "}
                        Reset
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditSublocation;

import React, { useState ,useEffect} from "react";

const AddCities = () => {
  let name, value;
  const [UserType, setUserType] = useState("");

  const [user, setUser] = useState({
    city: "",
    location: "",
    sub_locality: "",
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

  useEffect(() => {
    UserDetails();
  }, []);
  const inputHandler = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };


  if (UserType.userType !== "admin") {

    return <div style={{margin:"10% 10%", textAlign:"center"}}>sorry, only admin can visit this page.</div>;

  }

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
                Add New City
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
                  </div>
                  <div className="col-lg-8">
                    <form action="/addLocality" method="post">
                      <input
                        style={{ fontWeight: "400" }}
                        type="text"
                        name="city"
                        onChange={inputHandler}
                        placeholder="city name"
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

export default AddCities;

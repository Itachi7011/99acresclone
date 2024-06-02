import React from "react";

const previousPostCommercialProperty = () => {
  return (
    <div>
      {/* breadcrumb end */}
      {/* user dashboard section start */}
      <section className="user-dashboard small-section">
        <div className="container">
          <div className="row">

            <div className="col-lg-9">
              <div className="dashboard-content">
                <div className="create-tab" id="create-property">
                  <div className="property-wizard common-card">
                    <div className="common-header">
                      <h5>Create property</h5>
                    </div>
                    <div className="create-property-form">
                      <div className="form-inputs">
                        <h6>Basic information</h6>
                        <form className="row gx-2 gx-sm-3">
                          <div className="form-group col-sm-4">
                            <label>Property Type</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="villa"
                            />
                          </div>
                          <div className="form-group col-sm-4">
                            <label>Property Status</label>
                            <div className="dropdown">
                              <span
                                className="dropdown-toggle font-rubik"
                                data-bs-toggle="dropdown"
                              >
                                <span>For sale</span>{" "}
                                <i className="fas fa-angle-down" />
                              </span>
                              <div className="dropdown-menu text-start">
                                <a
                                  className="dropdown-item"
                                  href="/"
                                >
                                  For Rent
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="/"
                                >
                                  For Sale
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="form-group col-sm-4">
                            <label>Property Price</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="$2800"
                            />
                          </div>
                          <div className="form-group col-sm-4">
                            <label>Max Rooms</label>
                            <div className="dropdown">
                              <span
                                className="dropdown-toggle font-rubik"
                                data-bs-toggle="dropdown"
                              >
                                <span>1</span>{" "}
                                <i className="fas fa-angle-down" />
                              </span>
                              <div className="dropdown-menu text-start">
                                <a
                                  className="dropdown-item"
                                  href="/"
                                >
                                  2
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="/"
                                >
                                  3
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="/"
                                >
                                  4
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="/"
                                >
                                  5
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="/"
                                >
                                  6
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="form-group col-sm-4">
                            <label>Beds</label>
                            <div className="dropdown">
                              <span
                                className="dropdown-toggle font-rubik"
                                data-bs-toggle="dropdown"
                              >
                                <span>1</span>{" "}
                                <i className="fas fa-angle-down" />
                              </span>
                              <div className="dropdown-menu text-start">
                                <a
                                  className="dropdown-item"
                                  href="/"
                                >
                                  2
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="/"
                                >
                                  3
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="/"
                                >
                                  4
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="/"
                                >
                                  5
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="/"
                                >
                                  6
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="form-group col-sm-4">
                            <label>Baths</label>
                            <div className="dropdown">
                              <span
                                className="dropdown-toggle font-rubik"
                                data-bs-toggle="dropdown"
                              >
                                <span>1</span>{" "}
                                <i className="fas fa-angle-down" />
                              </span>
                              <div className="dropdown-menu text-start">
                                <a
                                  className="dropdown-item"
                                  href="/"
                                >
                                  2
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="/"
                                >
                                  3
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="/"
                                >
                                  4
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="/"
                                >
                                  5
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="/"
                                >
                                  6
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="form-group col-sm-4">
                            <label>Area</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="85 sq ft"
                            />
                          </div>
                          <div className="form-group col-sm-4">
                            <label>Price</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="$3000"
                            />
                          </div>
                          <div className="form-group col-sm-4">
                            <label>Agencies</label>
                            <div className="dropdown">
                              <span
                                className="dropdown-toggle font-rubik"
                                data-bs-toggle="dropdown"
                              >
                                <span>Premiere</span>{" "}
                                <i className="fas fa-angle-down" />
                              </span>
                              <div className="dropdown-menu text-start">
                                <a
                                  className="dropdown-item"
                                  href="/"
                                >
                                  Blue Sky
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="/"
                                >
                                  Zephyr
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="/"
                                >
                                  Premiere
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="form-group col-sm-12">
                            <label>Description</label>
                            <textarea
                              className="form-control"
                              rows={4}
                              defaultValue={""}
                            />
                          </div>
                        </form>
                      </div>
                      <div className="form-inputs">
                        <h6>Address</h6>
                        <form className="row gx-3">
                          <div className="form-group col-sm-6">
                            <label>Address</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Address of your property"
                            />
                          </div>
                          <div className="form-group col-sm-6">
                            <label>Zip code</label>
                            <input
                              type="number"
                              className="form-control"
                              placeholder={39702}
                            />
                          </div>
                          <div className="form-group col-sm-4">
                            <label>Any Country</label>
                            <div className="dropdown">
                              <span
                                className="dropdown-toggle font-rubik"
                                data-bs-toggle="dropdown"
                              >
                                <span>Austria</span>{" "}
                                <i className="fas fa-angle-down" />
                              </span>
                              <div className="dropdown-menu text-start">
                                <a
                                  className="dropdown-item"
                                  href="/"
                                >
                                  Austria
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="/"
                                >
                                  Brazil
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="/"
                                >
                                  New york
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="/"
                                >
                                  USA
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="form-group col-sm-4">
                            <label>Any City</label>
                            <div className="dropdown">
                              <span
                                className="dropdown-toggle font-rubik"
                                data-bs-toggle="dropdown"
                              >
                                <span>Amreli</span>{" "}
                                <i className="fas fa-angle-down" />
                              </span>
                              <div className="dropdown-menu text-start">
                                <a
                                  className="dropdown-item"
                                  href="/"
                                >
                                  Gandhinagar
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="/"
                                >
                                  Bharuch
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="/"
                                >
                                  Amreli
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="/"
                                >
                                  Ahmadabad
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="form-group col-sm-4">
                            <label>Landmark</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="landmark place name"
                            />
                          </div>
                        </form>
                      </div>
                      <div className="form-inputs">
                        <h6>Gallery</h6>
                        <form
                          className="dropzone"
                          id="multiFileUpload"
                          action="/upload.php"
                        >
                          <div className="dz-message needsclick">
                            <i className="fas fa-cloud-upload-alt" />
                            <h6>Drop files here or click to upload.</h6>
                            <span className="note needsclick">
                              (This is just a demo dropzone. Selected files are{" "}
                              <strong>not</strong> actually uploaded.)
                            </span>
                          </div>
                        </form>
                        <form className="row gx-3">
                          <div className="form-group col-sm-12">
                            <label>Video (mp4)</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="mp4 video link"
                            />
                          </div>
                          <div className="form-group col-sm-12">
                            <label>Additional features</label>
                            <div className="feature-checkbox">
                              <label htmlFor="chk-ani">
                                <input
                                  className="checkbox_animated color-2"
                                  id="chk-ani"
                                  type="checkbox"
                                />{" "}
                                Emergency Exit
                              </label>
                              <label htmlFor="chk-ani1">
                                <input
                                  className="checkbox_animated color-2"
                                  id="chk-ani1"
                                  type="checkbox"
                                />{" "}
                                CCTV
                              </label>
                              <label htmlFor="chk-ani2">
                                <input
                                  className="checkbox_animated color-2"
                                  id="chk-ani2"
                                  type="checkbox"
                                />{" "}
                                Free Wi-Fi
                              </label>
                              <label htmlFor="chk-ani3">
                                <input
                                  className="checkbox_animated color-2"
                                  id="chk-ani3"
                                  type="checkbox"
                                />{" "}
                                Free Parking In The Area
                              </label>
                              <label htmlFor="chk-ani4">
                                <input
                                  className="checkbox_animated color-2"
                                  id="chk-ani4"
                                  type="checkbox"
                                />{" "}
                                Air Conditioning
                              </label>
                            </div>
                          </div>
                        </form>
                      </div>
                      <div className="text-end">
                        <button
                          type="submit"
                          className="btn btn-gradient color-2 btn-pill"
                        >
                          Add property
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default previousPostCommercialProperty;

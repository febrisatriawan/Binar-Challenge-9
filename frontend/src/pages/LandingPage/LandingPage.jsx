import React from "react";
import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const LandingPage = () => {
  var navigate = useNavigate();

  const navigateGame = () => {
    navigate("/game");
  };

  return (
    <>
      <div className="container-fluid main" id="home">
        <Navbar isFixedTop={"fixed-top"} />
        <div className="container-fluid hero">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-10 col-xl-12">
              <div className="container hero text-center text-white">
                <h1 className="display-2">PLAY TRADITIONAL GAMES</h1>
                <p>Experience New Traditional Game Play</p>
                <button onClick={navigateGame} className="button-play">
                  Play Now
                </button>
              </div>
              <br />
              <div className="text-center story">
                <p className="story-text">THE STORY</p>
                <img
                  className="m-auto"
                  src="../../../assets/arrow-down-sign-to-navigate.png"
                  height="30"
                  width="30"
                  alt="navigation"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid slider-section" id="games">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-4 text-the-games">
              <div className="container">
                <p>What so Special?</p>
                <h1>THE GAMES</h1>
              </div>
            </div>
            <div className="col-md-6 col-lg-8">
              <div
                id="carouselExampleControls"
                className="carousel slide"
                data-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      className="d-block w-100"
                      src="../../../assets/rockpaperstrategy-1600.jpg"
                      height="300px"
                      width="500px"
                      alt="First slide"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100"
                      src="../../../assets/main-bg.jpg"
                      height="300px"
                      width="500px"
                      alt="Second slide"
                    />
                  </div>
                </div>
                <a
                  className="carousel-control-prev"
                  href="#carouselExampleControls"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#carouselExampleControls"
                  role="button"
                  data-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid feature-section" id="features">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-6 col-md-12 feature-section-text">
              <p>What So Special?</p>
              <h2>Features</h2>
              <div className="container p-0 m-0">
                <div className="row">
                  <div className="col-auto text-center flex-column d-none d-sm-flex">
                    <div className="row h-50">
                      <div className="col">&nbsp;</div>
                      <div className="col">&nbsp;</div>
                    </div>
                    <h5 className="m-2">
                      <span className="badge badge-pill bg-light border">
                        &nbsp;
                      </span>
                    </h5>
                    <div className="row h-50">
                      <div className="col border-right">&nbsp;</div>
                      <div className="col">&nbsp;</div>
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="card">
                      <div className="card-body p-0 mt-5">
                        <div className="feature-section-list">
                          <h2>TRADITIONAL GAMES</h2>
                          <p>
                            if you miss your childhood, we provide so many
                            traditional games here
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-auto text-center flex-column d-none d-sm-flex">
                    <div className="row h-50">
                      <div className="col border-right">&nbsp;</div>
                      <div className="col">&nbsp;</div>
                    </div>
                    <h5 className="m-2">
                      <span className="badge badge-pill bg-light border">
                        &nbsp;
                      </span>
                    </h5>
                    <div className="row h-50">
                      <div className="col border-right">&nbsp;</div>
                      <div className="col">&nbsp;</div>
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="card">
                      <div className="card-body px-0 mt-4">
                        <div className="feature-section-list">
                          <h2>GAME SUIT</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-auto text-center flex-column d-none d-sm-flex">
                    <div className="row h-50">
                      <div className="col border-right">&nbsp;</div>
                      <div className="col">&nbsp;</div>
                    </div>
                    <h5 className="m-2">
                      <span className="badge badge-pill bg-light border">
                        &nbsp;
                      </span>
                    </h5>
                    <div className="row h-50">
                      <div className="col border-right">&nbsp;</div>
                      <div className="col">&nbsp;</div>
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="card">
                      <div className="card-body px-0 mt-4">
                        <div className="feature-section-list">
                          <h2>TBD</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid requirement" id="">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-5 align-self-center requirement-text">
              <p>Can my computer run this game?</p>
              <h2>SYSTEM REQUIREMENT</h2>
            </div>

            <div className="col-lg-7">
              <table border="1" className="requirement-table">
                <tr>
                  <td>
                    <h5>OS:</h5>
                    <p>
                      Windows 7 64-bit only
                      <br />
                      (No OSX support at this time)
                    </p>
                  </td>
                  <td>
                    <h5>PROCESSOR:</h5>
                    <p>
                      Intel Core 2 Duo @ 2.4 GHZ or
                      <br />
                      AMD Athlon X2 @ 2.8 GHZ
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h5>MEMORY:</h5>
                    <p>4 GB RAM</p>
                  </td>
                  <td>
                    <h5>STORAGE:</h5>
                    <p>8 GB available space</p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="2">
                    <h5>GRAPHICS:</h5>
                    <p>
                      NVIDIA GeForce GTX 660 2GB or
                      <br />
                      AMD Radeon HD 7850 2GB DirectX11 (Shader Model 5)
                    </p>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid top-scores">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-12 col-lg-4 align-self-center">
              <div className="container text-sm-center">
                <h1 className="display-4 text-white">TOP SCORES</h1>
                <button className="btn btn-warning">See More</button>
              </div>
            </div>
            <div className="col-lg-6 justify-content-md-center">
              <div className="container">
                <div className="row">
                  <div className="col-md-12 col-lg-6 offset-lg-6">
                    <div className="d-flex flex-column align-items-center">
                      <div className="card-top-scores">
                        <div className="testi-header">
                          <div className="avatar">
                            <img
                              className="img rounded-circle"
                              src="../../../assets/person1.jpg"
                              width="50px"
                              height="50px"
                              alt="person"
                            />
                          </div>
                          <div className="testimoni-info">
                            <h6 className="person-name">Evan Lathi</h6>
                            <h6 className="person-job">PC Gamer</h6>
                          </div>
                          <div>
                            <img src="../../../assets/twitter.svg" alt="" />
                          </div>
                        </div>
                        <h6 className="text-white">
                          "One of my gaming highlights of the year"
                        </h6>
                        <h6 className="person-job">October 18, 2018</h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 col-lg-6 offset-lg-2">
                    <div className="d-flex flex-column align-items-center">
                      <div className="card-top-scores">
                        <div className="testi-header">
                          <div className="avatar">
                            <img
                              className="img rounded-circle"
                              src="../../../assets/person2.jpg"
                              width="50px"
                              height="50px"
                              alt="person2"
                            />
                          </div>
                          <div className="testimoni-info">
                            <h6 className="person-name">Jada Griffin</h6>
                            <h6 className="person-job">Nerdreactor</h6>
                          </div>
                          <div className="contact-section">
                            <img
                              src="../../../assets/twitter.svg"
                              alt="twitter"
                            />
                          </div>
                        </div>
                        <h6 className="text-white">
                          "The next big thing in the world of streaming and
                          survival games."
                        </h6>
                        <h6 className="person-job">December 21, 2018</h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 col-lg-6 offset-lg-4">
                    <div className="d-flex flex-column align-items-center">
                      <div className="card-top-scores">
                        <div className="testi-header">
                          <div className="avatar">
                            <img
                              className="img rounded-circle"
                              src="../../../assets/person3.jpg"
                              width="50px"
                              height="50px"
                              alt="Person3"
                            />
                          </div>
                          <div className="testimoni-info">
                            <h6 className="person-name">Aaroon Williams</h6>
                            <h6 className="person-job">Uproxx</h6>
                          </div>
                          <div>
                            <img
                              src="../../../assets/twitter.svg"
                              alt="twitter"
                            />
                          </div>
                        </div>
                        <h6 className="text-white">
                          "Snoop Dogg Playing The Wildy Entertaining SOS is
                          Ridiculous."
                        </h6>
                        <h6 className="person-job">December 24, 2018</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid footer-container d-flex">
        <div className="row">
          <div className="container d-flex h-100">
            <div className="row align-self-center">
              <div className="col-lg-6"></div>
              <div className="col-lg-6">
                <h6 className="text-white">Want to stay in touch?</h6>
                <h1
                  className="text-white display-1"
                  style={{ fontWeight: 400 }}
                >
                  NEWSLETTER SUBSCRIBE
                </h1>
                <h6 className="text-white" style={{ fontWeight: 300 }}>
                  In order to start receiving our news all you have to do is
                  enter your email address. Everything else will no taken care
                  of by us. We sill send you emails containing information about
                  game. We don't spam.
                </h6>
                <div className="subscribe">
                  <h6>Your Email Address</h6>
                  <div className="form-email d-flex flex-row">
                    <input
                      className="input-subs"
                      type="text"
                      placeholder="youremail@binar.co.id"
                    />
                    <button className="btn btn-warning btnSubs">
                      Subscribe Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid footer-container2">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <a className="logo" href="#home">
                Traditional Game
              </a>
            </div>
            <div className="col-lg-6 text-right">
              <img
                style={{ marginRight: 15 }}
                src="../../../assets/twitch.svg"
                alt=""
              />
              <img src="../../../assets/twitter.svg" alt="" />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <hr style={{ borderTop: "1px solid white" }} />
              <p className="text-white">
                © Binar Academy 2022, Inc. All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;

import React from "react";
// import Background from "./components/Background";
import SocialMediaLinks from "./components/SocialMediaLinks";
import "./Frontpage.css";
function Frontpage() {
  return (
    <>
      <div className="profile-container" id="home_page">
        {/* <Background /> */}
        <div className="profile-parent">
          <div className="profile-details">
            <div className="colz">
              <SocialMediaLinks />
            </div>

            <div className="profile-details-name">
              <p className="primary-text">
                Hello, I'M
                <span className="highlighted-text">Ganesh Ghadge</span>
              </p>
            </div>
            <div className="profile-details-role">
              <span className="primary-text">
                <h1>I Am MERN Developer</h1>
                <span className="profile-role-tagline">
                  Knack of building applications with front and back end
                  operations.
                </span>
              </span>
            </div>
            <div className="profile-options">
              <a href="#contact_page">
                <button className="btn primary-btn">Hire Me</button>
              </a>
              <a href="profile_img.png" download="../Image/profile_img.png">
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
          <div className="profile-picture">
            <div className="profile-picture-background"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Frontpage;

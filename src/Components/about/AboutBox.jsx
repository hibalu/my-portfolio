
import React from "react";

const AboutBox = () => {
  return (
    <div className="about_boxes grid">
      <div className="about_box">
        <i className="about_icon icon-fire"></i>
        <div>
          <h3 className="about_title">10</h3>
          <span className="about_subtitle"> Projects completed</span>
        </div>
      </div>

      <div className="about_box">
        <i className="about_icon icon-cup"></i>
        <div>
          <h3 className="about_title">2023</h3>
          <span className="about_subtitle">Cup of coffee</span>
        </div>
      </div>

      <div className="about_box">
        <i className="about_icon icon-people"></i>
        <div>
          <h3 className="about_title">10</h3>
          <span className="about_subtitle">satisfied clients</span>
        </div>
      </div>
    </div>
  );
};

export default AboutBox;

import React from "react";
import './headersocial.css';

import './home.css';

const HeaderSocials = () => {
  return (
    <div className="home_socials">
      <a
        href=""
        className="home_social-link"
        target="_blank"
      >
        <i className="fa-brands fa-instagram"></i>
      </a>

      <a
        href="https://www.twitter.com/"
        className="home_social-link"
        target="_blank"
      >
        <i className="fa-brands fa-twitter"></i>
      </a>

      <a
        href="https://www.whatsapp.com/"
        className="home_social-link"
        target="_blank"
      >
        <i className="fa-brands fa-whatsapp"></i>
      </a>

      <a
        href="https://www.pinterest.com/"
        className="home_social-link"
        target="_blank"
      >
        <i className="fa-brands fa-pinterest"></i>
      </a>
      <a
        href="https://www.facebook.com/"
        className="home_social-link"
        target="_blank"
      >
        <i className="fa-brands fa-facebook"></i>
      </a>
    </div>
  );
};

export default HeaderSocials;

import React from "react";
import "./Footer.css";
import PC from "../../images/image-retro-pcs.jpg";
import Laptop from "../../images/image-top-laptops.jpg";
import Growth from "../../images/image-gaming-growth.jpg";

const Footer = () => {
  return (
    <section className="footer">
      <div className="products">
        <img src={PC} alt="A retro PC" />

        <div className="text-area">
          <h4>01</h4>
          <p className="text-heading">Reviving Retro PCs</p>
          <p className="text">
            What happens when old PCs are given modern upgrades?
          </p>
        </div>
      </div>

      <div className="products">
        <img src={Laptop} alt="laptop of 2022" />

        <div className="text-area">
          <h4>02</h4>
          <p className="text-heading">Top 10 Laptops of 2022</p>
          <p className="text">Our best picks for various needs and budgets.</p>
        </div>
      </div>

      <div className="products">
        <img src={Growth} alt="Gaming Growth" />

        <div className="text-area">
          <h4>03</h4>
          <p className="text-heading">The Growth of Gaming</p>
          <p className="text">
            How the pandemic has sparked fresh opportunities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;

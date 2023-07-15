import Image from "next/image";
import React from "react";
import logo from "../../public/static/images/livingsivingLogo.png";

export default function Footer() {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        <div className=" f-left">
          <Image src={logo} width={120}></Image>

          <span className="secondaryText">
            Our Vision is to make all people <br />
            the best place to live for them.
          </span>
        </div>
        <div className=" f-right">
          <span className="primaryText">Address</span>
          <span className="secondaryText">
            B32 Sector 71 Noida, Uttar Pradesh 201301 India
          </span>
          {/* <div className='flexCenter f-menu'>
            <span className=''>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
        </div> */}
        </div>
      </div>
    </section>
  );
}

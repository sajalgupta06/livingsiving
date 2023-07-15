import React, { useState } from "react";
import logo from "../../public/static/images/livingsivingLogo.png";
import Image from "next/image";
import { BiMenuAltRight } from "react-icons/bi";
import OutSideClickHandler from "react-outside-click-handler";

export const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const getMenuStyle = (menuOpened) => {
    if (
      typeof window != "undefined" &&
      document?.documentElement?.clientWidth <= 769
    ) {
      return { right: !menuOpened && "-100%" };
    }
  };

  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth  h-container">
        {/* <Image src={logo} alt="logo" width={100} /> */}

        {/* <OutSideClickHandler onOutsideClick={() => setMenuOpened(false)}> */}

    
        <div
          className="flexCenter h-menu"
         
        >
          {/* <a href="#">Home</a> */}
          {/* <a href='#residencies'>Residencies</a> */}
          <a href="#amenities">Amenties</a>


          <a href="#gallery">Gallery</a>
          <Image src={logo} alt="logo" width={100} className="logo" /> 
          <a href="#location">Location</a>
            <a href="#contact">Contact us</a>
          {/* <button className="button">
          </button> */}
        </div>
        {menuOpened && (
   <div
   className="flexCenter v-menu"
   style={getMenuStyle(menuOpened)}
 >
   <a href="#">Home</a>
   {/* <a href='#residencies'>Residencies</a> */}
   <a href="#amenities">Amenties</a>
   <a href="#gallery">Gallery</a>
   <a href="#location">Location</a>
   <button className="button">
     <a href="#contact">Contact us</a>
   </button>
 </div>
        )}
     
        {/* </OutSideClickHandler> */}

        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
                    <Image src={logo} alt="logo" width={100} className="logo" /> 

          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;

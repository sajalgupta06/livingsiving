import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import r1 from '../../public/static/images/r1.png'
import r2 from '../../public/static/images/r2.png'
import r3 from '../../public/static/images/r3.png'
import {BsArrowLeftShort} from 'react-icons/bs'
import {BsArrowRightShort} from 'react-icons/bs'
import Image from "next/image";


export default function Testimonials() {
    var settings = {
        // dots: true,
        infinite: true,
        slidesToShow: 4,
     
        responsive: [
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                speed: 500,
              
               
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                speed: 500,
    
              
              },
            },
            {
              breakpoint: 750,
              settings: {
                slidesToShow: 3 ,
                speed: 500,
    
              },
            },
      
            {
              breakpoint: 1100,
              settings: {
                slidesToShow: 4,
                speed: 500,
    
              },
            },
          ],
      };
    
      const sliderRef = useRef();
    
      const data =   [
        {
          name: "Aliva Priva Jardin",
          price: "47,043",
          detail: "Jakarta Garden City Street, Cakung. Pulo Gadung, Jakarta Timur, DKI Jakarta",
          image: r1
        },
        {
          name: "Asatti Garden City",
          price: "66,353",
          detail: "Pahlawan Street XVII No.215, Cinangka, Sawangan, Depok, Jawa Barat",
          image: r2
        },
        {
          name: "Citralan Puri Serang",
          price: "35,853",
          detail: "Ruko Puri Indah Residence Block A7, Lingkar Street, Ciracas, Serang, Banten",
          image: r3
        },
        {
          name: "Aliva Priva Jardin",
          price: "47,043",
          detail: "Jakarta Garden City Street, Cakung. Pulo Gadung, Jakarta Timur, DKI Jakarta",
          image: r1
        },
        {
          name: "Asatti Garden City",
          price: "66,353",
          detail: "Pahlawan Street XVII No.215, Cinangka, Sawangan, Depok, Jawa Barat",
          image: r2
        },
        {
          name: "Citralan Puri Serang",
          price: "35,853",
          detail: "Ruko Puri Indah Residence Block A7, Lingkar Street, Ciracas, Serang, Banten",
          image: r3
        }
      ]
      
      
      return (
        <section className="r-wrapper" id="residencies">
          <div className="paddings innerWidth r-container">
            <div className="r-head flexColStart">
              <span className="orangeText">Best Choice</span>
              {/* <span className="primaryText">Testimonials</span> */}
              <div  className="iconDiv">
                  <BsArrowLeftShort
                    onClick={() => sliderRef.current.slickPrev()}
                    className="icon leftIcon"
                  />
                  <BsArrowRightShort
                    onClick={() => sliderRef.current.slickNext()}
                    className="icon rightIcon"
                  />
                </div>
            </div>
    
       
    
            <Slider {...settings} ref={sliderRef} >
              {data.map((card, i) => {
                return (
               
                    <div className=" flexColStart r-card " key={i}
                    >
                      <Image  src={card.image}/>
                      <span className="secondaryText r-price">
                        <span style={{ color: "orange" }}>Rs. </span>
                        <span>{card.price}</span>
                      </span>
                      <span className="primaryText">{card.name}</span>
                      <span className="secondaryText">{card.detail}</span>
                    </div>
           
                );
              })}
            </Slider>
          </div>
        </section>
      );
}

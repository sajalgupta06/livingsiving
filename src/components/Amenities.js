import Image from "next/image";
import React, { useState } from "react";
import valuePhoto from "../../public/static/images/amenities.jpg";
import washingMachine from "../../public/static/images/washing-machine-icon.png";
import fridge from "../../public/static/images/fridge.png";
import backup from "../../public/static/images/backup.png";
import ac from "../../public/static/images/airConditioner.png";
import cleaning from "../../public/static/images/cleaning.png";
import furniture from "../../public/static/images/furniture.png";
import wifi from "../../public/static/images/wifi.png";
import food from "../../public/static/images/food.png";
import { AiOutlineWifi } from "react-icons/ai";
import { ImPower } from "react-icons/im";
import { BiFridge } from "react-icons/bi";

import {
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
  Accordion,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import data from "@/utils/accordion";
import { MdOutlineArrowDropDown } from "react-icons/md";

export default function Amenities() {
  return (
    <section className="v-wrapper" id="amenities">
      <div className="paddings innerWidth flexCenter v-container">
        {/* Left Side */}
        <div className="v-left">
          <div className="image-container">
            <Image src={valuePhoto} alt=""></Image>
          </div>
        </div>

        <div className="flexColStart v-right">
          <span className="orangeText">Amenities</span>
          <span className="primaryText">Facilities we provide to you</span>
          <span className="secondaryText">
            We always ready to help by providing the best services for you.
            <br />
            We beleive a good place to live can make your life better
          </span>
          {/* <Accordion className="accordion"
                allowMultipleExpanded={false}
                preExpanded={[0]}
            >
                {data.map((item,i)=>{
                    const [className, setClassName] = useState(null)

                    return (
                        <AccordionItem className={`accordionItem ${className}`} key={i} uuid={i}>
                            <AccordionItemHeading>
                                <AccordionItemButton className='flexCenter accordionButton'>
                                   
                                   <AccordionItemState>
                                    {({expanded})=>expanded?setClassName("expanded"):setClassName("collapsed")}
                                   </AccordionItemState>
                                   
                                    <div className='flexCenter icon'>{item.icon}</div>
                                    <span className='primaryText'>
                                        {item.heading}
                                    </span>
                                    <div className='flexCenter icon'>
                                        <MdOutlineArrowDropDown size={20}/>
                                    </div>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p className='secondaryText'>{item.detail}</p>
                            </AccordionItemPanel>

                        </AccordionItem>
                    )

                })}

            </Accordion> */}

          <div className="facilities">
            <div className="row">

              <div className="rowItem">
                <Image src={wifi}></Image>
                <p className="secondaryText">24 * 7 Wi-fi</p>
              </div>

              <div className="rowItem">
                <Image src={food}></Image>
                <p className="secondaryText">Food</p>
              </div>
            </div>



            <div className="row">
              <div className="rowItem">
                <Image src={backup}></Image>
                <p className="secondaryText">Power Backup</p>
              </div>

              <div className="rowItem">
                <Image src={ac}></Image>
                <p className="secondaryText">Air Conditioner</p>
              </div>
            </div>
            <div className="row">
              <div className="rowItem">
                <Image src={washingMachine}></Image>
                <p className="secondaryText">Washing machine</p>
              </div>

              <div className="rowItem">
                <Image src={fridge}></Image>
                <p className="secondaryText">Refrigerator</p>
              </div>
            </div>
            <div className="row">
              <div className="rowItem">
                <Image src={cleaning}></Image>
                <p className="secondaryText">Regular Cleaning</p>
              </div>

              <div className="rowItem">
                <Image src={furniture}></Image>
                <p className="secondaryText">Furniture</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

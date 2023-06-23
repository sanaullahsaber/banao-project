import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import NavDropdown from "react-bootstrap/NavDropdown";



import img1 from "../../../src/assets/body/Rectangle 5.png";
import img2 from "../../../src/assets/body/Rectangle 5(1).png";
import img3 from "../../../src/assets/body/Rectangle 5(2).png";

import icon1 from "../../../src/assets/icon/✍️ Article.png";
import icon2 from "../../../src/assets/icon/🔬️ Education.png";
import icon3 from "../../../src/assets/icon/🗓️ Meetup.png";
import icon4 from "../../../src/assets/icon/💼️ Job.png";

import user1 from "../../../src/assets/user/Rectangle 3.png";
import user2 from "../../../src/assets/user/Rectangle 3(2).png";
import user3 from "../../../src/assets/user/Rectangle 3(1).png";
import user4 from "../../../src/assets/user/Rectangle 3(3).png";
import { FaRegEye, FaShareAlt, FaRegCalendar } from "react-icons/fa";
import { BsThreeDots } from "react-icons/Bs";
import { FiMapPin } from "react-icons/Fi";
import { BsBag } from "react-icons/Bs";

const LeftBody = () => {
  
  
  return (
    <div className="mt-1">
      {/* first card */}
      <Card className="">
        <Card.Img variant="top" src={img1} />
        <Card.Body>
          <img className="img-fluid my-2" src={icon1} alt="" />
          <Card.Title>
            <div className="d-flex justify-content-between">
              What if famous brands had regular fonts? Meet RegularBrands!
              <NavDropdown
                title={
                  <span>
                    <BsThreeDots />
                  </span>
                }
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item>Edit</NavDropdown.Item>
                <NavDropdown.Item>Report</NavDropdown.Item>
                <NavDropdown.Item>Option 3</NavDropdown.Item>
              </NavDropdown>
            </div>
          </Card.Title>
          <Card.Text>
            I've worked in UX for the better part fo a decode. From now on, I
            plan rei...
          </Card.Text>
          <div className="d-flex justify-content-between">
            <div className="d-flex g-5">
              <div className="me-2">
                <img src={user1} className="img-fluid " alt="" />
              </div>
              <div>
                <p className="mt-3">Sarthak Kamra</p>
              </div>
            </div>

            <div className="d-flex mt-3">
              <div className="me-3">
                <FaRegEye></FaRegEye> 1.4k Views
              </div>
              <div>
                <FaShareAlt></FaShareAlt>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
      {/* seconde card */}
      <Card className="mt-2">
        <Card.Img variant="top" src={img2} />
        <Card.Body>
          <img className="img-fluid my-2" src={icon2} alt="" />
          <Card.Title>
            <div className="d-flex justify-content-between">
              Tax Benefits for Investment under National Pension Scheme launched
              by Government
              <NavDropdown
                title={
                  <span>
                    <BsThreeDots />
                  </span>
                }
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item>Edit</NavDropdown.Item>
                <NavDropdown.Item>Report</NavDropdown.Item>
                <NavDropdown.Item>Option 3</NavDropdown.Item>
              </NavDropdown>
            </div>
          </Card.Title>
          <Card.Text>
            I've worked in UX for the better part fo a decode. From now on, I
            plan rei...
          </Card.Text>
          <div className="d-flex justify-content-between">
            <div className="d-flex g-5">
              <div className="me-2">
                <img src={user2} className="img-fluid " alt="" />
              </div>
              <div>
                <p className="mt-3">Sarah West</p>
              </div>
            </div>

            <div className="d-flex mt-3">
              <div className="me-3">
                <FaRegEye></FaRegEye> 1.4k Views
              </div>
              <div>
                <FaShareAlt></FaShareAlt>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
      {/* third card */}
      <Card className="mt-2">
        <Card.Img variant="top" src={img3} />
        <Card.Body>
          <img className="img-fluid my-2" src={icon3} alt="" />
          <Card.Title>
            <div className="d-flex justify-content-between">
              Finance & Investment Elite Social Mixer @Lujiazui
              <NavDropdown
                title={
                  <span>
                    <BsThreeDots />
                  </span>
                }
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item>Edit</NavDropdown.Item>
                <NavDropdown.Item>Report</NavDropdown.Item>
                <NavDropdown.Item>Option 3</NavDropdown.Item>
              </NavDropdown>
            </div>
          </Card.Title>
          <Card.Text className="d-flex gap-5">
            <div>
              <FaRegCalendar></FaRegCalendar> Fri, 12 Oct, 2018
            </div>
            <div>
              <FiMapPin></FiMapPin> Ahmedabad, India
            </div>
          </Card.Text>
          <Button className="w-100 my-3 border-5" variant="light" size="">
            <span style={{ color: "#E56135" }}>Visit Website</span>
          </Button>
          <div className="d-flex justify-content-between">
            <div className="d-flex g-5">
              <div className="me-2">
                <img src={user3} className="img-fluid " alt="" />
              </div>
              <div>
                <p className="mt-3">Sarah West</p>
              </div>
            </div>

            <div className="d-flex mt-3">
              <div className="me-3">
                <FaRegEye></FaRegEye> 1.4k Views
              </div>
              <div>
                <FaShareAlt></FaShareAlt>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
      {/* four card */}
      <Card className="mt-2">
        <Card.Body>
          <img className="img-fluid my-2" src={icon4} alt="" />
          <Card.Title>
            <div className="d-flex justify-content-between">
              Software Developer
              <NavDropdown
                title={
                  <span>
                    <BsThreeDots />
                  </span>
                }
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item>Edit</NavDropdown.Item>
                <NavDropdown.Item>Report</NavDropdown.Item>
                <NavDropdown.Item>Option 3</NavDropdown.Item>
              </NavDropdown>
            </div>
          </Card.Title>
          <Card.Text className="d-flex gap-5">
            <div>
              <BsBag></BsBag> Innovaccer Analytics Private.Ltd.
            </div>
            <div>
              <FiMapPin></FiMapPin> Noida, India
            </div>
          </Card.Text>
          <Button className="w-100 my-3 border-5" variant="light" size="">
            <span style={{ color: "#02B875" }}>Apply on Timesjobs</span>
          </Button>
          <div className="d-flex justify-content-between">
            <div className="d-flex g-5">
              <div className="me-2">
                <img src={user4} className="img-fluid " alt="" />
              </div>
              <div>
                <p className="mt-3">Sarah West</p>
              </div>
            </div>

            <div className="d-flex mt-3">
              <div className="me-3">
                <FaRegEye></FaRegEye> 1.4k Views
              </div>
              <div>
                <FaShareAlt></FaShareAlt>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default LeftBody;

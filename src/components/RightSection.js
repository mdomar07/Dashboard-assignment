import React from "react";
import "./RightSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { TfiTarget } from "react-icons/tfi";
import { IoChevronForwardSharp } from "react-icons/io5";
import { BiDish } from "react-icons/bi";
import { CiBurger } from "react-icons/ci";
import Progressbar from "./Progressbar";
import img1 from "../img/img-1.jpg";
import img2 from "../img/img-2.jpg";
import img3 from "../img/img-3.jpg";
import { LiaStarSolid } from "react-icons/lia";

const RightSection = () => {
  return (
    <div className="right-section">
      <div className="goals net-profit">
        <div>
          <div className="text">Net Profit</div>
          <div className="price">$6759.25</div>
          <div className="dropdown-icon-color-1">
            <FontAwesomeIcon icon={faCaretUp} className="dropdown-icon" />
            3%
          </div>
        </div>
        <div>
          <Progressbar />
        </div>
      </div>
      <div className="goals">
        <div className="sub-goals">
          <div className="sub-goals-div">
            <TfiTarget className="goals-icon" />
            <p>Goals</p>
          </div>
          <div>
            <IoChevronForwardSharp className="sub-goals-div-icon" />
          </div>
        </div>

        <div className="sub-goals">
          <div className="sub-goals-div">
            <CiBurger className="goals-icon goals-icon-dish" />
            <p>Popular Dishes</p>
          </div>
          <div>
            <IoChevronForwardSharp className="sub-goals-div-icon" />
          </div>
        </div>

        <div className="sub-goals">
          <div className="sub-goals-div">
            <BiDish className="goals-icon goals-icon-menu" />
            <p>Menus</p>
          </div>
          <div>
            <IoChevronForwardSharp className="sub-goals-div-icon" />
          </div>
        </div>
      </div>
      <div className="customer-feedback">
        <h2>Customer's Feedback</h2>
        <div className="feedback-item">
          <div className="feedback-item-img">
            <img src={img1} />
            <strong>Jenny Wilson</strong>
          </div>
          <div className="feedback-stars">
            <LiaStarSolid />
            <LiaStarSolid />
            <LiaStarSolid />
            <LiaStarSolid />
            <span>
              <LiaStarSolid />
            </span>
          </div>
          <p>
            The food was excellent and so was the service. I had the mushroom
            risotto with scallops which was awesome. I had a burger and greens
            (gluten-free) which was also very good. They were very conscientious
            about gluten allergies.
          </p>
        </div>
        <hr />
        <div className="feedback-item">
          <div className="feedback-item-img">
            <img src={img2} />
            <strong>Dianne Russell</strong>
          </div>
          <div className="feedback-stars">
            <LiaStarSolid />
            <LiaStarSolid />
            <LiaStarSolid />
            <LiaStarSolid />
            <LiaStarSolid />
          </div>
          <p>
            We enjoyed the Eggs Benedict served on homemade focaccia bread and
            hot coffee. Perfect service.
          </p>
        </div>
        <hr />
        <div className="feedback-item">
          <div className="feedback-item-img">
            <img src={img3} />
            <strong>Devon Lane</strong>
          </div>
          <div className="feedback-stars">
            <LiaStarSolid />
            <LiaStarSolid />
            <LiaStarSolid />
            <LiaStarSolid />
            <span>
              <LiaStarSolid />
            </span>
          </div>
          <p>
            Normally wings are wings, but theirs are lean meaty and tender, and
            the sauces were excellent.
          </p>
        </div>
        <div className="feedback-item">
          <div className="feedback-item-img">
            <img src={img1} />
            <strong>Jenny Wilson</strong>
          </div>
          <div className="feedback-stars">
            <LiaStarSolid />
            <LiaStarSolid />
            <LiaStarSolid />
            <LiaStarSolid />
            <span>
              <LiaStarSolid />
            </span>
          </div>
          <p>
            The food was excellent and so was the service. I had the mushroom
            risotto with scallops which was awesome. I had a burger and greens
            (gluten-free) which was also very good. They were very conscientious
            about gluten allergies.
          </p>
        </div>
        <hr />
        <div className="feedback-item">
          <div className="feedback-item-img">
            <img src={img2} />
            <strong>Dianne Russell</strong>
          </div>
          <div className="feedback-stars">
            <LiaStarSolid />
            <LiaStarSolid />
            <LiaStarSolid />
            <LiaStarSolid />
            <LiaStarSolid />
          </div>
          <p>
            We enjoyed the Eggs Benedict served on homemade focaccia bread and
            hot coffee. Perfect service.
          </p>
        </div>
        <hr />
        <div className="feedback-item">
          <div className="feedback-item-img">
            <img src={img3} />
            <strong>Devon Lane</strong>
          </div>
          <div className="feedback-stars">
            <LiaStarSolid />
            <LiaStarSolid />
            <LiaStarSolid />
            <LiaStarSolid />
            <span>
              <LiaStarSolid />
            </span>
          </div>
          <p>
            Normally wings are wings, but theirs are lean meaty and tender, and
            the sauces were excellent.
          </p>
        </div>
        <div className="feedback-item">
          <div className="feedback-item-img">
            <img src={img1} />
            <strong>Jenny Wilson</strong>
          </div>
          <div className="feedback-stars">
            <LiaStarSolid />
            <LiaStarSolid />
            <LiaStarSolid />
            <LiaStarSolid />
            <span>
              <LiaStarSolid />
            </span>
          </div>
          <p>
            The food was excellent and so was the service. I had the mushroom
            risotto with scallops which was awesome. I had a burger and greens
            (gluten-free) which was also very good. They were very conscientious
            about gluten allergies.
          </p>
        </div>
        <hr />
        <div className="feedback-item">
          <div className="feedback-item-img">
            <img src={img2} />
            <strong>Dianne Russell</strong>
          </div>
          <div className="feedback-stars">
            <LiaStarSolid />
            <LiaStarSolid />
            <LiaStarSolid />
            <LiaStarSolid />
            <LiaStarSolid />
          </div>
          <p>
            We enjoyed the Eggs Benedict served on homemade focaccia bread and
            hot coffee. Perfect service.
          </p>
        </div>
        <hr />
        <div className="feedback-item">
          <div className="feedback-item-img">
            <img src={img3} />
            <strong>Devon Lane</strong>
          </div>
          <div className="feedback-stars">
            <LiaStarSolid />
            <LiaStarSolid />
            <LiaStarSolid />
            <LiaStarSolid />
            <span>
              <LiaStarSolid />
            </span>
          </div>
          <p>
            Normally wings are wings, but theirs are lean meaty and tender, and
            the sauces were excellent.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RightSection;

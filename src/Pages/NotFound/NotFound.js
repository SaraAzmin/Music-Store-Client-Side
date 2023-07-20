import React from "react";
import { Link } from "react-router-dom";
import errorImg from "../../Assets/Images/404 page.jpg";

const NotFound = () => {
  return (
    <div>
      <div className="flex justify-center">
        <div className=" mx-auto">
          <img src={errorImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default NotFound;

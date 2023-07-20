import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGuitar,
  faCheckDouble,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";

const BusinessSummery = () => {
  return (
    <div className="px-20 py-8 lg:py-16">
      <h3 className="text-2xl lg:text-4xl pb-5 md:pb-10 text-center font-semibold text-rose-700 uppercase">
        Our Business is Growing
      </h3>
      <div className="stats shadow w-full">
        <div className="stat bg-gray-100 px-10">
          <div className="stat-figure">
            <i className="fa-2xl text-red-700">
              <FontAwesomeIcon icon={faGuitar} />
            </i>
          </div>
          <div className="stat-value text-rose-700 pb-2">105+</div>
          <div className="text-lg font-semibold">Number of Products</div>
        </div>
        <div className="stat px-10">
          <div className="stat-figure">
            <i className="fa-2xl text-red-700">
              <FontAwesomeIcon icon={faCheckDouble} />
            </i>
          </div>
          <div className="stat-value text-rose-700 pb-2">543+</div>
          <div className="text-lg font-semibold">
            Orders Successfully Completed
          </div>
        </div>

        <div className="stat bg-gray-100 px-10">
          <div className="stat-figure">
            <i className="fa-2xl text-red-700">
              <FontAwesomeIcon icon={faMessage} />
            </i>
          </div>
          <div className="stat-value text-rose-700 pb-2">222+</div>
          <div className="text-lg font-semibold">Satisfactory Feedbacks</div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummery;

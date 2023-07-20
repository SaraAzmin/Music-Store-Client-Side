import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Instrument from "./Instrument";

const Instruments = () => {
  const [instruments, setInstruments] = useState([]);

  const threeInstruments = instruments.slice(0, 3);
  const sixInstruments = instruments.slice(0, 6);

  useEffect(() => {
    fetch("https://music-store-server-side.vercel.app/instruments")
      .then((res) => res.json())
      .then((data) => setInstruments(data));
  }, []);

  return (
    <div className="px-10 lg:px-20 bg-gray-200 py-8 lg:py-14 flex flex-col">
      <h3 className="text-2xl lg:text-4xl pb-5 lg:pb-10 text-center font-semibold text-rose-700 uppercase">
        Our Instruments
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10">
        {instruments.length > 3 && instruments.length < 6
          ? threeInstruments.map((instrument) => (
              <Instrument
                key={instrument._id}
                instrument={instrument}
              ></Instrument>
            ))
          : sixInstruments.map((instrument) => (
              <Instrument
                key={instrument._id}
                instrument={instrument}
              ></Instrument>
            ))}
      </div>
      <Link
        to="/allInstruments"
        type="button"
        className="mx-auto px-6 py-4 mt-7 bg-rose-700 text-white font-semibold text-lg rounded shadow-md hover:scale-110 transition duration-300 ease-in-out"
      >
        View All Instruments
      </Link>
    </div>
  );
};

export default Instruments;

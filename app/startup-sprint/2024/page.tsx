import React from "react";
import CountdownTimer from "../../components/CountdownTimer";
import StartupSprintLogo from "./startup sprint logo.png";
import Image from "next/image";

function page() {
  return (
    <div>
      <CountdownTimer
        className="bg-transparent border-none text-pink-400"
        eventDate="2024-09-27T17:00:00"
      ></CountdownTimer>
      <Image
        className="w-full lg:w-fit mx-auto"
        src={StartupSprintLogo}
        alt="Startup Sprint Logo"
      />

      <div className="w-fit mx-auto mb-10">
        <button className="btn btn-primary mx-auto text-purple-900">Register</button>
      </div>

      <div className="lg:grid lg:grid-cols-2">
        <div className="border border-cyan-300 rounded-sm p-4 w-[94%] mx-auto">
          <div className="text-2xl text-pink-400 font-bold">
            What is Startup Sprint?
          </div>
          <div className="text-lg text-white mt-10">
            Startup Sprint is a competition spanning multiple days where
            students will work in teams to build a startup from scratch. This
            event is open to all students and will be a great opportunity to
            learn about entrepreneurship and meet other students interested in
            startups. This event will feature a series of workshops, activities,
            and a chance to win it big.
          </div>
        </div>

        <div className="border border-pink-500 rounded-sm p-4 w-[94%] mx-auto">
          <div className="text-2xl text-cyan-300 font-bold lg:text-right">
            Itinerary
          </div>
          <span className="text-2xl text-cyan-300 font-bold">
            September 27th 5:00 PM at CID
          </span>
          <div className="text-lg text-white"></div>
        </div>
      </div>
    </div>
  );
}

export default page;

// eslint-disable-next-line no-unused-vars
import React from "react";
import LCard from "./LCard";
import story from "./Story.png";
import san from "./SanFer.png";
import capital from "./capital.png";

const Locations = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center itmes-center ">
      <h1 className="text-4xl font-semibold text-center pt-4 pb-10">
        Our Store Location
      </h1>
      <div className="flex flex-wrap gap-8 justify-center">
        <LCard
          title="Story"
          imag={story}
          address="1210 Story Rd San Jose, CA 95122"
          hour="Monday - Sunday:8:00 AM - to 9:00 PM"
          phone="(408) 271-2877"
          ph="Phone"
        />
        <LCard
          title="San Fernando"
          imag={san}
          address="221 E San Fernando St San Jose, CA 95112"
          hour="Monday - Sunday:5:00 AM - to 9:00 PM"
          phone="(408) 271-2877"
          ph="Phone"
        />
        <LCard
          title="Capitol"
          imag={capital}
          address="5610 N Interstate Hwy 35, Austin, TX"
          hour="Monday - Sunday:8:00 AM - to 8:00 PM"
          phone="(408) 347-1799"
          ph="Phone"
        />
        <LCard
          title="Texas"
          imag={story}
          address="1210 Story Rd San Jose, CA 95122"
          hour="M - F:8:00 AM - to 8:00 PM  Sat - Sun: 11:00 AM - 3:00 PM"
        />
      </div>
    </div>
  );
};
export default Locations;

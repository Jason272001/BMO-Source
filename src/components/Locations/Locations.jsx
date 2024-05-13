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
          address="1143 Story Rd San Jose, CA 95122"
          hour="Monday - Sunday:5:00 AM - to 9:00 PM"
          phone="(408) 271-2877"
          link="https://www.google.com/maps/dir//37.3327657,-121.8542596/@37.3327371,-121.9366606,12z/data=!3m1!4b1?entry=ttu"
        />
        <LCard
          title="San Fernando"
          imag={san}
          address="221 E San Fernando St San Jose, CA 95112"
          hour="Monday - Sunday:8:00 AM - to 8:00 PM"
          phone="(408) 271-2877"
          link="https://www.google.com/maps/place/221+E+San+Fernando+St,+San+Jose,+CA+95112/@37.3367201,-121.8847118,17z/data=!3m1!4b1!4m6!3m5!1s0x808fccbea792c0df:0x11ea3cafb10a11b0!8m2!3d37.3367201!4d-121.8847118!16s%2Fg%2F11bw4ckbc5?entry=ttu"
        />
        <LCard
          title="Capitol"
          imag={capital}
          address="1621 N Capitol Ave San Jose, CA 95132"
          hour="Monday - Sunday:8:00 AM - to 8:00 PM"
          phone="(669) 301-6995"
          link="https://www.google.com/maps/dir//37.3966195,-121.8737833/@37.3965176,-121.9561797,12z/data=!3m1!4b1?entry=ttu"
        />
        <LCard
          title="Texas"
          imag={story}
          address="5610 N Interstate Hwy 35, Austin, TX"
          hour="M - F:8:00 AM - to 8:00 PM  Sat - Sun: 11:00 AM - 3:00 PM"
          phone="(408) 512-8338"
          link="https://www.google.com/maps/dir//30.3161497,-97.7084916/@30.3161239,-97.7908929,12z/data=!3m1!4b1?entry=ttu"
        />
      </div>
    </div>
  );
};
export default Locations;

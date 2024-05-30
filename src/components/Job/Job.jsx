import React from "react";
import Qr from "./qr.jpg";
const Job = () => {
  return (
    <div className="pb-8">
      <h1 className="text-4xl font-semibold text-center pt-24 ">
        Be Part Of Our Team
      </h1>

      <div className="flex min-h-full flex-1 flex-col justify-center px-6  lg:px-8">
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <main className="space-y-6">
            <a href="https://forms.office.com/pages/responsepage.aspx?id=V-PIfI1GLEem_MVgDnibVYu6Ym0C_EZHpGNd2hmPE_VUREpXTTZHWDYzTDRJVjRBRU5URkNKUDZUSi4u">
              <img src={Qr} alt="" />
            </a>

            <a
              className="flex w-full justify-center border-2  border-brightColor px-3 py-1.5 text-brightColor hover:bg-brightColor font-semibold hover:text-white transsition-all rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              href="
              https://forms.office.com/pages/responsepage.aspx?id=V-PIfI1GLEem_MVgDnibVYu6Ym0C_EZHpGNd2hmPE_VUREpXTTZHWDYzTDRJVjRBRU5URkNKUDZUSi4u"
            >
              {" "}
              Join Our Team
            </a>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Job;

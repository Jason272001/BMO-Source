import React, { useEffect } from "react";
import { fetchUser } from "../../fetchUser";
import { Routes, Route, useNavigate } from "react-router-dom";
import Nav from "../Nav/Nav";

const Inventory = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = fetchUser();
    if (!user) navigate("/");
  }, []);

  return (
    <div>
      <Nav />
      <div className="flex flex-col justify-center items-center h-full ">
        <div className="overflow-x-auto  mt-44">
          <table className="table-auto min-w-full divide-y divide-gray-200 mx-auto border border-gray-300 shadow-xl">
            <thead>
              <tr>
                <th className="px-6 py-3 bg-black text-white text-left text-xs leading-4 font-medium uppercase tracking-wider border border-white">
                  Header 1
                </th>
                <th className="px-6 py-3 bg-black text-white text-left text-xs leading-4 font-medium uppercase tracking-wider border border-white">
                  Header 2
                </th>
                <th className="px-6 py-3 bg-black text-white text-left text-xs leading-4 font-medium uppercase tracking-wider border border-white">
                  Header 3
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-no-wrap border border-gray-200">
                  Data 1
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border border-gray-200">
                  Data 2
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border border-gray-200">
                  Data 3
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-no-wrap border border-gray-200">
                  Data 4
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border border-gray-200">
                  Data 5
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border border-gray-200">
                  Data 6
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Inventory;

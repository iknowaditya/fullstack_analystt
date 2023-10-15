// src/VerticalCard.js
import React, { useState } from "react";

const Cards = ({ user }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="w-full p-8 bg-white rounded-2xl shadow-lg mb-8 flex flex-col items-start">
      <div className="flex items-center justify-between w-full mb-4">
        <div className="text-xl font-bold">
          {user.name} -{" "}
          <span className="text-neutral-600 font-mono font-medium">
            {" "}
            {user.address.city}
          </span>
        </div>
        <button
          onClick={() => setShowDetails((prev) => !prev)}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full"
        >
          {showDetails ? "Hide Details" : "View Details"}
        </button>
      </div>
      {showDetails && (
        <>
          <div className="flex justify-between w-full mb-4">
            <div className="w-1/2 pr-2">
              <div className="text-base mb-4">
                <strong>Username:</strong> {user.username}
              </div>
              <div className="text-base mb-4">
                <strong>Email:</strong> {user.email}
              </div>
              <div className="text-base mb-4">
                <strong>Phone:</strong> {user.phone}
              </div>
              <div className="text-base mb-4">
                <strong>Website:</strong> {user.website}
              </div>
              <div className="text-base mb-4">
                <strong>Address:</strong> {user.address.street},{" "}
                {user.address.suite}, {user.address.city},{" "}
                {user.address.zipcode}
              </div>
            </div>
            <div className="w-1/2 pl-2">
              <div className="text-base mb-4">
                <strong>Company Name:</strong> {user.company.name}
              </div>
              <div className="text-base mb-4">
                <strong>Catchphrase:</strong> {user.company.catchPhrase}
              </div>
              <div className="text-base">
                <strong>BS:</strong> {user.company.bs}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cards;

"use client";
import React from "react";
import Image from "next/image";
import errorImage from "../assets/errorImage.png";

const ErrorPage = () => {
  return (
    <div className="bg-white flex items-center justify-center mx-auto cursor-default">
      <div className="text-center p-6 max-w-3xl mx-auto">
        <Image
          src={errorImage} // Import the image as a module
          alt="Error"
          width={240} // Adjust as needed
          height={240} // Adjust as needed
          className="mx-auto object-contain mb-4"
        />

        <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-3">
          Oops! Something Went Wrong.
        </h2>
        <p className="text-gray-500 mb-8">
          We encountered an error while processing your request. This may be
          because of a technical error that we're working to fix. Please try
          again, or refresh the page.
        </p>
        <div className="flex gap-1 justify-center">
          <div
            onClick={() => {
              window.location.reload();
            }}
            className="bg-red-600 hover:bg-red-500 text-white font-bold py-2 px-3 
                                rounded-lg shadow-md transition duration-300 max-w-44 cursor-pointer"
          >
            Reload Page
          </div>
          <a href="/" className="no-underline">
            <div
              className="bg-slate-800 hover:bg-slate-600 text-white font-bold py-2 px-3 
                                    rounded-lg shadow-md transition duration-300 max-w-44 cursor-pointer"
            >
              Take Me Home
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;

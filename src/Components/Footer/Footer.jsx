import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="flex items-center justify-center bottom-0 w-full h-52 bg-slate-950 text-white border-t-2">
      <div className="flex flex-col items-center gap-6 p-2">
        <h1 className="font-bold text-2xl sm:text-3xl text-center">
          Get more news based on your interests
        </h1>
        <Link
          className="bg-orange-600 text-white py-2 px-4 rounded hover:bg-orange-500 inline-block font-semibold transition-transform duration-300 ease-in-out transform hover:scale-105"
          to="https://news.google.com/foryou?hl=en-IN&gl=IN&ceid=IN%3Aen"
          target="_blank" // Opening in a new tab
          rel="noopener noreferrer" //adds security for external links.
        >
          For you
        </Link>
      </div>
    </div>
  );
}

export default Footer;

import React from "react";
import { useNewsInfo } from "../ApiHandle/useNewsInfo";
import { useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom";

function Local() {
  const { search } = useOutletContext();

  const displayData = useNewsInfo(search); // Fetch news using the search term

  function getRandomArticles(articles, num) {
    // Shuffle the articles array
    const shuffled = [...articles].sort(() => 0.5 - Math.random());
    // Return the first 'num' articles (10 in this case)
    return shuffled.slice(0, num);
  }
  return (
    <div className="h-auto min-h-screen bg-slate-950 p-6 sm:px-12 sm:pb-12 sm:pt-8 md:p-24 md:px-24 md:pb-24 md:pt-10">
      <div className="text-black pb-4">
        <h1 className="text-3xl font-semibold pb-2 text-white">
          {search} News
        </h1>
        <h1 className="font-semibold text-white">
          {new Date().toDateString()}
        </h1>
      </div>

      {/* Displaying fetched news data */}
      <div className="h-auto bg-black text-white rounded-2xl shadow-2xl p-4 sm:p-8 md:p-10">
        <h1 className="w-44 text-orange-600 hover:text-orange-700 cursor-pointer font-bold text-2xl px-3 pb-2 flex items-center">
          Top stories
          <span className="mt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </span>
        </h1>
        {displayData && displayData.articles ? (
          <ul className="space-y-6">
            {getRandomArticles(displayData.articles, 10).map((article, id) => (
              <li
                key={id}
                className="rounded-lg shadow-md p-4 border-gray-500 border-b-2"
              >
                <div className="w-full h-auto flex flex-col md:flex-row items-stretch gap-4">
                  {/* Image Section */}
                  <div className="md:w-2/4 w-full">
                    <img
                      src={article.urlToImage}
                      alt={article.title}
                      className="w-full h-auto object-cover rounded-lg mb-2 cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105"
                      onClick={()=> window.open(article.url)}
                    />
                    <h2 className="text-xl sm:text-2xl font-serif mb-2 hover:underline cursor-pointer"
                    onClick={()=> window.open(article.url)}
                    >
                      {article.title}
                    </h2>
                  </div>
                  {/* Description Section */}
                  <div className="md:w-2/4 w-full">
                    <p className="mb-4 font-bold cursor-pointer">
                      {article.author || "Unknown"}
                    </p>
                    <p className="mb-4 font-mono hover:underline cursor-pointer">
                      {article.content}
                    </p>
                    <p className="mb-4">
                      {new Date(article.publishedAt).toLocaleString()}
                    </p>
                    <p className="mb-4 font-serif cursor-pointer">
                      {article.source.name}
                    </p>
                    <p className="mb-4 hover:underline cursor-pointer">
                      {article.description}
                    </p>
                    <Link
                      className="bg-orange-600 text-white py-2 px-4 rounded hover:bg-orange-500 inline-block font-semibold transition-transform duration-300 ease-in-out transform hover:scale-105"
                      to={article.url}
                      target="_blank" // Opening in a new tab
                      rel="noopener noreferrer" // adds security for external links.
                    >
                      Full coverage
                    </Link>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>Loading news...</p>
        )}
      </div>
    </div>
  );
}

export default Local;

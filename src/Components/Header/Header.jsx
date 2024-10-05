import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import NewsLogo from '../../assets/NewsLogo4.jpg'

function Header({ onSearch }) {
  // State to track if the mobile menu is open or not
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu open/close
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // API SEARCH HANDLING

  const [search, setSearch] = useState("");

  const handleInputChange = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };

  // Trigger search when the button is clicked
  const handleSearchClick = () => {
    onSearch(search); // Pass the search term up to Layout
  };

  //handle enter key
  const handleEnterKey = (e) => {
    if (e.key === "Enter") {
      handleSearchClick();
    }
  };

  //handle lower navbar list items
  const selectedSearch = (searchTerm) => {
    setSearch(searchTerm);
    onSearch(searchTerm); // Optional: trigger the search if needed
  };


  // src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"

  return (
    <header className="shadow sticky z-50 top-0">
      {/* UPPER NAVBAR */}
      <nav className="bg-black text-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link
            to="/"
            className="flex items-center justify-center w-full sm:w-auto sm:justify-start"
          >
            <img
              src={NewsLogo} alt="Logo" className="mr-3 h-12 md:h-14 w-32 rounded"
            />
          </Link>

          <div className="flex items-center bg-gray-100 text-black rounded-lg  w-5/6 sm:w-1/2 mt-4 sm:mt-0 justify-center">
            <input
              id="input-box"
              type="text"
              placeholder="Search..."
              value={search}
              onChange={handleInputChange}
              onKeyDown={handleEnterKey}
              className="px-4 py-1 md:py-2 w-full border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent"
            />
            <button
              id="search-icon"
              className="bg-orange-600 text-white px-4 py-2 md:py-3 rounded-r-md hover:bg-orange-700 transition-all flex items-center justify-center"
              onClick={handleSearchClick}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white focus:outline-none mt-4 sm:mt-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12" // Cross icon when menu is open
                    : "M4 6h16M4 12h16M4 18h16" // Hamburger icon when menu is closed
                }
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* LOWER NAVBAR */}

      <nav className="sticky top-0 w-full bg-gray-900 shadow-md">
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } truncate justify-between items-center px-2 w-full md:flex md:justify-evenly md:w-full md:order-1`}
          id="mobile-menu-2"
        >
          <ul className="flex flex-col mt-4 font-medium items-center md:flex-row md:flex-wrap md:space-x-2 lg:space-x-4 xl:space-x-8 md:mt-0">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-orange-700" : "text-gray-700"
                  } hover:bg-gray-50 lg:hover:bg-transparent  hover:text-orange-700`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/india"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-orange-700" : "text-gray-700"
                  } hover:text-orange-700`
                }
                onClick={() => selectedSearch("India")}
              >
                India
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/world"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-orange-700" : "text-gray-700"
                  } hover:text-orange-700`
                }
                onClick={() => selectedSearch("World")}
              >
                World
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/local"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-orange-700" : "text-gray-700"
                  } hover:text-orange-700`
                }
                onClick={() => selectedSearch("Local")}
              >
                Local
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/business"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-orange-700" : "text-gray-700"
                  } hover:text-orange-700`
                }
                onClick={() => selectedSearch("Business")}
              >
                Business
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/technology"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-orange-700" : "text-gray-700"
                  } hover:text-orange-700`
                }
                onClick={() => selectedSearch("Technology")}
              >
                Technology
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/entertainment"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-orange-700" : "text-gray-700"
                  } hover:text-orange-700`
                }
                onClick={() => selectedSearch("Entertainment")}
              >
                Entertainment
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/sports"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-orange-700" : "text-gray-700"
                  } hover:text-orange-700`
                }
                onClick={() => selectedSearch("Sports")}
              >
                Sports
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/science"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-orange-700" : "text-gray-700"
                  } hover:text-orange-700`
                }
                onClick={() => selectedSearch("Science")}
              >
                Science
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/health"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-orange-700" : "text-gray-700"
                  } hover:text-orange-700`
                }
                onClick={() => selectedSearch("Health")}
              >
                Health
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;

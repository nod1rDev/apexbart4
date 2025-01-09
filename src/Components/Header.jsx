import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { services } from "../utils";

function Header() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  function getBaseUrl() {
    const currentUrl = window.location.origin;
    return currentUrl;
  }

  const BaseUrl = getBaseUrl();
  console.log(BaseUrl);

  const toggleMenu = (menuIndex) => {
    setActiveMenu(activeMenu === menuIndex ? null : menuIndex);
  };

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    {
      id: 1,
      label: "Services",
      subItems: services.map((e) => {
        return { name: e.title, link: "/services/" + e.id };
      }),
    },
    {
      id: 2,
      label: "Results",
      subItems: [
        { name: "Case Study 1", link: "/case-study-1" },
        { name: "Case Study 2", link: "/case-study-2" },
      ],
    },
    {
      id: 3,
      label: "About Us",
      subItems: [
        { name: "Company History", link: "/history" },
        { name: "Team", link: "/team" },
        { name: "Careers", link: "/careers" },
      ],
    },
    {
      id: 4,
      label: "Resources",
      subItems: [
        { name: "Blog", link: "/blog" },
        { name: "Whitepapers", link: "/whitepapers" },
        { name: "Webinars", link: "/webinars" },
      ],
    },
  ];

  return (
    <header
      className={`cont flex flex-wrap -z-10 h-auto md:h-[80px] bg-inherit w-full max-w-[90%] mx-auto justify-between items-center transition-all duration-300 ${
        isScrolled ? " " : ""
      }`}
    >
      <Link to={"/"} className="flex items-center py-4 md:py-0">
        <img src="/logoNoBg.png" className="w-[80px]" alt="Logo" />
        <span className="font-bold ml-[-10px] text-[20px]">
          ApexBart Solution
        </span>
      </Link>

      {/* Hamburger menu for mobile */}
      <button
        className="md:hidden p-2"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      <div
        className={`w-full md:w-auto md:flex gap-6 items-center ${
          isMobileMenuOpen ? "block" : "hidden"
        }`}
      >
        <nav className="flex flex-col md:flex-row gap-4 md:gap-10 mb-4 md:mb-0">
          {navItems.map((item, index) => (
            <div
              key={item.id}
              className="relative flex group flex-col items-start md:items-center"
              onMouseEnter={() => setActiveMenu(index)}
            >
              <button
                onClick={() => toggleMenu(index)}
                className="flex text-start leading-0 items-center"
              >
                <div className="uppercase font-bold flex flex-col">
                  <span className="-mb-2 opacity-[60%]">0{item.id}</span>
                  {item.label}
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="rgba(0,0,0,1)"
                >
                  <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                </svg>
              </button>
              {activeMenu === index && (
                <div
                  onMouseLeave={() => setActiveMenu(null)}
                  className="md:absolute z-50 cursor-pointer md:top-[60px] left-0 bg-white shadow-lg rounded-md p-4 w-full md:w-[220px] text-start text-sm"
                >
                  <ul className="space-y-2">
                    {item.subItems.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <Link
                          to={subItem.link}
                          className="hover:text-red-500 border-b border-b-black pb-2 border-opacity-[30%] block"
                        >
                          {subItem.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </nav>
        <Link to={"/contact"} className="block w-full md:w-auto">
          <button className="w-full md:w-auto py-[16px] flex items-center justify-center md:justify-start max-h-[50px] rounded-[90px] bg-red-600 text-[18px] text-white font-[500] transition-all duration-1000 hover:bg-red-500 px-[24px]">
            <span>Book A Call</span>{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="rgba(246,246,246,1)"
            >
              <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path>
            </svg>
          </button>
        </Link>
      </div>
    </header>
  );
}

export default Header;

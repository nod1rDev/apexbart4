import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { services } from "../utils";

function Headerr() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = (menuIndex) => {
    setActiveMenu(activeMenu === menuIndex ? null : menuIndex);
  };

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
    <div
      className={`bg-[#f9f4e8] z-50 w-full shadow-lg fixed top-0 transition-transform duration-500 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <header className="max-w-[90%] mx-auto flex flex-wrap h-auto  md:h-[80px] bg-inherit justify-between items-center py-4 md:py-0">
        <Link to={"/"} className="flex items-center">
          <img src="/logoNoBg.png" className="w-[80px]" alt="Logo" />
          <span className="font-bold ml-[-10px] text-[20px]">
            ApexBart Solution
          </span>
        </Link>

        {/* Hamburger menu for mobile */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
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

        {/* Navigation */}
        <div
          className={`w-full md:w-auto md:flex items-center ${
            isMobileMenuOpen ? "block" : "hidden"
          }`}
        >
          <nav className="flex flex-col md:flex-row md:gap-10 mb-4 md:mb-0">
            {navItems.map((item, index) => (
              <div
                key={item.id}
                className="relative flex group flex-col items-start md:items-center"
                onMouseEnter={() => setActiveMenu(index)}
              >
                <button
                  onClick={() => toggleMenu(index)}
                  className="flex text-start leading-0 items-center py-2 md:py-0"
                  aria-expanded={activeMenu === index}
                  aria-haspopup="true"
                >
                  <div className="uppercase flex flex-col font-bold">
                    <span className="-mb-2 opacity-60">0{item.id}</span>
                    {item.label}
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="ml-1"
                  >
                    <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                  </svg>
                </button>

                {activeMenu === index && (
                  <div
                    onMouseLeave={() => setActiveMenu(null)}
                    className="md:absolute top-[60px] left-0 bg-white shadow-lg rounded-md p-4 w-full md:w-[220px] text-start text-sm"
                  >
                    <ul className="space-y-2">
                      {item.subItems.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <Link
                            to={subItem.link}
                            className="hover:text-red-500 border-b border-b-black pb-2 border-opacity-30 block"
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
          <Link to={"/contact"} className="block w-full md:ml-5 md:w-auto">
            <button className="w-full md:w-auto py-[16px] flex items-center justify-center md:justify-start max-h-[50px] rounded-[90px] bg-red-600 text-[18px] text-white font-[500] transition-all duration-1000 hover:bg-red-500 px-[24px]">
              <span>Book A Call</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="currentColor"
                className="ml-2"
              >
                <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path>
              </svg>
            </button>
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Headerr;

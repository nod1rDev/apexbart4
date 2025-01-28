import React, {
  lazy,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

import throttle from 'lodash.throttle';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

import {
  companyInfo,
  services,
} from '../utils';

const Header = memo(() => {
  const [state, setState] = useState({
    activeMenu: null,
    isScrolled: false,
    isMobileMenuOpen: false,
    isVisible: true
  });

  function getBaseUrl() {
    const currentUrl = window.location.origin;
    return currentUrl;
  }

  const BaseUrl = getBaseUrl();

  const toggleMenu = (menuIndex) => {
    setState((prevState) => ({
      ...prevState,
      activeMenu: prevState.activeMenu === menuIndex ? null : menuIndex
    }));
  };

  const handleScroll = useCallback(
    throttle(() => {
      setState(prev => ({
        ...prev,
        isScrolled: window.scrollY > 0
      }));
    }, 100),
    []
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const navItems = useMemo(() => [
    {
      id: 1,
      label: "Services",
      subItems: services.map((e) => ({ name: e.title, link: `/services/${e.id}` })),
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
  ], [services]);

  const DropdownMenu = lazy(() => import('./DropdownMenu'));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setState((prevState) => ({ ...prevState, isVisible: entry.isIntersecting })),
      { threshold: [0, 1] }
    );
    // ...observer logic
  }, []);

  const seoData = useMemo(() => ({
    title: `${companyInfo.name} - Multilingual Voice Recording Solutions`,
    description: `Professional voice recording services in ${companyInfo.languages.join(", ")}. Based in ${companyInfo.location}.`,
    canonical: window.location.href
  }), []);

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <link rel="canonical" href={seoData.canonical} />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content={seoData.canonical} />
      </Helmet>

      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm">
        <Link to={"/"} className="flex items-center py-4 md:py-0">
          <img src="/logoNoBg.png" className="w-[80px] md:w-[96]" alt="Logo" />
          <span className="font-bold ml-[-10px] text-[20px] md:text-[1.4vw]">
            ApexBart Solution
          </span>
        </Link>

        <button
          className="md:hidden p-2"
          onClick={() => setState((prevState) => ({ ...prevState, isMobileMenuOpen: !prevState.isMobileMenuOpen }))}
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
            state.isMobileMenuOpen ? "block z-50 p-4 bg-[#f9f4e8] md:bg-inherit" : "hidden"
          }`}
        >
          <nav className="flex flex-col md:flex-row gap-4 md:gap-10 mb-4 md:mb-0">
            {navItems.map((item, index) => (
              <DropdownMenu
                key={item.id}
                item={item}
                isActive={state.activeMenu === index}
                onMouseEnter={() => setState((prevState) => ({ ...prevState, activeMenu: index }))}
              />
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
    </>
  );
});

export default Header;

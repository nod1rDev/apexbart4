
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet"; // First install: npm install react-helmet
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound";

import Contact from "./pages/Consoulting/Contact";
import { ProjectList } from "./pages/Projects/Projects";
import { ProjectDetail } from "./pages/Projects/Components/ProjectDetails";
import AICompanyHistory from "./pages/AboutHistory/AICompanyHistory";
import AICompanyAbout from "./pages/AboutHistory/AICompanyAbout";
import BlogPage from "./pages/blog/Blog";
import React from "react";
import ServicePage from "./pages/Service/Server";

function App() {
  class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
      return { hasError: true };
    }

    render() {
      if (this.state.hasError) {
        return <h1>Something went wrong. Please try again later</h1>;
      }

      return this.props.children;
    }
  }

  return (
    <>
      <ErrorBoundary>
        <Router>
          {/* Default SEO */}
          <Helmet>
            <html lang="en" />
            <meta charSet="utf-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <meta name="theme-color" content="#f9f4e8" />

            {/* Favicon and App Icons */}
            <link rel="icon" type="image/png" sizes="32x32" href="/logo.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/logo.png" />
            <link
              rel="apple-touch-icon"
              sizes="180x180"
              href="/android-chrome.jpg"
            />
            <link rel="manifest" href="/site.webmanifest" />

            {/* Default Social Media Images */}
            <meta property="og:image" content="/android-chrome.jpg" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta name="twitter:image" content="/android-chrome.jpg" />
          </Helmet>

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Helmet>
                    <title>ApexBart Solution | AI & Automation Services</title>
                    <meta
                      name="description"
                      content="Transform your business with our AI solutions, automation services, and professional voice-over production."
                    />
                    {/* Page-specific Social Media Images */}
                    <meta property="og:image" content="/android-chrome.jpg" />
                    <meta name="twitter:image" content="/android-chrome.jpg" />
                  </Helmet>
                  <Home />
                </>
              }
            />

            <Route
              path="/services/:id"
              element={
                <>
                  <Helmet>
                    <title>Our Services | ApexBart Solution</title>
                    <meta
                      name="description"
                      content="Discover our comprehensive range of professional services designed to elevate your business."
                    />
                    {/* Service Page Social Media Images */}
                    <meta property="og:image" content="/services-og.png" />
                    <meta
                      name="twitter:image"
                      content="/services-twitter.png"
                    />
                  </Helmet>
                  <ServicePage />
                </>
              }
            />
            {/* Add similar Helmet components for other routes */}
            <Route path="*" element={<NotFound />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<ProjectList />} />
            <Route path="/history" element={<AICompanyHistory />} />
            <Route path="/team" element={<AICompanyAbout />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
          </Routes>
        </Router>
      </ErrorBoundary>
    </>


  );
}

export default App;

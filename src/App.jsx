import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound";
import { ServicePage } from "./pages/Service/Server";
import Contact from "./pages/Consoulting/Contact";
import { ProjectList } from "./pages/Projects/Projects";
import { ProjectDetail } from "./pages/Projects/Components/ProjectDetails";
import AICompanyHistory from "./pages/AboutHistory/AICompanyHistory";
import AICompanyAbout from "./pages/AboutHistory/AICompanyAbout";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/:id" element={<ServicePage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<ProjectList />} />
          <Route path="/history" element={<AICompanyHistory />} />
          <Route path="/team" element={<AICompanyAbout />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

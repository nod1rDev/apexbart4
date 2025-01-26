import {
  lazy,
  Suspense,
} from 'react';

import { HelmetProvider } from 'react-helmet-async';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

// Fix import paths to use uppercase 'Components'
import ErrorBoundary from './Components/ErrorBoundary';
import LoadingSpinner from './Components/LoadingSpinner';
import { PageLayout } from './Components/shared/PageLayout';
import { AppProvider } from './context/AppContext';
import { usePageTracking } from './hooks/usePageTracking';

// Lazy load components
const Home = lazy(() => import('./pages/Home/Home'));
const NotFound = lazy(() => import('./pages/NotFound'));
const ServicePage = lazy(() => import('./pages/Service/Server'));
const Contact = lazy(() => import('./pages/Consoulting/Contact'));
const ProjectList = lazy(() => import('./pages/Projects/Projects'));
const ProjectDetail = lazy(() => import('./pages/Projects/Components/ProjectDetails'));
const AICompanyHistory = lazy(() => import('./pages/AboutHistory/AICompanyHistory'));
const AICompanyAbout = lazy(() => import('./pages/AboutHistory/AICompanyAbout'));
const BlogPage = lazy(() => import('./pages/blog/Blog'));

function App() {
  usePageTracking(); // Add page tracking

  return (
    <HelmetProvider>
      <AppProvider>
        <ErrorBoundary>
          <Suspense fallback={<LoadingSpinner />}>
            <Router>
              <PageLayout>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/services/:id" element={<ServicePage />} />
                  <Route path="*" element={<NotFound />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/projects" element={<ProjectList />} />
                  <Route path="/history" element={<AICompanyHistory />} />
                  <Route path="/team" element={<AICompanyAbout />} />
                  <Route path="/blog" element={<BlogPage />} />
                  <Route path="/project/:id" element={<ProjectDetail />} />
                </Routes>
              </PageLayout>
            </Router>
          </Suspense>
        </ErrorBoundary>
      </AppProvider>
    </HelmetProvider>
  );
}

export default App;

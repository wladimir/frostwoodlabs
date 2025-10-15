import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";

// ScrollToTop component to scroll to top on route change
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Component to update meta tags based on route
const MetaTags: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const updateMetaTags = () => {
      let title = "Frostwood Labs, LLC - Custom Software Development";
      let description = "Frostwood Labs - Custom software development and digital solutions for businesses. Transform your digital presence with our innovative solutions.";
      let canonical = "https://frostwoodlabs.com";

      if (pathname === "/terms") {
        title = "Terms of Service - Frostwood Labs, LLC";
        description = "Read the Terms of Service for Frostwood Labs, LLC mobile applications and software products.";
        canonical = "https://frostwoodlabs.com/terms";
      } else if (pathname === "/privacy") {
        title = "Privacy Policy - Frostwood Labs, LLC";
        description = "Learn how Frostwood Labs, LLC protects your privacy and handles your data in our mobile applications and services.";
        canonical = "https://frostwoodlabs.com/privacy";
      }

      // Update title
      document.title = title;

      // Update or create meta description
      let metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute("content", description);
      } else {
        metaDescription = document.createElement("meta");
        metaDescription.setAttribute("name", "description");
        metaDescription.setAttribute("content", description);
        document.head.appendChild(metaDescription);
      }

      // Update or create canonical link
      let linkCanonical = document.querySelector('link[rel="canonical"]');
      if (linkCanonical) {
        linkCanonical.setAttribute("href", canonical);
      } else {
        linkCanonical = document.createElement("link");
        linkCanonical.setAttribute("rel", "canonical");
        linkCanonical.setAttribute("href", canonical);
        document.head.appendChild(linkCanonical);
      }

      // Add Open Graph tags
      const ogTags = [
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: canonical },
        { property: "og:type", content: "website" },
      ];

      ogTags.forEach(({ property, content }) => {
        let ogTag = document.querySelector(`meta[property="${property}"]`);
        if (ogTag) {
          ogTag.setAttribute("content", content);
        } else {
          ogTag = document.createElement("meta");
          ogTag.setAttribute("property", property);
          ogTag.setAttribute("content", content);
          document.head.appendChild(ogTag);
        }
      });
    };

    updateMetaTags();
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <MetaTags />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;

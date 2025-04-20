
// App.tsx with overlapping headers
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { TopHeader } from "./components/TopHeader";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { GalleryPage } from "./pages/GalleryPage";
import { InformationCenterPage } from "./pages/InformationCenterPage";
import { BabylonBudsPage } from "./pages/BabylonBudsPage";
import { ContactPage } from "./pages/ContactPage";
import { NewsPage } from "./pages/NewsPage";
import { ProgramsPage } from "./pages/ProgramsPage";
import { CareerPage } from "./pages/CareerPage";

export const App = (): JSX.Element => {
  const [headersTotalHeight, setHeadersTotalHeight] = useState(0);

  useEffect(() => {
    const updateTotalHeight = () => {
      const topHeader = document.querySelector('[data-topheader="true"]');
      const mainHeader = document.querySelector('[data-mainheader="true"]');
      let totalHeight = 0;
      
      if (topHeader) totalHeight += topHeader.clientHeight;
      if (mainHeader) totalHeight += mainHeader.clientHeight;
      
      setHeadersTotalHeight(totalHeight);
    };
    
    updateTotalHeight();
    window.addEventListener('resize', updateTotalHeight);
    
    return () => {
      window.removeEventListener('resize', updateTotalHeight);
    };
  }, []);

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <TopHeader data-topheader="true" />
        <Header data-mainheader="true" />
        
        {/* Dynamic spacer to prevent content from being hidden */}
        <div style={{ height: `${headersTotalHeight}px` }} /> 
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/information-center" element={<InformationCenterPage />} />
            <Route path="/babylon-buds" element={<BabylonBudsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/programs" element={<ProgramsPage />} />
            <Route path="/career" element={<CareerPage />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
};

export default App;
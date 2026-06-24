import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import SuccessStories from "./components/SuccessStories";
import AboutPage from "./components/AboutPage";
import HeroCarousel from "./components/HeroCarousel";
import CoursesSection from "./components/CoursesSection";
import ToppersCoverflow from "./components/ToppersCoverflow";
import StudyMaterials from "./components/StudyMaterials";
import QueryFormSection from "./components/QueryFormSection";
import Testimonials from "./components/Testimonials";
import ContactSection from "./components/ContactSection";
import Modal from "./components/Modal";
import ScrollTop from "./components/ScrollTop";
import AnnouncementPage from "./components/AnnouncementPage";
import Footer from "./components/Footer";
import VideosPage from "./components/Videospage";
import CoachingForIASExam from "./components/CoachingForIASExam";
import CoachingForPCSExam from "./components/CoachingForPCSExam";
import CoachingForNDAExam from "./components/CoachingForNDAExam";
import CoachingForCDSExam from "./components/CoachingForCDSExam";
import CoachingForSSCExam from "./components/CoachingForSSCExam";
import InterviewDiscussions from "./components/InterviewDiscussions";
import GeneralStudies from "./components/GeneralStudies";
import ReferenceBooks from "./components/ReferenceBooks";
import CurrentAffairs from "./components/CurrentAffairs";
import MonthlyMagazines from "./components/MonthlyMagazines";
import MathTopicVideos from "./components/MathTopicVideos";
import OurGallery from "./components/OurGallery";

function HomePage({ onOpenModal }) {
  return (
    <>
      <HeroCarousel />
      <CoursesSection onOpenModal={onOpenModal} />
      <ToppersCoverflow />
      <StudyMaterials />
      <QueryFormSection />
      <Testimonials />
      <ContactSection />
    </>
  );
}

export default function App() {
  const [modalId, setModalId] = useState(null);
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToContact = () => {
    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById("contact-us")?.scrollIntoView({ behavior: "smooth" });
      }, 150);
    } else {
      document.getElementById("contact-us")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div style={{ fontFamily: "'Hind',sans-serif", background: "#f0f4fa", minHeight: "100vh" }}>
      <Navbar onContact={scrollToContact} />

      <Routes>
        <Route path="/" element={<><HomePage onOpenModal={setModalId} /><Modal id={modalId} onClose={() => setModalId(null)} /></>} />
        <Route path="/about" element={<AboutPage onBack={goHome} />} />
        <Route path="/success-stories" element={<SuccessStories onBack={goHome} />} />
        <Route path="/announcement" element={<AnnouncementPage onBack={goHome} />} />
        <Route path="/videos" element={<VideosPage onBack={goHome} />} />
        <Route path="/coaching/ias" element={<CoachingForIASExam />} />
        <Route path="/coaching/pcs" element={<CoachingForPCSExam />} />
        <Route path="/coaching/nda" element={<CoachingForNDAExam />} />
        <Route path="/coaching/cds" element={<CoachingForCDSExam />} />
        <Route path="/coaching/ssc" element={<CoachingForSSCExam />} />
        <Route path="/interview-discussions" element={<InterviewDiscussions />} />
        <Route path="/general-studies" element={<GeneralStudies />} />
        <Route path="/reference-books" element={<ReferenceBooks />} />
        <Route path="/current-affairs" element={<CurrentAffairs />} />
        <Route path="/monthly-magazines" element={<MonthlyMagazines />} />
        <Route path="/math-videos" element={<MathTopicVideos />} />
        <Route path="/gallery" element={<OurGallery />} />
      </Routes>

      <ScrollTop />
      <Footer />
    </div>
  );
}

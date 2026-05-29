import { useState } from "react";
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

export default function App() {
  const [modalId, setModalId] = useState(null);
  const [page, setPage] = useState("home");

  const scrollToContact = () => {
    document.getElementById("contact-us")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleNavigate = (sub) => {
    if (sub === "About Vashishth Academy") {
      setPage("about");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (sub === "Success Stories") {
      setPage("success");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (sub === "Announcement") {
      setPage("announcement");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (sub === "Videos") {
      setPage("videos");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    // Future pages yahan add karo:
    // else if (sub === "UPSC Foundation") setPage("upsc");
    // else if (sub === "Our gallery") setPage("gallery");
  };

  const goHome = () => {
    setPage("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div style={{ fontFamily: "'Hind',sans-serif", background: "#f0f4fa", minHeight: "100vh" }}>
      <Navbar onContact={scrollToContact} onNavigate={handleNavigate} />

      {page === "about" ? (
        <AboutPage onBack={goHome} />
      ) : page === "success" ? (
        <SuccessStories onBack={goHome} />
      ) : page === "announcement" ? (
        <AnnouncementPage onBack={goHome} />
      ) : page === "videos" ? (
        <VideosPage onBack={goHome} />
      ) : (
        <>
          <HeroCarousel />
          <CoursesSection onOpenModal={setModalId} />
          <ToppersCoverflow />
          <StudyMaterials />
          <QueryFormSection />
          <Testimonials />
          <ContactSection />
          <Modal id={modalId} onClose={() => setModalId(null)} />
        </>
      )}

      <ScrollTop />
      <Footer />
    </div>
  );
}

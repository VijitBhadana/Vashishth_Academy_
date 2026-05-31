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

export default function App() {
  const [modalId, setModalId] = useState(null);
  const [page, setPage] = useState("home");

  const scrollToContact = () => {
    document.getElementById("contact-us")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleNavigate = (sub) => {
    if (sub === "home") { goHome(); return; }

    const pageMap = {
      "About Vashishth Academy": "about",
      "Success Stories":         "success",
      "Announcement":            "announcement",
      "Videos":                  "videos",
      "Coaching for IAS Exam":   "ias",
      "Coaching for PCS Exam":   "pcs",
      "Coaching for NDA Exam":   "nda",
      "Coaching for CDS Exam":   "cds",
      "Coaching for SSC Exam":   "ssc",
      "Interview Discussions":   "interview",
      "General Studies":         "generalstudies",
      "Reference Books":         "referencebooks",
      "Current Affairs":         "currentaffairs",
      "Monthly Magazines":       "magazines",
      "Math Topic Videos":       "mathvideos",
      "Our gallery":             "gallery",
    };
    const target = pageMap[sub];
    if (target) {
      setPage(target);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const goHome = () => {
    setPage("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPage = () => {
    switch (page) {
      case "about":          return <AboutPage onBack={goHome} />;
      case "success":        return <SuccessStories onBack={goHome} />;
      case "announcement":   return <AnnouncementPage onBack={goHome} />;
      case "videos":         return <VideosPage onBack={goHome} />;
      case "ias":            return <CoachingForIASExam />;
      case "pcs":            return <CoachingForPCSExam />;
      case "nda":            return <CoachingForNDAExam />;
      case "cds":            return <CoachingForCDSExam />;
      case "ssc":            return <CoachingForSSCExam />;
      case "interview":      return <InterviewDiscussions />;
      case "generalstudies": return <GeneralStudies />;
      case "referencebooks": return <ReferenceBooks />;
      case "currentaffairs": return <CurrentAffairs />;
      case "magazines":      return <MonthlyMagazines />;
      case "mathvideos":     return <MathTopicVideos />;
      case "gallery":        return <OurGallery />;
      default:
        return (
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
        );
    }
  };

  return (
    <div style={{ fontFamily: "'Hind',sans-serif", background: "#f0f4fa", minHeight: "100vh" }}>
      <Navbar onContact={scrollToContact} onNavigate={handleNavigate} />
      {renderPage()}
      <ScrollTop />
      <Footer />

    </div>
  );
}

import Navbar from "@/components/Navbar";
import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Education from "@/sections/Education";
import Footer from "@/sections/Footer";
import Home from "@/sections/Home";
import Project from "@/sections/Projects";
import Skills from "@/sections/Skills";

export default function HomePage() {
  return (
    <div className="dark:text-white font-sans">
      <Home />
      <Navbar />

      {/* About Section */}
      <div className="bg-white dark:bg-custom-grey">
        <About />
      </div>

      {/* Education & Skills Section */}
      <div className="bg-linear-to-b from-custom-gradientwhite to-custom-gradientlightblue dark:from-custom-gradientgrey dark:to-custom-gradientdarkblue">
        <Education />
        <Skills />
      </div>

      {/* Projects, Contact & Footer Section */}
      <div className="bg-linear-to-b from-custom-gradientlightblue to-custom-gradientultralightblue dark:from-custom-gradientdarkblue dark:to-custom-gradientultradarkblue">
        <Project />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

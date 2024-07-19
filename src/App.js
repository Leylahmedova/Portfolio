import React, { useRef, useState, useEffect } from "react";
import Styles from "./App.module.scss";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/about/About";
import Skills from "./pages/Skills/Skills";
import Resume from "./pages/Resume/Resume";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";
import MyProjects from "./pages/myProjects/MyProjects";
import Scroll from "./components/Scroll/Scroll";
function App() {
  const [isLoading, setIsLoading] = useState(true);

  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const resumeRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId) => {
    switch (sectionId) {
      case 'about':
        aboutRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case 'skills':
        skillsRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case 'experience':
        resumeRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case 'projects':
        projectsRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case 'contact':
        contactRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  };

  return (
    <>
     
        <div style={isLoading ? { transform: 'translateY(0)' } : { transform: 'translateY(-120%)',borderBottomLeftRadius: '50%',
    borderBottomRightRadius: '51%' }} className={Styles.loading_screen}>
          <span>L</span>
          <span>O</span>
          <span>A</span>
          <span>D</span>
          <span>I</span>
          <span>N</span>
          <span>G</span>
        </div>
   
        <div className={Styles.main}>
            <Navbar scrollToSection={scrollToSection} />
          <div className={Styles.container}>
          
            <div ref={aboutRef}>
              <About />
            </div>
            <div ref={skillsRef}>
              <Skills />
            </div>
            <div ref={resumeRef}>
              <Resume />
            </div>
            <div ref={projectsRef}>
              <MyProjects />
            </div>
            </div>
            <div className={Styles.second__theme}>
              <div className={Styles.container}>
                <div ref={contactRef}>
                  <Contact />
                </div>
              </div>
            </div>
            <Footer scrollToSection={scrollToSection}/>
       
          <Scroll/>
        </div>
     
  
    </>
  );
}

export default App;

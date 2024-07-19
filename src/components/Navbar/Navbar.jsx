import React, { useEffect, useState } from "react";
import Styles from "./navbar.module.scss";
import { RiMenu3Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
const Navbar = ({ scrollToSection }) => {
  const [isSticky, setIsSticky] = useState(false);
  const [isActive, setIsActive] = useState('');
  const [openMenu,setOpenMenu]=useState(false)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${Styles.navbar} ${isSticky ? Styles.fixed : ""}`}>
      <div className={Styles.logo}>
        <div>
          <img src="/logo.png" alt="Logo" />
        </div>
        <a href="mailto:leyla.ehmedova220w@gmail.com">
          <h5>leyla.ehmedova220w@gmail.com</h5>
        </a>
      </div>
        <span onClick={()=>setOpenMenu(!openMenu)}  className={Styles.open__menu}>{!openMenu?<RiMenu3Fill />:<AiOutlineClose/>} </span>

      <nav>
        <li
          onClick={() => {
            setIsActive('about');
            scrollToSection("about");
          }}
        >
          <span className={isActive==='about' ? Styles.active : ""}>About</span>

        </li>
        <li
          onClick={() => {
            setIsActive('skills');
            scrollToSection("skills");
          }}
        >
          
          <span className={isActive==='skills'? Styles.active : ""}>Skills</span>

        </li>
        <li
          onClick={() => {
            setIsActive('experience');
            scrollToSection("experience");
          }}
        >
          <span className={isActive==='experience' ? Styles.active : ""}>Experience</span>
        </li>
        <li
          onClick={() => {
            setIsActive('projects');
            scrollToSection("projects");
          }}
        >
          
          <span className={isActive==='projects' ? Styles.active : ""}>Projects</span>
        </li>
        <li
          onClick={() => {
            setIsActive('contact');
            scrollToSection("contact");
          }}
        >
          
          <span className={isActive==='contact' ? Styles.active : ""}>Contact</span>

        </li>
      </nav>
    <div className={Styles.menu} style={openMenu ? { transform: 'translateY(0)' } : { transform: 'translateY(-120%)' }}>
      <nav>
        <li
          onClick={() => {
          setOpenMenu(!openMenu)
            setIsActive('about');
            scrollToSection("about");
          }}
        >
          <span className={isActive==='about' ? Styles.active : ""}>About</span>

        </li>
        <li
          onClick={() => {
            setOpenMenu(!openMenu)
            setIsActive('skills');
            scrollToSection("skills");
          }}
        >
          
          <span className={isActive==='skills'? Styles.active : ""}>Skills</span>

        </li>
        <li
          onClick={() => {
            setOpenMenu(!openMenu)
            setIsActive('experience');
            scrollToSection("experience");
          }}
        >
          <span className={isActive==='experience' ? Styles.active : ""}>Experience</span>
        </li>
        <li
          onClick={() => {
            setOpenMenu(!openMenu)
            setIsActive('projects');
            scrollToSection("projects");
          }}
        >
          
          <span className={isActive==='projects' ? Styles.active : ""}>Projects</span>
        </li>
        <li
          onClick={() => {
            setOpenMenu(!openMenu) 
            setIsActive('contact');
            scrollToSection("contact");
          }}
        >
          
          <span className={isActive==='contact' ? Styles.active : ""}>Contact</span>

        </li>
      </nav>
      </div>
     
    </header>
  );
};

export default Navbar;

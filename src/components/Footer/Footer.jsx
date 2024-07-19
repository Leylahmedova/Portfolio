import Styles from "./footer.module.scss";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { ImGithub } from "react-icons/im";
const Footer = ({ scrollToSection }) => {

  return (
    <footer className={Styles.footer}>
      <div className={Styles.pages__navigations}>
        <nav>
        <li onClick={() => scrollToSection('about')}>About</li>
        <li onClick={() => scrollToSection('skills')}>Skills</li>
        <li onClick={() => scrollToSection('experience')}>Experience</li>
        <li onClick={() => scrollToSection('projects')}>Projects</li>
        <li onClick={() => scrollToSection('contact')}>Contact</li>
        </nav>
      </div>
      <div className={Styles.social__links}>
        <div>
          <a href="https://www.facebook.com/leylahmadova1?mibextid=LQQJ4d">
            <FaFacebookF />
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/leyla-ahmadova-a181b1211/">
            <FaLinkedinIn />
          </a>
        </div>
        <div>
          <a href="https://github.com/Leylahmedova">
            <ImGithub />
          </a>
        </div>
      </div>
      <p>© 2024 Leyla Ahmadova. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

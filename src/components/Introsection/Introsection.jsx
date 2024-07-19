import React from "react";
import Styles from "./introsection.module.scss";
import { FiDownload } from "react-icons/fi";
import { FaFacebookF,FaLinkedinIn } from "react-icons/fa";
import { ImGithub } from "react-icons/im";
const Introsection = () => {
  return (
    <div className={Styles.introsection}>
       <div className={Styles.background_text}><h1>HI</h1></div>
        <div className={Styles.left__side}>
          <span>I am Leyla</span>
          <h1>Frontend Developer</h1>
          <p>
            I break down complex user experinece problems to create integritiy
            focussed solutions that connect billions of people
          </p>
          <div className={Styles.links__groups}>
            <div className={Styles.download__cv}>
            <a href="#">Download CV <FiDownload style={{fontSize:'15px'}}/></a>
            </div>
            <div className={Styles.links}>
                <div><a href="https://www.facebook.com/leylahmadova1?mibextid=LQQJ4d"><FaFacebookF /></a></div>
                <div><a href="https://www.linkedin.com/in/leyla-ahmadova-a181b1211/"><FaLinkedinIn/></a></div>
                <div><a href="https://github.com/Leylahmedova"><ImGithub /></a></div>
            </div>
          </div>
        </div>
        <div className={Styles.right__side}>
          
            <div><img src="/MyPicture.jpeg" alt="Leyla Ahmadova" /></div>
        </div>
        <div className={Styles.for__mobile}>  
            <span>I am Leyla</span>
            <h1>Frontend Developer</h1></div>
    </div>
  );
};

export default Introsection;

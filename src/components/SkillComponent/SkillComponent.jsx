import React from 'react'
import Styles from './skillComponent.module.scss'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
const SkillComponent = ({name,image}) => {
  useEffect(() => {
    AOS.init({
    });
  }, []);
  return (
    <div data-aos="fade-up" data-aos-duration="1500" data-aos-once="true" className={Styles.skill}>
        <div className={Styles.skill__logo}><img src={image} alt={name} /></div>
        <div className={Styles.skill__name}>
          <span>{name}</span>
        </div>
    </div>
  )
}

export default SkillComponent
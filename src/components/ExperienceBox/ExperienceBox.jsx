import Styles from './experienceBox.module.scss'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const ExperienceBox = ({image,name,date,work,employement_type}) => {
  useEffect(() => {
    AOS.init({
    });
  }, []);
  return (
    <div data-aos="fade-right" data-aos-duration="1500" data-aos-once="true" className={Styles.experience__box}>
      <div className={Styles.experience__image}>
        <img src={image} alt={name} />
      </div>
      <div className={Styles.about__experience}>
        <h3>{date}</h3>
        <h2>{name}</h2>
        <h4>{work}</h4>
        <span>{employement_type}</span>
      </div>

        
    </div>
  )
}

export default ExperienceBox
import Styles from './educationBox.module.scss'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const EducationBox = ({image,university,date,degree,speciality}) => {
  useEffect(() => {
    AOS.init({
    });
  }, []);
  
  return (
    <div data-aos="fade-left" data-aos-duration="1500"  data-aos-once="true" className={Styles.education__box}>
      <div className={Styles.education__image}>
        <img src={image} alt={university} />
      </div>
      <div className={Styles.about__education}>
        <h3>{date}</h3>
        <h2>{speciality}</h2>
        <h4>{university}</h4>
        <span>{degree}</span>
      </div>    
    </div>
  )
}

export default EducationBox
import Styles from './educationBox.module.scss'
const EducationBox = ({image,university,date,degree,speciality}) => {
  return (
    <div className={Styles.education__box}>
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
import Experience from '../../components/Experience/Experience'
import Education from '../../components/Education/Education'
import Styles from './resume.module.scss'
const Resume = () => {
  return (
    <div className={Styles.resume__page}>
      <div className={Styles.resume__left__side}>
      <Experience/>
      </div>
      <div className={Styles.resume__right__side}>
      <Education/>
      </div>
    </div>
  )
}

export default Resume
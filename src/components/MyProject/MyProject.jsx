
import Styles from './myProject.module.scss'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
const MyProject = ({project}) => {
  useEffect(() => {
    AOS.init({
    });
  }, []);
  return (
    <div data-aos="fade-up" data-aos-duration="1500" data-aos-once="true"  className={Styles.project}>
    <div className={Styles.project__background}>
        <img src={project.image} alt={project.name} />
    </div>
    <div className={Styles.project__detail}>
          <h2>{project.name}</h2>
          <div className={Styles.project__tools}>
            {
                project.tools.map((tool)=>{
                    return <div key={tool} className={Styles.tool}><span>{tool}</span></div>
                })
            }
         
          </div>
          <div className={Styles.btn__groups}>
              <button> <a target='blank' href={project.liveLink}>View Live</a> </button>
              <button><a target='blank' href={project.codeLink}>View Code</a> </button>
          </div>
    </div>
</div>
  )
}

export default MyProject
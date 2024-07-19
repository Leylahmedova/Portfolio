import Styles from './experience.module.scss'
import ExperienceBox from '../ExperienceBox/ExperienceBox'
const Experience = () => {
    const experiences=[
        {
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZYeM02lx-oGcdO8d_Gei4F8N2hPPB0vdEEA&s",
        name:'Frontend Developer',
        date:"2024-Present",
        work:"AA Studio",
        employement_type:'Intern'
    },
    {
        image:"https://www.bedigital.az/media/125/%C3%96zg%C3%BCn-Yap%C4%B1-Sanayi-ve-Ticaret-A.%C5%9E.png",
        name:'Frontend Developer',
        date:"2023",
        work:"Ozgun Yapi",
        employement_type:'Intern'
    },
]
  return (
    <section className={Styles.experience__section}>
        <div className={Styles.experience__title}>
            <img src="/experience.png" alt="" />
             <h1>My Experience</h1>
        </div>
        <div className={Styles.experiences}>
         {experiences.map((experience,index)=>{
            return <ExperienceBox key={index} image={experience.image} name={experience.name} date={experience.date} work={experience.work} employement_type={experience.employement_type}/>
         })}
        </div>
    </section>
  )
}

export default Experience
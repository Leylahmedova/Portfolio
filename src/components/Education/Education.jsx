import Styles from './education.module.scss'
import EducationBox from '../EducationBox/EducationBox'
const Education = () => {
    const educations=[
        {
            image:"https://unec.edu.az/application/uploads/2016/02/UNEC-logo-ENG-.png",
            university:"Azerbaijan State University of Economics (UNEC) ",
            date:"2024-Present",
            degree:"Master",
            speciality:'Data Analitics',
            description:"description"
        },
        {
        image:"https://dia.edu.az/wp-content/uploads/2021/03/cropped-DIA-gerb-fon-png.png",
        university:"Academy of Public Administration(APA)",
        date:"2020-2024",
        degree:"Bachelor",
        speciality:'Computer Science',
        description:"description"
    },
   
    {
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpI4Dw1Cjv_VusKkqPUtAxB6Wt76rFnfZIr96y86EI1pcwtwMWBenfxsah8GqpwrISgg0&usqp=CAU",
        university:"Coders Azerbaijan",
        date:"2023",
        degree:"Not:Final project and average winner",
        speciality:'Full-stack bootcamp',
        description:"description"
    },
    {
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIUx8J4IovJjfsqqZHRNIVCbGH0wM38SJskA&s",
        university:"IT-Brains Academy",
        date:"2022-2023",
        degree:"Not:Golden degree diploma",
        speciality:'Frontend course',
        description:"description"
    },
  
]
  return (
    <section className={Styles.education__section}>
        <div className={Styles.education__title}>
            <img src="/education.png" alt="" />
             <h1>My Education</h1>
        </div>
        <div className={Styles.educations}>
        {
            educations.map((education,index)=>{
                return <EducationBox key={index} image={education.image} university={education.university} date={education.date} degree={education.degree} speciality={education.speciality}/>
            })
        }
        </div>
    </section>
  )
}

export default Education

import Styles from './skills.module.scss'
import SkillComponent from '../../components/SkillComponent/SkillComponent'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
const Skills = () => {
     const mySkills=[
      {
      name:"Javascript",
      image:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png"
     },
     {
      name:"Typescript",
      image:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png"
     },
     {
      name:"React.js",
      image:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
     },
     {
      name:"Next.js",
      image:"https://asset.brandfetch.io/id2alue-rx/iduLChSb1a.jpeg"
     },
     {
      name:"CSS",
      image:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/1024px-CSS3_logo.svg.png"
     },  {
      name:"HTML",
      image:"https://cdn.iconscout.com/icon/free/png-256/free-html-5-1-1175208.png"
     },   {
      name:"Github",
      image:"https://camo.githubusercontent.com/582429992c94328783a1509030dfd344c5845fb94be4a7b85fcf8e70b686e1b1/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f706e672f6769746875622e706e67"
     },
     {
      name:"SASS/SCSS",
      image:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/2560px-Sass_Logo_Color.svg.png"
     },  {
      name:"Bootstrap",
      image:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png"
     },
     {
      name:"Figma",
      image:"https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/3000/figma-logo-512.png"
     },
     {
      name:"Material UI",
      image:"https://cdn.worldvectorlogo.com/logos/material-ui-1.svg"
     },  {
      name:"Mantine UI",
      image:"https://seeklogo.com/images/M/mantine-logo-235E19C978-seeklogo.com.png"
     }, {
      name:"Redux/Redux toolkit",
      image:"https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png"
     },
     {
      name:"Tailwind CSS",
      image:"https://seeklogo.com/images/T/tailwind-css-logo-5AD4175897-seeklogo.com.png"
     }
    ]
    useEffect(() => {
      AOS.init({});
    }, []);
    
  return (
    <div className={Styles.skills__page}>
        <div data-aos="fade-up" data-aos-duration="1500" data-aos-once="true"  className={Styles.skills_page_title}>
   
   <h1 >Skills</h1>
   <p >Here are some of my skills on which I have been working on for the past 2 years.</p>

        </div>
        <div className={Styles.all_skills}>
           {
            mySkills.map((skill)=>{
              return <SkillComponent key={skill.name} name={skill.name} image={skill.image}/>
            })
           }
      
        </div>
      
    </div>
  )
}

export default Skills
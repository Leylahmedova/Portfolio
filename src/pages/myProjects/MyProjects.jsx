import React from 'react'
import Styles from './myProjects.module.scss'
import MyProject from '../../components/MyProject/MyProject'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
const MyProjects = () => {
    const allProjects=[
        {
            image:"/AA-Studio.png",
            name:"AA-Studio.az",
            tools:['Tailwind CSS','Next.js','TypeScript'],
            disabled:"true",
            liveLink:"https://www.aastudio.az/",
            codeLink:"#private"

        },
        {
            image:"/Telef10az.png",
            name:"Telef10.az (e-commerce)",
            tools:['HTML','SASS/SCSS','Next.js'],
            disabled:"true",
            liveLink:"https://telef10.az/",
            codeLink:"#private"

        },
        {
            image:"/PortfolioWebsite.png",
            name:"Portfolio Website",
            tools:['HTML','SASS/SCSS','React'],
            disabled:"false",
            liveLink:"https://portfolio-git-master-leyla-ahmadovas-projects.vercel.app/",
            codeLink:"https://github.com/Leylahmedova/Portfolio"

        },
        {
            image:"/TravelWebsite.png",
            name:"Travel Website",
            tools:['HTML','CSS','React'],
            disabled:"false",
            liveLink:"https://travel-blush-zeta.vercel.app/",
            codeLink:"https://github.com/Leylahmedova/travel"

        },
        {
            image:"/Linkedln.png",
            name:"Linkedln Website",
            tools:['HTML','Tailwind CSS','Javascript'],
            disabled:"false",
            liveLink:"https://linkedln-websitecopy-git-master-leyla-ahmadovas-projects.vercel.app/",
            codeLink:"https://github.com/Leylahmedova/LinkedIn-website"

        },
        {
            image:"/Trip.png",
            name:"Trip Website (E-Commerce)",
            tools:['React','Redux','CSS','Django','Rest API'],
            disabled:"true",
            liveLink:"#soon",
            codeLink:"https://github.com/Leylahmedova/Django-React-Travel-website"

        },

         {
            image:"/Tiger.png",
            name:"Tiger (e-commerce)",
            tools:['HTML','SASS/SCSS','Next.js','TypeScript'],
            disabled:"true",
            liveLink:"#soon",
            codeLink:"#private"

        }
    ]
    useEffect(() => {
        AOS.init({
        });
      }, []);
  return (
    <div className={Styles.projects__page}>
        <div data-aos="fade-up" data-aos-duration="1500" data-aos-once="true" className={Styles.projects__title}>
            <h1>My Projects</h1>
            <p>I have worked on a wide range of projects. Here are some of my projects.</p>
        </div>
        <div className={Styles.projects}>
            {
                allProjects.map((project,index)=>{
                    
                    return  <MyProject key={index} project={project}/>
                })
            }
          
         

        </div>
        </div>
  )
}

export default MyProjects
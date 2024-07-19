import React from 'react'
import Styles from './myProjects.module.scss'
const MyProjects = () => {
    const allProjects=[
        {
            image:"/random1.png",
            name:"Portfolio Website",
            tools:['HTML','SASS/SCSS','React'],
            disabled:"false"

        },
        {
            image:"/random1.png",
            name:"Portfolio Website",
            tools:['HTML','SASS/SCSS','React'],
            disabled:"false"

        }, {
            image:"/random1.png",
            name:"Portfolio Website",
            tools:['HTML','SASS/SCSS','React'],
            disabled:"true"

        }, {
            image:"/random1.png",
            name:"Portfolio Website",
            tools:['HTML','SASS/SCSS','React'],
            disabled:"false"

        }
    ]
  return (
    <div className={Styles.projects__page}>
        <div className={Styles.projects__title}>
            <h1>My Projects</h1>
            <p>I have worked on a wide range of projects. Here are some of my projects.</p>
        </div>
        <div className={Styles.projects}>
            {
                allProjects.map((project,index)=>{
                    
                    return <div key={index} className={Styles.project}>
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
                              <button > <a href="#">View Live</a> </button>
                              <button><a href="#">View Code</a> </button>
                          </div>
                    </div>
               </div>
                })
            }
          
         

        </div>
        </div>
  )
}

export default MyProjects
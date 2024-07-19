import React from 'react'
import Styles from './skillComponent.module.scss'
const SkillComponent = ({name,image}) => {
  return (
    <div className={Styles.skill}>
        <div className={Styles.skill__logo}><img src={image} alt={name} /></div>
        <div className={Styles.skill__name}>
          <span>{name}</span>
        </div>
    </div>
  )
}

export default SkillComponent
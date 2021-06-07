import React from 'react'
import TitleWithIcon from '../titles/TitleWithIcon'

const ChartsCard = ({title, subTitle, icon, iconColor, children}) => {
  return (
    <div className="ChartsCard">
      <TitleWithIcon title={title} subTitle={subTitle} icon={icon} iconColor={iconColor} />
      {children}

      <style jsx>{`
        .ChartsCard {
          border-radius: 3px;
          border: 1px solid #313D4F;
          color: #fff;
          padding: 1rem;
          position: relative;
          text-align: center;
        }
      `}</style>
    </div>
  )
}

export default ChartsCard

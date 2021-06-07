import React from 'react'

const StatsCard = ({title, figure, icon, status}) => {
  return (
    <div className="StatsCard">
			<div className="StatsCard__title">{title}</div>
			<i className={icon} aria-hidden="true" />
			<div className="StatsCard__figure">{figure}</div>
			<div className="StatsCard__meta"><b>13</b>% increase</div>
      
      <style jsx>{`
        .StatsCard {
          border-radius: 8px;
          color: #fff;
          padding: 1rem;
          position: relative;
          background: ${(status) ? status : '#ffffff'};
          flex-direction: column;
          display: flex;
        }

        .StatsCard__title {
          display: inline-block;
          font-size: 1.2rem;
          padding: 1rem 1rem 0;
          text-transform: uppercase;
        }

        .StatsCard__figure {
          font-size: 2.8rem;
          padding: 0 1rem;
        }

        .StatsCard__meta {
          border-top: 1px solid rgba(255, 255, 255, 0.3);
          font-size: 1rem;
          margin-top: 2.5rem;
          padding: 1rem 1rem 0;
          text-transform: uppercase;
        }

        .StatsCard i {
          color: white;
          font-size: 2.8rem;
          opacity: 0.3;
          position: absolute;
          right: 1.3rem;
          top: 1.3rem;
        }
      `}</style>
    </div>
  )
}

export default StatsCard

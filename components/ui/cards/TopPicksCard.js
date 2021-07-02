import React from 'react'
import Image from 'next/image'
import PropTypes from 'prop-types'

const TopPicksCard = ({ src, title, subTitle, meta, subMeta, link }) => {
  return (
    <div className="TopPicksCard">
      <div className="TopPicksCard__image">
        <Image src={src} width={650} height={650} objectFit="cover" />
        <div className="TopPicksCard__image-meta">{subMeta}</div>
      </div>
      <div className="TopPicksCard__detail">
        <h6>{title}</h6>
        <p>{subTitle}</p>
        <p className="TopPicksCard__detail-meta">{meta}</p>
      </div>
      <style jsx>{`
        .TopPicksCard__image {
          position: relative;
        }

        .TopPicksCard__image-meta {
          bottom: -1rem;
          left: 50%;
          transform: translateX(-50%);
          position: absolute;
          padding: 0.4rem 0.8rem;
          background: #121212;
          color: #fff;
          font-size: 1.2rem;
          font-weight: 400;
        }

        .TopPicksCard__detail {
          padding-top: 2rem;
        }

        .TopPicksCard__detail h6 {
          font-weight: 500;
          font-size: 1.2rem;
          text-transform: uppercase;
          color: #999;
        }

        .TopPicksCard__detail p {
          margin-bottom: 0.5rem;
          font-size: 1.6rem;
        }

        .TopPicksCard__detail-meta {
          font-weight: 300;
        }
      `}</style>
    </div>
  )
}

TopPicksCard.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  meta: PropTypes.string.isRequired,
  subMeta: PropTypes.string,
  link: PropTypes.string
}

export default TopPicksCard

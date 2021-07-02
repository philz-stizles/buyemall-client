import React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'
import Link from 'next/link'

const ShadowedCard = ({ link, src, title, subTitle, meta }) => {
  return (
    <div className="ShadowedCard">
      <div className="ShadowedCard__image">
        <Image src={src} alt={title} width={300} height={400} objectFit="cover" />

        <div className="img-overlay">
          <Link href={link}>
            <a className="buy-btn">Buy Now</a>
          </Link>
        </div>
      </div>
      <div className="ShadowedCard__detail">
        <div className="detail__info">
          <a href="#">{title}</a>
          <span>{subTitle}</span>
        </div>

        <a href="#" className="detail__price">
          {meta}
        </a>
      </div>

      <style jsx>{`
        .ShadowedCard {
          width: 300px;
          box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.2);
          border-radius: 10px;
          overflow: hidden;
          // margin: 25px;
        }

        .ShadowedCard__image {
          height: 400px;
          // height: 450px;
          position: relative;
        }

        .ShadowedCard__image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          box-sizing: border-box;
        }

        .ShadowedCard__detail {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 20px;
        }

        .detail__info {
          display: flex;
          flex-direction: column;
        }

        .detail__info a {
          color: #222222;
          margin: 5px 0px;
          font-weight: 700;
          letter-spacing: 0.5px;
          padding-right: 8px;
        }

        .detail__info span {
          color: rgba(26, 26, 26, 0.5);
        }

        .detail__price {
          color: #333333;
          font-weight: 600;
          font-size: 1.1rem;
          font-family: poppins;
          letter-spacing: 0.5px;
        }

        .ShadowedCard .img-overlay {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          height: 100%;
          background-color: rgba(92, 95, 236, 0.6);
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .buy-btn {
          width: 160px;
          height: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #ffffff;
          color: #252525;
          font-weight: 700;
          letter-spacing: 1px;
          font-family: calibri;
          border-radius: 20px;
          box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.2);
        }
        .buy-btn:hover {
          color: #ffffff;
          background-color: #f15fa3;
          transition: all ease 0.3s;
        }

        .ShadowedCard .img-overlay {
          visibility: hidden;
        }
        .ShadowedCard__image:hover .img-overlay {
          visibility: visible;
          animation: fade 0.5s;
        }

        @keyframes fade {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  )
}

ShadowedCard.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  meta: PropTypes.any
}

export default ShadowedCard

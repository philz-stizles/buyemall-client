import React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'

const ProductCard = ({ src, title, subTitle, meta, link }) => {
  return (
    <div className="ProductCard">
      <picture>
        <Image src={src} alt={title} width={650} height={650} objectFit="cover" />
      </picture>
      <div className="ProductCard__detail">
        <p>
          <b>{title}</b>
          <br />
          <small>{subTitle}</small>
        </p>
        <samp>{meta}</samp>
      </div>
      <div className="ProductCard__button">
        <p className="star">
          <strong>&#9733;</strong>
          <strong>&#9733;</strong>
          <strong>&#9733;</strong>
          <strong>&#9733;</strong>
          <strong>&#9733;</strong>
        </p>
        <a href={link}>cart</a>
      </div>
      <style jsx>{`
        .ProductCard {
          min-width: 24%;
          background: whitesmoke;
          margin: 0 20px 0 0;
          border-radius: 20px;
          position: relative;
          left: 0;
          transition: 0.5s;
          padding-bottom: 2.5rem;
        }

        .ProductCard picture {
          width: 100%;
          height: 70%;
          padding: 20px;
          /*background: green;*/
          display: flex;
          overflow: hidden;
          margin-bottom: 20px;
        }

        .ProductCard picture img {
          width: 100%;
        }

        .ProductCard__detail,
        .ProductCard__button {
          width: 90%;
          /*background: red;*/
          margin: auto;
          padding: 5px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 50px;
          font-size: 20px;
          color: #444;
        }
        small {
          color: #555;
        }
        a {
          text-decoration: none;
          padding: 6px 14px;
          font-size: 15px;
          margin: 5px 0 0 20px;
          display: inline-block;
          background: #6773ff;
          color: white;
        }
        p.star {
          margin: 5px 0;
          width: 65%;
          font-size: 25px;
          color: #808080;
        }
      `}</style>
    </div>
  )
}

ProductCard.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  meta: PropTypes.string.isRequired,
  link: PropTypes.string
}

export default ProductCard

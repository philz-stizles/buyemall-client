import Image from 'next/image'
import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import SquareButton from '../../components/ui/buttons/SquareButton/SquareButton'

const ProductDetailPage = ({ product }) => {
  const { images, title, description, price, quantity, inStock } = product
  return (
    <div className="ProductDetailPage">
      <div className="ProductDetailPage__images">
        <Image
          className="image__main"
          src={images[0].url}
          alt="chair"
          width={370}
          height={441}
          objectFit="cover"
        />
        <div className="image__gallery">
          {images.map(({ url, upload_id }) => (
            <figure key={upload_id}>
              <a href="#">
                <Image
                  src={url}
                  alt="Image description"
                  width={83}
                  height={120}
                  objectFit="contain"
                />
              </a>
            </figure>
          ))}
        </div>
      </div>
      <div className="ProductDetailPage__details">
        <h3 className="detail__title">{title}</h3>
        <div className="rating">
          <i className="fas fa-star" aria-hidden="true"></i>
          <i className="fas fa-star" aria-hidden="true"></i>
          <i className="fas fa-star" aria-hidden="true"></i>
          <i className="fas fa-star" aria-hidden="true"></i>
          <i className="fas fa-star-half-alt" aria-hidden="true"></i>
        </div>
        <br />
        <div className="detail__price">
          <h6 className="mb-0 mt-3">Price</h6>
          <h5>${price}</h5>
        </div>

        <span className={`detail__inStock ${quantity > 0 ? 'success' : 'warning'}`}>In Stock</span>
        <br />
        <div className="detail__description">
          <h4>Description</h4>
          <p>{description}</p>
        </div>

        <div className="detail__inputs">
          <div className="detail__input">
            <label htmlFor="quantity">Quantity</label>
            <input
              type="number"
              min="0"
              defaultValue="1"
              className="form-control choices__input"
              name="quantity"
              id="quantity"
            />
          </div>
          <div className="detail__input">
            <label htmlFor="color">Color</label>
            <select
              className="form-control choices__input"
              name="color"
              id="color"
              hidden=""
              tabindex="-1"
              data-choice="active">
              <option value="Choice 1">White</option>
            </select>
          </div>
        </div>
        <SquareButton>Add to cart</SquareButton>
      </div>
      <style jsx>{`
        .ProductDetailPage {
          box-shadow: 0 20px 27px 0 rgb(0 0 0 / 5%);
          position: relative;
          word-wrap: break-word;
          background-color: #fff;
          background-clip: border-box;
          border: 0 solid rgba(0, 0, 0, 0.125);
          border-radius: 1rem;
          width: 70%;
          margin: 5rem auto;
          padding: 3.5rem;
          grid-column-gap: 7rem;
          display: grid;
          grid-template-columns: 0.8fr 1fr;
        }

        :global(.image__main) {
          border-radius: 1rem;
          box-shadow: 0 8px 26px -4px hsla(0, 0%, 8%, 0.15), 0 8px 9px -5px hsla(0, 0%, 8%, 0.06) !important;
        }

        .image__gallery {
          display: flex;
          margin-top: 1.5rem;
          padding-top: 0.5rem;
        }

        .image__gallery figure {
          margin: 0 0 1rem;
        }

        .detail__title {
          font-weight: 700;
          font-size: 2.875rem;
          line-height: 1.375;
          color: #252f40;
          margin-bottom: 0.5rem;
        }

        .detail__price {
          margin: 1rem 0 0.5rem 0;
          font-weight: 600;
          color: #252f40;
        }

        .detail__price h6 {
          font-size: 2rem;
          line-height: 1.625;
        }

        .detail__price h5 {
          font-size: 2.25rem;
          line-height: 1.375;
        }

        .detail__description {
          margin-top: 1.5rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          color: #252f40;
        }

        .detail__description h4 {
          font-weight: 700;
          color: #252f40;
        }

        .detail__description p {
          font-weight: 400;
          color: #67748e;
        }

        .detail__inStock {
          text-transform: uppercase;
          display: inline-block;
          padding: 0.55em 0.9em;
          font-size: 0.75em;
          font-weight: 700;
          line-height: 1;
          color: #fff;
          text-align: center;
          white-space: nowrap;
          vertical-align: baseline;
          border-radius: 0.45rem;
        }

        .detail__inStock.success {
          color: #67b108;
          background-color: #cdf59b;
        }

        .detail__inputs {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          margin-bottom: 2.5rem;
        }

        .detail__input {
          display: flex;
          flex-direction: column;
          padding-right: 1.2rem;
        }

        .detail__input label {
          display: inline-block;
          font-weight: 700;
          margin-bottom: 0.5rem;
          color: #252f40;
          margin-left: 0.25rem;
        }

        .detail__input input,
        .detail__input select {
          display: flex;
          align-items: center;
          vertical-align: top;
          padding: 0.5rem 0.75rem;
          border: 1px solid #d2d6da;
          border-radius: 0.5rem;
          font-size: 14px;
          min-height: 40px;
          overflow: hidden;
        }
      `}</style>
    </div>
  )
}

ProductDetailPage.propTypes = {
  product: PropTypes.object.isRequired
}

export const getServerSideProps = async (context) => {
  const id = context.query.slug
  console.log(context.query.slug)
  try {
    const response = await axios.get(`http://localhost:3000/api/products/${id}`)
    console.log(response)
    return {
      props: {
        product: response.data.data
      }
    }
  } catch (error) {
    console.log(error.message)
    return {
      redirect: {
        destination: '/account',
        permanent: false
      }
    }
  }
}

export default ProductDetailPage

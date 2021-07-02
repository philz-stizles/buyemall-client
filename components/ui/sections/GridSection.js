import React from 'react'
import PropTypes from 'prop-types'

const GridSection = ({ children, title, subTitle }) => {
  return (
    <section className="GridSection">
      <h2>{title}</h2>
      {subTitle && <h5>{subTitle}</h5>}
      <div className="grid">{children}</div>
      <style jsx>{`
        .GridSection {
          padding: 15rem 5rem;
        }

        .GridSection h2 {
          text-align: center;
          font-size: 3.2rem;
          font-weight: 400;
          margin-bottom: 5rem;
        }

        .GridSection .grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-gap: 5rem;
        }
      `}</style>
    </section>
  )
}

GridSection.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired
}

export default GridSection

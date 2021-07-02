import Image from 'next/image'
import React from 'react'
import ProductCard from '../../ui/cards/ProductCard'
import ShadowedCard from '../../ui/cards/ShadowedCard'
import TopPicksCard from '../../ui/cards/TopPicksCard'
import classes from './TopPicks.module.css'

const TopPicks = () => {
  return (
    <section className={classes.TopPicks}>
      <h2>Our Top Selling for You</h2>
      <div className={classes.TopPicksGrid}>
        <div className={classes.TopPicksCard}>
          <div className={classes.TopPicksCardImage}>
            <Image src="/images/tshirt-1.jpg" width={650} height={650} objectFit="cover" />
            <div className={classes.TopPicksCardMeta}>NEW SEASON</div>
          </div>
          <div className={classes.TopPicksCardContent}>
            <h6>Jackets</h6>
            <p>Sport Jacket Cotton Linen Wood Brown</p>
            <p>£1,350.00</p>
          </div>
        </div>

        <ShadowedCard
          src="/images/tshirt-2.jpg"
          title="Jackets"
          subTitle="Linen Wood Brown"
          meta="£1,350.00"
          subMeta="NEW SEASON"
          link="/products/detail"
        />

        <ProductCard
          src="/images/tshirt-3.jpg"
          title="Jackets"
          subTitle="Linen Wood Brown"
          meta="£1,350.00"
          subMeta="NEW SEASON"
        />

        <TopPicksCard
          src="/images/tshirt-4.jpg"
          title="Jackets"
          subTitle="Sport Jacket Cotton Linen Wood Brown"
          meta="£1,350.00"
          subMeta="NEW SEASON"
        />
      </div>
    </section>
  )
}

export default TopPicks

import Image from 'next/image'
import React from 'react'
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

        <div className={classes.TopPicksCard}>
          <div className={classes.TopPicksCardImage}>
            <Image src="/images/tshirt-2.jpg" width={650} height={650} objectFit="cover" />
            <div className={classes.TopPicksCardMeta}>NEW SEASON</div>
          </div>
          <div className={classes.TopPicksCardContent}>
            <h6>Jackets</h6>
            <p>Sport Jacket Cotton Linen Wood Brown</p>
            <p>£1,350.00</p>
          </div>
        </div>

        <div className={classes.TopPicksCard}>
          <div className={classes.TopPicksCardImage}>
            <Image src="/images/tshirt-3.jpg" width={650} height={650} objectFit="cover" />
            <div className={classes.TopPicksCardMeta}>NEW SEASON</div>
          </div>
          <div className={classes.TopPicksCardContent}>
            <h6>Jackets</h6>
            <p>Sport Jacket Cotton Linen Wood Brown</p>
            <p>£1,350.00</p>
          </div>
        </div>

        <div className={classes.TopPicksCard}>
          <div className={classes.TopPicksCardImage}>
            <Image src="/images/tshirt-4.jpg" width={650} height={650} objectFit="cover" />
            <div className={classes.TopPicksCardMeta}>NEW SEASON</div>
          </div>
          <div className={classes.TopPicksCardContent}>
            <h6>Jackets</h6>
            <p>Sport Jacket Cotton Linen Wood Brown</p>
            <p>£1,350.00</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TopPicks

import Image from 'next/image'
import React from 'react'
import SquareButton from '../../ui/buttons/SquareButton/SquareButton'
import classes from './Hero.module.css'

const Hero = () => {
  return (
    <section className={classes.Hero}>
      <div className={classes.HeroContent}>
        <h5>New Arrivals</h5>
        <h1>Holiday Outfits and Accessories</h1>
        <p>
          Be the first to own them. Looking for some outfit inspiration for the long weekend? We
          have got you covered...
        </p>
        <SquareButton>SHOP NOW</SquareButton>
      </div>
      <div className={classes.HeroImage}>
        <div className={classes.HeroImageHolder}>
          <Image
            src="/images/home-hero-5.jpg"
            objectPosition="center top"
            width={650}
            height={550}
            objectFit="cover"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero

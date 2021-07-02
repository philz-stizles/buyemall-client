import PropTypes from 'prop-types'
import HomeNav from '../components/home/HomeNav/HomeNav'
import HomeHeader from '../components/home/HomeHeader/HomeHeader'
import FeatureBanner from '../components/ui/banners/FeatureBanner'
import AirplaneIcon from '../components/icons/AirplaneIcon'
import ShieldIcon from '../components/icons/ShieldIcon'
import NotificationIcon from '../components/icons/NotificationIcon'
import Hero from '../components/home/Hero/Hero'
import { CartProvider } from '../store/context/cart/cartContext'
import GridSection from '../components/ui/sections/GridSection'
import { getFilteredProducts } from '../actions/product'
import ShadowedCard from '../components/ui/cards/ShadowedCard'
import axios from 'axios'

export const HomePage = ({ filteredProducts, categories, subCategories }) => {
  return (
    <CartProvider>
      <HomeHeader />
      <HomeNav />
      <Hero />
      <GridSection title="Our Top Selling for You">
        {filteredProducts.map(({ _id, title, price, images }) => (
          <ShadowedCard
            key={_id}
            src={images[0].url}
            title={title}
            subTitle="Linen Wood Brown"
            meta={price}
            subMeta="NEW SEASON"
            link={`/products/${_id}`}
          />
        ))}
      </GridSection>
      <FeatureBanner
        items={[
          { icon: <AirplaneIcon />, text: 'Free shipping' },
          { icon: <ShieldIcon />, text: 'Secure & reliable payment' },
          { icon: <NotificationIcon />, text: 'Statements, notifications and alerts' }
        ]}
      />
    </CartProvider>
  )
}

HomePage.propTypes = {
  filteredProducts: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
  subCategories: PropTypes.array.isRequired
}

export const getServerSideProps = async () => {
  try {
    const response = await axios.post(`http://localhost:3000/api/products/filtered`, { limit: 10 })
    console.log(response.data.data)
    return {
      props: {
        filteredProducts: response.data.data
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

export default HomePage

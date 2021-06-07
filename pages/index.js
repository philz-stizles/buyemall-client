import HomeNav from '../components/home/HomeNav/HomeNav'
import HomeHeader from '../components/home/HomeHeader/HomeHeader'
import FeatureBanner from '../components/ui/banners/FeatureBanner'
import AirplaneIcon from '../components/icons/AirplaneIcon'
import ShieldIcon from '../components/icons/ShieldIcon'
import NotificationIcon from '../components/icons/NotificationIcon'
import Hero from '../components/home/Hero/Hero'
import TopPicks from '../components/home/TopPicks/TopPicks'
import { CartProvider } from '../store/context/cart/cartContext'

export const HomePage = () => {
  return (
    <CartProvider>
      <HomeHeader />
      <HomeNav />
      <Hero />
      <TopPicks />
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

export default HomePage

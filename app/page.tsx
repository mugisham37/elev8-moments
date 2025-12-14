import MainHeader from '@/components/Routes/Landing/MainHeader'
import HeaderQuote from '@/components/Routes/Landing/HeaderQuote'
import CharcuterieOfferings from '@/components/Routes/Landing/CharcuterieOfferings'
import Gallery from '@/components/Shared/Gallery'
import FruitBoards from '@/components/Routes/Landing/FruitBoards'
import EventPlanning from '@/components/Routes/Landing/EventPlanning'
import CallToAction from '@/components/Routes/Landing/CallToAction'
import Reviews from '@/components/Shared/Reviews'

const page = () => {
  return (
    <>
      <MainHeader/>
      <HeaderQuote/>
      <CharcuterieOfferings/>
      <Gallery/>
      <FruitBoards/>
      <EventPlanning/>
      <CallToAction/>
      <Reviews/>
    </>
  )
}

export default page


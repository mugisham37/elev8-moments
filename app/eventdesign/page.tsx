
import EventDesignHeader from '@/components/Routes/Eventdesign/Header'
import EventSetup from '@/components/Routes/Eventdesign/EventSetup'
import TableScapes from '@/components/Routes/Eventdesign/TableScapes'
import Florals from '@/components/Routes/Eventdesign/Florals'
import Seasonal from '@/components/Routes/Eventdesign/Seasonal'
import Gallery from '@/components/Shared/Gallery'

const page = () => {
  return (
    <>
      <EventDesignHeader/>
      <EventSetup/>
      <TableScapes/>
      <Florals/>
      <Seasonal/>
      <Gallery/>
    </>
  )
}

export default page
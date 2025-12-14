import CharcuterieOfferings from '@/components/Routes/Grazingtable/CharcuterieOfferings'
import Header from '@/components/Routes/Grazingtable/Header'
import ListOfOfferings from '@/components/Routes/Grazingtable/ListOfOfferings'

const page = () => {
  return (
    <>
      <Header/>
      <CharcuterieOfferings/>
      <ListOfOfferings/>
    </>
  )
}

export default page

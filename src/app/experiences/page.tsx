
import Testimonials from '../../components/Layout/Testimonials';
import GrazingTablesHero from '../../components/Routes/Experiences/GrazingTablesHero';
import GrazingDetails from '../../components/Routes/Experiences/GrazingDetails';
import BoardsBoxesGrid from '../../components/Routes/Experiences/BoardsBoxesGrid';

export default function App() {
  return (
    <>
    <GrazingTablesHero/>
    <GrazingDetails/>
    <BoardsBoxesGrid/>
    <Testimonials />
    </>
  );
}

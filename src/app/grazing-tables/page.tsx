
import Testimonials from '../../components/Layout/Testimonials';
import GrazingTablesHero from '../../components/Routes/Grazing/GrazingTablesHero';
import GrazingDetails from '../../components/Routes/Grazing/GrazingDetails';
import BoardsBoxesGrid from '../../components/Routes/Grazing/BoardsBoxesGrid';

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

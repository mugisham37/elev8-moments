import React from 'react';
import Hero from '../../components/Routes/Grazing/Hero';
import GlamHausGrazing from '../../components/Routes/Grazing/GlamHausGrazing';
import BoardsAndBoxes from '../../components/Routes/Grazing/BoardsAndBoxes';
import Testimonials from '../../components/Routes/Grazing/Testimonials';

export default function App() {
  return (
    <>
      <Hero />
      <GlamHausGrazing />
      <BoardsAndBoxes />
      <Testimonials />
    </>
  );
}

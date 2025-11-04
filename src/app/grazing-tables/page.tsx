import React from 'react';
import Hero from '../../components/sections/Grazing/Hero';
import GlamHausGrazing from '../../components/sections/Grazing/GlamHausGrazing';
import BoardsAndBoxes from '../../components/sections/Grazing/BoardsAndBoxes';
import Testimonials from '../../components/sections/Grazing/Testimonials';

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

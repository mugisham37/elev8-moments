import React from 'react';
import Hero from '../../components/Layout/Grazing/Hero';
import GlamHausGrazing from '../../components/Layout/Grazing/GlamHausGrazing';
import BoardsAndBoxes from '../../components/Layout/Grazing/BoardsAndBoxes';
import Testimonials from '../../components/Layout/Grazing/Testimonials';

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

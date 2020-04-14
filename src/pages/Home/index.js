import React from 'react';

import Slider from '../../components/Slider';
import Services from '../../components/Services';
import About from '../../components/About';
import StepByStep from '../../components/StepByStep';
import Form from '../../components/Form';
import Data from '../../components/Data';
import Footer from '../../components/Footer';

export default function Home() {
  return (
    <main>
      <Slider />
      <Services />
      <About />
      <StepByStep />
      <Form />
      <Data />
      <Footer />
    </main>
  );
}

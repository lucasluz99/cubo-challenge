import React from 'react';

import Slider from '../../components/Slider';
import Services from '../../components/Services';
import About from '../../components/About';

export default function Home() {
  return (
    <main>
      <Slider />
      <Services />
      <About />
    </main>
  );
}

import React, { useState, useRef } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import Wrapper from '../Wrapper';
import { Container, SliderContent, Slide, Dots, Dot } from './styles';

export default function Slider() {
  const [state, setState] = useState({
    translate: 1920,
    trasition: 0.45,
    active: 0,
  });

  const images = [
    {
      id: 3,
      src: 'https://i.picsum.photos/id/1/1920/600.jpg',
    },
    {
      id: 1,
      src: 'https://i.picsum.photos/id/2/1920/600.jpg',
    },
    {
      id: 2,
      src: 'https://i.picsum.photos/id/3/1920/600.jpg',
    },
    {
      id: 3,
      src: 'https://i.picsum.photos/id/4/1920/600.jpg',
    },
    {
      id: 1,
      src: 'https://i.picsum.photos/id/5/1920/600.jpg',
    },
  ];

  const dots = [];

  function generateDots() {
    for (let i = 0; i < images.length - 2; i += 1) {
      dots.push('dot');
    }
  }

  generateDots();

  return (
    <Container>
      <SliderContent
        translate={state.translate}
        transition={state.transition}
        active={state.active + 1}
      >
        {images.map((image) => (
          <Slide key={image.id}>
            <img src={image.src} alt="oi" />
          </Slide>
        ))}
      </SliderContent>
      <MdKeyboardArrowLeft id="left" size={40} color="#fff" />
      <MdKeyboardArrowRight id="right" size={40} color="#fff" />
      <Dots>
        {dots.map((dot, i) => (
          <Dot active={state.active === i} />
        ))}
      </Dots>
    </Container>
  );
}

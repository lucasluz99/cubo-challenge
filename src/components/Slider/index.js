import React, { useState } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

import { Container, SliderContent, Slide, Dots, Dot } from './styles';

export default function Slider() {
  const getWidth = () => document.querySelector('#slide').clientWidth;

  const [state, setState] = useState({
    translate: 0,
    transition: 0.2,
    active: 0,
  });

  const images = [
    {
      id: 1,
      src: 'https://i.picsum.photos/id/1/1920/600.jpg',
    },
    {
      id: 2,
      src: 'https://i.picsum.photos/id/2/1920/600.jpg',
    },
    {
      id: 3,
      src: 'https://i.picsum.photos/id/3/1920/600.jpg',
    },
  ];

  const nextSlide = () => {
    if (state.active === images.length - 1) {
      return setState({
        ...state,
        translate: getWidth(),
        transition: 0,
        active: 0,
      });
    }

    setState({
      transition: 0.2,
      active: state.active + 1,
      translate: getWidth(),
    });
  };

  const prevSlide = () => {
    if (state.active === 0) {
      return setState({
        transition: 0,
        translate: getWidth(),
        active: 2,
      });
    }

    setState({
      transition: 0.2,
      active: state.active - 1,
      translate: getWidth(),
    });
  };

  return (
    <>
      <Container>
        <SliderContent
          id="slide"
          translate={state.translate}
          transition={state.transition}
          active={state.active}
        >
          {images.map((image, i) => (
            <Slide key={i}>
              <img src={image.src} alt="oi" />
            </Slide>
          ))}
        </SliderContent>
        <MdKeyboardArrowLeft
          onClick={prevSlide}
          id="left"
          size={50}
          color="#fff"
        />
        <MdKeyboardArrowRight
          onClick={nextSlide}
          id="right"
          size={50}
          color="#fff"
        />
      </Container>
      <Dots>
        {images.map((image, i) => (
          <Dot key={i} active={state.active === i} />
        ))}
      </Dots>
    </>
  );
}

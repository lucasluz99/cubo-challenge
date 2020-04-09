import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: #f2f2f2;
  position: relative;
  overflow: hidden;

  svg {
    cursor: pointer;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  svg#left {
    left: 5%;
  }
  svg#right {
    right: 5%;
  }

  @media (max-width: 800px) {
    svg#left {
      left: 2%;
    }
    svg#right {
      right: 2%;
    }
  }
`;

export const SliderContent = styled.ul`
  list-style: none;
  display: flex;
  transform: ${(props) => `translateX(${-props.translate * props.active}px)`};
  transition: ${(props) => `transform ${props.transition}s linear`};
`;

export const Slide = styled.li`
  width: 100%;
  flex-shrink: 0;

  img {
    height: 600px;
    width: 100%;
  }

  @media (max-width: 800px) {
    img {
      height: 50vh;
    }
  }
`;

export const Dots = styled.ul`
  position: absolute;
  width: 100%;
  list-style: none;
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

export const Dot = styled.li`
  height: 15px;
  width: 15px;
  border-radius: 50%;
  border: 2px solid ${(props) => (props.active ? '#ec9900' : '#807b7b')};
  margin-right: 5px;
`;

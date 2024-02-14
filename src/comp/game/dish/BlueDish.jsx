import React from 'react';
import styled from 'styled-components';
import blueplate from '../../../assets/img/blueplate.png';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../ItemTypes'

const BlueDish = ({ onDrop }) => {
  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.BEEF,
    drop: (item, monitor) => {
      onDrop(item);
    },
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    }),
  });

    return <StyledPlate ref={drop} src={blueplate}/>;
};

export default BlueDish;

const StyledPlate= styled.img`
    height: 340px;
    width: 340px;
    z-index : 3
`;
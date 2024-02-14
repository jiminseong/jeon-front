import React from 'react';
import beef from '../../../assets/img/beef.png';
import { useDrag } from 'react-dnd';
import { ItemTypes } from '../ItemTypes';

const Beef = () => {
    const [{ isDragging }, drag] = useDrag({
        type: ItemTypes.BEEF,
        touch: true,
        collect: (monitor) => ({
          isDragging: !!monitor.isDragging(),
        }),
      });
    
    return (
        <div>
            <img ref={drag} src={beef}
             style={{ margin: '2px',opacity: isDragging ? 0.5 : 1, }}
             width={"100px"}></img>
        </div>
    );
};

export default Beef;
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import Item from './item';
import { StrategicGuidance, TransforamtiveInsights } from '../../../assets';

const TestimonialsSlide = (props) => {
  let items = [
    {
      img: <TransforamtiveInsights />,
      name: 'Marko Markic',
      description: 'Probably the most random thing you have ever seen!',
    },
    {
      img: <StrategicGuidance />,
      name: 'Random Name #2',
      description: 'Hello World!',
    },
    {
      img: <StrategicGuidance />,
      name: 'Random Name #2',
      description: 'Hello World!',
    },
  ];

  return (
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
};

export default TestimonialsSlide;

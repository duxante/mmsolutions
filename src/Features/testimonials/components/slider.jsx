import React from 'react';
import Carousel from 'react-material-ui-carousel';
import Item from './item';
import {
  JaneSmith,
  JosephineMcnammara,
  Kathy,
  MikeRuffalo,
  TomHiddleStone,
} from '../../../assets';

const TestimonialsSlide = (props) => {
  let items = [
    {
      img: <JaneSmith />,
      name: 'Jane Smith',
      workingTitle: 'owner',
      description: 'jane',
    },
    {
      img: <MikeRuffalo />,
      name: 'Mark Ruffalo',
      workingTitle: 'processManager',
      description: 'mark',
    },
    {
      img: <TomHiddleStone />,
      name: 'Tom Hiddlestone',
      workingTitle: 'marketingManager',
      description: 'tom',
    },
    {
      img: <JosephineMcnammara />,
      name: 'Josephine McNammara',
      workingTitle: 'ceo',
      description: 'josephine',
    },
    {
      img: <Kathy />,
      name: 'Kathy Pierce',
      workingTitle: 'owner',
      description: 'kathy',
    },
  ];

  return (
    <Carousel
      animation="slide"
      interval={5000}
      duration={500}
      navButtonsAlwaysVisible
      navButtonsProps={{
        style: {
          backgroundColor: '#ffa62b',
        },
      }}
      activeIndicatorIconButtonProps={{
        style: {
          color: '#ffa62b',
        },
      }}
    >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
};

export default TestimonialsSlide;

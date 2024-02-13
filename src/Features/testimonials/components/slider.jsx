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
      workingTitle: 'OWNER',
      description:
        '"Working with this consultant company felt like having a trusted ally in our business journey. Their down-to-earth genuine commitment to our success made the entire process not just professional but also a personal and enjoyable."',
    },
    {
      img: <MikeRuffalo />,
      name: 'Mark Ruffalo',
      workingTitle: 'PROCESS MANAGER',
      description:
        '"Their team not only brought expert insights but also a refreshing dose of enthusiasm. It is a partnership built on trust, delivering real, tangible results. We couldnt be happier with the journey and the outcomes."',
    },
    {
      img: <TomHiddleStone />,
      name: 'Tom Hiddlestone',
      workingTitle: 'MARKETING MANAGER',
      description:
        '"Partnering with this consultancy was our best decision ever. Their expertise, coupled with personalized guidance, has transformed our business trajectory. Grateful for the positive impact and continual support."',
    },
    {
      img: <JosephineMcnammara />,
      name: 'Josephine McNammara',
      workingTitle: 'CEO & FOUNDER',
      description:
        '"Selecting this consultancy ranks as our best business decision. Their profound expertise, coupled with personalized guidance, has transformed our approach and elevated our outcomes. We value the genuine partnership built on trust."',
    },
    {
      img: <Kathy />,
      name: 'Kathy Pierce',
      workingTitle: 'OWNER',
      description:
        '"Engaging with this consultancy has been a transformative journey. The personalized attention that made us feel genuinely heard, it is more than a consultancy; it is a force propelling our success."',
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

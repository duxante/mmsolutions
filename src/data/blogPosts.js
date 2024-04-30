import {
  BlogPost1,
  BlogPost2,
  BlogPost3,
  BlogPost4,
  BlogPost5,
  BlogPost6,
  BlogPost7,
  BlogPost8,
  CalendarImage,
} from '../assets';

export const posts = [
  {
    id: 1,
    img: <BlogPost1 />,
    icon: <CalendarImage />,
    date: 'Feb. 10, 2023.',
    title: 'Blog title One',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    id: 2,
    img: <BlogPost2 />,
    icon: <CalendarImage />,
    date: 'Feb. 10, 2023.',
    title: 'Blog title One',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    id: 3,
    img: <BlogPost3 />,
    icon: <CalendarImage />,
    date: 'Feb. 10, 2023.',
    title: 'Blog title One',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    id: 4,
    img: <BlogPost4 />,
    icon: <CalendarImage />,
    date: 'Feb. 10, 2023.',
    title: 'Blog title One',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    id: 5,
    img: <BlogPost5 />,
    icon: <CalendarImage />,
    date: 'Feb. 10, 2023.',
    title: 'Blog title One',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    id: 6,
    img: <BlogPost6 />,
    icon: <CalendarImage />,
    date: 'Feb. 10, 2023.',
    title: 'Blog title One',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    id: 7,
    img: <BlogPost7 />,
    icon: <CalendarImage />,
    date: 'Feb. 10, 2023.',
    title: 'Blog title One',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    id: 8,
    img: <BlogPost8 />,
    icon: <CalendarImage />,
    date: 'Feb. 10, 2023.',
    title: 'Blog title One',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
];

export function getItemById(id) {
  return posts.find((post) => post.id === Number(id));
}

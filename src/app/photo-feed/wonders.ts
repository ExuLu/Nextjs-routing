import { StaticImageData } from 'next/image';
import photo1 from './photos/1.jpg';
import photo2 from './photos/2.jpg';
import photo3 from './photos/3.jpg';
import photo4 from './photos/4.jpg';
import photo5 from './photos/5.jpg';
import photo6 from './photos/6.jpg';
import photo7 from './photos/7.jpg';

export type WonderImage = {
  id: string;
  name: string;
  src: StaticImageData;
  designer: string;
  location: string;
};

const wonderImages: WonderImage[] = [
  {
    id: '1',
    name: 'Modern House',
    src: photo1,
    designer: 'Karl Yhen',
    location: 'London',
  },
  {
    id: '2',
    name: 'Villa Italiano',
    src: photo2,
    designer: 'Pedro Murchissimo',
    location: 'Champino',
  },
  {
    id: '3',
    name: 'Classic House in Wood',
    src: photo3,
    designer: 'Yehn Gwen',
    location: 'Vancoover',
  },
  {
    id: '4',
    name: 'Futuristic House',
    src: photo4,
    designer: 'Will Marlyn',
    location: 'New York',
  },
  {
    id: '5',
    name: 'Little Old House',
    src: photo5,
    designer: 'Gwen Meraya',
    location: 'Stocgholm',
  },
  {
    id: '6',
    name: 'Glass&Wood House',
    src: photo6,
    designer: 'Bell Yang',
    location: 'Singapoure',
  },
  {
    id: '7',
    name: 'Your Dream House',
    src: photo7,
    designer: 'Berry MacGomery',
    location: 'Dublin',
  },
];

export default wonderImages;

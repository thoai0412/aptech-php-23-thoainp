import first from './../assets/images/slides/1-cz-first.jpg';
import second from './../assets/images/slides/2-cz-second.jpg';
import third from './../assets/images/slides/3-cz-third.jpg';
import fourth from './../assets/images/slides/4-cz-fourth.png';
import fifth from './../assets/images/slides/5-cz-fifth.png';
import sixth from './../assets/images/slides/6-cz-sixth.png';
import seventh from './../assets/images/slides/7-cz-seventh.png';
import eighth from './../assets/images/slides/8-cz-eighth.png';
import ninth from './../assets/images/slides/9-cz-ninth.png';
import tenth from './../assets/images/slides/10-cz-tenth.png';
import eleventh from './../assets/images/slides/11-cz-eleventh.png';
import twelfth from './../assets/images/slides/12-cz-twelfth.png';
import thirteenth from './../assets/images/slides/13-cz-thirteenth.png';
import fourteenth from './../assets/images/slides/14-cz-fourteenth.png';
import fifteenth from './../assets/images/slides/15-cz-fifteenth.png';
import sixteenth from './../assets/images/slides/16-cz-sixteenth.png';
import { logoImage } from '.';
import { HOST } from './constants';

const slides = [
  first,
  second,
  third,
  fourth,
  fifth,
  sixth,
  seventh,
  eighth,
  ninth,
  tenth,
  eleventh,
  twelfth,
  thirteenth,
  fourteenth,
  fifteenth,
  sixteenth
];

export const threePartSlides = () => {
  const tempSlides = [...slides];
  const arraySlides = [];
  for (let i = 0; i < tempSlides.length / (tempSlides.length / 3); i++) {
    const randNumber = Math.floor(Math.random() * tempSlides.length);
    const slide = tempSlides.splice(randNumber, 1);
    arraySlides.push(slide);
  }
  return arraySlides;
};

export const onePartSlides = () => {
  const arraySlide = [];
  const randNumber = Math.floor(Math.random() * slides.length);
  const slide = slides[randNumber];
  arraySlide.push(slide);
  return arraySlide;
};

export const imageFallBack = images => {
  return !!images[0] ? HOST + images[0].path : logoImage();
};

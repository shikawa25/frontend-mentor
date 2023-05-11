import Accordion from './accordion.js';

const accordion = Accordion();
const container = document.querySelector('.card__accordion');
accordion.init(container, 'accordion__transition');

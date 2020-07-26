import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faFilePdf,
  faThLarge,
  faList,
  faUsers,
  faThList,
  faTachometerAlt,
  faNewspaper,
  faPlus,
  faMinus,
  faTimes,
  faEye
} from '@fortawesome/free-solid-svg-icons';

const fontAwesome = () => {
  library.add(
    faFilePdf,
    faThLarge,
    faList,
    faUsers,
    faThList,
    faTachometerAlt,
    faNewspaper,
    faPlus,
    faMinus,
    faTimes,
    faEye
  );
};

export default fontAwesome;

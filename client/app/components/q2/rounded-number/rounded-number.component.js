import template from './rounded-number.html';
import controller from './rounded-number.controller';
import './rounded-number.scss';

let roundedNumberComponent = {
  bindings: {
    color: '<?',
    number: '<',
    size: '<?',
  },
  template,
  controller
};

export default roundedNumberComponent;

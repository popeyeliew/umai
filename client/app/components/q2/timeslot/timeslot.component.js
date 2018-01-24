import template from './timeslot.html';
import controller from './timeslot.controller';
import './timeslot.scss';

let timeslotComponent = {
  bindings: {
    timeslot: '<',
  },
  template,
  controller
};

export default timeslotComponent;

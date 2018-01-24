import angular from 'angular';
import uiRouter from 'angular-ui-router';
import timeslotComponent from './timeslot.component';

let timeslotModule = angular.module('timeslot', [
  uiRouter
])

.component('timeslot', timeslotComponent)

.name;

export default timeslotModule;

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import q2Component from './q2.component';
import timeslotComponent from './timeslot/timeslot';
import roundedNumberComponent from './rounded-number/rounded-number';

let q2Module = angular.module('q2', [
  uiRouter,
  timeslotComponent,
  roundedNumberComponent
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('q2', {
      url: '/q2',
      component: 'q2'
    });
})

.component('q2', q2Component)

.name;

export default q2Module;

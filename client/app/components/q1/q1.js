import angular from 'angular';
import uiRouter from 'angular-ui-router';
import q1Component from './q1.component';

let q1Module = angular.module('q1', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('q1', {
      url: '/q1',
      component: 'q1'
    });
})

.component('q1', q1Component)

.name;

export default q1Module;

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import roundedNumberComponent from './rounded-number.component';

let roundedNumberModule = angular.module('roundedNumber', [
  uiRouter
])

.component('roundedNumber', roundedNumberComponent)

.name;

export default roundedNumberModule;

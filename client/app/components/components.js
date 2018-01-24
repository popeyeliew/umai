import angular from 'angular';
import Home from './home/home';
import Q1 from './q1/q1';
import Q2 from './q2/q2';

let componentModule = angular.module('app.components', [
  Home,
  Q1,
  Q2,
])

.name;

export default componentModule;

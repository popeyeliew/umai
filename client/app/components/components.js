import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Q1 from './q1/q1';
import Q2 from './q2/q2';

let componentModule = angular.module('app.components', [
  Home,
  About,
  Q1,
  Q2,
])

.name;

export default componentModule;

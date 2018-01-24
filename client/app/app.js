import 'angular-material/angular-material.css';
import 'normalize.css';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import ngMaterial from 'angular-material';

angular.module('app', [
  ngMaterial,
  uiRouter,
  Common,
  Components,
  ])

  .config(($locationProvider, $mdThemingProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');

    var brownMap = $mdThemingProvider.extendPalette('brown', {
      '500': 'a6724b',
    });
    $mdThemingProvider.definePalette('brown', brownMap);
    $mdThemingProvider.theme('default')
      .primaryPalette('brown');
  })

  .component('app', AppComponent);

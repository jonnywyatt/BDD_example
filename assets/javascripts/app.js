requirejs.config({
  baseUrl: './',
  paths: {
    jquery: 'bower_components/jquery/dist/jquery',
    DropdownPanel: 'assets/javascripts/modules/Counter'
  }
});

requirejs(['Counter'], function(Counter) {
  'use strict';
  var mod = new Counter();
});
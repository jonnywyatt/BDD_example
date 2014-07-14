define([], function () {

  'use strict';

  var Counter = function ($el) {
    var $panel = $el.find('.panel');
    $el.find('.trigger').on('click', function() {
      $panel.toggleClass('active');
    });
  };

  return Counter;

});

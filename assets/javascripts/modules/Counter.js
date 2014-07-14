define([], function () {

  'use strict';

  var Counter = function ($el) {
    var $add = $el.find('.counter__add'),
        $remove = $el.find('.counter__remove'),
        currentCount = parseInt($el.find('.counter__count').text(), 10),
        $historyValues = $el.find('.counter__history-values');

    $add.on('click', function() {
      currentCount++;
      $historyValues.text($historyValues.text() + ', ' + currentCount);
      $el.find('.counter__count').text(currentCount);
    });

    $remove.on('click', function() {
      currentCount--;
      $historyValues.text($historyValues.text() + ', ' + currentCount);
      $el.find('.counter__count').text(currentCount);
    });

  };

  return Counter;

});

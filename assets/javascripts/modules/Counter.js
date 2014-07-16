define(['jquery'], function ($) {

  'use strict';

  var Counter = function ($el) {
    var $add = $el.find('.counter__add'),
        $remove = $el.find('.counter__remove'),
        self = this;

    this.$el = $el;
    this.currentCount = parseInt($el.find('.counter__count').text(), 10),
    $add.on('click', function () {
      self._update(1);
    });
    $remove.on('click', function () {
      self._update(-1);
    });
  };

  Counter.prototype._update = function (increment) {
    var $historyValues = this.$el.find('.counter__history-values');
    this.currentCount = this.currentCount + increment;
    $historyValues.text($historyValues.text() + ', ' + this.currentCount);
    this.$el.find('.counter__count').text(this.currentCount);
    $.get('/counter?count=' + this.currentCount);
  };

  return Counter;

});

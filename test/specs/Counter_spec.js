describe('Counter', function () {

  'use strict';

  beforeEach(function (done) {
    var self = this;
    requirejs(
        ['jquery', 'Counter'],
        function ($, Mod) {
          self.$html = $(window.__html__['test/fixtures/Counter.html']);
          self.module = new Mod(self.$html);
          self.$count = self.$html.find('.counter__count');
          self.$add = self.$html.find('.counter__add');
          self.$remove = self.$html.find('.counter__remove');
          self.$history = self.$html.find('.counter__history');
          self.$historyValues = self.$html.find('.counter__history-values');
          done();
        }, done);
  });


  xit('should increase the count when the user clicks Add', function () {

  });

  xit('should decrease the count when the user clicks Remove', function () {

  });

  xit('should populate the history with previous count values', function () {

  });


});


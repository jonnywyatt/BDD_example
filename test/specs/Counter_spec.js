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
          self.$remove = self.$html.find('.counter__count');
          done();
        }, done);
  });

  function isOpen($el) {
    return $el.hasClass('active');
  }

  describe('toggle panel', function () {

    it('should open when user clicks the open button', function () {
    });


  });

});


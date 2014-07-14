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

  it('should increase the count when the user clicks Add', function () {
    this.$add.click();
    expect(this.$count.text()).to.equal('1');
  });

  it('should decrease the count when the user clicks Remove', function () {
    this.$remove.click();
    expect(this.$count.text()).to.equal('-1');
  });

  it('should populate the history with previous count values', function () {
    this.$add.click();
    this.$add.click();
    this.$remove.click();
    this.$add.click();
    expect(this.$historyValues.text()).to.equal('0, 1, 2, 1, 2');
  });

});


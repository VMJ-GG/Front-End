(function($) {
  'use strict';

  $.fn.textWriter = function() {
    var elem = $(this);
    var phrases = elem.attr('data-phrases');
    var duration = elem.attr('data-duration');
    new TextWriter(elem, phrases, duration);
  };

  function TextWriter(elem, phrases, duration) {
    this.elem = elem;
    this.phrases = JSON.parse(phrases) || [];
    this.duration = parseInt(duration, 10) || 2000;
    this.loopIndex = 0;
    this.text = '';
    this.write();
    this.isDeleting = false;
  };

  TextWriter.prototype.write = function() {
    var i = this.loopIndex % this.phrases.length;
    var current = this.phrases[i];
    var interval = 200 - Math.random() * 100;
    var self = this;

    if (this.isDeleting)
      this.text = current.slice(0, this.text.length - 1);
    else
      this.text = current.slice(0, this.text.length + 1);

    this.elem.html('<span class="output">' + this.text + '</span>');

    if (this.isDeleting) interval /= 2;

    if (!this.isDeleting && this.text === current) {
      this.isDeleting = true;
      interval = this.duration;
    } else if (this.isDeleting && this.text === '') {
      this.isDeleting = false;
      this.loopIndex++;
      interval = 500;
    }

    setTimeout(function() {
      self.write();
    }, interval);
  };
}(jQuery));

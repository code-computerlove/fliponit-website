(function() {

  var FlipOnIt = {

    timerId: null,
    wrapper: null,
    wrapperClass: null,
    isAnimating: false,
    element: null,
    frameSize: 0,
    frameCount: 0,

    init: function(element, frameSize, wrapperClass) {

      var self = this;

      self.element = element;
      self.frameSize = frameSize;
      self.wrapperClass = wrapperClass;
      self.wrapper = document.getElementById('coinAnimWrapper');

      return self;
    },


    endAnimation: function(animClass) {

      var self = this;

      self.wrapper.className = self.wrapper.className + ' ' + animClass;
      self.isAnimating = false;
      window.clearInterval(self.timerId);
    },


    startAnimation: function(startFrame, frameCount, animClass) {

      var self = this;

      if (self.isAnimating == true) {
        return;
      }

      self.wrapper.className = self.wrapperClass;
      var i = startFrame;
      self.isAnimating = true;
      
      self.timerId = setInterval(function () {
        
        if (i >= frameCount) {
          self.endAnimation(animClass);
          return;
        }

        self.element.style.backgroundPosition = '-' + (i * self.frameSize) + 'px 0px';

        i++;

      }, 1000/24);
    }
  };


  document.addEventListener("DOMContentLoaded", function () {

    var element = document.getElementById('coinAnim');
    var flipper = FlipOnIt.init(element, 190, 'coin-anim-wrapper');
    var isHeads = true;

    flipper.startAnimation(0, 47, 'coin-anim-tails-play');

    element.addEventListener('click', function() {

      isHeads = !isHeads;

      if (isHeads == true) {
        flipper.startAnimation(0, 47, 'coin-anim-tails-play');
      } else {
        flipper.startAnimation(47, 94, 'coin-anim-heads-play');
      }

    });

  }, false);

})();

